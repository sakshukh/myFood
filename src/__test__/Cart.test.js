import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../component/restaurant/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import { appStore } from "../redux/appStore";
import "@testing-library/jest-dom";
import Header from "../component/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../component/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render Body Component", async function () {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //   const accordionHeader = screen.getByText("Veg Pizza (18)");
  //   console.log(accordionHeader);
  expect(screen.getByText("Veg Pizza (18)")).toBeInTheDocument();

  const itemType = screen.getByText("Dessert (3)");

  fireEvent.click(itemType);
  const menuItem = screen.getAllByTestId("foodItems");

  expect(menuItem.length).toBe(3);

  expect(screen.getByText("Butterscotch Mousse Cake")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Cart - 2"));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  expect(
    screen.getByText("Your cart is empty.. please add something to order")
  ).toBeInTheDocument();
});
