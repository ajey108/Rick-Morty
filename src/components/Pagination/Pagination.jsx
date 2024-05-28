import React from 'react'

const Pagination = ({pageNo,setPageNo}) => {

  const next=()=>{
    setPageNo((x)=>x+1);
  }

  const prev=()=>{
    if(pageNo === 1) return;
    setPageNo((x)=> x-1);
  }


  return (
    <div className="container d-flex justify-content-center my-4 gap-4">
    <button  onClick={prev} className="btn btn-primary">Prev</button>
    <button  onClick={next}  className="btn btn-primary">Next</button>
    </div>
  )
}

export default Pagination