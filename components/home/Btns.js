import { useDispatch, useSelector } from "react-redux";
import { Cart, Minus, Plus } from "../icons";
import { cartActions } from "../features/cartSlice";

const Btns = () => {
  // redux states
  const amtToAdd = useSelector((state) => state.cart.amountToAdd);
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleIncrement = () => {
    dispatch(cartActions.plusMinus("+"));
  };
  const handleDecrement = () => {
    dispatch(cartActions.plusMinus("-"));
  };
  const handleAddToCart = () => {
    dispatch(cartActions.handleATC());
  };

  return (
    <div className="mt-6 pb-20 md:flex md:gap-2 lg:gap-4">
      <div className="flex justify-between bg-[#F7F8FD] items-center rounded-lg md:flex-1">
        <p className=" cursor-pointer p-5" onClick={handleDecrement}>
          <Minus />
        </p>
        <p className="text-base font-bold">{amtToAdd}</p>
        <p className=" cursor-pointer p-5" onClick={handleIncrement}>
          <Plus />
        </p>
      </div>
      <div
        className={`bg-orange py-3 px-5 rounded-lg flex items-center justify-center mt-4 cursor-pointer shadow-2xl shadow-orange  md:flex-[2] md:mt-0 ${
          amtToAdd === 0 ? "hover:cursor-not-allowed" : "hover:bg-orange/90"
        }`}
        onClick={handleAddToCart}
      >
        <Cart color={"white"} />
        <p className="ml-4 font-semibold text-white text-base">Add to Cart</p>
      </div>
    </div>
  );
};

export default Btns;
