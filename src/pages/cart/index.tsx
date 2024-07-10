import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import useCartStore from "@/utils/states/borrows";
import { postBorrow } from "@/utils/apis/borrows";

function Index() {
  const { cart, removeItem, clearCart } = useCartStore((state) => state);

  async function handleBorrow() {
    try {
      const body = {
        bookId: cart.map((item) => item.id),
        borrow_date: new Date().toISOString(),
      };

      const result = await postBorrow(body);
      toast.success(result.message);
      clearCart();
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 gap-4">
            {cart.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-500">{book.author}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeItem(book)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-500">Total Books:</p>
            <p className="text-right">{cart.length}</p>
            <p className="text-gray-500">Estimated Due Date:</p>
            {/* <p className="text-right">
              {dueDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button size="lg" onClick={() => handleBorrow()}>
          Borrow
        </Button>
      </div>
    </Layout>
  );
}

export default Index;
