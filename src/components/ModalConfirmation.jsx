import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

function ModalConfirmation({
  dispatch,
  deleteItem,
  name,
  setShowModal,
  favorite,
  modalConfirmationShow,
}) {
  window.localStorage.setItem("favorite", JSON.stringify(favorite));
  useEffect(() => {
    if (modalConfirmationShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalConfirmationShow]);
  return (
    <div
      onClick={() => setShowModal(false)}
      className={
        modalConfirmationShow ? "modal-fav  modal-opened" : "modal-fav"
      }
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-fav__wrapper">
        <div
          onClick={() =>
            dispatch({
              type: "MODAL_CONFIRMATION_SHOW",
              payload: false,
            })
          }
          className="modal-fav__close"
        >
          &times;
        </div>
        <div className="modal-fav__title">{name} adlı məhsul silinsin ?</div>
        <div className="modal-fav__operations">
          <p
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_FAVORITES",
                payload: deleteItem,
              });
              dispatch({
                type: "MODAL_CONFIRMATION_SHOW",
                payload: false,
              });
              dispatch({
                type: "REMOVE_FROM_BASKET",
                payload: deleteItem,
              });
            }}
            className="modal-fav__delete"
          >
            Sil
          </p>
          <p
            onClick={() =>
              dispatch({
                type: "MODAL_CONFIRMATION_SHOW",
                payload: false,
              })
            }
            className="modal-fav__cancel"
          >
            Bağla
          </p>
        </div>
      </div>
    </div>
  );
}

let t = (a) => a;
export default connect(t)(ModalConfirmation);
