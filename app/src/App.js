import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookDetails from "./pages/BookDetails";
import Category from "./pages/Category";
import Search from "./pages/Search";
import BessSeller from "./pages/BessSeller";
import Notfound from "./pages/counter/Notfound";

import Card from "./pages/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bestseller" element={<BessSeller />} />

        <Route path="/card" element={<Card />} />
        <Route path="/notfound" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
