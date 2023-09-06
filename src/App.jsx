import "./index.css";
import "./App.css";
import { Carrousel } from "./Components/Carrousel/Carrousel";
import { Header } from "./components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import PortadaCat from "./Components/PortadaCat/PortadaCat";
import { Categories } from "./Components/Categories/Categories";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Components/Contact/Contact";
import { Store } from "./Components/Store/Store";
import { About } from "./Components/About/About";
import { Delivery } from "./Components/Delivery/Delivery";
import { Guarantee } from "./Components/Guarantee/Guarantee";
import { Why } from "./Components/WhyPlantopia/WhyPlantopia";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carrousel />
                <Categories />
                <ItemListContainer />
                <Delivery />
                <Guarantee />
              </div>
            }
          />

          <Route
            path="/products/:categoryId"
            element={
              <div>
                <PortadaCat />
                <Categories />
                <ItemListContainer />
                <Delivery />
                <Guarantee />
              </div>
            }
          />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />

          <Route
            path="/contact"
            element={
              <div>
                <Store />
                <Contact />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <About />
                <Why />
              </div>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
