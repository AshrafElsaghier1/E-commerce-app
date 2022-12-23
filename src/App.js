import Routers from "./routes/Routers"
import Navbar from "./components/header/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {


  return (
    <>
      <Navbar />
      <Routers />
    </>
  )
}

export default App