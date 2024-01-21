import React, { lazy, Suspense, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Groceries = lazy(() => import("./components/Groceries"));

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);

  //Authentication
  useEffect(() => {
    //make an api call and get userName
    const data = {
      name: "Praveen",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading Groceries</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRoutes} />);
