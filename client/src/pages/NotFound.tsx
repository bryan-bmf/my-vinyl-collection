import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h1>tas peLdio papi</h1>
            <Link to={"/"}><Button>go back</Button></Link>
		</>
	);
};

export default NotFound;
