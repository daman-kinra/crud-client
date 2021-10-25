import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
function Card({ card, setShowUpdateCard, setCurrentData, onClickDelete }) {
  return (
    <div className="card">
      <p>
        <strong>Make:</strong> {card.make}{" "}
      </p>
      <p>
        <strong>Year:</strong> {card.year}{" "}
      </p>
      <p>
        <strong>Model:</strong> {card.model}{" "}
      </p>
      <div className="actions">
        <button
          className="button edit"
          onClick={() => {
            setCurrentData(card);
            setShowUpdateCard(true);
          }}
        >
          <AiTwotoneEdit />
        </button>
        <button
          className="button delete"
          onClick={() => {
            onClickDelete(card._id);
          }}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default React.memo(Card);
