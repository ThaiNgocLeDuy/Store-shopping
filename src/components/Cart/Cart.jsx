import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Input, Button, Tooltip } from "antd";
import {
  CloseCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  downQuantity,
  removeFromCart,
  upQuantity,
} from "../../redux/actions/CartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const handleRemoveItem = (item) => {
    const action = removeFromCart(item);
    dispatch(action);
  };

  const handleUpQuantity = (item) => {
    const action = upQuantity(item);
    dispatch(action);
  };

  const handleDownQuantity = (item) => {
    const action = downQuantity(item);
    dispatch(action);
  };

  const total = (state) => {
    const total = state.reduce(
      (result, item) => item.qty * item.price + result,
      0
    );
    return Math.trunc(total);
  };

  return (
    <div className="wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ textAlign: "center" }}>{item.id}</td>
              <td style={{ textAlign: "center" }}>
                <img className="img-td" src={item.image} alt={item.image} />
              </td>
              <td>{item.title}</td>
              <td style={{ textAlign: "center" }}>$ {item.price}</td>
              <td style={{ textAlign: "center" }}>
                <MinusCircleOutlined
                  onClick={() => handleDownQuantity(item)}
                  style={{ marginRight: 10, cursor: "pointer" }}
                />
                <Input
                  style={{ width: 100, marginRight: 10 }}
                  value={item.qty}
                  min={1}
                />
                <PlusCircleOutlined
                  onClick={() => handleUpQuantity(item)}
                  style={{ cursor: "pointer" }}
                />
              </td>
              <td style={{ textAlign: "center" }}>
                {"$ " + Math.trunc(item.qty * item.price)}
              </td>
              <td style={{ textAlign: "center" }}>
                <Tooltip title="remove item">
                  <Button
                    onClick={() => handleRemoveItem(item)}
                    type="danger"
                    shape="circle"
                    icon={<CloseCircleOutlined style={{ color: "white" }} />}
                  />
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: $ {total(cart)}</p>
      </div>
    </div>
  );
};

export default Cart;
