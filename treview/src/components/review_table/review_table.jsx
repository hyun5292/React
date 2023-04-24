import React, { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy, usePagination } from "react-table";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styles from "./review_table.module.css";
import tStyle from "../../css/table.module.css";

const writeDate = (rDate) => {
  const yearDate = rDate.split(" ")[0];
  const results = yearDate.split("-");

  return (
    <div>
      {results[0]}년 {results[1]}월 {results[2]}일
    </div>
  );
};

const ReviewTable = memo(({ fInfo, data }) => {
  const navigate = useNavigate();
  const defaultImg =
    "https://res.cloudinary.com/sudol5292/image/upload/v1680022296/truck_okhdd4.png";
  const columns = useMemo(
    () => [
      {
        accessor: "R_IMG",
        width: "5%",
        Cell: ({ cell: profile }) => (
          <img
            className={styles.profile}
            alt="프로필"
            src={profile.value ? profile.value : defaultImg}
            width="45px"
            height="auto"
          ></img>
        ),
      },
      {
        accessor: "U_ID",
        Header: "작성자",
        width: "25%",
      },
      {
        accessor: "R_TITLE",
        Header: "제목",
        width: "48%",
        Cell: ({ cell: value }) => <div>{value.value}&nbsp;...</div>,
      },
      {
        accessor: "R_DATE",
        Header: "작성날짜",
        width: "22%",
        Cell: ({ cell: value }) => writeDate(value.value),
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

  const toModifyReview = (fData) => {
    navigate(`/modifyReview`, {
      state: { modifyFData: { ...fData, ...fInfo } },
    });
  };

  return (
    <div className={styles.reviewCont}>
      <div className={styles.topMenu}>
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
                <tr
                  className={styles.tRow}
                  {...row.getRowProps()}
                  onClick={() => toModifyReview(row.original)}
                >
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
});

export default ReviewTable;
