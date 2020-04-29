import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { store } from "../store";
import { searchAction } from "../actions";

const { Search } = Input;

const SearchTrulia = () => {
  return (
    <Search
      placeholder="Enter location"
      loading={false}
      enterButton
      onSearch={(value, event) => store.dispatch(searchAction(value))}
    />
  );
};

export default connect()(SearchTrulia);
