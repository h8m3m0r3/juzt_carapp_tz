import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainPage, CarDetailPage, CabinetPage } from "/@/pages";
import { NotFoundComponent } from "../NotFoundComponent";

const routerAuth = createBrowserRouter([
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
    path: "/cabinet",
    element: <CabinetPage />,
  },
]);
export { routerAuth };
