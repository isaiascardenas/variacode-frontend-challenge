import React, { useState, useEffect } from "react";
import { UsersResource, User } from "./../../api/users/users-resource";
import "./../../styles/search.css";

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setErrorText("");
    setUsersList([]);

    const timeOutId = setTimeout(() => fetchUsers(), 500);

    return () => clearTimeout(timeOutId);
  }, [searchInput]);

  const fetchUsers = async () => {
    try {
      const users: User[] = await UsersResource.getUsers(searchInput);
      setUsersList(users);
    } catch (error) {
      setErrorText(error.message);
      console.log("ERROR: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (q) => {
    setSearchInput(q);
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Type to search"
      />

      {errorText.length > 0 && (
        <small className="error-text">Error: {errorText}</small>
      )}

      {searchInput.length > 0 && (
        <ul>
          {isLoading ? (
            <li>Loading...</li>
          ) : usersList.length > 0 ? (
            usersList.map((user) => (
              <li key={user.id}>
                <img src={user.image} alt="avatar" />
                <div>
                  <p>
                    {getHighlightedText(
                      `${user.firstName} ${user.lastName}`,
                      searchInput,
                    )}
                  </p>
                  <small>{getHighlightedText(user.email, searchInput)}</small>
                </div>
              </li>
            ))
          ) : (
            <li>No results</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
