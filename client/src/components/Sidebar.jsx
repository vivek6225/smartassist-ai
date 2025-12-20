import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { chats } = useAppContext();
  const [search, setSearch] = useState("");

  return (
    <aside className="h-screen w-72 bg-white border-r border-gray-300 shadow-[1px_0_0_0_rgba(0,0,0,0.04)] px-4 py-5 flex flex-col">

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-8">
        <img
          src={assets.logo}
          alt="logo"
          className="w-8 h-8 object-contain"
        />
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            SmartAssist
          </h1>
          <p className="text-xs font-medium bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Smart AI Assistant
          </p>
        </div>
      </div>

      {/* New Chat Button */}
      <button
        className="w-full bg-violet-500 hover:bg-violet-600
        text-white text-sm font-medium py-2.5 rounded-lg transition"
      >
        + New Chat
      </button>

      {/* Search Box */}
      <div className="flex items-center gap-2 p-3 mt-4 border border-gray-400 rounded-md bg-white">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 h-4 opacity-80"
          style={{ filter: "invert(1)" }}
        />
        <input
          type="text"
          placeholder="Search conversations"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-xs w-full outline-none placeholder-gray-500 bg-transparent"
        />
      </div>

      {/* Recent Chats */}
      {chats.length > 0 && (
        <p className="mt-4 text-sm font-medium text-gray-700">
          Recent Chats
        </p>
      )}

      {/* Chat List */}
      <div className="flex-1 overflow-y-scroll mt-3 text-sm space-y-3">
        {chats
          .filter((chat) =>
            chat.messages.length > 0
              ? chat.messages[0].content
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : chat.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
          )
          .map((chat) => (
            <div
              key={chat._id}
              className="p-2 px-4 border border-gray-300 rounded-md cursor-pointer flex justify-between group hover:bg-gray-50"
            >
              <div className="w-full">
                <p className="truncate w-full">
                  {chat.messages.length > 0
                    ? chat.messages[0].content.slice(0, 32)
                    : chat.name}
                </p>
                <p className="text-xs text-gray-500">
                  {chat.updatedAt}
                </p>
              </div>

              <img
                src={assets.bin_icon}
                alt="delete"
                className="hidden group-hover:block w-4 cursor-pointer opacity-70 hover:opacity-100"
                style={{filter:"invert(1)"}}
              />
            </div>
          ))}
      </div>

    </aside>
  );
};

export default Sidebar;
