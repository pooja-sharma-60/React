import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../components/Home";
import MOCK_DATA from "../mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Home component with search btn", async () => {
  // whenever u r using state updates or fetch fn we have to wrap our render fn in act fn

  await act(async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  //   const cardsBeforeSearch = screen.getAllByTestId("resCard");

  //   expect(cardsBeforeSearch.length).toBe(9);

  //     const searchBtn = screen.getByRole("button", { name: "Search" });

  //     const searchInput = screen.getByTestId("searchInput");
  //     fireEvent.change(searchInput, { target: { value: "pizza" } });
  //     fireEvent.click(searchBtn);

  //     // screen should load 3 cards
  //     const searchedCards = screen.getAllByTestId("resCard");

  //     expect(searchedCards.length).toBe(3);
  //
});
