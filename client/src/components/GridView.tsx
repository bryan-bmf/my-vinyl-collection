import { SimpleGrid } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";

const GridView = (props: any) => {
	return (
		<SimpleGrid columns={[2, 3, 5]} spacingY="40px" spacingX="40px" maxH="80vh">
            <AlbumCover data={props.data} />
		</SimpleGrid>
	);
};

export default GridView;
