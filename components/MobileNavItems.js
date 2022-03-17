import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "./features/menuSlice";

const MobileNavItems = () => {
  // redux states
  const menuIsOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  // functions for redux dispatch
  const handleMenuOpenClose = () => {
    dispatch(menuActions.menuOpener());
  };

  return (
    <div
      className={`fixed bg-white pl-6 pt-6 pr-32 z-20 transition-all duration-300 top-0 h-screen ${
        menuIsOpen ? "left-0" : "-left-full"
      }`}
    >
      <div
        className=" font-semibold text-2xl text-gray-500 cursor-pointer"
        onClick={handleMenuOpenClose}
      >
        x
      </div>
      <ul className="font-semibold mt-14 text-base text-tb space-y-3">
        <li className=" cursor-pointer">Collections</li>
        <li className=" cursor-pointer">Men</li>
        <li className=" cursor-pointer">Women</li>
        <li className=" cursor-pointer">About</li>
        <li className=" cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavItems;
