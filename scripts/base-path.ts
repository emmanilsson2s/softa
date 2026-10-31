export function normalizeBasePath(value = "/"): string {
  const path = value.trim();
  if (!path || path === "/") return "/";
  if (!/^\/?[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*\/?$/.test(path)) {
    throw new Error("VITE_BASE_PATH must be / or a repository path such as /softa-interior/.");
  }
  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
}