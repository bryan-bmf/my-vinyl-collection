import { Button, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const SearchAlbum = () => {
    const [input, setInput] = useState({
        artist: "",
        album: ""
    })

    const handleSearch = (e: any) => {
        setInput(e.target.value);
        
    }

	return (
		<Center>
			<FormControl maxW="90vw" w="100vw">
				<FormLabel>Artist</FormLabel>
				<Input type="text" value={input.artist} />

				<FormLabel>Album</FormLabel>
				<Input type="text" value={input.album} />

                <Button onClick={handleSearch}>Search</Button>

			</FormControl>
		</Center>
	);
};

export default SearchAlbum;
