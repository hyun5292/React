import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styles from "./reviewTable.module.css";
import tStyle from "../../css/table.module.css";
import RevSearchBar from "../revSearchBar/revSearchBar";

const ReviewTable = (props) => {
  const columns = useMemo(
    () => [
      {
        accessor: "R_IMAGE",
        Header: "",
        width: "5%",
        Cell: ({ cell: value }) => <tableUserImg values={value} />,
      },
      {
        accessor: "R_ID",
        Header: "작성자",
        width: "20%",
      },
      {
        accessor: "R_CONT",
        Header: "내용",
        width: "60%",
      },
      {
        accessor: "R_DATE",
        Header: "작성날짜",
        width: "15%",
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob3",
        R_CONT:
          "가는 길이 조금 좁아요가는 길이 조금 좁아요가는 길이 조금 좁아요가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-22",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob4",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-23",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob7",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2023-01-01",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob23",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2022-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob34",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2021-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob5",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2021-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob4",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2022-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob3",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-21",
      },
      {
        R_IMAGE: "img",
        R_ID: "tytyjacob",
        R_CONT: "가는 길이 조금 좁아요",
        R_BIZPLC_NM: "(주)태영지엘에스",
        R_DATE: "2020-12-21",
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

  return (
    <div className={styles.reviewCont}>
      <div className={styles.topMenu}>
        <div className={styles.revSearch}>
          <RevSearchBar />
        </div>
        <div className={`${tStyle.menuBar} ${styles.pageBar}`}>
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
        <span className={styles.sortTxt}>(정렬하려면 제목을 클릭해주세요)</span>
      </div>
      <table {...getTableProps()} className={styles.rTable}>
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
