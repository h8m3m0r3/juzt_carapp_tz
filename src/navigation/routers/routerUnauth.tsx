import { createBrowserRouter } from "react-router-dom";
import { MainPage, CarDetailPage, AuthPage } from "/@/pages";
import { NotFoundComponent } from "../NotFoundComponent";

const routerUnauth = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundComponent />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/details/:id",
    element: <CarDetailPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export {routerUnauth}