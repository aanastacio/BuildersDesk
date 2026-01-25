import { MetadataRoute } from "next";

export const dynamic = "force-static";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

function changeFrequencyFor(route: string): ChangeFreq {
  switch (route) {
    case "":
      return "weekly";
    case "/roofing-crm":
      return "weekly";
    case "/about":
      return "monthly";
    case "/product":
      return "weekly";
    case "/pricing":
      return "weekly";
    case "/book-demo":
      return "monthly";
    case "/privacy":
      return "yearly";
    case "/terms":
      return "yearly";
    default:
      return "monthly";
  }
}

function priorityFor(route: string): number {
  switch (route) {
    case "":
      return 1;
    case "/roofing-crm":
      return 0.9;
    case "/about":
      return 0.8;
    case "/product":
      return 0.9;
    case "/pricing":
      return 0.9;
    case "/book-demo":
      return 0.7;
    case "/privacy":
      return 0.5;
    case "/terms":
      return 0.5;
    default:
      return 0.6;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buildersdeskpro.com";

  const routes = ["", "/roofing-crm", "/about", "/product", "/pricing", "/book-demo", "/privacy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changeFrequencyFor(route),
      priority: priorityFor(route),
    })
  );

  return routes;
}
