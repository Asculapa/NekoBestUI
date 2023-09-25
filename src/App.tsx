import { Grid, GridItem } from "@chakra-ui/react";
import Categories from "./components/Categories";
import { useState } from "react";
import { Category } from "./hooks/useCategories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    {} as Category
  );

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"`}
    >
      <GridItem bg="blue.300" area={"header"}>
        Header
      </GridItem>

      <GridItem area={"nav"}>
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
