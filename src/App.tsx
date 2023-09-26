import { Grid, GridItem, Show } from "@chakra-ui/react";
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
      templateAreas={{
        lg: `"header header"
            "nav main"`,
        base: `"header" "main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"header"} padding={4}>
        <NavBar
          onSearch={(searchText) =>
            setImagesQuery({ ...imagesQuery, query: searchText })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area={"nav"} padding={4}>
          <Categories
            onSelectCategory={(category) =>
              setImagesQuery({ ...imagesQuery, category: category })
            }
            selectedCategory={imagesQuery.category}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"} padding={4}>
        <ImagesGrid imagesQuery={imagesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
