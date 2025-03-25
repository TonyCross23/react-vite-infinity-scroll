import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const Layout = () => {
  return (
    <div className=" bg-neutral-100 dark:bg-neutral-800">
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 min-h-screen">
        <ThemeToggle />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
