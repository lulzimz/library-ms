import { Route, Routes } from "react-router-dom";
import { Loading, NotFound, RootLayout } from "./customComponents";
import { ProtectedRoute, PublicRoute } from "./wrappers";
import { routes } from "./constants/routes";
import { Login, Register } from "./pages";
import { componentsList } from "./constants/componentsList";
import useCurrentUser from "./store/currentUserStore";

const AppRoutes = () => {
  const { loadingUser } = useCurrentUser();

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/login" element={<PublicRoute component={<Login />} />} />
      <Route
        path="/register"
        element={<PublicRoute component={<Register />} />}
      />

      <Route element={<ProtectedRoute />}>
        <Route element={<RootLayout menuItems={routes} />}>
          {routes.map(({ title, url }) => {
            const Component = componentsList?.[title] || NotFound;

            return (
              <Route exact key={title} path={url} element={<Component />} />
            );
          })}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
