"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch, FiMenu, FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Budgeting from "@/components/Budgeting"; 

interface NavItemProps {
  imageSrc: string;
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

interface MobileActionItemProps {
  imageSrc: string;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  imageSrc,
  label,
  isActive = false,
  href = "#",
  onClick,
}) => (
  <Button
    variant="ghost"
    asChild
    className={`flex items-center px-3 py-2 h-auto rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[var(--medium-gray)] focus:ring-opacity-50 ${
      isActive
        ? "text-[var(--black)] bg-[var(--light-gray)] hover:bg-[var(--light-gray)]"
        : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--light-gray)]"
    }`}
  >
    <a href={href} onClick={onClick}>
      <div className="w-5 h-5 relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageSrc}
          fill
          sizes="(min-width: 360px) 100vw"
          className="object-contain"
        />
      </div>
      <span className="ml-2 hidden sm:block">{label}</span>
    </a>
  </Button>
);

const SearchNavItem: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative w-48 sm:w-64 flex-shrink-0">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
        <FiSearch className="h-4 w-4 text-[var(--medium-gray)]" />
      </div>
      <Input
        type="text"
        placeholder="Search listings, users here..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="pl-10 pr-3 py-2 border-[var(--light-gray)] bg-[var(--light-gray)] text-[var(--black)] text-sm placeholder-[var(--medium-gray)] focus-visible:ring-[var(--medium-gray)] focus-visible:border-[var(--medium-gray)] focus-visible:ring-1"
      />
    </div>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({
  imageSrc,
  label,
  isActive = false,
  href = "#",
  onClick,
}) => (
  <Button
    variant="ghost"
    asChild
    className={`flex items-center justify-start w-full px-4 py-3 h-auto rounded-md text-base transition-all duration-200 ${
      isActive
        ? "text-[var(--deep-blue)] bg-[var(--light-gray)] font-semibold hover:bg-[var(--light-gray)]"
        : "text-[var(--dark-gray)] font-medium hover:bg-[var(--light-gray)]"
    }`}
  >
    <a href={href} onClick={onClick}>
      <div className="w-4 h-4 relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageSrc}
          fill
          sizes="(min-width: 360px) 100vw"
          className="object-contain"
        />
      </div>
      <span className="ml-3">{label}</span>
    </a>
  </Button>
);

const MobileActionItem: React.FC<MobileActionItemProps> = ({
  imageSrc,
  label,
  onClick,
}) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className="flex items-center justify-start w-full px-4 py-3 h-auto rounded-md text-base transition-all duration-200 text-[var(--dark-gray)] font-medium hover:bg-[var(--light-gray)] cursor-pointer"
  >
    <div className="w-4 h-4 relative bg-black">
      <Image
        src={imageSrc}
        alt={imageSrc}
        fill
        sizes="(min-width: 360px) 100vw"
        className="object-contain"
      />
    </div>
    <span className="ml-3">{label}</span>
  </Button>
);

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeItem, setActiveItem] = useState<string | null>("Dashboard");
  const [isBudgetingModalOpen, setIsBudgetingModalOpen] = useState(false); 

  const navigationItems = [
    { imageSrc: "/icon-home.svg", label: "Dashboard" },
    { imageSrc: "/icon-toolbox.svg", label: "Listings" },
    { imageSrc: "/icon-profile.svg", label: "Users" },
    { imageSrc: "/icon-article.svg", label: "Request" },
    { imageSrc: "/icon-scroll.svg", label: "Applications" },
  ];

  const userActions = [
    { imageSrc: "/icon-notification.svg", label: "Notifications" },
    { imageSrc: "/icon-budgeting.svg", label: "Calculator" },
    { imageSrc: "/icon-calendar.svg", label: "Calendar" },
    { imageSrc: "/icon-message.svg", label: "Messages" },
  ];

  const handleNavItemClick = (label: string) => {
    setActiveItem(label);
  };

  const handleCalculatorClick = () => {
    setIsBudgetingModalOpen(true); 
  };

  return (
    <div className="w-full shadow-sm sticky top-0 z-50">
      <div className="bg-[var(--light-black)] text-[var(--white)]">
        {/* Mobile Header */}
        <article className="flex items-center justify-between px-4 py-3 h-14 lg:hidden">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <FiSettings size={20} className="text-[var(--white)]" />
            <span className="ml-1 text-lg font-semibold text-[var(--white)]">
              myxellia
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[var(--white)] text-[var(--black)] rounded-full flex items-center justify-center text-sm font-semibold">
              D
            </div>

            <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-[var(--white)] hover:bg-[var(--dark-gray)] rounded-md transition-all duration-200"
                  aria-label="Open menu"
                >
                  <FiMenu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full max-w-xs bg-[var(--white)] p-0"
              >
                <SheetHeader className="flex flex-row justify-start items-center px-4 py-4 border-b border-[var(--light-gray)] ">
                  <SheetTitle className="flex items-center justify-start">
                    <FiSettings size={20} />
                    <span className="ml-1 text-lg font-bold">myxellia</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Drawer Body */}
                <div className="p-4 overflow-y-auto">
                  <div className="space-y-1">
                    {/* User Actions */}
                    <div className="mb-6">
                      <h3 className="px-4 text-xs font-bold text-[var(--medium-gray)] uppercase tracking-wider mb-2">
                        Tools
                      </h3>
                      {userActions.map((action) => (
                        <MobileActionItem
                          key={action.label}
                          imageSrc={action.imageSrc}
                          label={action.label}
                          onClick={
                            action.label === "Calculator"
                              ? handleCalculatorClick
                              : undefined
                          } // Added onClick handler for Calculator
                        />
                      ))}
                    </div>

                    {/* Navigation Items */}
                    <div className="mb-4">
                      <h3 className="px-4 text-xs font-bold text-[var(--medium-gray)] uppercase tracking-wider mb-2">
                        Navigation
                      </h3>
                      {navigationItems.map((item) => (
                        <MobileNavItem
                          key={item.label}
                          imageSrc={item.imageSrc}
                          label={item.label}
                          isActive={activeItem === item.label}
                          onClick={() => handleNavItemClick(item.label)}
                        />
                      ))}
                    </div>

                    <div>
                      <h3 className="px-4 text-xs font-bold text-[var(--medium-gray)] uppercase tracking-wider mb-2">
                        Search
                      </h3>
                      <div className="relative px-4">
                        <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none z-10">
                          <FiSearch className="h-4 w-4 text-[var(--medium-gray)]" />
                        </div>
                        <Input
                          type="text"
                          placeholder="Search listings, users here..."
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          className="pl-10 pr-3 py-2 border-[var(--light-gray)] bg-[var(--light-gray)] text-[var(--black)] text-sm placeholder-[var(--medium-gray)] focus-visible:ring-1 focus-visible:ring-[var(--black)] focus-visible:border-[var(--black)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </article>

        {/* Desktop Header */}
        <article className="hidden lg:flex items-center justify-between px-4 py-3 h-14">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <FiSettings size={26} className="text-[var(--white)]" />
            <span className="ml-1 text-[18px] font-semibold text-[var(--white)]">
              myxellia
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="flex items-center space-x-1">
              {userActions.map((action) => (
                <Button
                  key={action.label}
                  variant="ghost"
                  size="sm"
                  className="p-2 text-[var(--light-gray)] hover:text-[var(--white)] hover:bg-[var(--dark-gray)] rounded-md transition-all duration-200 cursor-pointer"
                  aria-label={action.label}
                  onClick={
                    action.label === "Calculator"
                      ? handleCalculatorClick
                      : undefined
                  } // Added onClick handler for Calculator
                >
                  <div className="w-[32px] h-[32px] relative">
                    <Image
                      src={action.imageSrc || "/placeholder.svg"}
                      alt={action.label}
                      fill
                      sizes="18px"
                      className="object-contain"
                    />
                  </div>
                </Button>
              ))}
            </div>

            <div className="w-[40px] h-[40px] bg-[var(--white)] text-[var(--black)] rounded-full flex items-center justify-center text-[18px] font-bold ml-2">
              D
            </div>
          </div>
        </article>
      </div>

      {/* Desktop Aside Section */}
      <aside className="hidden lg:block bg-[var(--white)] border-b border-[var(--light-gray)]">
        <div className="flex items-center justify-between px-4 py-3 h-14">
          {/* Navigation Items with Search as 6th item */}
          {navigationItems.map((item) => (
            <NavItem
              key={item.label}
              imageSrc={item.imageSrc}
              label={item.label}
              isActive={activeItem === item.label}
              onClick={() => handleNavItemClick(item.label)}
            />
          ))}

          {/* Search as 6th item */}
          <SearchNavItem />
        </div>
      </aside>

      {/* BudgetingModal component */}
      <Budgeting
        open={isBudgetingModalOpen}
        onOpenChange={setIsBudgetingModalOpen}
      />
    </div>
  );
};

export default Navbar;
