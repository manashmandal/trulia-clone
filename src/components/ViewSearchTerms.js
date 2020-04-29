import React from "react";
import { connect } from "react-redux";
import { fuckAction } from "../actions";
import axios from "axios";
import { Button } from "antd";

const mapStateToProps = (state) => state;

const searchStatus = (loading) => ({
  type: "SEARCH_STATUS",
  payload: { loading },
});

const setResultFromApi = (data) => ({
  type: "FETCH_RESULT",
  payload: { data },
});

const searchIt = (searchTerm) => {
  return async function (dispatch) {
    dispatch(searchStatus(true));

    let response = await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((r) => r.data);
    console.log("SearchIT ", searchTerm, response);
    dispatch(searchStatus(false));
    dispatch(setResultFromApi(response));
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchIt: (searchTerm) => dispatch(searchIt(searchTerm)),
  };
};

const ViewSearchTerms = ({ searchTerm, searchIt }) => {
  console.log("input", searchTerm);
  // fuckIt("FUCKING HELLL");
  return <Button onClick={() => searchIt(searchTerm)}>Search Me</Button>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSearchTerms);
