import { type IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Counties",
    link: "#",
    sm_mega_menus: [
      { id: 1, title: "Mandera", link: "/counties/mandera" },
      { id: 2, title: "Busia", link: "/counties/busia" },
    ],
  },
  {
    id: 4,
    title: "News & Press",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "Visits", link: "/visits" },
      { id: 2, title: "Recruitment", link: "/recruitment" },
      { id: 3, title: "Governors Visit", link: "/governors-visits" },
    ],
  },
  {
    id: 2,
    title: "Partners",
    link: "/partners",
  },
];
export default menu_data;
