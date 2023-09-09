import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './component/SideBar';
import NavBar from './component/NavBar';
import SearchContent from './component/SearchContent';
import CustomerData from './component/CustomerData';



const App = (props) => {
  return (
    <div className='d-flex'>
      <div className='w-auto'>
        <SideBar />
        </div>
      <div className='col'>
       <NavBar />
       <SearchContent />
       <CustomerData />
      </div>
      
    </div>
    

  );
};

export default App;