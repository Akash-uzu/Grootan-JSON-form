import React from "react";
import Render from "./components/Render";
import Header from "./UI/Header";
import Submission from "./components/Submission";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Render />} />
          <Route path="/submission" element={<Submission/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
