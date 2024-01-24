import { useBreakpoint } from "@chakra-ui/react";
import { Spotify } from "react-spotify-embed";
import { AnyObject } from "../types";

const SpotifyPlayer = ({ album }: Props) => {
	const { isAlbum, spotifyAlbumId } = album;
	const type = isAlbum === true ? "album" : "playlist";

	// change size of player if mobile
	const breakpoint = useBreakpoint(); 
	const playerWidth = breakpoint === 'base' ? "325em" : "450em";

	const url = "https://open.spotify.com/" + type + "/" + spotifyAlbumId;

	return <Spotify width={playerWidth} height="550em" link={url} />;
};

interface Props {
	album: AnyObject;
}

export default SpotifyPlayer;
