import Overview from "./Overview";
import ImageCard from "./ImageCard";

const Bottom = () => {
  return (
    <div className="relative min-h-[calc(100vh-55.99px)] lg:min-h-[calc(100vh-112.81px)] h-full w-full py-4">
      <section className="w-full max-w-[1440px] h-auto mx-auto flex flex-col justify-center items-center ">
        <p className="px-2 flex justify-start w-full text-xl font-bold">
          Welcome, Ahmed
        </p>
        <Overview />
        <ImageCard />
      </section>
    </div>
  );
};

export default Bottom;
