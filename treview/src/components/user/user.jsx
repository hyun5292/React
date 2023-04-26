import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = memo(({ authService }) => {
  const navigate = useNavigate();

  const doLogin = (uEmail, uPwd) => {
    authService
      .login(uEmail, uPwd)
      .then((result) => (result ? navigate("/") : ""));
  };

  const goMain = () => {
    navigate("/");
  };
  return (
    <div>
      <Outlet context={{ goMain: goMain, doLogin: doLogin }} />
    </div>
  );
});

export default User;
