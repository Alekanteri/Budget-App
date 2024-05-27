import { FC } from "react";
import "./scss/index.scss";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

export const App: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <Body />
    </div>
  );
};
