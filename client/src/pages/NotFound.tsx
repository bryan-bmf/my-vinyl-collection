import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h1 role="heading">tas peLdio papi</h1>
            <Link to={"/"}><Button role="button">go back</Button></Link>
		</>
	);
};

export default NotFound;
