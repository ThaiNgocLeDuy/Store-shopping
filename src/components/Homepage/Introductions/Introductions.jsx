import React from "react";
import { Row, Col } from "antd";
import "./Introductions.css";

const Introductions = () => {
  return (
    <>
      <Row
        style={{
          textAlign: "center",
          width: "100%",
          height: "380px",
          margin: "50px 0 100px 0",
        }}
      >
        <Col span={8}>
          <div className="intro">
            <img
              src="https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/4.jpg"
              alt=" "
              className="img-intro"
            />
            <p>
              Best<span>Store</span>
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="intro">
            <img
              src="https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/4.jpg"
              alt=" "
              className="img-intro"
            />
            <p>
              Best<span>Store</span>
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="intro">
            <img
              src="https://p.w3layouts.com/demos/21-03-2016/best_store/web/images/4.jpg"
              alt=" "
              className="img-intro"
            />
            <p>
              Best<span>Store</span>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Introductions;
