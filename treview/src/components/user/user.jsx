import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = memo(({ authService, imgUploader }) => {
  const navigate = useNavigate();

  const getUserData = (setUData, setTel1, setProfile) => {
    authService.onAuthChange((user) => {
      if (user) {
        authService.get_UserData(user.displayName).then((userData) => {
          setUData({
            uId: user.uId,
            uEmail: userData.uEmail,
            uName: userData.uName,
            uTel: userData.uTel,
          });
          setTel1((userData.uTel || "").split("-")[0]);
          setProfile({
            uProfileID: userData.uProfileID,
            uProfileSIG: userData.uProfileSIG,
            uProfileTIME: userData.uProfileTIME,
            uProfileURL: userData.uProfileURL,
          });
        });
      }
    });
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
