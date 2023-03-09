import sigunList from "../dataFile/sigun_nm_list.json";

class FactoryList {
  constructor(httpClient) {
    this.fList = httpClient;
  }

  async getAllList() {
    try {
      const response = await this.fList.get("", {
        params: {
          pSize: 100,
        },
      });

      const result = response.data.GeneralCourierService[1].row;
      const factoryList = [];
      result.map((list) => {
        factoryList.push({
          F_ID: list.BIZPLC_NM + "-" + list.REFINE_ROADNM_ADDR,
          SIGUN_NM: list.SIGUN_NM,
          BIZPLC_NM: list.BIZPLC_NM,
          REFINE_ROADNM_ADDR: list.REFINE_ROADNM_ADDR,
          REFINE_ZIP_CD: list.REFINE_ZIP_CD,
          BSN_STATE_NM: list.BSN_STATE_NM,
          REVIEW_NUM: 0,
        });
      });

      return result;
    } catch (error) {
      console.log("데이터를 가져오는데 실패했습니다. ", error);
      return;
    }
  }

  async getSearchedList(query) {
    try {
      const response = await this.fList.get("", {
        params: {
          pSize: 1000,
          SIGUN_NM: query.sigun,
        },
      });

      const sigunList = response.data.GeneralCourierService[1].row;
      const factoryList = [];

      sigunList.map((sItem) => {
        if (sItem.BIZPLC_NM.includes(query.fName))
          factoryList.push({
            F_ID: sItem.BIZPLC_NM + "-" + sItem.REFINE_ROADNM_ADDR,
            SIGUN_NM: sItem.SIGUN_NM,
            BIZPLC_NM: sItem.BIZPLC_NM,
            REFINE_ROADNM_ADDR: sItem.REFINE_ROADNM_ADDR,
            REFINE_ZIP_CD: sItem.REFINE_ZIP_CD,
            BSN_STATE_NM: sItem.BSN_STATE_NM,
            REVIEW_NUM: 0,
          });
      });

      return factoryList;
    } catch (error) {
      console.log("데이터를 가져오는데 실패했습니다. ", error);
      return;
    }
  }
}

export default FactoryList;
