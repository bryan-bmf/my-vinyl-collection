import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MusicTable from "../components/MusicTable";
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

const musicTable = (
	<ChakraProvider>
		<MusicTable data={mockData} />
	</ChakraProvider>
);

describe("Test MusicTable Component", () => {
    it("Renders data on the MusicTable component", () => {
        render(musicTable);
        expect(screen.getByText("2Pac")).toBeVisible();
    });

    it("Spotify player opens on album click", async () => {
        render(musicTable);
		const album = screen.getByText("All Eyez On Me");
		await fireEvent.click(album);
		expect(screen.findByText("Save on Spotify")).toBeVisible;
    });

})