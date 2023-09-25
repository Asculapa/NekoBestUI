import { SimpleGrid, Image } from "@chakra-ui/react";
import { ImagesQuery } from "../App";
import { useEffect, useState } from "react";
import { useImages } from "../hooks/useImages";

interface Image {
  url: string;
}

const Main = ({ imagesQuery }: { imagesQuery: ImagesQuery }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const amount = imagesQuery.category.format === "gif" ? 20 : 8;
    useImages(imagesQuery, amount).then((response) => {
      setImages(response.data.results);
    });
  }, [imagesQuery]);

  return (
    <SimpleGrid columns={4} spacing={3} alignItems="center">
      {images.map((image) => (
        <Image src={image.url} borderRadius={10} />
      ))}
    </SimpleGrid>
  );
};

export default Main;
