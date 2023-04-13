import React, { memo, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import styles from "./factoryTable.module.css";
import tStyle from "../../css/table.module.css";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import BsnState from "./bsnState/bsnState";
import { useNavigate } from "react-router-dom";

const Table = memo(({ data }) => {
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        accessor: "SIGUN_NM",
        Header: "시군명",
        width: "10%",
      },
      {
        accessor: "BIZPLC_NM",
        Header: "사업장명",
        width: "20%",
      },
      {
        accessor: "REFINE_ROADNM_ADDR",
        Header: "도로명주소",
        width: "40%",
      },
      {
        accessor: "REFINE_ZIP_CD",
        Header: "우편번호",
        width: "12%",
      },
      {
        accessor: "BSN_STATE_NM",
        Header: "영업상태",
        width: "12%",
        Cell: ({ cell: { value } }) => <BsnState value={value} />,
      },
      {
        accessor: "REVIEW_NUM",
        Header: "리뷰",
        width: "6%",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  const toReviewList = (fData) => {
    navigate(`/review`, {
      state: { fData: fData },
    });
  };

  return (
    <div className={styles.tCont}>
      <div className={styles.sortTxt}>
        (정렬하려면 표의 각 제목을 클릭해주세요. 초기 화면은 100개의
        공장리스트만 보여드립니다)
      </div>
      <table {...getTableProps()} className={styles.table}>
        <thead className={styles.tHead}>
          {headerGroups &&
            headerGroups.map((headerGroup) => (
              <tr
                className={styles.tRow}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup &&
                  headerGroup.headers.map((column) => (
                    <th
                      className={styles.tHColumn}
                      {...column.getHeaderProps(
                        column.getSortByToggleProps({
                          style: { width: column.width },
                        })
                      )}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <AiFillCaretDown
                              style={{
                                marginLeft: "5px",
                              }}
                            />
                          ) : (
                            <AiFillCaretUp
                              style={{
                                marginLeft: "5px",
                              }}
                            />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        <tbody className={styles.tBody} {...getTableBodyProps()}>
          {page &&
            page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className={styles.tRow}
                  {...row.getRowProps()}
                  onClick={() => toReviewList(row.original)}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className={tStyle.menuBar}>
        <button
          className={canPreviousPage ? tStyle.preBtn : tStyle.disabledBtn}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <VscTriangleLeft />
        </button>
        <div className={tStyle.stateBar}>
          Page{" "}
          <em>
            {pageIndex + 1} of {pageOptions.length}
          </em>
        </div>
        <button
          className={canNextPage ? tStyle.nextBtn : tStyle.disabledBtn}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <VscTriangleRight />
        </button>
      </div>
    </div>
  );
});

export default Table;
