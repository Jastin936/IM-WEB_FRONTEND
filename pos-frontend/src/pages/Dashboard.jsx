import React, { useState, useEffect } from "react";
import { MdTableBar, MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import Modal from "../components/dashboard/Modal";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payments"];

const Dashboard = () => {
  useEffect(() => {
    document.title = "POS | Admin Dashboard";
  }, []);

  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics");

  const handleOpenModal = (action) => {
    if (action === "table") setIsTableModalOpen(true);
    // Add logic for category/dishes modals later
  };

  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => (
            <button
              key={label}
              onClick={() => handleOpenModal(action)}
              className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
            >
              {label} {icon}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${
                activeTab === tab
                  ? "bg-[#262626]"
                  : "bg-[#1a1a1a] hover:bg-[#262626]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}
      {activeTab === "Payments" && (
        <div className="text-white p-6 container mx-auto">
          Payment Component Coming Soon
        </div>
      )}

      {/* Modal: Add Table */}
      <Modal
        isOpen={isTableModalOpen}
        onClose={() => setIsTableModalOpen(false)}
        title="Add Table"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const tableName = e.target.tableName.value;
            console.log("Creating Table:", tableName);
            // TODO: Call API to create table here
            setIsTableModalOpen(false);
          }}
        >
          <label className="block text-[#f5f5f5] mb-2">Table Name</label>
          <input
            name="tableName"
            required
            className="w-full mb-4 p-3 bg-[#2a2a2a] text-white rounded focus:outline-none"
            placeholder="Enter table name"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsTableModalOpen(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded"
            >
              Add Table
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;
