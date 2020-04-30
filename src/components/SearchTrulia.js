import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { store } from "../store";
import { setLoading, fetchedProperties } from "../actions";
import API from "../api";
import axios from "axios";
const { Search } = Input;

function initiateSearch(searchTerm) {
  console.log("DISPATCH ", searchTerm);
  return async (dispatch) => {
    dispatch(setLoading(true));
    let result = await API.searchTrulia(searchTerm);
    dispatch(setLoading(false));
    dispatch(
      fetchedProperties(
        result.data?.searchLocationSuggestionByQuery?.places || []
      )
    );
    console.log({ result });
  };
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    searchTrulia: (searchTerm) => dispatch(initiateSearch(searchTerm)),
  };
};

const SearchTrulia = ({ loading, searchTrulia }) => {
  console.log("LOADING FROM SEARCH TRULIA ", loading);

  return (
    <Search
      placeholder="Enter location"
      loading={loading}
      enterButton
      onSearch={(value, event) => searchTrulia(value)}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTrulia);
