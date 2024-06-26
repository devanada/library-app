export interface Response<T> {
  message: string;
  payload: T;
}

export interface Pagination<T> {
  currentPage: number;
  datas: T;
  totalItems: number;
  totalPages: number;
}
