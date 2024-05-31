import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import Filters from './components/Filters/Filters';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';


function App(){
  return(
    <Router>
      <div className="App">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </Router>
  )
}
const Home = () => {
  const [pageNo, setPageNo] = useState(1);
  const [search, setSearch] = useState("");
  let [status,setStatus] = useState("");
  let [gender,setGender] = useState("");
  let [species,setSpecies] = useState("");
  
  const [fetchedData, setFetchedData] = useState("");
  const { info, results } = fetchedData;
  console.log(fetchedData);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNo}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <>
    <div className="container">

    
     
      
      <Search setSearch={setSearch} setPageNo={setPageNo} />
      <div className="container">
        <div className="row">
          
            <Filters setStatus={setStatus} setPageNo={setPageNo} setGender={setGender} setSpecies={setSpecies} />
          
          <div className="col-8">
            <div className="row">
             
                <Cards results={results}  />
           
            </div>
          </div>
        </div>
      </div>
     
      <Pagination pageNo={pageNo} setPageNo={setPageNo} info={info}  />
      </div>
    </>
  );
}

export default App;
