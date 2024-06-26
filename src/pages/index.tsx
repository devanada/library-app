// Functional Component = Stateless Component
// export default function index() {
//   function fetchData() {}

//   return <div>{fetchData()}</div>;
// }

// Class Component = Stateful Component
// export default class index extends Component {
//   fetchData() {}

//   render() {
//     return <div>{this.fetchData()}</div>;
//   }
// }

import { useEffect, useState } from "react";

import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

import { Books } from "@/utils/types/books";
import { getBooks } from "@/utils/apis/books";

export default function Index() {
  const [data, setData] = useState<Books[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getBooks();

      setData(response.payload.datas);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <Layout>
      {data.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          cover_image={book.cover_image}
        />
      ))}
    </Layout>
  );
}
