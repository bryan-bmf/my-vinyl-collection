import { SimpleGrid } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";

const GridView = () => {
	return (
		<SimpleGrid columns={5} spacingY="40px" spacingX="40px">
            <AlbumCover />
		</SimpleGrid>
	);
};

export default GridView;
