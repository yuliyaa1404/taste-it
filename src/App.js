import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Details from "./pages/Details";
import Filter from "./pages/Filter";
import Recipes from "./pages/Recipes";
import Search from "./pages/Search";
import Market from "./pages/Market";
import BasketPage from "./pages/BasketPage";
import Favorites from "./pages/Favorites";
import AboutMarket from "./pages/AboutMarket";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
function App() {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes" element={<Filter />} />
        <Route path="/recipes/:categoryId" element={<Recipes />} />
        <Route path="/market" element={<Market />} />
        <Route path="/about_market" element={<AboutMarket />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog_details/:blogId" element={<BlogDetails />} />
		  <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
