import React from 'react'; 
import DostiBanner from './DostiBanner';
import DostiCategories from './DostiCategories';
import DostiMartNavBar from './DostiMartNavBar';

function Home() {
  return (
    <div>
        <DostiMartNavBar />
        <DostiBanner />
        <DostiCategories /> 
    </div>
  );
}

export default Home;
