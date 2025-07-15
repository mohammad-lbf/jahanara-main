import React from 'react';
import toPersianNumber from '@/assets/functions/ToPersianNumber';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  scrollTo = 450,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePageClick = (page) => {
    onPageChange(page);
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center flex-column align-items-center">
        <div
          className="text-center bg-white p-3 rounded border mb-3"
          style={{ width: 'fit-content' }}
        >
          حداکثر تعداد نمایش در هر صفحه: {toPersianNumber(itemsPerPage)}
          <nav aria-label="" className="mt-2">
            <ul className="pagination justify-content-center" style={{flexWrap:"wrap"}}>
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageClick(currentPage - 1);
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? 'active' : ''
                  }`}
                >
                  <a
                    className="page-link mb-1"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(i + 1);
                    }}
                  >
                    {toPersianNumber(i + 1)}
                  </a>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? 'disabled' : ''
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      handlePageClick(currentPage + 1);
                  }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
