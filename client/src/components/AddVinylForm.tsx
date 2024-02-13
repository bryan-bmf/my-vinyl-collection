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
    useDisclosure
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
	const [loading, setLoading] = useState<Boolean>(false);
	const [response, setResponse] = useState<AnyObject>({});

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
        setLoading(true);
		const params = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(album),
		};
		const resp = await fetch(`${URL}/add`, params);
		console.log(resp);

        setResponse(resp)
        setLoading(false);
        openModal();

		// chequiar con el spotify id si ya existe y tirar error
		/*
        gray overlay con spinner
        on success
            modal "succesfully added. want to add more?" if no, redirect a main page
        on error
            modal show error message. on close, te tiro al form
    */
	};

	// modal disclosure
	const {
		isOpen: isOpen,
		onOpen: openModal,
		onClose: closeModal,
	} = useDisclosure();

	const handleSubmit = () => {
		addVinyl(input);
	};

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
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</HStack>
				</Center>
			</FormControl>
			{loading ? (
				<Center>
					<Image
						src={spinner}
						alt="Gray loading spinner in the form of a spinning record"
						role="img"
					/>
				</Center>
			) : (response && 
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
	},
	fields: {
		marginBottom: "10px",
	},
	form: {
		width: "45%",
	},
};

export default AddVinylForm;
