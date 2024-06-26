import { useEffect, useState } from "react";

import Layout from "@/components/layout";

import { IBook } from "@/utils/types/books";
import { getDetailBook } from "@/utils/apis/books";

const DetailBook = () => {
  const [data, setData] = useState<IBook>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getDetailBook(1); // TODO: Get ID book from path param using react router dom

      setData(response.payload);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <p>{data?.title}</p>
      <p>{data?.author}</p>
      <p>{data?.category}</p>
      <p>{data?.description}</p>
    </Layout>
  );
};

export default DetailBook;
