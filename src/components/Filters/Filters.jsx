import React from 'react'
import Gender from '../../../Categories/Gender'
import Species from '../../../Categories/Species'
import Status from '../../../Categories/Status'
import FilterBtn from './FilterBtn'

const Filters = ({setStatus,setPageNo,setGender,setSpecies}) => {

  let clear =()=>{
    setStatus("")
    setPageNo("")
    setGender("")
    setSpecies("")
    window.location.reload(false);
  }
  return (
    <div className="col-3">
      <div className="text-center fs-bold fs-4 mb-4">Filter</div>
      <div 
      
      onClick={clear}
      style={{cursor:"pointer"}}
      
      className="text-center text-primary  text-decoration-underline">Clearfilters</div>

<div className="accordion" id="accordionExample">

  <FilterBtn/>


<Status setPageNo={setPageNo} setStatus={setStatus}/>
<Species setSpecies={setSpecies} setPageNo={setPageNo}/>
<Gender setGender={setGender} setPageNo={setPageNo}/>

 
</div>




    </div>
  )
}

export default Filters