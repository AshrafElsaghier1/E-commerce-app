
import Navbar from "./components/header/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routers";
const App = () => {
  return (
    <>
      <Navbar />
      <Routers />
      <Footer />
    </>
  )
}

export default App