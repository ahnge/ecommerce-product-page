import Btns from "./Btns";
import Pricing from "./Pricing";

const Texts = () => {
  return (
    <div className=" px-6 py-7 md:flex-1 max-w-xl mx-auto md:max-w-none lg:pt-12">
      <h3 className="uppercase text-orange text-xs font-bold lg:text-sm">
        sneaker company
      </h3>
      <h1 className=" text-2xl font-bold mt-2 lg:text-4xl lg:mt-6">
        Fall Limited Edition Sneakers
      </h1>
      <p className=" text-tg text-base mt-3">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they will wistand everything the
        weather can offer.
      </p>
      <Pricing />
      <Btns />
    </div>
  );
};

export default Texts;
