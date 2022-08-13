import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function ModalSearch({ modal, setModalSearch, dispatch, searchValue }) {
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/search/${searchValue}`);
    setModalSearch(false);
  };
  return (
    <>
      <section className={modal ? "modal-search show" : "modal-search "}>
        <div className="modal-search__form">
          <i className="fa-solid fa-magnifying-glass modal-search-icon"></i>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                dispatch({
                  type: "SEARCH_VALUE",
                  payload: e.target.value,
                });
              }}
              value={searchValue}
              type="text"
              placeholder="Axtarış"
            />
          </form>
          <i
            onClick={() => setModalSearch(false)}
            className="fa-solid fa-xmark modal-search-close"
          ></i>
        </div>
      </section>
    </>
  );
}

let t = (a) => a;
export default connect(t)(ModalSearch);
