export const searchAction = (searchTerm) => ({
  type: "SEARCH",
  payload: { searchTerm },
});

export const setLoading = (loading) => ({
  type: "SEARCH_STATUS",
  payload: { loading },
});

export const fetchedProperties = (properties) => ({
  type: "FETCHED_PROPERTIES",
  payload: { properties },
});
