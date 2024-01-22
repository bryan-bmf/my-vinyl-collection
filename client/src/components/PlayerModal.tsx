import { Modal, ModalContent, ModalOverlay, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SpotifyPlayer from "./SpotifyPlayer";

const PlayerModal = (props: any) => {
	const [loading, setLoading] = useState<Boolean>(true);

	const { isOpen, onClose } = props.modalDisclosure;

	//show loading spinner for a second
	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [props]);

	const sizes = ['xs', 'md']

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={sizes}>
			<ModalOverlay />
			{loading ? (
				<Spinner sx={sx.loading} size="xl" />
			) : (
				<ModalContent sx={sx.modal}>
					<SpotifyPlayer album={props.album} />
				</ModalContent>
			)}
		</Modal>
	);
};

const sx = {
	modal: {
		borderRadius: "10%",
		backgroundColor: "transparent",
		borderColor: "transparent",
		shadow: "none",
	},
	loading: {
		top: "50%",
		left: "50%",
		position: "fixed",
	},
};

export default PlayerModal;
