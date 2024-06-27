import Navbar from "@/components/navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
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
