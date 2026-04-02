import { NextResponse } from "next/server";
import type { CheckoutCreateResponse } from "@/lib/types";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function POST(request: Request) {
  const { mutation } = await request.json();

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
}
