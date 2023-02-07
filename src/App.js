import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./admin/components/dashboard/Dashboard";
import User from "./admin/components/user/User";
import ProductListing from "./admin/components/Products/ProductListing";
import OrderListing from "./admin/components/order/OrderListing";
import Table from "./admin/components/Table/Table";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import SingleUser from "./admin/components/user/SingleUser";
import AddProducts from "./admin/components/Products/AddProducts";
import AddOrder from "./admin/components/order/AddOrder";
// import axios from 'axios';

// axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Accept"] = "application/json";
// axios.defaults.withCredentials = true;

const AuthRequire = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="bg-light">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            index
            element={
              <AuthRequire>
                <Home />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/dashboard"
            exact
            element={
              <AuthRequire>
                <Dashboard />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/user"
            exact
            element={
              <AuthRequire>
                <User />
              </AuthRequire>
            }
          />
           <Route
            path="/admin/user/single/:id"
            exact
            element={
              <AuthRequire>
                <SingleUser />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/product"
            exact
            element={
              <AuthRequire>
                <ProductListing />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/product/add-product"
            exact
            element={
              <AuthRequire>
                <AddProducts />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/order-list"
            exact
            element={
              <AuthRequire>
                <OrderListing />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/order-list/add-order"
            exact
            element={
              <AuthRequire>
                <AddOrder />
              </AuthRequire>
            }
          />
          <Route
            path="/admin/table"
            exact
            element={
              <AuthRequire>
                <Table />
              </AuthRequire>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
