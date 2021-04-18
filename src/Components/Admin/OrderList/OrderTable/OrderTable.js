import React from "react";

function OrderTable({ book, handleChange }) {
  return (
    <tr>
      <td>{book.name}</td>
      <td>{book.email}</td>
      <td>{book.title}</td>
      <td>{book.payment.type}</td>
      <td>
        <select onChange={(e) => handleChange(book._id, e)}>
          {book.status === "pending" ? (
            <option selected value="pending">
              pending
            </option>
          ) : (
            <option value="pending">pending</option>
          )}
          {book.status === "On going" ? (
            <option selected value="On going">
              On going
            </option>
          ) : (
            <option value="On going">On going</option>
          )}
          {book.status === "done" ? (
            <option selected value="done">
              Done
            </option>
          ) : (
            <option value="done">Done</option>
          )}
        </select>
      </td>
    </tr>
  );
}

export default OrderTable;
