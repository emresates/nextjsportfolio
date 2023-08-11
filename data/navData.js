import { AiOutlineHome } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export const navData = [
  {
    name: "home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "about",
    path: "/about",
    icon: <BsFillFilePersonFill />,
  },
  {
    name: "projects",
    path: "/projects",
    icon: <PiProjectorScreenChartBold />,
  },
  {
    name: "skills",
    path: "/skills",
    icon: <MdComputer />,
  },

  {
    name: "contact",
    path: "/contact",
    icon: <MdOutlineContactPhone />,
  },
];
