import { Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import "../index.css";

const Landing = (props: any) => {
	const [images, setImages] = useState([bg1, bg2, bg3, bg4]);
	const [fonts, setFonts] = useState([
		"BlankFont",
		"BrightFont",
		"ChiffoneFont",
		"LemonJellyFont",
		"MexcellentFont",
		"RetroFunkFont",
	]);

	// random number from 0 to 2
	const number = Math.floor(Math.random() * images.length);
	// determine sx for specific background
	const selection = number < 2 ? 1 : 0;

	// random number within font's arr length
	const fontNumber = Math.floor(Math.random() * fonts.length);

	return (
		<Flex
			id="backgroundImage"
			width={"100vw"}
			height={"100vh"}
			alignContent={"center"}
			justifyContent={"center"}
			bgImage={images[number]}
			bgPosition={"center"}
			sx={sx[selection]}
		>
			<Center sx={sx[2]} width={"100vw"} height={"100vh"}>
				<VStack>
					<Text
						color="white"
						fontSize={[64, 128]}
						fontFamily={fonts[fontNumber]}
					>
						Welcome to my vinyl collection
					</Text>
					<Link to={"/collection"}>
						<Button>Start digging</Button>
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
