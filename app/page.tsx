import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
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
      <ContactForm />
    </main>
  );
};

export default Home;
