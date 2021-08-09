const useModifyBodyOverflow = (): any => {
  const handleOverflow = (payload: boolean): void => {
    if (payload === true) {
      document.body.classList.add("remove-overflow");
    } else {
      document.body.classList.remove("remove-overflow");
    }
  };
  return { handleOverflow };
};

export default useModifyBodyOverflow;
