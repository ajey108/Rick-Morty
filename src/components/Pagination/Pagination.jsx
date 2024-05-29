import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNo,setPageNo,info}) => {

  

  return (
   <ReactPaginate  className="pagination justify-content-center gap-4 my-4" 
   nextLabel = "Next"
   previousLabel = "Prev"
   nextclassNameName='btn btn-primary'
   previousclassNameName='btn btn-primary'
   pageclassNameName='page-item'
   pageLinkclassNameName='page-link'
   activeclassNameName='active'
   forcePage={pageNo ===1 ? 0 : pageNo -1}
   onPageChange={(data)=>{setPageNo(data.selected + 1)}}
   pageCount={info?.pages}/>
  )
}

export default Pagination