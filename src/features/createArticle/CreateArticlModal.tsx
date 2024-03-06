import { useState } from "react";
import { Modal } from "../../shared/Modal/Modal";
import { classNames } from "../../shared/classNames/classNames";
import CreateArticleForm from "./CreateArticleForm";

interface CreateArticleModalProps {
  className?: string;
}

export const CreateArticleModal = ({ className }: CreateArticleModalProps) => {
  const [isCreateModal, setIsCreateModal] = useState(false);

  const onShowModal = () => {
    setIsCreateModal(true);
  };

  const onCloseModal = () => {
    setIsCreateModal(false);
  };

  return (
    <>
      <button onClick={onShowModal}>Создать</button>
      {isCreateModal && (
        <Modal
          className={classNames("", {}, [className])}
          isOpen={isCreateModal}
          onClose={onCloseModal}
        >
          <CreateArticleForm onClose={onCloseModal} />
        </Modal>
      )}
    </>
  );
};
