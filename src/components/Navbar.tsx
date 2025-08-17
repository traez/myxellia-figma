"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch, FiMenu, FiSettings, FiX } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineCalculator } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

interface NavItemProps {
  imageSrc: string;
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

interface MobileActionItemProps {
  icon: React.ComponentType<{ size?: number }>;
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
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[var(--medium-gray)] focus:ring-opacity-50 ${
      isActive
        ? "text-[var(--black)] bg-[var(--light-gray)]"
        : "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--light-gray)]"
    }`}
  >
    <div className="w-5 h-5 relative">
      <Image
        src={imageSrc}
        alt={imageSrc}
        fill
        sizes="(min-width: 360px) 100vw"
        className="object-contain"
      />
    </div>
    <span className="ml-2 hidden sm:block">{label}</span>
  </a>
);

const SearchNavItem: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative w-48 sm:w-64 flex-shrink-0">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-4 w-4 text-[var(--medium-gray)]" />
      </div>
      <input
        type="text"
        placeholder="Search listings, users here..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-[var(--light-gray)] rounded-md bg-[var(--light-gray)] text-[var(--black)] text-sm placeholder-[var(--medium-gray)] focus:outline-none  focus:ring-[var(--medium-gray)] focus:border-[var(--medium-gray)]"
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
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 rounded-md text-base transition-all duration-200 ${
      isActive
        ? "text-[var(--deep-blue)] bg-[var(--light-gray)] font-semibold"
        : "text-[var(--dark-gray)] font-medium hover:bg-[var(--light-gray)]"
    }`}
  >
    <div className="w-4 h-4 relative">
      <Image
        src={imageSrc}
        alt={imageSrc}
        fill
        sizes="(min-width: 360px) 100vw"
        className="object-contain"
      />
    </div>
    <span className="ml-3">{label}</span>
  </a>
);

const MobileActionItem: React.FC<MobileActionItemProps> = ({
  icon: Icon,
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex items-center w-full px-4 py-3 rounded-md text-base transition-all duration-200 text-[var(--dark-gray)] font-medium hover:bg-[var(--light-gray)]"
  >
    <Icon size={16} />
    <span className="ml-3">{label}</span>
  </button>
);

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeItem, setActiveItem] = useState<string | null>("Dashboard");

  const navigationItems = [
    { imageSrc: "/icon-home.svg", label: "Dashboard" },
    { imageSrc: "/icon-toolbox.svg", label: "Listings" },
    { imageSrc: "/icon-profile.svg", label: "Users" },
    { imageSrc: "/icon-article.svg", label: "Request" },
    { imageSrc: "/icon-scroll.svg", label: "Applications" },
  ];

  const userActions = [
    { icon: CiBellOn, label: "Notifications" },
    { icon: HiOutlineCalculator, label: "Calculator" },
    { icon: LuCalendarDays, label: "Calendar" },
    { icon: MdOutlineMarkUnreadChatAlt, label: "Messages" },
  ];

  const handleNavItemClick = (label: string) => {
    setActiveItem(label);
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

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-[var(--white)] hover:bg-[var(--dark-gray)] rounded-md transition-all duration-200"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={18} />
            </button>
          </div>
        </article>

        {/* Desktop Header */}
        <article className="hidden lg:flex items-center justify-between px-4 py-3 h-14">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <FiSettings size={20} className="text-[var(--white)]" />
            <span className="ml-1 text-lg font-semibold text-[var(--white)]">
              myxellia
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Desktop User Actions */}
            <div className="flex items-center space-x-1">
              {userActions.map((action) => (
                <button
                  key={action.label}
                  className="p-2 text-[var(--light-gray)] hover:text-[var(--white)] hover:bg-[var(--dark-gray)] rounded-md transition-all duration-200 cursor-pointer"
                  aria-label={action.label}
                >
                  <action.icon size={18} />
                </button>
              ))}
            </div>

            <div className="w-8 h-8 bg-[var(--white)] text-[var(--black)] rounded-full flex items-center justify-center text-[18px] font-bold ml-2">
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

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[var(--black)] bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[var(--white)] shadow-xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--light-gray)]">
              <div className="flex items-center">
                <FiSettings size={20} />
                <span className="ml-1 text-lg font-bold">myxellia</span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-[var(--light-gray)] rounded-md transition-all duration-200"
              >
                <FiX size={20} />
              </button>
            </div>

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
                      icon={action.icon}
                      label={action.label}
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

                {/* Mobile Search */}
                <div>
                  <h3 className="px-4 text-xs font-bold text-[var(--medium-gray)] uppercase tracking-wider mb-2">
                    Search
                  </h3>
                  <div className="relative px-4">
                    <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
                      <FiSearch className="h-4 w-4 text-[var(--medium-gray)]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search listings, users here..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-[var(--light-gray)] rounded-md bg-[var(--light-gray)] text-[var(--black)] text-sm placeholder-[var(--medium-gray)] focus:outline-none focus:ring-1 focus:ring-[var(--black)] focus:border-[var(--black)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
