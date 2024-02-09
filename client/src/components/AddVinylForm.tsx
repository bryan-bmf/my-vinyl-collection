import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Center, HStack, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AddVinylForm = (props: any) => {
	const [input, setInput] = useState({
		artist: "",
		album: "",
		genre: "",
		isAlbum: true,
		language: "",
		purchased: new Date().getFullYear(),
		spotifyAlbumCover: "",
		spotifyAlbumID: "",
		year: "",
	});

	useEffect(() => {
		if (props.album.Artist) {
			const { Artist, Album, SpotifyAlbumID, SpotifyAlbum, Year } =
				props.album;

			setInput({
				...input,
				artist: Artist,
				album: Album,
				spotifyAlbumCover: SpotifyAlbum,
				spotifyAlbumID: SpotifyAlbumID,
				year: Year,
			});
		}
	}, []);

	const handleInput = (e: any) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleCancel = (e: any) => {
        window.location.reload();
	};

	return (
		<FormControl sx={sx.form}>
			<FormLabel>Artist</FormLabel>
			<Input
				name="artist"
				type="text"
				sx={sx.fields}
				value={input.artist}
				onChange={handleInput}
			/>

			<FormLabel>Album</FormLabel>
			<Input
				name="album"
				type="text"
				sx={sx.fields}
				value={input.album}
				onChange={handleInput}
			/>

			<FormLabel>Genre</FormLabel>
			<Input
				name="genre"
				type="text"
				sx={sx.fields}
				value={input.genre}
				onChange={handleInput}
			/>

			<FormLabel>Year</FormLabel>
			<Input
				name="year"
				type="number"
				sx={sx.fields}
				value={input.year}
				onChange={handleInput}
			/>

			<FormLabel>Language</FormLabel>
			<Input
				name="language"
				type="text"
				sx={sx.fields}
				value={input.language}
				onChange={handleInput}
			/>

			<FormLabel>Spotify Album ID</FormLabel>
			<Input
				name="spotifyAlbumID"
				type="text"
				sx={sx.fields}
				value={input.spotifyAlbumID}
				onChange={handleInput}
			/>

			<FormLabel>Spotify Album Cover</FormLabel>
			<Input
				name="spotifyAlbumCover"
				type="text"
				sx={sx.fields}
				value={input.spotifyAlbumCover}
				onChange={handleInput}
			/>

			<Center>
				<HStack>
					<Button colorScheme="red" onClick={handleCancel}>Cancel</Button>
					<Button sx={sx.button} colorScheme="blue">
						Submit
					</Button>
				</HStack>
			</Center>
		</FormControl>
	);
};

const sx = {
	button: {
		margin: "10px",
	},
	fields: {
		marginBottom: "10px",
	},
	form: {
		width: "45%",
	},
};

export default AddVinylForm;
