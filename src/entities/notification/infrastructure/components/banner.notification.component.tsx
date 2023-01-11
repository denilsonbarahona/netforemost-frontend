import React from "react";

const BannerNotification: React.FC<{ message: string; type: string }> = ({
  message,
  type,
}) => {
  const getNotificationColor = () => {
    switch (type) {
      case "error":
        return "bg-red-600";
      case "success":
        return "bg-lime-500";
      default:
        return "";
    }
  };
  return (
    <p
      role="alert"
      aria-live="polite"
      className={`rounded-md my-6 text-white flex items-center font-medium w-full px-5 py-4 ${getNotificationColor()}`}
    >
      {message}
    </p>
  );
};

export default BannerNotification;
