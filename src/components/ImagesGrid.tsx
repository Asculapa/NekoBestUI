import { SimpleGrid, Image, Text } from "@chakra-ui/react";
import { ImagesQuery } from "../App";
import { useEffect, useState } from "react";
import { useImages } from "../hooks/useImages";

interface Image {
  url: string;
}

const ImagesGrid = ({ imagesQuery }: { imagesQuery: ImagesQuery }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const amount = imagesQuery.category.format === "gif" ? 20 : 8;
    useImages(imagesQuery, amount).then((response) => {
      setImages(response.data.results);
    });
  }, [imagesQuery]);

  if (images.length == 0) return <Text align="center">{"Not Found :("}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={3}
      alignItems="center"
    >
      {images.map((image) => (
        <Image
          key={image.url}
          src={image.url}
          borderRadius={10}
          cursor={"pointer"}
        />
      ))}
    </SimpleGrid>
  );
};

export default ImagesGrid;
