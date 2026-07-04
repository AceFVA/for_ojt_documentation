import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const weeklyreports = getPosts(["src", "app", "weeklyreport", "posts"]).map((post) => ({
    url: `${baseURL}/weeklyreport/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const requirements = getPosts(["src", "app", "requirements", "projects"]).map((post) => ({
    url: `${baseURL}/requirements/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...weeklyreports, ...requirements];
}
