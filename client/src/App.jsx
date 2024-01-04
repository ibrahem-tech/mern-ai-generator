import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./page";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-gradient-to-r from-[#242d39] from-11.2% via-[#10253c] via-51.2% to-[#000000] to-98.6%  sm:px-8 px-4 py-4 ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-10 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#242d39]  text-purple-200 px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-[#242d39] from-11.2% via-[#10253c] via-51.2% to-[#000000] to-98.6% min-h-[calc(100vh-70px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
