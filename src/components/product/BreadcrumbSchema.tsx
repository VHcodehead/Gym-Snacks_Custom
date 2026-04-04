interface BreadcrumbSchemaProps {
  productTitle: string;
  productHandle: string;
}

export function BreadcrumbSchema({ productTitle, productHandle }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.gymsnacksinc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.gymsnacksinc.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productTitle,
        item: `https://www.gymsnacksinc.com/products/${productHandle}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
