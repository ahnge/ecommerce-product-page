import Image from "next/image";
import { Cart, Hamburger, Logo } from "./icons";
import avatar from "../public/image-avatar.png";
import MobileNavItems from "./MobileNavItems";
import DesktopNavItems from "./DesktopNavItems";
import CartComponent from "./home/CartComponent";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./features/cartSlice";
import { menuActions } from "./features/menuSlice";

const Nav = () => {
  // redux states
  const cartIsOpen = useSelector((state) => state.cart.isOpen);
  const amtInCart = useSelector((state) => state.cart.amountInCart);
  const menuIsOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  // functions for dispatching redux states
  const handleCartOpenClose = () => {
    dispatch(cartActions.cartOpener());
  };

  const handleMenuOpenClose = () => {
    dispatch(menuActions.menuOpener());
  };

  return (
    <>
      <nav className=" flex w-11/12 max-w-6xl mx-auto py-5 md:py-0 justify-between md:border-b border-tg/20 relative">
        <div className="flex space-x-3 md:space-x-0 md:pt-10 relative">
          <div onClick={handleMenuOpenClose} className="md:hidden">
            <Hamburger />
          </div>
          <Logo />
          <DesktopNavItems />
        </div>

        <div className="flex space-x-3 md:space-x-0 md:pt-10 ">
          <div
            className="md:mr-7 cursor-pointer relative"
            onClick={handleCartOpenClose}
          >
            <Cart />
            {amtInCart > 0 && (
              <div className=" absolute -top-2 left-3 text-white bg-orange rounded-full text-xs px-2">
                {amtInCart}
              </div>
            )}
          </div>
          <div className=" w-6 h-6 md:w-12 md:h-12 md:-mt-4 cursor-pointer border-transparent transition border-2 rounded-full hover:border-orange ">
            <Image src={avatar} alt="avatar of user" />
          </div>
        </div>

        {cartIsOpen && <CartComponent />}
      </nav>
      {menuIsOpen && (
        <div
          className=" fixed inset-0 bg-black/80 z-20"
          onClick={handleMenuOpenClose}
        ></div>
      )}
      <MobileNavItems />
    </>
  );
};

export default Nav;
