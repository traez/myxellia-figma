"use client";
import React, { useState } from "react";
import {
  FiHome,
  FiList,
  FiUsers,
  FiFileText,
  FiSmartphone,
  FiBell,
  FiBarChart,
  FiCalendar,
  FiActivity,
  FiSearch,
  FiMenu,
  FiSettings,
  FiX,
} from "react-icons/fi";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  isActive = false,
  href = "#",
}) => (
  <a
    href={href}
    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
      isActive
        ? "text-white bg-white bg-opacity-20"
        : "text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10"
    }`}
  >
    <Icon size={18} />
    <span className="ml-3 hidden lg:block">{label}</span>
  </a>
);

const MobileNavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  isActive = false,
  href = "#",
}) => (
  <a
    href={href}
    className={`flex items-center w-full px-4 py-3 rounded-md text-base transition-all duration-200 ${
      isActive
        ? "text-blue-600 bg-blue-50 font-semibold"
        : "text-gray-700 font-medium hover:bg-gray-50"
    }`}
  >
    <Icon size={20} />
    <span className="ml-3">{label}</span>
  </a>
);

const ResponsiveNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigationItems = [
    { icon: FiHome, label: "Dashboard", isActive: true },
    { icon: FiList, label: "Listings" },
    { icon: FiUsers, label: "Users" },
    { icon: FiFileText, label: "Request" },
    { icon: FiSmartphone, label: "Applications" },
  ];

  const userActions = [
    { icon: FiBell, label: "Notifications" },
    { icon: FiBarChart, label: "Analytics" },
    { icon: FiCalendar, label: "Calendar" },
    { icon: FiActivity, label: "Activity" },
  ];

  return (
    <div className="w-full shadow-sm">
      {/* Top Row - Black Background */}
      <div className="bg-gray-900 text-white">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <FiSettings size={24} />
            <span className="ml-2 text-lg md:text-xl font-bold text-white">
              myxellia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-2xl">
            <div className="flex space-x-2">
              {navigationItems.map((item) => (
                <NavItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isActive={item.isActive}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
            {/* Desktop User Actions */}
            <div className="hidden md:flex items-center space-x-1">
              {userActions.map((action) => (
                <button
                  key={action.label}
                  className="p-2 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-all duration-200"
                  aria-label={action.label}
                >
                  <action.icon size={18} />
                </button>
              ))}
            </div>

            {/* User Avatar */}
            <div className="w-8 h-8 md:w-8 md:h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              UN
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-md transition-all duration-200"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - White Background */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center px-4 md:px-6 lg:px-8 py-3 h-14">
          {/* Search Bar */}
          <div className="relative w-48 md:w-64 lg:w-80 flex-shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search listings, users here..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex-1"></div>

          {/* Additional Actions (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-all duration-200">
              <FiBarChart size={16} className="mr-2" />
              Analytics
            </button>
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-all duration-200">
              <FiCalendar size={16} className="mr-2" />
              Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <FiSettings size={20} />
                <span className="ml-2 text-lg font-bold">myxellia</span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-4">
              <div className="space-y-1">
                {/* Navigation Items */}
                <div className="mb-4">
                  <h3 className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Navigation
                  </h3>
                  {navigationItems.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      isActive={item.isActive}
                    />
                  ))}
                </div>

                {/* User Actions */}
                <div className="mb-6">
                  <h3 className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Tools
                  </h3>
                  {userActions.map((action) => (
                    <MobileNavItem
                      key={action.label}
                      icon={action.icon}
                      label={action.label}
                    />
                  ))}
                </div>

                {/* Mobile Search */}
                <div>
                  <h3 className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Search
                  </h3>
                  <div className="relative px-4">
                    <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
                      <FiSearch className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search listings, users here..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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

export default ResponsiveNavbar;
