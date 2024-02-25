import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import RESCARD_MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={RESCARD_MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
