import React from "react";
import { AiOutlineEllipsis} from "react-icons/ai";
import "../styles/Card.css";

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src="data:image/jpeg;base64,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"
            alt="QuickSell"
          />

          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          { <AiOutlineEllipsis /> }
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span>●</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
