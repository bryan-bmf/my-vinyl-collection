import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AlbumCover from "../components/AlbumCover";
import "./matchMedia";

const mockData = [
	{
		Artist: "2Pac",
		Album: "All Eyez On Me",
		Genre: "Hip-Hop",
		Year: 1996,
		Language: "Inglés",
		Location: "Tampa",
		Purchased: 2021,
		SpotifyAlbumID: "78iX7tMceN0FsnmabAtlOC",
		IsAlbum: true,
		UniqueID: "fnjkdwnf",
		SpotifyAlbumCover:
			"https://i.scdn.co/image/ab67616d00001e02073aebff28f79959d2543596",
	},
];

const albumCover = (
	<ChakraProvider>
		<AlbumCover data={mockData}/>
	</ChakraProvider>
);

describe("Test Album Cover Component", () => {
	it("Album cover renders", () => {
        render(albumCover);
		const box = screen.getByText("2Pac");
        expect(box).toBeVisible();
    });

    it("Spotify player opens on album click", async () => {
        render(albumCover);
		const box = screen.getByText("2Pac");
		await fireEvent.click(box);
		expect(screen.findByText("Save on Spotify")).toBeVisible;
    });

})