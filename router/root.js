import { Children, lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";
const { createBrowserRouter } = require("react-router-dom");
const Main = lazy(() => import("../pages/MainPage"));
const User = lazy(() => import("../pages/UserPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Join = lazy(() => import("../pages/JoinPage"));

//Suspense 중지 , Main Component 가져오기 전에는  Loading 을 띄운다
const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "user",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <User />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <Login />
      </Suspense>
    ),
    // children: shopRouter,
  },
  {
    path: "join",
    element: (
      <Suspense fallback={<ClipLoader />}>
        <Join />
      </Suspense>
    ),
    // children: shopRouter,
  },
]);

export default root;
