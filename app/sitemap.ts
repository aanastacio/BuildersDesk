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
      return 1.0;
    case "/roofing-crm":
      return 0.9;
    case "/about":
      return 0.8;
    case "/product":
      return 0.9;
    case "/pricing":
      return 0.9;
    case "/book-demo":
      return 0.8;
    case "/privacy":
      return 0.5;
    case "/terms":
      return 0.5;
    default:
      return 0.6;
  }
}

function lastModifiedFor(route: string): Date {
  // Set strategic last modified dates for better crawling
  const now = new Date();
  switch (route) {
    case "":
    case "/roofing-crm":
    case "/product":
    case "/pricing":
      // Main pages updated recently
      return new Date(now.setDate(now.getDate() - 7));
    case "/about":
    case "/book-demo":
      return new Date(now.setDate(now.getDate() - 30));
    default:
      return new Date(now.setDate(now.getDate() - 60));
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buildersdeskpro.com";

  const routes = ["", "/roofing-crm", "/about", "/product", "/pricing", "/book-demo", "/privacy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: lastModifiedFor(route),
      changeFrequency: changeFrequencyFor(route),
      priority: priorityFor(route),
    })
  );

  return routes;
}
