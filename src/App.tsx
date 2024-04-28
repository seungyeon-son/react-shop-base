import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/common/Nav";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        {/* Nav를 렌더링 하세요 */}
        <Nav />
        <Drawer></Drawer>
        <section className="main pt-8">
          <Router />
        </section>
        {/* Footer를 렌더링 하세요 */}
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
