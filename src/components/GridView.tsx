import { Grid, GridItem } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";

const GridView = () => {
	return (
		<Grid templateColumns="repeat(5, 1fr)" gap={6}>
			<GridItem w="100%" h="10" bg="blue.500" />
			<GridItem w="100%" h="10" bg="blue.500" />
			<GridItem w="100%" h="10" bg="blue.500" />
			<GridItem w="100%" h="10" bg="blue.500" />
			<GridItem w="100%" h="10" bg="blue.500" />
            <AlbumCover />
		</Grid>
	);
};

export default GridView;
