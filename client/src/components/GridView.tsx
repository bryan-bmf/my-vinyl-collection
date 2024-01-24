import { SimpleGrid } from "@chakra-ui/react";
import { AnyObject } from "../types";
import AlbumCover from "./AlbumCover";

const GridView = ({ data }: Props) => {
	return (
		<SimpleGrid columns={[2, 3, 5]} spacingY="40px" spacingX="40px" maxH="82vh">
            <AlbumCover data={data} />
		</SimpleGrid>
	);
};

interface Props {
	data: Array<AnyObject>;
}

export default GridView;
