import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cart, Modal } from "components";
import { showCart } from "./store/app/appSlice";
import path from "ultils/path";
import { getCategories } from "store/app/asyncActions";

import {
  Login,
  Home,
  Public,
  FAQ,
  DetailProduct,
  Blogs,
  Services,
  Products,
  FinalRegister,
  ResetPassword,
  DetailCart,
} from "pages/public";

import {
  AdminLayout,
  ManageOrder,
  ManageProducts,
  ManageUser,
  CreateProducts,
  Dashboard,
} from "pages/admin";

import {
  MemberLayout,
  Personal,
  History,
  MyCart,
  Wishlist,
  Checkout,
} from "pages/member";

function App() {
  const dispatch = useDispatch();
  const { isShowModal, modalChildren, isShowCart } = useSelector(
    (state) => state.app
  );
  const [appOpenCount, setAppOpenCount] = useState(0);
  useEffect(() => {
    setAppOpenCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="font-main h-screen relative">
      <div className="absolute top-0 left-0" style={{ left: "120px" }}>
        {appOpenCount === 1 && (
          <img
            src="https://fptshop.com.vn/Content/images/tet-2024/img-left.png?v=122111"
            alt="Left Image"
            className="h-auto max-h-full max-w-full shake-animation"
            style={{ width: "100px", height: "auto" }}
          />
        )}
      </div>
      <div className="absolute top-0 right-0" style={{ right: "120px" }}>
        {appOpenCount === 1 && (
          <img
            src="https://fptshop.com.vn/Content/images/tet-2024/img-right.png?v=122111"
            alt="Right Image"
            className="h-auto max-h-full max-w-full shake-animation"
            style={{ width: "100px", height: "auto" }}
          />
        )}
      </div>

      <div className="flex flex-col flex-grow">
        {/* Nội dung trang web của bạn ở đây */}
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.BLOGS} element={<Blogs />} />
            <Route
              path={path.DETAIL_PRODUCT__CATEGORY__PID__TITLE}
              element={<DetailProduct />}
            />
            <Route path={path.FAQ} element={<FAQ />} />
            <Route path={path.OUR_SERVICES} element={<Services />} />
            <Route path={path.PRODUCTS__CATEGORY} element={<Products />} />
            <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
            <Route path={path.ALL} element={<Home />} />
          </Route>
          <Route path={path.ADMIN} element={<AdminLayout />}>
            <Route path={path.DASHBOARD} element={<Dashboard />} />
            <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
            <Route path={path.MANAGE_PRODUCTS} element={<ManageProducts />} />
            <Route path={path.MANAGE_USER} element={<ManageUser />} />
            <Route path={path.CREATE_PRODUCTS} element={<CreateProducts />} />
          </Route>
          <Route path={path.MEMBER} element={<MemberLayout />}>
            <Route path={path.PERSONAL} element={<Personal />} />
            <Route path={path.MY_CART} element={<DetailCart />} />
            <Route path={path.WISHLIST} element={<Wishlist />} />
            <Route path={path.HISTORY} element={<History />} />
          </Route>
          <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHECKOUT} element={<Checkout />} />
        </Routes>
      </div>

      {/* Hiển thị footer */}
      <footer className="absolute bottom-0 left-0 w-full bg-gray-200 text-center py-4">
        {/* Nội dung footer của bạn */}
      </footer>

      {/* Hiển thị giỏ hàng (nếu cần) */}
      {isShowCart && (
        <div
          onClick={() => dispatch(showCart())}
          className="absolute inset-0 bg-overlay flex justify-end z-20"
        >
          <Cart />
        </div>
      )}

      {/* Hiển thị modal (nếu cần) */}
      {isShowModal && <Modal>{modalChildren}</Modal>}

      {/* Hiển thị ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
