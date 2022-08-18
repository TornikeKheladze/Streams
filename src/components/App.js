import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<StreamList />} />
        <Route path="/streams/new" exact element={<StreamCreate />} />
        <Route path="/streams/edit/:id" exact element={<StreamEdit />} />
        <Route path="/streams/delete/:id" exact element={<StreamDelete />} />
        <Route path="/streams/show/:id" exact element={<StreamShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
