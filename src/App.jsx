import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import { useEffect, useState, useContext } from "react";
//import appStore from "./redux/appStore";

// scss imports
import "./App.scss";
import { appStore } from "./redux/appStore";
// import "./styles/style.scss";
// import "./styles/mediaQuery.scss";

const App = () => {
  const { loggedInUser } = useContext(UserContext);

  const [userName, setUserName] = useState();

  useEffect(() => {
    // fetching User Information using username and password

    const data = {
      name: "Sakshi Khandelwal",
    };

    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          {" "}
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
