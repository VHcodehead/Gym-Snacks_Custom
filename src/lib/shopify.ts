import type {
  ShopifyProduct,
  ProductsResponse,
  ProductByHandleResponse,
  CheckoutCreateResponse,
} from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const response = await fetch(
    `https://${domain}/api/2024-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status}`);
  }

  const json = await response.json();
  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data as T;
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  const query = `{
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price: priceV2 {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }`;

  const data = await shopifyFetch<ProductsResponse>(query);
  return data.products.edges.map((edge) => edge.node);
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      productType
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price: priceV2 {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }`;

  const data = await shopifyFetch<ProductByHandleResponse>(query, { handle });
  return data.productByHandle;
}

export async function getFeaturedProduct(): Promise<ShopifyProduct | null> {
  const products = await getProducts();
  const featured = products.find((p) => {
    const title = p.title.toLowerCase();
    return (
      title.includes("gummy") ||
      title.includes("gummies") ||
      title.includes("pre-workout") ||
      title.includes("preworkout")
    );
  });
  return featured || products[0] || null;
}

// Client-side only - called from Zustand store
export async function createCheckout(
  lineItems: Array<{ variantId: string; quantity: number }>
): Promise<string> {
  const mutation = `
    mutation {
      checkoutCreate(input: {
        lineItems: [${lineItems
          .map((item) => `{ variantId: "${item.variantId}", quantity: ${item.quantity} }`)
          .join(", ")}]
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

  // This runs client-side, so we need to fetch through an API route
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mutation }),
  });

  const data = await response.json();
  if (data.errors?.length) {
    throw new Error(data.errors[0].message);
  }

  return data.checkoutUrl;
}
