import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const Paging = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={10} // 한페이지당 보여줄 아이템 갯수
      totalItemsCount={450} // 총 아이템 갯수
      pageRangeDisplayed={3} // paginator의 페이지 범위
      prevPageText={"<"} // "이전"을 나타낼 텍스트
      nextPageText={">"} // "다음"을 나타낼 텍스트
      onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
    />
  );
};

export default Paging;
