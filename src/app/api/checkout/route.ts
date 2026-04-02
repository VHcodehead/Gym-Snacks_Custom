import { NextResponse } from "next/server";
import type { CheckoutCreateResponse } from "@/lib/types";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

interface LineItem {
  variantId: string;
  quantity: number;
}

export async function POST(request: Request) {
  let body: { lineItems?: LineItem[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { errors: [{ message: "Invalid JSON body" }] },
      { status: 400 }
    );
  }

  const { lineItems } = body;

  // Validate lineItems
  if (!Array.isArray(lineItems) || lineItems.length === 0) {
    return NextResponse.json(
      { errors: [{ message: "No line items provided" }] },
      { status: 400 }
    );
  }

  for (const item of lineItems) {
    if (
      !item.variantId ||
      typeof item.variantId !== "string" ||
      !item.variantId.startsWith("gid://shopify/")
    ) {
      return NextResponse.json(
        { errors: [{ message: "Invalid variant ID" }] },
        { status: 400 }
      );
    }
    if (!Number.isInteger(item.quantity) || item.quantity < 1) {
      return NextResponse.json(
        { errors: [{ message: "Invalid quantity" }] },
        { status: 400 }
      );
    }
  }

  // Build mutation server-side (never trust client-provided GraphQL)
  const lineItemsGql = lineItems
    .map(
      (item) =>
        `{ variantId: "${item.variantId}", quantity: ${item.quantity} }`
    )
    .join(", ");

  const mutation = `
    mutation {
      checkoutCreate(input: {
        lineItems: [${lineItemsGql}]
      }) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
        }
      }
    }
  `;

  try {
    const response = await fetch(
      `https://${domain}/api/2024-10/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        },
        body: JSON.stringify({ query: mutation }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { errors: [{ message: `Shopify API error: ${response.status}` }] },
        { status: 502 }
      );
    }

    const json = await response.json();
    const data = json.data as CheckoutCreateResponse;

    if (data.checkoutCreate.checkoutUserErrors.length > 0) {
      return NextResponse.json(
        { errors: data.checkoutCreate.checkoutUserErrors },
        { status: 400 }
      );
    }

    return NextResponse.json({
      checkoutUrl: data.checkoutCreate.checkout?.webUrl,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { errors: [{ message: "Failed to create checkout" }] },
      { status: 500 }
    );
  }
}
