import "@testing-library/jest-dom";
import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import { BrowserRouter } from "react-router-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header component with Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
