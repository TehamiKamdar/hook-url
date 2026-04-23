import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/global.css';

const MainLayout = ({children}) => {
  return(
    <div className="min-h-screen bg-bg text-zinc-100 font-sans overflow-x-hidden hookurl-root">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;