import { AxiosResponse } from "axios";
import { api } from "../http";

import { CarInfoType, CarPostType } from "../common";

class CarsInfo {
  static async getCars(filter: string | null): Promise<AxiosResponse<CarInfoType[]>> {
    return api.get(`sbYth6/cars${filter ? "/?" + filter : ""}`);
  }
  static async getCarInfo(id: string): Promise<AxiosResponse<CarInfoType>> {
    return api.get(`sbYth6/cars/${id}`);
  }
  static async postCar(data: CarPostType) {
    return api.post("sbYth6/cars", data)
  }
}
export { CarsInfo };
