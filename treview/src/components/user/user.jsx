import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = memo(({ authService, imgUploader }) => {
  const navigate = useNavigate();

  const getUserData = () => {
    let result = [];
    authService.onAuthChange((user) => {
      authService.get_UserData(user.displayName).then((userData) => {
        result.push(userData.toJSON());
      });
    });
    return result;
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
