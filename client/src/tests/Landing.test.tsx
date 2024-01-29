import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Landing from "../components/Landing";
import "./matchMedia";

const home = (
	<ChakraProvider>
		<MemoryRouter>
			<Landing />
		</MemoryRouter>
	</ChakraProvider>
);

describe("Test Landing Component", () => {
	it("Button takes to collection page", async () => {
		render(home);
		const link = screen.getByRole("link");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/collection");
	});
});
