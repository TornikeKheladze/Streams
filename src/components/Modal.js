import React from "react";

import Modal from "react-modal";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteStream } from "../features/stream/streamSlice";

Modal.setAppElement("#modal");

function ModalWindow({ currentStream }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      onClick={() => {
        closeModal();
        navigate("/");
      }}
    >
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="ui dimmer modals visible active"
        contentLabel="Example Modal"
      >
        <div
          className="ui standard modal visible active"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="header">Delete Stream</div>
          <div className="content">
            Are you sure you want to delete
            {currentStream && ` ${currentStream.title}`} stream?
          </div>
          <div className="actions">
            <button
              className="ui green button"
              onClick={() => {
                closeModal();
                navigate("/");
              }}
            >
              Cancel
            </button>
            <button
              className="ui red button"
              onClick={() => {
                dispatch(deleteStream(currentStream.id));
                navigate("/");
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
