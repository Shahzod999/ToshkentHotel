import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { useAppDispatch } from "./app/hooks/hooks";
import Toast from "./components/Toast/Toast";
import { errorToast, infoToast, succesToast } from "./app/features/toastSlice";

const App = () => {
  const dispatch = useAppDispatch();

  const showError = () => {
    dispatch(errorToast("Ошибка"));
  };

  const showSuccess = () => {
    dispatch(succesToast("Успешно"));
  };

  const showInfo = () => {
    dispatch(infoToast("Информация"));
  };
  return (
    <div className="wrapper">
      <Header />
      <div>
        <button onClick={showError}>Show Error</button>
        <button onClick={showSuccess}>Show Success</button>
        <button onClick={showInfo}>Show Info</button>
      </div>
      <Toast />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
