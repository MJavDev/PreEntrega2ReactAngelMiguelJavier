import "./index.css";
import "./App.css";
import { Carrousel } from "./components/Carrousel/Carrousel";
import { Header } from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PortadaCat from "./components/PortadaCat/PortadaCat";
import { Categories } from "./components/Categories/Categories";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { Store } from "./components/Store/Store";
import { About } from "./components/About/About";
import { Delivery } from "./components/Delivery/Delivery";
import { Guarantee } from "./components/Guarantee/Guarantee";
import { Why } from "./components/WhyPlantopia/WhyPlantopia";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

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
