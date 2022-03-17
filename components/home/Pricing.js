const Pricing = () => {
  return (
    <div className="mt-6 flex justify-between md:justify-center md:flex-col">
      <div className="flex font-bold">
        <p className=" text-2xl mr-4">$125.00</p>
        <p className=" py-[2px] flex items-center px-2 bg-[#FDEFD9] text-sm text-orange rounded-md">
          50%
        </p>
      </div>
      <p className=" text-tg/80 line-through font-semibold">$250.00</p>
    </div>
  );
};

export default Pricing;
