import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className=" font-kumbh">{children}</div>
    </>
  );
};

export default Layout;
