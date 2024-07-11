import React, { useState } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=83bd9f34&app_key=ffc1511813e5259c88edf221b6f95f96	`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Recipe Search Apps</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter an ingredient or dish"
        />
        <button type="submit">Search</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
};
export default App;
