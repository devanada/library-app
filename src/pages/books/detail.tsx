import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { getDetailBook } from "@/utils/apis/books";
import Layout from "@/components/layout";

import { IBook } from "@/utils/types/books";
import { Button } from "@/components/ui/button";

import { useToken } from "@/utils/contexts/token";
import useCartStore from "@/utils/states/borrows";

const DetailBook = () => {
  const { addItem, cart } = useCartStore((state) => state);
  const { user } = useToken();
  const [data, setData] = useState<IBook>();
  const params = useParams();

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === +params.id_book!);

    if (checkCart) return true;

    return false;
  }, [cart]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getDetailBook(+params.id_book!);

      setData(response.payload);
    } catch (error) {
      alert(error);
    }
  }

  function handleBorrowBook() {
    addItem(data!);
    toast.success("Book has been added to cart");
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={data?.cover_image ? data?.cover_image : "/placeholder.svg"}
            alt="Book Cover"
            width={400}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            <p className="text-muted-foreground text-lg">by {data?.author}</p>
          </div>
          <div className="prose max-w-none">
            <p>{data?.description}</p>
          </div>
          {user?.role === "user" ? (
            <Button
              size="lg"
              className="w-full"
              onClick={() => handleBorrowBook()}
              disabled={isInCart}
            >
              {isInCart ? "In Cart" : "Borrow"}
            </Button>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default DetailBook;
