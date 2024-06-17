import { FaBuildingUser } from "react-icons/fa6";
import img from "../../../../assets/images/categories7.png";
import "./Order.css";
import Image from "next/image";

const Order = () => {
  return (
    <div className="mt-10">
      <table className="table orderTable overflow-x-auto">
        <thead>
          <tr>
            <th> Order No </th>
            <th> Date </th>
            <th> Item </th>
            <th> Product </th>
            <th> Total </th>
            <th>Manage Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>04748498494944</td>
            <td>05-05-2023</td>
            <td>
              <Image
                loading="lazy"
                className="w-[60px]"
                src={img}
                alt="fruit"
                width={60}
                height={60}
              />
            </td>
            <td>
              <b>Digital Watch</b>
            </td>
            <td> $600 </td>
            <td>
              <FaBuildingUser size={25} className="cursor-pointer" />
            </td>
          </tr>
          <tr>
            <td>04748498494944</td>
            <td>05-05-2023</td>
            <td>
              <Image
                className="w-[60px]"
                src={img}
                alt="fruit"
                width={60}
                height={60}
              />
            </td>
            <td>
              <b>Beef Potjiekos Per - 500g</b>
            </td>
            <td> $600 </td>
            <td>
              <FaBuildingUser size={25} className="cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
