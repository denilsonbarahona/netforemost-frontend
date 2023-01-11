import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../entities/notification/application/action";
import { AppDispatch, RootState } from "../store";

const useNotification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isVisible, message, type } = useSelector(
    (state: RootState) => state.notification
  );

  useEffect(() => {
    if (isVisible === true) {
      dispatch(hideNotification());
    }
  }, []);

  return {
    isVisible,
    message,
    type,
  };
};

export default useNotification;
