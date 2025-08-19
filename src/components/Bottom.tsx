import Overview from "./Overview";

const Bottom = () => {
  return (
    <div className="relative min-h-[calc(100vh-55.99px)] lg:min-h-[calc(100vh-112.81px)] h-full w-full py-12">
      <section className="w-full max-w-[1440px] h-auto mx-auto flex flex-col justify-center items-center ">
        <p className="px-2 flex justify-start w-full font-bold text-[16px]">
          Welcome, Ahmed
        </p>
        <Overview />
        <article>BBB</article>
      </section>
    </div>
  );
};

export default Bottom;
