const DesktopNavItems = () => {
  return (
    <div>
      <ul className="font-normal hidden md:flex text-base text-tg space-x-5 h-full md:ml-16">
        <li className=" cursor-pointer hover:text-tb hover:border-b-orange border-b-4 border-transparent pb-10 transition-all">
          Collections
        </li>
        <li className=" cursor-pointer hover:text-tb hover:border-b-orange border-b-4 border-transparent pb-10 transition-all">
          Men
        </li>
        <li className=" cursor-pointer hover:text-tb hover:border-b-orange border-b-4 border-transparent pb-10 transition-all">
          Women
        </li>
        <li className=" cursor-pointer hover:text-tb hover:border-b-orange border-b-4 border-transparent pb-10 transition-all">
          About
        </li>
        <li className=" cursor-pointer hover:text-tb hover:border-b-orange border-b-4 border-transparent pb-10 transition-all">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavItems;
