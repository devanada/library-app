import { IResponse, IPagination } from "@/utils/types/api";
import axiosWithConfig from "./axios-with-config";
import { BorrowSchema, IBorrow } from "../types/borrows";

export const getBorrows = async () => {
  try {
    const response = await axiosWithConfig.get("/borrows");

    return response.data as IResponse<IPagination<IBorrow[]>>;
  } catch (error: any) {
    const { message } = error.response.data;

    throw Error(message);
  }
};

export const postBorrow = async (body: BorrowSchema) => {
  try {
    const response = await axiosWithConfig.post("/borrows", body);

    return response.data as IResponse<undefined>;
  } catch (error: any) {
    const { message } = error.response.data;

    throw Error(message);
  }
};
