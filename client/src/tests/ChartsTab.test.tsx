import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChartsTab from "../components/ChartsTab";
import "./matchMedia";

const mockData = [
	[
		{
			id: "Rock",
			label: "Rock",
			value: 66,
			title: "Genres",
		},
		{
			id: "Tango",
			label: "Tango",
			value: 1,
			title: "Genres",
		},
		{
			id: "Hip-Hop",
			label: "Hip-Hop",
			value: 26,
			title: "Genres",
		},
		{
			id: "Folk",
			label: "Folk",
			value: 10,
			title: "Genres",
		},
		{
			id: "Blues",
			label: "Blues",
			value: 1,
			title: "Genres",
		},
		{
			id: "Funk",
			label: "Funk",
			value: 5,
			title: "Genres",
		},
		{
			id: "NuovaTrova",
			label: "NuovaTrova",
			value: 2,
			title: "Genres",
		},
		{
			id: "Bachata",
			label: "Bachata",
			value: 2,
			title: "Genres",
		},
		{
			id: "Merengue",
			label: "Merengue",
			value: 1,
			title: "Genres",
		},
		{
			id: "Pop",
			label: "Pop",
			value: 46,
			title: "Genres",
		},
		{
			id: "Salsa",
			label: "Salsa",
			value: 36,
			title: "Genres",
		},
		{
			id: "Dubstep",
			label: "Dubstep",
			value: 2,
			title: "Genres",
		},
		{
			id: "Jazz",
			label: "Jazz",
			value: 9,
			title: "Genres",
		},
		{
			id: "Disco",
			label: "Disco",
			value: 7,
			title: "Genres",
		},
		{
			id: "Reggaetón",
			label: "Reggaetón",
			value: 4,
			title: "Genres",
		},
		{
			id: "Reggae",
			label: "Reggae",
			value: 14,
			title: "Genres",
		},
		{
			id: "Navidad",
			label: "Navidad",
			value: 3,
			title: "Genres",
		},
		{
			id: "R&B/Soul",
			label: "R&B/Soul",
			value: 50,
			title: "Genres",
		},
	],
	[
		{
			id: "1990's",
			label: "1990's",
			value: 26,
			title: "Decades",
		},
		{
			id: "2010's",
			label: "2010's",
			value: 33,
			title: "Decades",
		},
		{
			id: "1950's",
			label: "1950's",
			value: 2,
			title: "Decades",
		},
		{
			id: "1980's",
			label: "1980's",
			value: 62,
			title: "Decades",
		},
		{
			id: "2020's",
			label: "2020's",
			value: 16,
			title: "Decades",
		},
		{
			id: "1960's",
			label: "1960's",
			value: 22,
			title: "Decades",
		},
		{
			id: "1970's",
			label: "1970's",
			value: 77,
			title: "Decades",
		},
		{
			id: "2000's",
			label: "2000's",
			value: 42,
			title: "Decades",
		},
	],
	[
		{
			id: "Inglés",
			label: "Inglés",
			value: 221,
			title: "Languages",
		},
		{
			id: "Español",
			label: "Español",
			value: 58,
			title: "Languages",
		},
		{
			id: "Japonés",
			label: "Japonés",
			value: 4,
			title: "Languages",
		},
	],
	[
		{
			id: "2020",
			label: "2020",
			value: 65,
			title: "Purchased",
		},
		{
			id: "2021",
			label: "2021",
			value: 96,
			title: "Purchased",
		},
		{
			id: "2022",
			label: "2022",
			value: 55,
			title: "Purchased",
		},
		{
			id: "2023",
			label: "2023",
			value: 66,
			title: "Purchased",
		},
	],
	[
		{
			id: "Discogs",
			label: "Discogs",
			value: 27,
			title: "Locations",
		},
		{
			id: "Amazon",
			label: "Amazon",
			value: 8,
			title: "Locations",
		},
		{
			id: "DMV",
			label: "DMV",
			value: 63,
			title: "Locations",
		},
		{
			id: "Online",
			label: "Online",
			value: 28,
			title: "Locations",
		},
		{
			id: "Regalo",
			label: "Regalo",
			value: 6,
			title: "Locations",
		},
		{
			id: "Tampa",
			label: "Tampa",
			value: 108,
			title: "Locations",
		},
		{
			id: "StPete",
			label: "StPete",
			value: 5,
			title: "Locations",
		},
		{
			id: "Discotecario",
			label: "Discotecario",
			value: 9,
			title: "Locations",
		},
	],
];

const charts = <ChartsTab stats={mockData} total={283} />;

describe("Test ChartsTab Component", () => {
	it("All charts are rendered", async () => {
		render(charts);
		const roles = await screen.findAllByRole("img");
		expect(roles).toHaveLength(5);
	});
});
