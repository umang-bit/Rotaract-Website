import Navbar from "../components/Navbar"; // Adjust path as needed

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>© 2024 Rotaract Club NIT Rourkela</p>
      </footer>
    </div>
  );
};

export default Layout;

