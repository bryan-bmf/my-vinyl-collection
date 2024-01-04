import { useEffect, useState } from "react";
import { artistData } from "../data/seed";
import { AnyObject } from "../types";

const AlbumCover = () => {
	const [data, setData] = useState<Array<AnyObject>>(artistData);

	const clientID = process.env.REACT_APP_CLIENT_ID;
	const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

	const tokenUrl = "https://accounts.spotify.com/api/token";

    const postBody: AnyObject = {client_id: clientID, client_secret: clientSecret, grant_type: "client_credentials"}
    const encodedBody = new URLSearchParams(Object.entries(postBody)).toString();

	const fetchToken = async () => {
		const resp = await fetch(tokenUrl, {
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: encodedBody,
		});

        if(!resp.ok)
            throw new Error("explotó")

        const respData = await resp.json()
        console.log(respData)
	};

    useEffect(() => {
        fetchToken()
    }, [])

	return <h1>hi</h1>;
};

export default AlbumCover;
