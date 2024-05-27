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
    <h1 className='text-center'>RickMorty</h1>
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-4"></div>
      </div>
    </div>
    <Search/>
    <Filters/>
    <Cards/>
    <Pagination/>
    </>
  )
}

export default App