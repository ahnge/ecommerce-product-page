import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../features/menuSlice";
import DesktopSlider from "./DesktopSlider";
import MobileSlider from "./MobileSlider";
import SliderPopup from "./SliderPopup";
import Texts from "./Texts";

const ProductPage = () => {
  // redux states
  const popUpIsOpen = useSelector((state) => state.dss.popup);
  const menuIsOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  // functions for dispatching redux state
  const handleMenuOpenClose = () => {
    dispatch(menuActions.menuOpener());
  };

  return (
    <div className="md:flex md:w-11/12 md:mx-auto max-w-6xl md:gap-5 md:py-20 lg:px-10 lg:gap-16">
      <MobileSlider />
      <DesktopSlider />
      <Texts />
      {popUpIsOpen && <div className="fixed bg-black/80 inset-0"></div>}
      {popUpIsOpen && <SliderPopup />}
      {menuIsOpen && (
        <div
          className=" absolute inset-0 bg-black/80 z-10"
          onClick={handleMenuOpenClose}
        ></div>
      )}
    </div>
  );
};

export default ProductPage;
