import { render, screen } from "@testing-library/react";
import Contact from "../component/contact";
import "@testing-library/jest-dom";

describe("contact component test cases", function () {
  // describe is used to group multiple test cases
  // we can have a describe inside a describe function .. nesting is possible

  // beforeAll(() => {
  //   console.log("BeforeAll");
  // });

  // beforeEach(() => {
  //   console.log("BeforeEach");
  // });

  // afterEach(() => {
  //   console.log("AfterEach");
  // });

  // afterAll(() => {
  //   console.log("AfterAll");
  // });

  // can write "it" instead of "test" it just an alliase of test
  it("should load contact us component", function () {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button from contact component", function () {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input through its placeholder from contact component", function () {
    render(<Contact />);

    const inputPlaceholder = screen.getByPlaceholderText("Your Name");

    // const input = screen.getByRole("textbox", { name: "Your Name" });
    expect(inputPlaceholder).toBeInTheDocument();
  });

  test("should return all the input boxes from contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes); // will log a array of 2 input boxes
    //console.log(inputBoxes[0]); // will log React element/virtual dom element in form of object

    expect(inputBoxes).toHaveLength(2);
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes[0]).not.toBe(4);
  });
});
