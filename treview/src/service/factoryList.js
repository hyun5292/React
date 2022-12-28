import sigunList from "./sigun_nm_list.json";

class FactoryList {
  constructor(httpClient) {
    this.fList = httpClient;
  }

  async getSigunList(query) {
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
        if (sItem.BIZPLC_NM.includes(query.fName)) factoryList.push(sItem);
      });

      return factoryList;
    } catch (error) {
      console.log("데이터를 가져오는데 실패했습니다. ", error);
      return;
    }
  }

  async getAllList() {
    try {
      const result = [];

      sigunList &&
        sigunList.sigun_nm.map(async (sigun) => {
          const response = await this.fList.get("", {
            params: {
              pSize: 1000,
              SIGUN_NM: sigun,
            },
          });

          const sigunList = response.data.GeneralCourierService[1].row;
          sigunList &&
            sigunList.map((list) => {
              result.push(list);
            });
        });
      return result;
    } catch (error) {
      console.log("데이터를 가져오는데 실패했습니다. ", error);
      return;
    }
  }
}

export default FactoryList;
