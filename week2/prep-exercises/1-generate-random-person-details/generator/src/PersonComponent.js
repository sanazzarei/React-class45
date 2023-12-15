import React from "react";

const Person = ({ person , showInfo }) => {
return (
  <div className="Person">
    {(() => {
      if (person) {
        return (
          <div className="Person">
            <button onClick={showInfo}>Show Info</button>
            <ul>
              <li>First Name: {person.name.first}</li>
              <li>Last Name: {person.name.last}</li>
              <li>Email: {person.email}</li>
            </ul>
          </div>
        );
      } else {
        return null;
      }
    })()}
  </div>
);

};

export default Person;
