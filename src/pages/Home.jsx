import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Notices } from "../components/Notices";
import { Results } from "../components/Results";
import { Services } from "../components/Services";
import { Team } from "../components/Team";

export const Home = () => {
  return (
    <>
      <div
        className="flex flex-col w-full"
        style={{ minHeight: "calc(100vh + 1px)" }}
      >
        <Header interno={false} />

        <Hero />
      </div>

      <Services />

      <Results />

      <Team />

      <Notices />

      <Footer color="bg-white" />
    </>
  );
};
