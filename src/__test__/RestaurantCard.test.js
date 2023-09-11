import { render, screen } from "@testing-library/react";
import RestaurentCard, {
  withIsOpenLabelRestaurant,
} from "../component/restaurant/RestaurantCard";
import RES_MOCK_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../redux/appStore";
import "@testing-library/jest-dom";

async function handleCardClick() {
  const data = await axios.get(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=25.2138156&lng=75.8647527&restaurantId=23847`
  );
}

it("should render RestaurantCard component with prop data", function () {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurentCard res={RES_MOCK_DATA} handleCardClick={handleCardClick} />
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with open label", function () {
  const RestaurantOpen = withIsOpenLabelRestaurant(RestaurentCard);
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantOpen res={RES_MOCK_DATA} handleCardClick={handleCardClick} />
      </Provider>
    </BrowserRouter>
  );

  const openLabel = screen.getByText("Open");

  expect(openLabel).toBeInTheDocument();
});
