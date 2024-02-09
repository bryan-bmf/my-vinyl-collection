import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Center, Input } from "@chakra-ui/react";
import { useState } from "react";

const AddVinylForm = () => {
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

    /*

    SEARCH COMPONENT
    al entrar:
        artist
        album
        boton de search
        resultados seran un card con foto e general info
        escoges album y al confirmar te tiro al form con el estado con la info del album escogido

    */

	const handleInputChange = (e: any) => {
		setInput(e.target.value)
        console.log(input)
	};

	return (
			<Center>
				<FormControl maxW="90vw" w="100vw">
					<FormLabel>Artist</FormLabel>
					<Input
						type="text"
						value={input.artist}
					/>

					<FormLabel>Album</FormLabel>
					<Input
						type="text"
						value={input.album}
					/>

					<FormLabel>Genre</FormLabel>
					<Input
						type="text"
						value={input.genre}
					/>

					<FormLabel>Year</FormLabel>
					<Input
						type="number"
						value={input.year}
					/>

					<FormLabel>Language</FormLabel>
					<Input
						type="text"
						value={input.language}
					/>

					<FormLabel>Spotify Album ID</FormLabel>
					<Input
						type="text"
						value={input.spotifyAlbumID}
					/>

					<FormLabel>Spotify Album Cover</FormLabel>
					<Input
						type="image"
						value={input.spotifyAlbumCover}
					/>
				</FormControl>

			</Center>
	);
};

export default AddVinylForm;
