import { SimpleGrid } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";

const GridView = (props: any) => {
	return (
		<SimpleGrid columns={5} spacingY="40px" spacingX="40px" maxH="500px">
            <AlbumCover data={props.data} />
		</SimpleGrid>
	);
};

export default GridView;
