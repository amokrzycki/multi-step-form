import { createHashRouter } from "react-router-dom";
import Fallback from "../components/Fallback/Fallback.tsx";
import View from "../components/View/View.tsx";
import PersonalInfo from "../components/Info/PersonalInfo/PersonalInfo.tsx";
import Pricing from "../components/Plan/Pricing/Pricing.tsx";
import Summary from "../components/Summary/Summary.tsx";
import Addons from "../components/AddonsSelection/Addons/Addons.tsx";
import Confirmation from "../components/Confirmation/Confirmation.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <View />,
    errorElement: <Fallback />,
    children: [
      {
        path: "step1",
        element: <PersonalInfo />,
      },
      {
        path: "step2",
        element: <Pricing />,
      },
      {
        path: "step3",
        element: <Addons />,
      },
      {
        path: "step4",
        element: <Summary />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
      {
        path: "*",
        element: <PersonalInfo />,
      },
    ],
  },
]);

export default router;
