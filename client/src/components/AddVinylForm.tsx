import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
    Button,
    Center,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { URL } from "../App";
import { AnyObject } from "../types";

const AddVinylForm = (props: any) => {
	const [input, setInput] = useState({
		Artist: "",
		Album: "",
		Genre: "",
		IsAlbum: "true",
		Language: "",
		Purchased: new Date().getFullYear(),
		SpotifyAlbumCover: "",
		SpotifyAlbumID: "",
		Year: "",
	});

	useEffect(() => {
		if (props.album.Artist) {
			const { Artist, Album, SpotifyAlbumID, SpotifyAlbum, Year } =
				props.album;

			setInput({
				...input,
				Artist: Artist,
				Album: Album,
				SpotifyAlbumCover: SpotifyAlbum,
				SpotifyAlbumID: SpotifyAlbumID,
				Year: Year,
			});
		}
	}, []);

	const handleInput = (e: any) => {
		// radio button doesn't bring back an event
		if (e === "true" || e === "false") {
			setInput({ ...input, IsAlbum: e });
		} else setInput({ ...input, [e.target.name]: e.target.value });
	};

	const addVinyl = async (album: AnyObject) => {
		const params = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(album),
		};
		const resp = await fetch(`${URL}/add`, params);
		const respData = await resp.json();
	};

	return (
		<FormControl sx={sx.form}>
			<FormLabel>Artist</FormLabel>
			<Input
				name="Artist"
				type="text"
				sx={sx.fields}
				value={input.Artist}
				onChange={handleInput}
			/>

			<FormLabel>Album</FormLabel>
			<Input
				name="Album"
				type="text"
				sx={sx.fields}
				value={input.Album}
				onChange={handleInput}
			/>

			<FormLabel>Genre</FormLabel>
			<Input
				name="Genre"
				type="text"
				sx={sx.fields}
				value={input.Genre}
				onChange={handleInput}
			/>

			<FormLabel>Year</FormLabel>
			<Input
				name="Year"
				type="number"
				sx={sx.fields}
				value={input.Year}
				onChange={handleInput}
			/>

			<FormLabel>Language</FormLabel>
			<Input
				name="Language"
				type="text"
				sx={sx.fields}
				value={input.Language}
				onChange={handleInput}
			/>

			<FormLabel>Spotify Album ID</FormLabel>
			<Input
				name="SpotifyAlbumID"
				type="text"
				sx={sx.fields}
				value={input.SpotifyAlbumID}
				onChange={handleInput}
			/>

			{props.album.notFound && (
				<>
					<FormLabel>Is Album?</FormLabel>
					<RadioGroup
						name="IsAlbum"
						sx={sx.fields}
						onChange={handleInput}
						value={input.IsAlbum}
					>
						<Stack direction="row">
							<Radio value="true">True</Radio>
							<Radio value="false">False</Radio>
						</Stack>
					</RadioGroup>
				</>
			)}

			<FormLabel>Spotify Album Cover</FormLabel>
			<Input
				name="SpotifyAlbumCover"
				type="text"
				sx={sx.fields}
				value={input.SpotifyAlbumCover}
				onChange={handleInput}
			/>

			<Center>
				<HStack>
					<Button
						colorScheme="red"
						onClick={() => window.location.reload()}
					>
						Cancel
					</Button>
					<Button
						sx={sx.button}
						colorScheme="blue"
						onClick={() => addVinyl(input)}
					>
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
