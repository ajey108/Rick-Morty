import React from 'react'
import Gender from '../../../Categories/Gender'
import Species from '../../../Categories/Species'
import Status from '../../../Categories/Status'
import FilterBtn from './FilterBtn'

const Filters = ({setStatus,setPageNo}) => {
  return (
    <div className="col-3">
      <div className="text-center fs-bold fs-4 mb-4">Filter</div>
      <div style={{cursor:"pointer"}}
      
      className="text-center text-primary  text-decoration-underline">Clearfilters</div>

<div className="accordion" id="accordionExample">

  <FilterBtn/>


<Status setPageNo={setPageNo} setStatus={setStatus}/>
<Species/>
<Gender/>

 
</div>




    </div>
  )
}

export default Filters