import { useBreakpoint } from "@chakra-ui/react";
import { Spotify } from "react-spotify-embed";
import { AnyObject } from "../types";

const SpotifyPlayer = (props: AnyObject) => {
	const { isAlbum, spotifyAlbumId } = props.album;
	const type = isAlbum === true ? "album" : "playlist";

	const breakpoint = useBreakpoint(); 
	let w = breakpoint === 'base' ? "325em" : "450em";

	const url = "https://open.spotify.com/" + type + "/" + spotifyAlbumId;

	return <Spotify width={w} height="550em" link={url} />;
};

export default SpotifyPlayer;
