import { useEffect, useRef } from "react";
import { Toast, removeToast } from "../../app/features/toastSlice";
import { useAppDispatch } from "../../app/hooks/hooks";

const ToastContainer = ({ toast }: { toast: Toast }) => {
  const dispatch = useAppDispatch();
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toastRef.current) {
        toastRef.current.classList.add("hideToast");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={toastRef} className={`toast-container ${toast.state}`}>
      <span>{toast.text}</span>
      <span className="toast-close" onClick={() => dispatch(removeToast(toast.id))}>
        ✖
      </span>
    </div>
  );
};

export default ToastContainer;
