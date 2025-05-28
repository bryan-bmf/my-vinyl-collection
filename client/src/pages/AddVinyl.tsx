import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Authenticate from "../components/Authenticate";
import SearchAlbum from "../components/SearchAlbum";

const AddVinyl = () => {
	const [authenticated, setAuthenticated] = useState<boolean>();

	const handleAuth = (res: boolean) => {
		setAuthenticated(res);

		if(res === true) {
			localStorage.setItem("loggedIn", "true");
		}
	}

	useEffect(() => {
		const loggedIn = localStorage.getItem('loggedIn');
		if(loggedIn === 'true') {
			setAuthenticated(true);
		}
		else {
			setAuthenticated(false);
		}
	}, []);

	return (
		<Flex sx={sx.pageConfig}>
			{authenticated ? <SearchAlbum /> : <Authenticate handleAuth={handleAuth} /> }
		</Flex>
	);
};

// interface Props {
// 	handleAuth: () => boolean;
// }

const sx = {
    pageConfig: {
		padding: 5,
		width: "100vw",
		height: "100vh",
		justifyContent: "center",
	},
}

export default AddVinyl;
