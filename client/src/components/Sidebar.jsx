import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import moment from "moment";

const Sidebar = () => {
  const {
    chats,
    selectedChat,
    setSelectedChat,
    navigate,
    theme,
    setTheme,
  } = useAppContext();

  const [search, setSearch] = useState("");

  return (
    <aside className="h-screen w-72 bg-gray-50 dark:bg-[#181818] border-r border-gray-200 dark:border-white/10 flex flex-col">

      {/* ===== HEADER ===== */}
      <div className="px-4 py-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#1f1f1f]">
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-7 h-7" />
          <div>
            <h1 className="text-[15px] font-semibold text-gray-900 dark:text-gray-100">
              SmartAssist
            </h1>
            <p className="text-xs font-medium bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Smart AI Assistant
            </p>
          </div>
        </div>

        <button className="mt-4 w-full h-9 bg-violet-500 hover:bg-violet-600 text-white text-sm rounded-md transition">
          + New Chat
        </button>

        <div className="mt-3 flex items-center h-9 px-3 gap-2
          border border-gray-300 dark:border-white/20
          rounded-md
          bg-gray-50 dark:bg-[#2a2a2a]">

          <img
            src={assets.search_icon}
            // Agar icon WHITE hai: Light mode mein invert karke black karega, dark mode mein normal (white) rakhega
            className="w-3.5 opacity-60 invert dark:invert-0" 
            alt="search"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations"
            className="text-xs w-full outline-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>

      {/* ===== RECENT CHATS ===== */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
        <p className="px-2 mb-2 text-[11px] font-semibold text-gray-400 uppercase">
          Recent Chats
        </p>

        {[...chats]
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .filter(chat =>
            chat.messages.length > 0
              ? chat.messages[0].content.toLowerCase().includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(chat => {
            const active = selectedChat?._id === chat._id;
            return (
              <div
                key={chat._id}
                onClick={() => setSelectedChat(chat)}
                className={`group relative flex justify-between items-start px-3 py-2 rounded-md cursor-pointer transition
                ${active ? "bg-white dark:bg-[#242424] shadow-sm" : "hover:bg-white dark:hover:bg-[#242424]"}`}
              >
                {active && <span className="absolute left-0 top-0 h-full w-1 bg-violet-500 rounded-r"></span>}

                <div className="pl-2">
                  <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-100">
                    {chat.messages.length > 0 ? chat.messages[0].content.slice(0, 36) : chat.name}
                  </p>
                  <p className="text-[10px] text-gray-400">{moment(chat.updatedAt).fromNow()}</p>
                </div>

                <img
                  src={assets.bin_icon}
                  alt="delete"
                  className="w-3 opacity-0 group-hover:opacity-60 transition invert dark:invert-0" 
                />
              </div>
            );
          })}
      </div>

      {/* ===== COMMUNITY ===== */}
      <div className="px-4 py-3 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#1f1f1f]">
        <div
          onClick={() => navigate("/community")}
          className="flex items-center gap-2 h-9 px-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition"
        >
          <img
            src={assets.gallery_icon}
            className="w-4 opacity-60 invert dark:invert-0"
            alt="gallery"
          />
          <p className="text-sm text-gray-700 dark:text-gray-200">Community Images</p>
        </div>
      </div>

      {/* ===== DARK MODE TOGGLE ===== */}
      <div className="px-4 py-3 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#1f1f1f]">
        <div className="flex items-center justify-between gap-2 p-2 border border-gray-300 dark:border-white/20 rounded-md">
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <img
              src={assets.theme_icon}
              className="w-4 invert dark:invert-0"
              alt="theme"
            />
            <p>Dark Mode</p>
          </div>

          <label className="relative inline-flex cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <div className="w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-violet-600 transition-all"></div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
          </label>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;