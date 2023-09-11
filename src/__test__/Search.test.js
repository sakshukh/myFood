import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../component/Body";
import { Provider } from "react-redux";
import { appStore } from "../redux/appStore";
import MOCK_DATA from "../mocks/allResDataMock.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: function () {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Aubree" } });

  fireEvent.click(searchBtn);

  //console.log(MOCK_DATA);
  const resCard = screen.getAllByTestId("resCard");

  //console.log(resCard);

  expect(resCard.length).toBe(1);

  //expect(resCard[0]).toBeInTheDocument();
});
