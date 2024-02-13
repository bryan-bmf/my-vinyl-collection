import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnyObject } from "../types";

const AddVinylModal = ({ modalDisclosure, response }: Props) => {

	const { isOpen, onClose } = modalDisclosure;

    const [message, setMessage] = useState<string>();

    const msg = response.status === 200 ? "Successfully added album!" : "Something went wrong! Please try again. Check AWS logs for more information.";
    setMessage(msg);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			closeOnOverlayClick={false}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add New Album</ModalHeader>
				<ModalBody>{message}</ModalBody>

				<ModalFooter>
					<Link to="/collection">
						<Button colorScheme="red" mr={3}>
							Done
						</Button>
					</Link>
						<Button colorScheme="blue" onClick={() => window.location.reload()}>Add More</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

interface Props {
	modalDisclosure: {
		isOpen: boolean;
		onOpen: any;
		onClose: any;
	};
	response: AnyObject;
}

const sx = {
	modal: {
		borderRadius: "10%",
		backgroundColor: "transparent",
		borderColor: "transparent",
		shadow: "none",
	},
	loading: {
		top: "45%",
		left: "46.5%",
		position: "fixed",
		zIndex: 10000,
		filter: "brightness(70%)",
		margin: -5, // offset el padding del homepage
	},
};

export default AddVinylModal;
