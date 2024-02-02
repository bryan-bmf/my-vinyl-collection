import { Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import "../styles/fonts.css";

const Landing = () => {
	const images = [bg1, bg2, bg3, bg4];
	const fonts = [
		"BlankFont",
		"BrightFont",
		"ChiffoneFont",
		"LemonJellyFont",
		"MexcellentFont",
		"RetroFunkFont",
		"BarcadeFont",
		"WrestlemaniaFont",
		"VintageWarehouseFont",
		"VintagesFont",
		"RetroLightFont",
		"GrandSpaceFont",
		"FranchiseFont",
		"ExcaliburFont",
	];

	// random number from 0 to 2
	const number = Math.floor(Math.random() * images.length);

	// determine sx for specific background
	const selection = number < 2 ? 1 : 0;

	// random number within font's arr length
	const fontNumber = Math.floor(Math.random() * fonts.length);

	return (
		<Flex
			id="backgroundImage"
			width="100vw"
			height="100vh"
			alignContent="center"
			justifyContent="center"
			bgImage={images[number]}
			bgPosition="center"
			sx={sx[selection]}
		>
			{/* Adding a black overlay with opacity set to 40% so text is legible */}
			<Center sx={sx[2]} width="100vw" height="100vh">
				<VStack>
					<Text
						color="white"
						fontSize={[64, 128]}
						fontFamily={fonts[fontNumber]}
					>
						Welcome to my Vinyl Collection
					</Text>
					<Link to={"/collection"}>
						<Button role="button">Start Digging</Button>
					</Link>
				</VStack>
			</Center>
		</Flex>
	);
};

const sx = [
	{
		bgSize: "cover",
		bgRepeat: "no-repeat",
	},
	{
		bgSize: "contain",
	},
	{
		background: "rgba(0, 0, 0, 0.4)",
	},
];

export default Landing;
