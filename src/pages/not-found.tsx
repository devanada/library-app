import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-full flex flex-col justify-center gap-4 mx-auto">
        <p className="font-bold text-6xl text-center">404 Not Found</p>
        <p className="tracking-widest font-medium text-center">
          Sorry, we were unable to find that page
        </p>
        <Button>
          <Link to="/">Back to Homepage</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
// Export default
