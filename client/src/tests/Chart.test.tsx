import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Chart from "../components/Chart";
import "./matchMedia";

const mockData = [
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
];

const chart = <Chart data={mockData} title="Languages" total={283} />;

describe("Test Chart Component", () => {
	it("Render chart", () => {
		render(chart);
		expect(screen.getByRole("img")).toBeDefined();
	});
});
