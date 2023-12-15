import React, { useState, useEffect } from "react";
import Person from "./PersonComponent";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setPerson(data.results[0]);
    } catch (error) {
      console.log( error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

const showInfo = () => {
  getPerson(); 
};


  return <Person person={person} showInfo={showInfo} />;
};

export default PersonController;
