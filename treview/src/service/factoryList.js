import axios from "axios";

class FactoryList {
  constructor(httpClient) {
    this.fList = httpClient;
  }

  // async getSigunList(query) {
  //   try {
  //     await axios
  //       .get(
  //         `https://openapi.gg.go.kr/GeneralCourierService/?type=json&key=${process.env.REACT_APP_TRUCK_KEY}&SIGUN_NM=${query.sigun}`
  //       )
  //       .then((res) => {
  //         const result = res.data.GeneralCourierService[1].row[0];
  //         console.log(result);
  //         return result;
  //       });
  //   } catch (error) {
  //     console.log("데이터를 가져오는데 실패했습니다. ", error);
  //     return;
  //   }
  // }

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
}

export default FactoryList;
