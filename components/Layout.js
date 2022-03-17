import Nav from "./Nav";
import { Provider } from "react-redux";
import { store } from "./store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Nav />
      <div className=" font-kumbh">{children}</div>
    </Provider>
  );
};

export default Layout;
