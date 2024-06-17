import Image from "next/image";
import img from "../../../../assets/images/explore5.png";
import '../myorder/Order.css';

const Cancel = () => {
  return (
    <div className="mt-10 ml-3">
      <table className="table orderTable">
        <thead>
          <tr>
            <th> Item </th>
            <th> Product </th>
            <th> Quantity </th>
            <th> Order </th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
              <b>Digital Watch</b>
            </td>
            <td>03</td>
            <td>
              <button className="btn btn-active btn-ghost">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cancel;
