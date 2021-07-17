import {
  Col,
  Input, Pagination,
  Row,
  Select
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/ProductsActions";
import OneProduct from "./OneProduct";
import "./Products.css";

const { Option } = Select;


const Products = () => {
  //redux timeeeeeee ✨✨
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  //pagination variables
  const numItemsPerPage = 8;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(8);

  //search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handlePaginationChange = (value) => {
    setMinValue((value - 1) * numItemsPerPage);
    setMaxValue(value * numItemsPerPage);
  };

  return (
    <>
      <Row style={{ margin: "75px 0 50px 0", padding: "0 45px" }}>
        <Col span={12}>
          <Input
            style={{ width: "400px" }}
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <Select
            defaultValue="Choose here"
            style={{ width: 120 }}
            onChange={handleSelectChange}
          >
            <Option value="A-Z">A-Z</Option>
            <Option value="Z-A">Z-A</Option>
          </Select>
        </Col>
      </Row>
      <Row style={{ margin: "30px 0" }}>
        {products &&
          products.length > 0 &&
          products
            .filter((val) =>
              searchTerm === ""
                ? val
                : val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ? val
                : null
            )
            .slice(minValue, maxValue)
            .map((product) => (
              <OneProduct key={product.id} product={product} />
            ))}
      </Row>
      <Row>
        <Pagination
          style={{ margin: "auto" }}
          defaultCurrent={1}
          defaultPageSize={numItemsPerPage}
          total={products.length}
          onChange={handlePaginationChange}
        />
      </Row>
    </>
  );
};

export default Products;
