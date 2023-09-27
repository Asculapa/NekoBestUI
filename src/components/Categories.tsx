import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
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
            amount: parseInt(response.data[key].max),
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
              <Box display="flex" flexDirection="row">
                <Button
                  variant="link"
                  whiteSpace="normal"
                  justifyContent="flex-start"
                  display="contents"
                  fontWeight={
                    selectedCategory?.name === category.name ? "bold" : "normal"
                  }
                  onClick={() => onSelectCategory(category)}
                >
                  {capitalizeFirstLowercaseRest(category.name)}
                </Button>
                <Text fontSize="12px" textColor={"gray.500"} marginLeft={1}>
                  {category.amount}
                </Text>
              </Box>
              <Badge textColor={"gray.400"}>{category.format}</Badge>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Categories;
