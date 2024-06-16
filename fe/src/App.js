import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main"
import Detail from "./pages/Detail";
import Regist from "./pages/Regist";
import Update from "./pages/Update";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/update" element={<Update />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
