import React from "react";
import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get("username");
  const age = params.get("age");
  return (
    <div>
      <h1>About</h1>
      <h2>username:{username}</h2>
      <h2>age:{age}</h2>
    </div>
  );
};

export default About;
