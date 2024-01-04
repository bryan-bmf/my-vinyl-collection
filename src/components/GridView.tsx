import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";

const GridView = () => {
	return (
		<Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <AlbumCover />
		</Grid>
	);
};

export default GridView;
