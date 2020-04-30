import React from "react";
import { connect } from "react-redux";
import { fuckAction } from "../actions";
import axios from "axios";
import { Button } from "antd";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    showCards: () => dispatch(() => {}),
  };
};

const Properties = ({ properties }) => {
  console.log({ properties });
  return (
    <ul>
      {properties.map((p) => (
        <li key={p.title}>{p.title}</li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
