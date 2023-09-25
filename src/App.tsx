import { Grid, GridItem } from "@chakra-ui/react";
import Categories from "./components/Categories";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import NavBar from "./components/NavBar";
import ImagesGrid from "./components/ImagesGrid";
import { iniTCategory } from "./data/initCategory";

export interface ImagesQuery {
  category: Category;
  query: string;
}

function App() {
  const [imagesQuery, setImagesQuery] = useState<ImagesQuery>({
    category: iniTCategory,
  } as ImagesQuery);

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"`}
      gridTemplateColumns={"200px 1fr"}
    >
      <GridItem area={"header"} padding={4}>
        <NavBar
          onSearch={(searchText) =>
            setImagesQuery({ ...imagesQuery, query: searchText })
          }
        />
      </GridItem>

      <GridItem area={"nav"} padding={4}>
        <Categories
          onSelectCategory={(category) =>
            setImagesQuery({ ...imagesQuery, category: category })
          }
          selectedCategory={imagesQuery.category}
        />
      </GridItem>

      <GridItem area={"main"} padding={4}>
        <ImagesGrid imagesQuery={imagesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
