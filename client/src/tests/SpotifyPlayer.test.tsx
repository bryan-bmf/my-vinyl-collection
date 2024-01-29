import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SpotifyPlayer from "../components/SpotifyPlayer";
import "./matchMedia";

const mockData = [
	{
		IsAlbum: true,
		SpotifyAlbumCover:
			"https://i.scdn.co/image/ab67616d00001e02073aebff28f79959d2543596",
	},
];

const player = (
	<ChakraProvider>
		<SpotifyPlayer album={mockData} />
	</ChakraProvider>
);

describe("Test SpotifyPlayer Component", () => {
	it("Spotify player opens on album click", () => {
        render(player);
		expect(screen.findByText("Save on Spotify")).toBeVisible;
    });

    it("Correct album opens", () => {
        render(player);
        expect(screen.findByText("2Pac")).toBeVisible;
    });

})