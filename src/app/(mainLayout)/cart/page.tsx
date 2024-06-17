"use client";
import "./cart.css";
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import checkout from "@/assets/images/categories8.png";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const Cart = () => {
  const [order, setOrder] = useState(0);

  const incrementOrder = () => {
    setOrder(order + 1);
  };
  const decrementOrder = () => {
    if (order < 1) {
      setOrder(0);
    } else {
      setOrder(order - 1);
    }
  };
  return (
   <Container className="">
     <div className="wrapContainer">
      <div className="mt-5">
        <span>Home </span>
        <span> \ </span>
        <span> Checkout </span>
        <h3 className="text-3xl font-bold my-5">Checkout </h3>
      </div>
      <div className="flex justify-between ">
        <table className="table cartTable">
          <tr>
            <th> Image</th>
            <th> Product</th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Total </th>
            <th> Remove </th>
          </tr>
          <tbody>
            <tr>
              <td>
                <Image className="w-[60px]" src={checkout} alt="fruit" />
              </td>
              <td>
                <b>Beef Potjiekos Per - 500g</b>
              </td>
              <td> $500</td>
              <td>
                <div className="increaseDecressBtnWrap quantity mx-auto">
                  <small onClick={decrementOrder}>
                    <FaMinus />
                  </small>
                  <span> {order} </span>
                  <small onClick={incrementOrder}>
                    <FaPlus />
                  </small>
                </div>
              </td>
              <td> $600 </td>
              <td>
                <FaRegTrashAlt className="trashIcon" />
              </td>
            </tr>
            <tr>
              <td>
                <Image className="w-[60px]" src={checkout} alt="fruit" />
              </td>
              <td>
                <b>Beef Potjiekos Per - 500g</b>
              </td>
              <td> $500</td>
              <td>
                <div className="increaseDecressBtnWrap quantity mx-auto">
                  <small onClick={decrementOrder}>
                    <FaMinus />
                  </small>
                  <span> {order} </span>
                  <small onClick={incrementOrder}>
                    <FaPlus />
                  </small>
                </div>
              </td>
              <td> $600 </td>
              <td>
                <FaRegTrashAlt className="trashIcon" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="shippingCart">
          <h3 className="text-2xl font-bold">Cart Totals </h3>
          <div className="flex items-center justify-between my-2">
            <span>Sub Total </span>
            <b>$599</b>
          </div>
          <div className="flex items-center justify-between my-2">
            <span>Shipping </span>
            <b>$9</b>
          </div>
          <hr />
          <div className="flex items-center justify-between my-2">
            <b>Total </b>
            <b>$509</b>
          </div>
          <Link href="/checkout">
            <button className="shopBtn checkoutBtn">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <input className="border p-2 rounded-md" placeholder="Coupon Apply " />
      </div>
      <button className=" mt-3 bg-[#2251CF] text-white px-4 py-1 rounded-sm">Apply </button>
    </div>
    {/* <RelatedProduct/> */}
   </Container>
  );
};

export default Cart;
