import { NavLink, Route, Routes } from "react-router-dom";
import Properties from "../components/propertiesBase/Properties";
import Expenses from "../components/Expenses";
import TasksApp from "../components/tasks/TasksApp";
import MortgageCalculator from "../components/MortgageCalculator";
import HomeContent from "./HomeContent";
import MyAccount from "./MyAccount";
import Help from "./Help";
import ErrorPage from "./ErrorPage";
import Calculator from "../components/Calculator";
import NewApp from "./TestH";
import PropertiesApp from "../components/propertiesBase/PropertiesApp";
import AddProperty from "../components/propertiesBase/AddProperty";

const Content = () => {
  return (
    <Routes>
      <Route path="/properties" element={<AddProperty />} />{" "}
      <Route path="/expenses" element={<Expenses />} />{" "}
      <Route path="/tasks" element={<TasksApp />} />{" "}
      <Route path="/mortgagecalculator" element={<MortgageCalculator />} />{" "}
      <Route path="/calculator" element={<Calculator />} /> {/* Top menu */}{" "}
      <Route path="/" exact element={<HomeContent />} />{" "}
      <Route path="/myaccount" element={<MyAccount />} />{" "}
      <Route path="/help" element={<Help />} />{" "}
      <Route path="/contact" element={<NewApp />} />{" "}
      <Route path="*" element={<ErrorPage />} />{" "}
    </Routes>
  );
};

export default Content;
