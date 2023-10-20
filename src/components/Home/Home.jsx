import { Portfolios } from "../Portfolios/Portfolios";
import { About } from "./About/About";
import { Hero } from "./Hero/Hero";
import { Invest } from "./Invest/Invest";
import { Roxerin } from "./Roxerin/Roxerin";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Invest />
      <Roxerin />
      <Portfolios />
    </>
  );
};
