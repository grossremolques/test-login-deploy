import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { AttributesContextProvider } from "../context/Attributes/AttributesContext";
import { ModalContextProvider } from "../context/components/ModalContext";
export default function Layout() {
  return (
    <ModalContextProvider>
    <AttributesContextProvider>
      <Navigation />
      <Outlet />
    </AttributesContextProvider>
    </ModalContextProvider>
  );
}
