import Image from "next/image";
import { Cart, Hamburger, Logo } from "./icons";
import avatar from "../public/image-avatar.png";

const Nav = () => {
  return (
    <nav>
      <Hamburger />
      <Logo />
      <div>
        <Cart />
        <div className=" w-12">
          <Image src={avatar} alt="avatar of user" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
