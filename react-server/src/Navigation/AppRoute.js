import React from "react";
import { Route, Routes } from "react-router-dom";
import StreamList from "../pages/StreamList";
import AddStream from "../pages/AddStream";
import EditStream from "../pages/EditStream";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<StreamList />} />
      <Route path="/add" element={<AddStream />} />
      <Route path="/edit/:streamId" element={<EditStream />} />
    </Routes>
  );
};
