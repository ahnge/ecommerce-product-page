import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { desltopSliderActions } from "../features/desktopSliderSlice";

const DesktopSlider = () => {
  // redux
  const imgValue = useSelector((state) => state.dss.value);
  const items = useSelector((state) => state.dss.items);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(desltopSliderActions.changeSlide(index));
  };

  const handlePopup = () => {
    dispatch(desltopSliderActions.updatePopup());
  };

  return (
    <div className="hidden md:block md:flex-1">
      <div className=" max-w-[400px] mx-auto">
        <Image
          src={imgValue}
          className="rounded-xl cursor-pointer"
          onClick={handlePopup}
          alt="product image"
        ></Image>
        <div className="flex gap-5 mt-5">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer flex-1 rounded-xl overflow-hidden border-4 hover:opacity-80 hover:border-orange transition ${
                  item.active
                    ? "border-orange"
                    : "opacity-100 border-transparent"
                }`}
                onClick={() => handleClick(index)}
              >
                <Image src={item.src} layout="responsive" alt="thumbnail" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopSlider;
