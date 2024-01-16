import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";

const GridView = () => {
	return (
		<Grid templateColumns="repeat(5, 1fr)" gap={6} height="968px">
            <AlbumCover />
		</Grid>
	);
};

export default GridView;
