import { routes } from "@/constants/routes";
import { useLocation } from "react-router-dom";

export const usePathname = () => {
  const { pathname = "", state } = useLocation();

  const { recordId, recordName } = state || {};

  const route = routes.find(({ url }) => url === pathname);

  return { ...route, recordId, recordName };
};
