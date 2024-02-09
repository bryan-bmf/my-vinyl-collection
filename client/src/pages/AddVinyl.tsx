import { Box } from "@chakra-ui/react";
import SearchAlbum from "../components/SearchAlbum";

const AddVinyl = () => {
	return (
		<Box sx={sx.pageConfig}>
			<SearchAlbum />
		</Box>
	);
};

const sx = {
    pageConfig: {
		padding: 5,
		width: "100vw",
		height: "100vh",
	},
}

export default AddVinyl;
