import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNum.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNum.map(num => (
          <li key={num} className='page-item'>
            <a onClick={() => paginate(num)} href='!#' className='page-link'>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
