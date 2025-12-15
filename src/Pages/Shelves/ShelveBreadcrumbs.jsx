import { Link } from 'react-router-dom';

function ShelveBreadcrumbs({ shelfId, bookId, pageId, currentBook, currentPage, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-[8px] text-accent-primary text-[16px] ${className}`}>
      <Link
        to="/shelves"
        className="flex items-center gap-[8px] group transition-color duration-300 hover:text-[#40A6EE]"
      >
        <svg className="w-[16px] h-[16px]  stroke-accent-primary group-hover:group-hover:stroke-[#40A6EE] transition-fill duration-300">
          <use href="/img/sprite.svg#darkRP"></use>
        </svg>
        Shelves
      </Link>
      {shelfId && (
        <>
          <svg className="w-[16px] h-[16px] fill-[#9595954d]">
            <use href="/img/sprite.svg#arrow"></use>
          </svg>
          <Link
            to={`/shelves/${shelfId}`}
            className="flex items-center gap-[8px] group transition-color duration-300 hover:text-[#40A6EE]"
          >
            <svg className="w-[16px] h-[16px]  stroke-accent-primary group-hover:stroke-[#40A6EE] transition-fill duration-300">
              <use href="/img/sprite.svg#darkRP"></use>
            </svg>
            {shelfId}
          </Link>
        </>
      )}

      {bookId && (
        <>
          <svg className="w-[16px] h-[16px] fill-[#9595954d]">
            <use href="/img/sprite.svg#arrow"></use>
          </svg>
          <Link to={`/shelves/${shelfId}/${bookId}`} className="flex items-center gap-[8px] text-[#40A6EE]">
            <svg className="w-[16px] h-[16px] fill-[#40A6EE]">
              <use href="/img/sprite.svg#flag"></use>
            </svg>
            {currentBook?.title || bookId}
          </Link>
        </>
      )}

      {pageId && currentPage && (
        <>
          <svg className="w-[16px] h-[16px] fill-[#9595954d]">
            <use href="/img/sprite.svg#arrow"></use>
          </svg>
          <span className="flex items-center gap-[8px] group transition-color duration-300 text-[#40A6EE] fill-[#40A6EE]">
            <svg className="w-[16px] h-[16px] transition-fill duration-300 group-hover:fill-[#40A6EE]">
              <use href="/img/sprite.svg#flag"></use>
            </svg>
            {currentPage.title}
          </span>
        </>
      )}
    </div>
  );
}

export default ShelveBreadcrumbs;
