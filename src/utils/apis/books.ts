import { IPagination, IResponse } from "@/utils/types/api";
import { IBook } from "@/utils/types/books";
import { booksSampleData } from "../datas/books";

export const getBooks = () => {
  return new Promise<IResponse<IPagination<IBook[]>>>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: "Books found",
        payload: {
          currentPage: 1,
          datas: booksSampleData,
          totalItems: 10,
          totalPages: 1,
        },
      });
    }, 1000);
  });
};

export const getDetailBook = () => {};

export const postBook = () => {};

export const editBook = () => {};

export const deleteBook = () => {};
