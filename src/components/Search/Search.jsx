import React from 'react'
import styles from "./Search.module.scss";

const Search = ({setSearch,setPageNo}) => {
  return (
    <>
    <form className="d-flex justify-content-center gap-4 mb-5">

<input onChange={e=>{
  setPageNo(1);
  setSearch(e.target.value);
}} type='text' placeholder='search character' className={styles.input}/>
<button onClick={e=>{e.preventDefault()}} className='btn btn-primary fs-5'>Search</button>



    </form>
    
    </>
  )
}

export default Search