import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast/Toast";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Toast />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
