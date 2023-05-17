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

  const doEdit = (newData, imgData) => {
    const uData = {
      ...newData,
      uId: newData.uId.replace(/[\s@-^$*+?.()|[\]{}]/g, ""),
      uEmail: newData.uId,
    };

    if (imgData.uProfileLink) {
      //cloudinary 사진 삭제 추가 필요
      imgUploader.uploadImg(imgData).then((result) => {
        doUpdate(uData, result);
      });
    } else {
      doUpdate(uData, imgData);
    }
  };

  const doUpdate = (data, img) => {
    authService.update_uData(data, img).then((result) => {
      if (result) window.location.reload();
    });
  };

  const doDelete = (uId) => {
    //cloudinary 사진 삭제 추가 필요
    if (window.confirm("탈퇴하시겠습니까?")) {
      if (uId) {
        authService.remove_uData(uId).then((result) => {
          result &&
            authService.withdraw_user().then((result) => {
              result && navigate("/");
            });
        });
      } else {
        alert(
          "죄송합니다! 오류가 발생했습니다! 재로그인 후 다시 시도해주세요!"
        );
      }
    }
  };

  const goMain = () => {
    navigate("/");
  };

  return (
    <div>
      <Outlet
        context={{
          authService: authService,
          getUserData: getUserData,
          goMain: goMain,
          doLogin: doLogin,
          doJoin: doJoin,
          doEdit: doEdit,
          doDelete: doDelete,
        }}
      />
    </div>
  );
});

export default User;
