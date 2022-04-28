import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers, deleteCustomer } from "../actions/customerAction";

export default function Customerslist() {
  const dispatch = useDispatch();

  const customersstate = useSelector((state) => state.getAllCustomersReducer);
  const { customers } = customersstate;

  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Items</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {customers &&
            customers.map((customer) => {
              const total = customer.foods
                .map((item) => item.price)
                .reduce(function (previousValue, currentValue) {
                  return previousValue + currentValue;
                });

              return (
                <tr key={customer.id}>
                  <td> {customer.name} </td>
                  <td> {customer.email} </td>
                  <td> {customer.address} </td>
                  <td> {customer.city} </td>
                  <td> {customer.state} </td>
                  <td> {customer.phone} </td>
                  <td> {customer.delivery}</td>

                  <td>
                    {customer.foods.map((item, i) => {
                      return (
                        <div key={i}>
                          <div>{item.name}</div>
                          <div>Size: {item.size}</div>
                          <div>Quantity: {item.quantity}</div>
                          <div>Price: ${item.price}</div>
                          {customer.foods.length - 1 !== i && (
                            <div style={{ borderTop: "2px solid #bbb" }} />
                          )}
                        </div>
                      );
                    })}
                  </td>
                  {/*<td>
                    {customer.foods.map((item, i) => {
                      return (
                        <>
                          <div className="d-flex justify-content-center align-items-center">
                            <div> {item.quantity} </div>
                          </div>
                          {customer.foods.length - 1 !== i && (
                            <div style={{ borderTop: "2px solid #bbb" }} />
                          )}
                        </>
                      );
                    })}
                  </td> */}
                  {/*<td>
                    {customer.foods.map((item, i) => {
                      return (
                        <>
                          <div>{item.price}</div>
                          {customer.foods.length - 1 !== i && (
                            <div style={{ borderTop: "2px solid #bbb" }} />
                          )}
                        </>
                      );
                    })}
                  </td> 
                  */}
                  <td>${total}</td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteCustomer(customer._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
