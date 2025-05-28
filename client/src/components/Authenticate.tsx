import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { URL } from "../App";

const Authenticate =(props: any) => {
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<boolean>(false);
	const [errorMsg, setErrorMsg] = useState<string>();

	const handleEnter = (e: any) => {
		if (e.keyCode === 13) {
			fetchAuth();
		}
		return;
	};

	const fetchAuth = async () => {
        setError(false);

		const params = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ pass: password }),
		};
		const resp = await fetch(`${URL}/authenticate`, params);
		const respData = await resp.text();

        if(!resp.ok) {
            setError(true);
            setErrorMsg(respData);
        }
        else {
            props.handleAuth(true);
        }

	};

	return (
		<Flex sx={sx.page}>
			<Text>You need to be authenticated to access this page.</Text>
			<Input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				onKeyDown={handleEnter}
				sx={sx.field}
				autoFocus
			/>
            {error ? <Text color="red">{errorMsg}</Text> : null}
		</Flex>
	);
};

const sx = {
	page: {
		w: "60vw",
		h: "80vh",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
    field: {
        textAlign: "center",
        width: "60%",
		border: "1px solid",
		borderColor: "gray.200",
		_hover: {
			borderColor: "gray.200",
		},
    }
};

export default Authenticate;
