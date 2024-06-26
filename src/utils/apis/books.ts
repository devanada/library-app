import { Pagination, Response } from "@/utils/types/api";
import { Books } from "@/utils/types/books";
import { booksSampleData } from "../datas/books";

export const getBooks = () => {
  return new Promise<Response<Pagination<Books[]>>>((resolve, reject) => {
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
