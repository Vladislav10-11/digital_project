import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tasks from "@/components/Tasks";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Tasks />
      <Projects />
    </main>
  );
};

export default Home;
