import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../component/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../redux/appStore";

test("should render Header Componen", function () {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const ul = screen.getByRole("list");

  // console.log(ul);

  expect(ul).toBeInTheDocument();
});

test("should have cart items inside Header Component", function () {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - 0");

  const cartItems1 = screen.getByText(/Cart/); // using regEx

  // console.log(ul);

  expect(cartItems).toBeInTheDocument();
  expect(cartItems1).toBeInTheDocument();
});

it("should click loggin button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton); // firing click event

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
