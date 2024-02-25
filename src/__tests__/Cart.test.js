import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import store from "../utils/store";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  //   const accordianHeader = screen.getByText("Recommended (19)");
  //   fireEvent.click(accordianHeader);
});
