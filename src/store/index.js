import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
const initialState = { searchTerm: "", loading: false, properties: [] };
export const store = createStore(reducer, initialState, applyMiddleware(thunk));
