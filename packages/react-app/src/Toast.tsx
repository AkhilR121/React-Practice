import React, { useEffect } from "react";

interface ToastProps {
  show: boolean;
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  show,
  message,
  type,
  duration = 3000,
  position = "bottom-right",
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  let bgColor = "";
  let borderColor = "";
  let textColor = "";

  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      borderColor = "border-green-600";
      textColor = "text-white";
      break;
    case "error":
      bgColor = "bg-red-500";
      borderColor = "border-red-600";
      textColor = "text-white";
      break;
    case "info":
      bgColor = "bg-blue-500";
      borderColor = "border-blue-600";
      textColor = "text-white";
      break;
    default:
      bgColor = "bg-gray-500";
      borderColor = "border-gray-600";
      textColor = "text-white";
  }

  let positionClasses = "";

  switch (position) {
    case "top-left":
      positionClasses = "top-4 left-4";
      break;
    case "top-right":
      positionClasses = "top-4 right-4";
      break;
    case "bottom-left":
      positionClasses = "bottom-4 left-4";
      break;
    case "bottom-right":
      positionClasses = "bottom-4 right-4";
      break;
    default:
      positionClasses = "bottom-4 right-4";
  }

  return (
    <div
      className={`fixed ${positionClasses} m-4 w-80 rounded-md p-4 ${bgColor} ${borderColor} ${textColor} ${
        show ? "visible" : "invisible"
      } transition-all duration-300`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
