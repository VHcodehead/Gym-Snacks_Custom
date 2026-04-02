import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/*.json$",
          "/*?*sort=",
          "/*?*filter=",
        ],
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
    ],
    sitemap: "https://gymsnackinc.com/sitemap.xml",
    host: "https://gymsnackinc.com",
  };
}
