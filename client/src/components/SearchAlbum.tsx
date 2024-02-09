import {
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { URL } from "../App";

const SearchAlbum = () => {
	const [input, setInput] = useState({
		artist: "",
		album: "",
	});

	const fetchAlbums = async () => {
		const params = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				q: input.artist + " " + input.album,
			}),
		};
		const resp = await fetch(`${URL}/add`, params);
		const respData = await resp.json();
		console.log(respData);
	};

	const handleSearch = (e: any) => {
		fetchAlbums();
	};

	const handleChange = (e: any) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Center>
			<FormControl maxW="90vw" w="100vw">
				<FormLabel>Artist</FormLabel>
				<Input
					name="artist"
					type="text"
					value={input.artist}
					onChange={handleChange}
				/>

				<FormLabel>Album</FormLabel>
				<Input
					name="album"
					type="text"
					value={input.album}
					onChange={handleChange}
				/>

				<Button onClick={handleSearch}>Search</Button>
			</FormControl>
            
		</Center>
	);
};

export default SearchAlbum;
