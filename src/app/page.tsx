import Calendar from "@/components/Calendar/Calendar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Calendar />
    </div>
  );
}
