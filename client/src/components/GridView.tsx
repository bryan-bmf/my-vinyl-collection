import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import AlbumCover from "./AlbumCover";
import { forwardRef } from "react";


const GridView = forwardRef<HTMLDivElement, unknown>((props, ref) => {
	return (
		<Grid templateColumns="repeat(5, 1fr)" gap={6}  ref={ref} height="968px">
            <AlbumCover />
		</Grid>
	);
});

export default GridView;
