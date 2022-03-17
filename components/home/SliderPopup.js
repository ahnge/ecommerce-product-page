import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { desltopSliderActions } from "../features/desktopSliderSlice";

const SliderPopup = () => {
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
    <div className=" w-full h-screen flex justify-center items-center fixed inset-0">
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handlePopup}
      ></div>
      <div className=" max-w-[400px] mx-auto">
        <div className="text-white text-right font-bold ml-auto mr-5 mb-5 cursor-pointer w-fit">
          X
        </div>
        <Image src={imgValue} className="rounded-xl"></Image>
        <div className="flex gap-5 mt-5 px-5">
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
                <Image src={item.src} layout="responsive" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderPopup;
