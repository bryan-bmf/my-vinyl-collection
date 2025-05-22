import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
	Button,
	Center,
	HStack,
	Image,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { URL } from "../App";
import spinner from "../assets/bluey.gif";
import { AnyObject } from "../types";
import AddVinylModal from "./AddVinylModal";

const AddVinylForm = (props: any) => {
	const [input, setInput] = useState({
		Artist: "",
		Album: "",
		Genre: "",
		IsAlbum: "true",
		Language: "",
		Location: "",
		Purchased: new Date().getFullYear(),
		SpotifyAlbumCover: "",
		SpotifyAlbumID: "",
		Year: "",
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [response, setResponse] = useState<number>(0);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		// if album is found, set state
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
		// don't add album if fields are missing
		setError(false);
		const isEmpty = Object.values(input).some((x) => x === "");
		if (isEmpty) {
			setError(true);
			return;
		}

		setLoading(true);

		const params = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(album),
		};
		const resp = await fetch(`${URL}/add`, params);
		setResponse(resp.status);

		setLoading(false);
		openModal();
	};

	// modal disclosure
	const {
		isOpen: isOpen,
		onOpen: openModal,
		onClose: closeModal,
	} = useDisclosure();

	return (
		<>
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

				<FormLabel>Location</FormLabel>
				<Input
					name="Location"
					type="text"
					sx={sx.fields}
					value={input.Location}
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

				{error && <Text color="red">Fields are missing!</Text>}
				<Center>
					<HStack>
						<Button
							sx={sx.redButton}
							onClick={() => window.location.reload()}
						>
							Cancel
						</Button>
						<Button sx={sx.button} onClick={() => addVinyl(input)}>
							Submit
						</Button>
					</HStack>
				</Center>
			</FormControl>
			{loading ? (
				<Center sx={sx.loading}>
					<Image
						src={spinner}
						alt="Gray loading spinner in the form of a spinning record"
						role="img"
					/>
				</Center>
			) : (
				<AddVinylModal
					modalDisclosure={{
						isOpen: isOpen,
						onOpen: openModal,
						onClose: closeModal,
					}}
					response={response}
				/>
			)}
		</>
	);
};

const sx = {
	button: {
		margin: "10px",
		bgColor: "blue.500",
		text: "white",
		_hover: {
			bg: null,
		},
	},
	redButton: {
		bgColor: "red.500",
		text: "white",
		_hover: {
			bg: null,
		},
	},
	fields: {
		marginBottom: "10px",
		border: "1px solid",
		borderColor: "gray.200",
		_hover: {
			borderColor: "gray.200",
		},
	},
	form: {
		width: "100%",
		height: "100%",
	},
	loading: {
		background: "rgba(0, 0, 0, 0.4)",
		width: "100%",
		height: "110%",
		position: "absolute",
	},
};

export default AddVinylForm;
