import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Delete from "./pages/Delete";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/products/create'} element={<Create />} />
        <Route path={'/products/update'} element={<Update />} />
        <Route path={'/products/delete'} element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;