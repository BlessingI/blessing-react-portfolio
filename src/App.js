import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
// import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

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
      <main>
      {renderPage()}
      <Footer />
      </main>
    </div>
  );
}

export default App;
