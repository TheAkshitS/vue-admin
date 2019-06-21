
export const initialResourcesRoutes = resources => resources.map(resource => ({
  path: `/${resource}`,
  name: resource,
}));
