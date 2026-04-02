// Shopify Storefront API Types

export interface ShopifyImage {
  url: string;
  altText: string | null;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: ShopifyPrice;
  availableForSale: boolean;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  images: {
    edges: Array<{ node: ShopifyImage }>;
  };
  variants: {
    edges: Array<{ node: ShopifyVariant }>;
  };
}

export interface CartItem {
  variantId: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  variantTitle?: string;
}

// GraphQL response wrappers
export interface ProductsResponse {
  products: {
    edges: Array<{ node: ShopifyProduct }>;
  };
}

export interface ProductByHandleResponse {
  productByHandle: ShopifyProduct | null;
}

export interface CheckoutCreateResponse {
  checkoutCreate: {
    checkout: {
      id: string;
      webUrl: string;
    } | null;
    checkoutUserErrors: Array<{ message: string }>;
  };
}
