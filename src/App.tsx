import { Grid, GridItem } from "@chakra-ui/react";
import Categories from "./components/Categories";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import NavBar from "./components/NavBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    {} as Category
  );

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"`}
    >
      <GridItem area={"header"} padding={4}>
        <NavBar />
      </GridItem>

      <GridItem area={"nav"} padding={4}>
        <Categories
          onSelectCategory={(category) => setSelectedCategory(category)}
          selectedCategory={selectedCategory}
        />
      </GridItem>

      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
