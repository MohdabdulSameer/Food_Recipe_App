import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Grid,
} from "@mui/material";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.recipe.label}>
            <Card style={{ marginBottom: "1rem" }}>
              <CardMedia
                component="img"
                alt={recipe.recipe.label}
                image={recipe.recipe.image}
                title={recipe.recipe.label}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {recipe.recipe.label}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ingredients:
                  <ul>
                    {recipe.recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.text}</li>
                    ))}
                  </ul>
                </Typography>
                <Link
                  href={recipe.recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Recipe
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipeList;
