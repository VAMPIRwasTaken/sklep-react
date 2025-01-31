import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { SWRConfig } from "swr";
import axios from "axios";

import Layout from "./components/layout/index.jsx";
import Home from "./routes/Home.jsx";
import Categories from "./routes/Categories.jsx";
import Account from "./routes/Account.jsx";
import fetcher from "./fetcher.js";
import Category from "./routes/Category.jsx";
import Product from "./routes/Product.jsx";
import SignUp from "./routes/SignUp.jsx";

axios.defaults.baseURL = "https://fakestoreapi.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:category" element={<Category />} />
              <Route path="/account" element={<Account />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </Provider>
  </StrictMode>
);
