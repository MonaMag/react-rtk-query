import { useState } from "react";
import { Modal } from "../../shared/Modal/Modal";
import { classNames } from "../../shared/classNames/classNames";

interface UserModalProps {
  className?: string;
}

export const CreateArticleModal = ({ className }: UserModalProps) => {
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
          <div>Modal</div> {/* <CreateArticleForm onClose={onCloseModal} />*/}
        </Modal>
      )}
    </>
  );
};
