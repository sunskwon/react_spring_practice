import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main"
import Detail from "./pages/Detail";
import Regist from "./pages/Regist";
import Update from "./pages/Update";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
