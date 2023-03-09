import React, { useEffect, useRef, useState } from "react";
import Select from "../select/select";
import EmailList from "../../dataFile/emailList.json";
import styles from "./selectEmail.module.css";
import { BsArrowRightShort, BsArrowCounterclockwise } from "react-icons/bs";

const SelectEmail = ({ setEKind }) => {
  const kindRef = useRef();
  const [emailKind, setEmailKind] = useState("");
  const [emailChk, setEmailChk] = useState(false);

  const setWriteKind = () => {
    const eKind = kindRef.current.value;
    setEKind(eKind);
    setEmailChk(true);
    alert("입력되었습니다!");
  };

  useEffect(() => {
    if (emailKind !== "직접입력") {
      setEKind(emailKind);
    }
  }, [emailKind, setEKind]);

  return (
    <div className={styles.selectEmail}>
      {emailKind === "직접입력" ? (
        <div className={styles.emailKindCont}>
          <input ref={kindRef} className={styles.emailKindInput} type="text" />
          <button
            className={emailChk ? styles.emailKindChked : styles.emailKindBtn}
            onClick={setWriteKind}
          >
            {emailChk ? <BsArrowCounterclockwise /> : <BsArrowRightShort />}
          </button>
        </div>
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
