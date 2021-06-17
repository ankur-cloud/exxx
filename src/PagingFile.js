import TablePagination from '@material-ui/core/TablePagination';

import Pagination from '@material-ui/lab/Pagination';

import React from 'react'

const PagingFile = ({ setPages, numofPages }) => {


  const pageHandle = (pages) => {
    setPages(pages);
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ width: '100%', justifyContent: 'center', marginTop: 100, display: 'flex' }}>

      <Pagination count={numofPages} onChange={(event) => pageHandle(event.target.textContent)} color='secondary' />



    </div>

  )
}

export default PagingFile;
