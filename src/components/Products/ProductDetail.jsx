import React, { useState } from "react";
import { Row, Col, Image, Card, Typography, Button, message, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../redux/actions/CartActions";

const { Text } = Typography;

const keyCard = "add to cart";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const ProductDetail = () => {
  const [loadings, setLoadings] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((x) => x.id === parseInt(id))
  );
  console.log(product);
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart", cart);

  const enterLoading = (index) => {
    const action = addToCart(product);
    console.log(action);
    dispatch(action);
    const newLoadings = [...loadings];
    newLoadings[index] = true;

    setLoadings(newLoadings);
    setTimeout(() => {
      const newLoadings = [...loadings];
      newLoadings[index] = false;

      setLoadings(newLoadings);
    }, 2000);
    setTimeout(() => {
      message.success({ content: "Added To Cart!", keyCard, duration: 2.5 });
    }, 2000);
  };

  const [value, setValue] = useState(3);

  const handleStarChange = (value) => {
    setValue(value);
  };

  return (
    <Row style={{ margin: "75px 0 50px 0", padding: "30px 45px" }}>
      <Col span={6}>
        <Image width={200} height={270} src={product.image} />
      </Col>
      <Col span={6}>
        <Card
          title={product.title}
          style={{ width: 600, height: 270, maxHeight: 270, fontSize: 30 }}
        >
          <Text>
            <span>
              <Rate tooltips={desc} onChange={handleStarChange} value={value} />
            </span>
          </Text>
          <Text style={{ display: "block", fontSize: 22 }}>
            Price: <span style={{ color: "red" }}> ${product.price}</span>
          </Text>
          <Text>
            <Button
              type="primary"
              loading={loadings[0]}
              onClick={() => enterLoading(0)}
            >
              Add to Cart
            </Button>
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductDetail;
