import React from "react";
import ca1 from "../../../images/carousels-image/ca1.jpg";
import ca2 from "../../../images/carousels-image/ca2.jpg";
import ca3 from "../../../images/carousels-image/ca3.jpg";
import { Carousel } from "antd";

const Carousels = () => {
  return (
    <Carousel style={{ margin: "65px 0" }} autoplay>
      <div className="slider img-1">
        <h3
          style={{
            width: "100%",
            height: "500px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            backgroundImage: `url(${ca1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
        </h3>
      </div>
      <div className="slider img-2">
        <h3
          style={{
            width: "100%",
            height: "500px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            backgroundImage: `url(${ca2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
        </h3>
      </div>
      <div className="slider img-3">
        <h3
          style={{
            width: "100%",
            height: "500px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            backgroundImage: `url(${ca3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
        </h3>
      </div>
    </Carousel>
  );
};

export default Carousels;
