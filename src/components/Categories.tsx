import {
  Badge,
  Button,
  HStack,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Category, useCategories } from "../hooks/useCategories";
import { useEffect, useState } from "react";
import { capitalizeFirstLowercaseRest } from "../helpers/capitalizer";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const Categories = ({ onSelectCategory, selectedCategory }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    useCategories().then((response) => {
      setCategories(
        Object.keys(response.data)
          .sort()
          .map((key) => ({
            name: key,
            format: response.data[key].format,
          }))
      );
    });
  }, []);

  return (
    <>
      <Heading as="h3" size="lg">
        Category
      </Heading>
      <List spacing={2} marginTop={3}>
        {categories.map((category) => (
          <ListItem key={category.name}>
            <HStack>
              <Button
                variant="link"
                whiteSpace="normal"
                justifyContent="flex-start"
                fontWeight={
                  selectedCategory?.name === category.name ? "bold" : "normal"
                }
                onClick={() => onSelectCategory(category)}
              >
                {capitalizeFirstLowercaseRest(category.name)}
              </Button>
              <Badge textColor={"gray.400"}>{category.format}</Badge>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Categories;
