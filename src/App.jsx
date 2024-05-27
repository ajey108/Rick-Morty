import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import Filters from './components/Filters/Filters';

const App = () => {
  return (
    <>
    <h1 className='text-center ubuntu my-4'>Rick&Morty  <span className="text-primary">Wiki</span></h1>
    <div className="container">

      <div className="row">

        <div className="col-3">
        <Filters/>
        </div>

        <div className="col-8">
          <div className="raw">
           
          </div>
       
        </div>

      </div>




    </div>
    <Search/>
    
   
    <Pagination/>
    </>
  )
}

export default App