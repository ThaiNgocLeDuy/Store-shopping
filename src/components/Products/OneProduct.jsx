import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, message, Tooltip } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/CartActions";

const { Meta } = Card;

const keyCard = "add to cart";

const OneProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart", cart);

  const handleAddToCart = (item) => {
    const action = addToCart(item);
    console.log(action);
    dispatch(action);
    message.loading({ content: "Loading...", keyCard });
    setTimeout(() => {
      message.success({ content: "Added To Cart!", keyCard, duration: 2 });
    }, 1000);
  };
  return (
    <Col style={{ marginBottom: "25px" }} span={6}>
      <Card
        hoverable
        style={{
          width: 240,
          margin: "auto",
          textAlign: "center",
          maxHeight: "444px",
        }}
        cover={
          <img
            style={{ minHeight: "300px", height: "300px" }}
            alt={product.title}
            src={product.image}
          />
        }
        actions={[
          <ShoppingCartOutlined onClick={() => handleAddToCart(product)} />,
          <HeartOutlined className="btnAddWishlist" />,
        ]}
      >
        <Link to={`products/${product.id}`}>
          <Tooltip title={product.title}>
            <Meta title={product.title} description={product.price + " $"} />
          </Tooltip>
        </Link>
      </Card>
    </Col>
  );
};

export default OneProduct;
