import React from "react";
import Search from "./../components/forms/Search";
import "./../styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Front End Take Home Exercise</h1>
      <h4>By Isaias Cardenas</h4>
      <p className="summary">
        This is an example application for an autocomplete input. You can search
        for users from{" "}
        <a href="https://dummyjson.com/docs/users#users-search" target="_blank">
          https://dummyjson.com
        </a>{" "}
        by typing a name or email, for example type: "jack"
      </p>
      <div className="search-container">
        <Search />
      </div>
    </div>
  );
};

export default Home;
