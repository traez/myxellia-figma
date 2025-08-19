import SalesO from "./SalesO";
import ListingsUsersO from "./ListingsUsersO";

const Overview = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center items-center w-full h-auto">
      <div className="w-full xl:w-[65%]">
        <SalesO />
      </div>
      <div className="w-full xl:w-[35%]">
        <ListingsUsersO />
      </div>
    </section>
  );
};

export default Overview;
