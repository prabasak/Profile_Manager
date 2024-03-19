import { createContext, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  modalOpen: () => {},
  modalClose: () => {},
});

export default function ModalContextProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const ctxValue = {
    isModalOpen: modalIsOpen,
    modalOpen: handleModalOpen,
    modalClose: handleCloseModal,
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
}
