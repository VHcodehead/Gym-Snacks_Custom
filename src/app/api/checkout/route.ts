import { NextResponse } from "next/server";

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

  // Build Cart API mutation server-side using cartCreate (checkoutCreate was deprecated)
  const linesGql = lineItems
    .map(
      (item) =>
        `{ merchandiseId: "${item.variantId}", quantity: ${item.quantity} }`
    )
    .join(", ");

  const mutation = `
    mutation {
      cartCreate(input: {
        lines: [${linesGql}]
      }) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
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

    // Handle GraphQL-level errors
    if (json.errors) {
      console.error("Shopify GraphQL errors:", JSON.stringify(json.errors));
      return NextResponse.json(
        { errors: json.errors.map((e: { message: string }) => ({ message: e.message })) },
        { status: 400 }
      );
    }

    if (!json.data?.cartCreate) {
      console.error("Unexpected Shopify response:", JSON.stringify(json));
      return NextResponse.json(
        { errors: [{ message: "Unexpected response from Shopify" }] },
        { status: 502 }
      );
    }

    const { cart, userErrors } = json.data.cartCreate;

    if (userErrors && userErrors.length > 0) {
      return NextResponse.json(
        { errors: userErrors },
        { status: 400 }
      );
    }

    return NextResponse.json({
      checkoutUrl: cart?.checkoutUrl,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { errors: [{ message: "Failed to create checkout" }] },
      { status: 500 }
    );
  }
}
