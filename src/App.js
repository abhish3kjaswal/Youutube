import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body/Body";
import Head from "./Components/Header/Head";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/Body/MainContainer/MainContainer";
import WatchPage from "./Components/WatchComponent/WatchPage";
import ResultsPage from "./Components/WatchComponent/ResultsPage";

{
  /*
Header
Body
SideBar
  MenuItems
MainContainer
  ButtonList
  VideoContainer
    VideoCard
*/
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <ResultsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
