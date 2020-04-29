export default function reducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      console.log("ACTION TAKEN ", action);
      return { ...state, ...action.payload };
    case "FUCK":
      console.log("ACTION TAKEN BY SEARCH ", action);
      return { ...state, ...action.payload };
    case "SEARCH_STATUS":
      console.log("SEARCH STATUS ", action);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
