import React from "react";
import { Table } from "react-bootstrap";
import img1 from "../../image/items/3-3.jpg";
const AddToCard = () => {
  const productCard = [
    {
      img: img1,
      name: "Pink Printed Dress",
      price: "19",
      quantity: "1",
      total: "16",
    },
    {
      img: img1,
      name: "Pink Printed Dress",
      price: "19",
      quantity: "1",
      total: "16",
    },
    {
      img: img1,
      name: "Pink Printed Dress",
      price: "19",
      quantity: "1",
      total: "16",
    },
    {
        img: img1,
        name: "Pink Printed Dress",
        price: "19",
        quantity: "1",
        total: "16",
      },
      {
        img: img1,
        name: "Pink Printed Dress",
        price: "19",
        quantity: "1",
        total: "16",
      },
  ];
  return (
    <div className="container">
      <Table >
        <thead>
          <tr className="custom-table-header">
            <th></th>
            <th >Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {productCard.map(p=><tr className="">
            <td className="custom-table"><img src={p.img} alt="image" style={{width:'64px', height:'64px'}} /></td>
            <td className="custom-table"> {p.name}</td>
            <td className="custom-table">${p.price}</td>
            <td className="custom-table">{p.quantity}</td>
            <td className="custom-table">${p.total}</td>
          </tr>)}
          
        </tbody>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Quantity $5</th>
            <th>Total Price $10</th>
          </tr>

      </Table>
    </div>
  );
};

export default AddToCard;
