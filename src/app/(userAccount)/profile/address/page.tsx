import { HiOutlinePencilAlt } from "react-icons/hi";
const page = () => {
  return (
    <div className="mt-10 w-[900px] mx-auto ">
      <h3 className="text-3xl font-bold">My Address </h3>
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex items-center justify-between w-full mt-8 flex-wrap">
        <div className="bordered border p-5 w-[400px] shadow-xl mr-5 ">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold ">Billing Address </h3>
            <div className="flex items-center">
              <HiOutlinePencilAlt size={20} />
              <p className="ml-2">Edit</p>
            </div>
          </div>
          <div>
            <h5 className="text-xl">Ibrahim Sikder</h5>
            <span className="block">0185858585</span>
            <small>Dhaka,Gazipur,Ahmed Nagor Chowrasta - Shafipur,Dhaka</small>
          </div>
        </div>
        <div className="bordered border p-5 w-[400px] shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold ">Shipping Address </h3>
            <div className="flex items-center">
              <HiOutlinePencilAlt size={20} />
              <p className="ml-2">Edit</p>
            </div>
          </div>
          <div>
            <h5 className="text-xl">Ibrahim Sikder</h5>
            <span className="block">0185858585</span>
            <small>Dhaka,Gazipur,Ahmed Nagor Chowrasta - Shafipur,Dhaka</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
