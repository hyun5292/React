import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import styles from "./table.module.css";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import SearchNm from "./searchNm/searchNm";
import BsnState from "./bsnState/bsnState";

const Table = (props) => {
  const columns = useMemo(
    () => [
      {
        accessor: "SIGUN_NM",
        Header: "시군명",
      },
      {
        accessor: "BIZPLC_NM",
        Header: "사업장명",
        Cell: ({ cell: { value } }) => <SearchNm value={value} />,
      },
      {
        accessor: "REFINE_ROADNM_ADDR",
        Header: "도로명주소",
      },
      {
        accessor: "REFINE_ZIP_CD",
        Header: "우편번호",
      },
      {
        accessor: "BSN_STATE_NM",
        Header: "영업상태",
        Cell: ({ cell: { value } }) => <BsnState value={value} />,
      },
      {
        accessor: "REVIEW_NUM",
        Header: "리뷰",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "폐업 등",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
      },
      {
        SIGUN_NM: "가평군",
        BIZPLC_NM: "(주)태영지엘에스",
        REFINE_ROADNM_ADDR: "경기도 가평군 하면 조종희망로 5, 3층 (태영빌딩)",
        REFINE_ZIP_CD: "12437",
        BSN_STATE_NM: "운영중",
        REVIEW_NUM: 70,
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
    usePagination
  );

  return (
    <div className={styles.tCont}>
      <table border="1" {...getTableProps()} className={styles.table}>
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
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
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
                <tr className={styles.tRow} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className={styles.tColumn} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className={styles.bottomBar}>
        <button
          className={canPreviousPage ? styles.preBtn : styles.disabledBtn}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <VscTriangleLeft />
        </button>
        <div className={styles.stateBar}>
          Page{" "}
          <em>
            {pageIndex + 1} of {pageOptions.length}
          </em>
        </div>
        <button
          className={canNextPage ? styles.nextBtn : styles.disabledBtn}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <VscTriangleRight />
        </button>
      </div>
    </div>
  );
};

export default Table;
