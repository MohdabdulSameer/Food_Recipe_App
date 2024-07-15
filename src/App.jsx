import { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import RecipeList from "./RecipeList";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=83bd9f34&app_key=ffc1511813e5259c88edf221b6f95f96`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Recipe Search App
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: "2rem", display: "flex" }}
      >
        <TextField
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter an ingredient or dish"
          variant="outlined"
          fullWidth
          size="large"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "1rem" }}
        >
          Search
        </Button>
      </form>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </Container>
  );
};

export default App;
