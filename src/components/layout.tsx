import { useLoaderData } from "react-router-dom";

import Navbar from "@/components/navbar";

import useTitle from "@/utils/hooks/use-title";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const loaderData = useLoaderData() as string;
  useTitle(loaderData);

  return (
    <div className="bg-white h-dvh w-full flex overflow-auto">
      <div className="container h-full overflow-auto flex flex-col mx-auto">
        <Navbar />
        <div className="w-full flex-1 flex flex-col relative">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
