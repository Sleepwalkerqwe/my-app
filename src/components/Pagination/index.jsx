import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  return <ReactPaginate className={styles.root} breakLabel="..." nextLabel=">" previousLabel="<" onPageChange={(event) => onChangePage(event.selected + 1)} I pageRangeDisplayed={5} pageCount={4} renderOnZeroPageCount={null} />;
};
export default Pagination;
