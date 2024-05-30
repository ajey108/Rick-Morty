import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import Filters from './components/Filters/Filters';

const App = () => {
  const [pageNo, setPageNo] = useState(1);
  const [search, setSearch] = useState("");
  let [status,setStatus] = useState("");
  let [gender,setGender] = useState("female");
  
  const [fetchedData, setFetchedData] = useState("");
  const { info, results } = fetchedData;
  console.log(fetchedData);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNo}&name=${search}&status=${status}&gender=${gender}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <>
      <h1 className='text-center ubuntu my-4'>Rick & Morty <span className="text-primary">Wiki</span></h1>
     
      <Search setSearch={setSearch} setPageNo={setPageNo} />
      <div className="container">
        <div className="row">
          
            <Filters setStatus={setStatus} setPageNo={setPageNo} setGender={setGender} />
          
          <div className="col-8">
            <div className="row">
             
                <Cards results={results}  />
           
            </div>
          </div>
        </div>
      </div>
     
      <Pagination pageNo={pageNo} setPageNo={setPageNo} info={info}  />
    </>
  );
}

export default App;
