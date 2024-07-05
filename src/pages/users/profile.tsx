import { useEffect, useState } from "react";
import { LocateIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

import { getBorrows } from "@/utils/apis/borrows";
import { useToken } from "@/utils/contexts/token";
import { IBorrow } from "@/utils/types/borrows";

function Profile() {
  const { user } = useToken();

  const [borrows, setBorrows] = useState<IBorrow[]>([]);

  useEffect(() => {
    fetchBorrows();
  }, []);

  async function fetchBorrows() {
    try {
      const response = await getBorrows();

      setBorrows(response.payload.datas);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  return (
    <Layout>
      <div className="w-full max-w-3xl mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img
              src={
                user?.profile_picture.length !== 0
                  ? user?.profile_picture
                  : "/placeholder.svg"
              }
              alt="Profile Picture"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">{user?.full_name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/profile/edit">Edit Profile</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <div className="flex items-center space-x-4">
              <LocateIcon className="h-6 w-6 text-muted-foreground" />
              <p className="text-muted-foreground">{user?.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Recently Borrowed Book</h2>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {borrows.map((borrow) => (
                <BookCard
                  key={borrow.id}
                  data={borrow.book}
                  navigate="#"
                  data-testid={`book-${borrow.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
