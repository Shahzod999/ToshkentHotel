import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
