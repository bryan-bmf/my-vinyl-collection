import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { URL } from "../App";
import spinner from "../assets/spinner.gif";
import { AnyObject } from "../types";
import AddVinylForm from "./AddVinylForm";

const SearchAlbum = () => {
	const [input, setInput] = useState({
		artist: "",
		album: "",
	});
	const [results, setResults] = useState([]);
	const [album, setAlbum] = useState({});
	const [loading, setLoading] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

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
		setResults(respData);
	};

	const handleSearch = (e: any) => {
		if ((e.keyCode === 13 || e.target.name === "search") && (input.artist && input.album)) {
            setLoading(true);
            setDisabled(true);

            fetchAlbums();

            setDisabled(false);
            setLoading(false);
        } 
	};

	const handleChange = (e: any) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleSelect = (e: any) => {
		setAlbum(results[e.target.value]);
	};

	return (
		<Center>
			{Object.keys(album).length === 0 && (
				<VStack sx={sx.stack}>
					<FormControl sx={sx.form}>
						<FormLabel>Artist</FormLabel>
						<Input
							name="artist"
							type="text"
							value={input.artist}
							onChange={handleChange}
							sx={sx.fields}
							onKeyDown={handleSearch}
						/>

						<FormLabel>Album</FormLabel>
						<Input
							name="album"
							type="text"
							value={input.album}
							onChange={handleChange}
							sx={sx.fields}
							onKeyDown={handleSearch}
						/>

						<Button name="search" onClick={handleSearch} colorScheme="blue" isDisabled={disabled}>
							Search
						</Button>
					</FormControl>
					{loading ? (
						<Center>
							<Image
								src={spinner}
								alt="Gray loading spinner in the form of a spinning record"
								role="img"
							/>
						</Center>
					) : (
						results.length > 0 && (
							<Box>
								<HStack>
									{results.map((current: AnyObject, index: number) => (
										<Box
											key={current.SpotifyAlbumID}
											sx={sx.albumContainer}
										>
											<Image
												boxSize="200px"
												objectFit="cover"
												src={current.SpotifyAlbum}
												alt={`"Cover art for ${current.Artist} - ${current.Album}`}
												role="img"
											/>
											<Text fontSize="md" as="b" noOfLines={1}>
												{current.Album}
											</Text>
											<Text as="small" noOfLines={1}>
												{current.Artist}
											</Text>
											<Text fontSize="xs" noOfLines={1}>
												{current.Year}
											</Text>
											<Button
												sx={sx.button}
												colorScheme="blue"
												onClick={handleSelect}
												value={index}
											>
												Select
											</Button>
										</Box>
									))}
								</HStack>
								<Button
									colorScheme="red"
									onClick={() => setAlbum({ notFound: true })}
								>
									Not Found?
								</Button>
							</Box>
						)
					)}
				</VStack>
			)}
			{/* Only show form when album has been selected */}
			{Object.keys(album).length > 0 && <AddVinylForm album={album} />}
		</Center>
	);
};

const sx = {
	albumContainer: {
		height: "fit-content",
		width: "fit-content",
		boxShadow: "5px 6px 4px lightgray",
		borderRadius: "5px",
		bgColor: "white",
		paddingBottom: "0.25rem",
		margin: "4",
	},
	button: {
		margin: "10px",
	},
	fields: {
		marginBottom: "10px",
	},
	form: {
		w: "30%",
	},
	stack: {
		w: "100%",
	},
};

export default SearchAlbum;
