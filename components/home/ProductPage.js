import { useSelector } from "react-redux";
import DesktopSlider from "./DesktopSlider";
import MobileSlider from "./MobileSlider";
import SliderPopup from "./SliderPopup";
import Texts from "./Texts";

const ProductPage = () => {
  // redux states
  const popUpIsOpen = useSelector((state) => state.dss.popup);

  return (
    <div className="md:flex md:w-11/12 md:mx-auto max-w-6xl md:gap-5 md:py-20 lg:px-10 lg:gap-16">
      <MobileSlider />
      <DesktopSlider />
      <Texts />

      {popUpIsOpen && <SliderPopup />}
    </div>
  );
};

export default ProductPage;
