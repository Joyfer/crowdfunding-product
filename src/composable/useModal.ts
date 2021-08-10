import useModifyBodyOverflow from "./useModifyBodyOverflow";

const useModal = (modalHandleName: string, store: any): any => {
  const { handleOverflow } = useModifyBodyOverflow();

  const closeModal = (): void => {
    store.commit(modalHandleName, false);
    handleOverflow(false);
  };

  const openModal = (): void => {
    store.commit(modalHandleName, true);
    handleOverflow(true);
  };

  return { closeModal, openModal };
};

export default useModal;
