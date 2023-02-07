import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white shadow-sm p-3 bg-body-tertiary rounded">
      <div className="card-body">
        <h3 className="text-muted ms-3">
            {props.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
