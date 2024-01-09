import { Spotify } from "react-spotify-embed";
import { AnyObject } from "../types";

const SpotifyPlayer = (props: AnyObject) => {
	const { isAlbum, spotifyAlbumId } = props.album;
	const type = isAlbum === true ? "album" : "playlist";

	const url = "https://open.spotify.com/" + type + "/" + spotifyAlbumId;

	return <Spotify width="450em" height="550em" link={url} />;
};

export default SpotifyPlayer;
