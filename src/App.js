import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
// import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "ContactForm") {
      return <ContactForm />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
