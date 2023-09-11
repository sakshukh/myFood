import React, { Lazy, Suspense, lazy } from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./component/restaurant/RestaurantMenu";
// import About from "./component/About";
import Body from "./component/Body";
import Contact from "./component/contact";
import Cart from "./component/Cart";
// import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery"));

const About = lazy(() => import("./component/About"));

const root = ReactDom.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "h1",
//   {
//     style: {
//       color: "red",
//     },
//   },
//   "Heading"
// );

// root.render(<App />);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant-details/:resId",
        element: <RestaurantMenu />,
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
