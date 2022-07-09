import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "About",
      description: "About Me",
    },
    { name: "Portfolio", description: "lo Portfolio" },
    { name: "Contact", description: "da Contact" },
    {
      name: "Resume",
      description: "the Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <ContactForm></ContactForm>
      <Gallery currentCategory={currentCategory}></Gallery>
      <About></About>
    </div>
  );
}

export default App;
