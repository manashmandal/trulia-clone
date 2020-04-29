import React from "react";
import SearchTrulia from "./components/SearchTrulia";
import ViewSearchTerms from "./components/ViewSearchTerms";
import { Col, Row } from "antd";
import "./App.css";

function App() {
  return (
    <Row style={{ marginTop: "50px" }}>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <SearchTrulia />
        <ViewSearchTerms />
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
    </Row>
  );
}

export default App;
