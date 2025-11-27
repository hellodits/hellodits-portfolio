// Helper function to get asset URL with base path
export const getAssetUrl = (path) => {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash if exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};
