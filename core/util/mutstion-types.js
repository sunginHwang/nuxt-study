export const AsyncMutationCreator = (type) => ({
  REQUEST: `${type}`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
});
