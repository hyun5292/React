import React, { useEffect, useState } from "react";
import styles from "./loading.module.css";

const Loading = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={isLoading ? styles.loading : styles.notLoading}>
      <span></span>
    </div>
  );
};
export default Loading;
