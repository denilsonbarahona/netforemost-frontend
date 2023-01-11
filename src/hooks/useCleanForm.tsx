import React, { useEffect } from "react";

const useCleanForm = (
  formRef: React.RefObject<HTMLFormElement>,
  observable: string,
  state: string
) => {
  useEffect(() => {
    if (formRef.current && observable === state) {
      formRef.current.reset();
    }
  }, [observable]);
};

export default useCleanForm;
