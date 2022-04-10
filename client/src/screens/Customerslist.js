import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from "../actions/customerAction";

export default function Customerslist() {
  const dispatch = useDispatch();

  const customersstate = useSelector((state) => state.getAllCustomersReducer);
  const { customers, error, loading } = customersstate;
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
          </tr>
        </thead>

        <tbody>
          {customers &&
            customers.map((customer) => {
              return (
                <tr>
                  <td> {customer.name} </td>
                  <td> {customer.email} </td>
                  <td> {customer.address} </td>
                  <td> {customer.city} </td>
                  <td> {customer.state} </td>
                  <td> {customer.phone} </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
