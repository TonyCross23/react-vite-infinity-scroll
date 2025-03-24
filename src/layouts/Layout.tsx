import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
