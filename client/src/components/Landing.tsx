import { Center, Box, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Landing = (props: any) => {

	return (
		<Flex w="100%" h="698px" bg="blue.600">
			<Box bg="blue.400" color="black">
				There are many benefits to a joint design and development system.
				Not only does it bring benefits to the design team, but it also
				brings benefits to engineering teams. It makes sure that our
				experiences have a consistent look and feel, not just in our design
				specs, but in production.
				<Link to={"/collection"}><Button>CLICK ME</Button></Link>
			</Box>
		</Flex>
	);
};

export default Landing;
