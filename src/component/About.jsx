import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
      <div>
        About us Page
        <h1 className="text-xl font-bold">{loggedInUser}</h1>
      </div>
    </UserContext.Provider>
  );
};

export default About;

// When we click on add button it dispactes a action which calls a reducer function that updates the slice (cart store) of the
// redux store

// we use a selector (subscribing the store) which reads the data from cart slice and give it to the cart items
// subscribing means whenever the data changes in cart slice it will automatically updates at the cart
