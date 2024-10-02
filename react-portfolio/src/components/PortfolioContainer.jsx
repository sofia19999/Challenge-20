import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe'; 
import Portfolio from './pages/Portfolio';  
import Contact from './pages/Contact';  
import Resume from './pages/Resume';  

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');  

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;  
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Pass the currentPage state and the function to update it to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Render the current page based on the value of currentPage */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}