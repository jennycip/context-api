import React, { useState, useEffect } from "react";

const Button = () => {
  //Define State
  const [name, setName] = useState({ firstName: "name", surname: "surname" });
  const [title, setTitle] = useState("BIO");

  useEffect(() => {
    setName({ firstName: "Shedrack", surname: "Akintayo" });
    setTitle("My Full Name");
  }, []); //pass in an empty array as a second argument

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {name.firstName}</h3>
      <h3>Surname: {name.surname}</h3>
    </div>
  );
};

export default Button;
