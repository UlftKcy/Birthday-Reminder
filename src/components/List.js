import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, image, age } = person;
        return (
          <div className="person">
            <div>
              <img className="person-image" src={image}></img>
            </div>
            <div className="person-content">
              <h4>{name}</h4>
              <span>{age}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
