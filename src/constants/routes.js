import { Book, ChartBarIcon } from "lucide-react";

export const routes = [
  {
    routeId: 1,
    title: "Dashboard",
    url: "/",
    icon: ChartBarIcon,
  },
  {
    routeId: 2,
    title: "Books",
    icon: Book,
    url: "/books",
  },
];
