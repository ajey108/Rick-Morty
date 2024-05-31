import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './textwhite.module.scss';

const Pagination = ({ pageNo, setPageNo, info }) => {
  return (
    <ReactPaginate
      className={`pagination justify-content-center gap-4 my-4 ${styles.textWhite}`}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName={`btn btn-primary ${styles.textWhite}`}
      previousClassName={`btn btn-primary ${styles.textWhite}`}
      pageClassName="page-item"
      pageLinkClassName={`page-link ${styles.textWhite}`}
      activeClassName="active"
      forcePage={pageNo === 1 ? 0 : pageNo - 1}
      onPageChange={(data) => setPageNo(data.selected + 1)}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;

