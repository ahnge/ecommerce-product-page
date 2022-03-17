import { useDispatch, useSelector } from "react-redux";
import productImageOne from "../../public/image-product-1-thumbnail.jpg";
import Image from "next/image";
import deleteIcon from "../../public/icon-delete.svg";
import { cartActions } from "../features/cartSlice";

const CartComponent = () => {
  // redux states
  const amountInCart = useSelector((state) => state.cart.amountInCart);
  const dispatch = useDispatch();

  // functions to dispatch redux states
  const handleDelete = () => {
    dispatch(cartActions.cartCleaner());
  };

  return (
    <div className=" w-full bg-white rounded-lg absolute min-w-[360px] top-20 right-0 drop-shadow-2xl">
      <h3 className=" font-semibold text-xl py-5 px-6 border-b-[1px]">Cart</h3>
      <div>
        {amountInCart === 0 ? (
          <p className="text-center font-medium text-sm text-tg py-20">
            Your cart is empty.
          </p>
        ) : (
          <div className="px-6 py-5">
            <div className="flex w-full justify-start items-center gap-4">
              <div className=" max-w-[50px] flex-1">
                <Image
                  src={productImageOne}
                  layout="responsive"
                  className=" rounded"
                />
              </div>

              <div className="flex flex-col flex-1">
                <p className="text-tg font-normal text-sm sm:text-base">
                  Fall Limited Edition Sneakers
                </p>
                <div className="text-tg text-sm sm:text-base">
                  $125.00 x {amountInCart}{" "}
                  <span className="font-bold text-black px-2">
                    ${amountInCart * 125}.00
                  </span>
                </div>
              </div>

              <div className=" cursor-pointer" onClick={handleDelete}>
                <Image src={deleteIcon} />
              </div>
            </div>
            <div className="text-center cursor-pointer bg-orange rounded-lg py-3 text-white font-medium text-sm my-5">
              Checkout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
