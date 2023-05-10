import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = memo(({ authService, imgUploader }) => {
  const navigate = useNavigate();

  const getUserData = () => {
    let result_data = [];
    authService.onAuthChange((user) => {
      if (!user) navigate("/");
      else {
        authService.get_UserData(user.displayName).then((userData) => {
          result_data.push(userData);
        });
      }
    });

    console.log("result_data = ", result_data);
    return result_data;
  };

  const doLogin = (uEmail, uPwd) => {
    authService
      .login(uEmail, uPwd)
      .then((result) => (result ? navigate("/") : ""));
  };

  const doJoin = (uData, profile) => {
    authService.join(uData).then((result) => {
      if (result) {
        if (profile.uProfileLink !== "") {
          imgUploader.uploadImg(profile).then((imgData) => {
            authService.join_data(uData, imgData);
            authService.update_Img(imgData.uProfileURL);
          });
        } else {
          authService.join_data(uData, "");
        }
      }
      navigate("/");
    });
  };

  const goMain = () => {
    navigate("/");
  };

  return (
    <div>
      <Outlet
        context={{
          getUserData: getUserData,
          goMain: goMain,
          doLogin: doLogin,
          doJoin: doJoin,
        }}
      />
    </div>
  );
});

export default User;
