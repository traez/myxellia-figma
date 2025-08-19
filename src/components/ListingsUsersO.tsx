import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi";

const ListingsUsersO = () => {
  return (
    <div className="w-full px-2">
      {/* Listings Overview Card */}
      <Card className="w-full mb-3 p-0">
        <CardHeader className="p-2 bg-[var(--very-light-gray)] rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg">
                <HiOutlineHome className="w-5 h-5 text-[var(--deep-blue)]" />
              </div>
              <h3 className="font-semibold text-[var(--dark-gray)]">
                Listings Overview
              </h3>
            </div>
            <button className="flex items-center gap-1 text-[var(--deep-blue)] hover:text-[var(--purple)] transition-colors">
              <span className="text-sm font-medium">View all</span>
              <HiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-left">
              <p className="text-sm text-[var(--medium-gray)] mb-1">Total</p>
              <p className="text-2xl font-bold text-[var(--dark-gray)]">1.8k</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-[var(--medium-gray)] mb-1">Active</p>
              <p className="text-2xl font-bold text-[var(--dark-gray)]">80</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-[var(--medium-gray)] mb-1">Archived</p>
              <p className="text-2xl font-bold text-[var(--dark-gray)]">1k</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Overview Card */}
      <Card className="w-full mb-2 p-0">
        <CardHeader className="p-2 bg-[var(--very-light-gray)] rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg">
                <HiOutlineUser className="w-5 h-5 text-[var(--deep-blue)]" />
              </div>
              <h3 className="font-semibold text-[var(--dark-gray)]">
                Users Overview
              </h3>
            </div>
            <button className="flex items-center gap-1 text-[var(--deep-blue)] hover:text-[var(--purple)] transition-colors">
              <span className="text-sm font-medium">View all</span>
              <HiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-left">
              <p className="text-sm text-[var(--medium-gray)] mb-1">Total</p>
              <p className="text-2xl font-bold text-[var(--dark-gray)]">
                20.7k
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm text-[var(--medium-gray)] mb-1">Riders</p>
              <p className="text-2xl font-bold text-[var(--dark-gray)]">8.5</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-[var(--medium-gray)] mb-1">
                Subscribers
              </p>
              <p className="text-2xl font-bold text-[var(--dark-gray)]">7.5k</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListingsUsersO;
