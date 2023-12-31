import { AxiosResponse } from "axios";
import { api } from "../http";

import { CarInfoType, CarPostType } from "../common";

class CarsInfo {
  static async getCars(filter: string | null): Promise<AxiosResponse<any>> {
    return api.get(`7Fn0XW/data${filter ? "/?" + filter : ""}`);
  }
  static async getCarInfo(id: string): Promise<AxiosResponse<CarInfoType>> {
    return api.get(`7Fn0XW/data/${id}`);
  }
  static async postCar(data: CarPostType) {
    return api.post("7Fn0XW/data", data)
  }
}
export { CarsInfo };
