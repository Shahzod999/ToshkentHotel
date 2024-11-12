import { useEffect } from "react";
import { removeToast, selectToastMessages } from "../../app/features/toastSlice";
import "./toast.scss";
import ToastContainer from "./ToastContainer";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";

const Toast = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectToastMessages);

  useEffect(() => {
    const timers = messages.map((toast) =>
      setTimeout(() => {
        dispatch(removeToast(toast.id));
      }, 3500)
    );
    return () => timers.forEach(clearTimeout);
  }, [messages, dispatch]);

  return (
    <div className="toast-wrapper">
      {messages.map((toast) => (
        <ToastContainer toast={toast} key={toast.id} />
      ))}
    </div>
  );
};

export default Toast;
