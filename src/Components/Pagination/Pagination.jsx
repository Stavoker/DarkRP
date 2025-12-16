import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

function Pagination({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    if (onPageChange) {
      onPageChange(selectedPage);
    }
  };

  useEffect(() => {
    const updatePreviousPage = () => {
      const activePage = document.querySelector('.react-paginate-active');
      if (activePage) {
        document.querySelectorAll('.react-paginate-page').forEach((page) => {
          page.classList.remove('previous-page');
        });
        const previousPage = activePage.previousElementSibling;
        if (previousPage && previousPage.classList.contains('react-paginate-page')) {
          previousPage.classList.add('previous-page');
        }
      }
    };

    updatePreviousPage();
    const timeoutId = setTimeout(updatePreviousPage, 0);

    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  return (
    <div className={`flex items-center xl:justify-between justify-center xl:mb-[80px] mb-[45px]`}>
      {/* Left side - Results info */}

      {totalItems > 0 && (
        <p className="text-text-primary hidden xl:block">
          Showing {startItem} to {endItem} of {totalItems} results
        </p>
      )}

      {/* Right side - Pagination */}
      {totalPages > 10 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <svg className="w-4 h-4 fill-primary stroke-primary">
              <use href="/img/sprite.svg#arrow" />
            </svg>
          }
          previousLabel={
            <svg className="w-4 h-4 fill-primary stroke-primary rotate-180">
              <use href="/img/sprite.svg#arrow" />
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={window.innerWidth > 1200 ? 10 : 5}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          forcePage={currentPage - 1}
          renderOnZeroPageCount={null}
          className="react-paginate"
          pageClassName="react-paginate-page"
          pageLinkClassName="react-paginate-page-link"
          activeClassName="react-paginate-active"
          previousClassName="react-paginate-previous"
          previousLinkClassName="react-paginate-previous-link"
          nextClassName="react-paginate-next"
          nextLinkClassName="react-paginate-next-link"
          breakClassName="react-paginate-break"
          breakLinkClassName="react-paginate-break-link"
          disabledClassName="react-paginate-disabled"
        />
      )}
    </div>
  );
}

export default Pagination;
