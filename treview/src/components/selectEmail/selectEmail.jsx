import React, { useEffect, useState } from "react";
import Select from "../select/select";
import EmailList from "../../service/emailList.json";
import styles from "./selectEmail.module.css";
import { BiRightArrowAlt } from "react-icons/bi";

const SelectEmail = ({ setEKind }) => {
  const [emailKind, setEmailKind] = useState("");

  const setWriteKind = (event) => {
    // setEmailKind(event.target.value);
  };

  useEffect(() => {
    setEKind(emailKind);
  }, [emailKind, setEKind]);

  return (
    <div className={styles.selectEmail}>
      {emailKind === "직접입력" ? (
        <>
          <input className={styles.emailKindInput} type="text" />
        </>
      ) : (
        ""
      )}
      <Select
        kindText="이메일"
        ulList={EmailList.emailList}
        setClicked={setEmailKind}
      />
    </div>
  );
};

export default SelectEmail;
