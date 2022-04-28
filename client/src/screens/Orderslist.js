import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Orderslist() {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Items</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => {
              console.log(order.orderItems, "aa");
              return (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                  </td>
                  <td className="item-row-style">
                    {order.orderItems.map((item, i) => {
                      return (
                        <div className="item-style">
                          <div>
                            <p>{item.name}</p>
                            {/*{order.orderItems.length > 1 &&
                              order.orderItems.length - 1 != i}
                            */}
                          </div>
                          <div>
                            <p>Size: {item.size}</p>
                            {/*{order.orderItems.length > 1 &&
                              order.orderItems.length - 1 != i}
                            */}
                          </div>
                          <div>
                            <p>Quantity: {item.quantity}</p>
                            {/*{order.orderItems.length > 1 &&
                              order.orderItems.length - 1 != i}
                            */}
                          </div>
                          <div>
                            <p>Price: ${item.price}</p>
                            {/*{order.orderItems.length > 1 &&
                              order.orderItems.length - 1 != i}
                            */}
                          </div>
                        </div>
                      );
                    })}
                  </td>
                  <td>${order.orderAmount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
