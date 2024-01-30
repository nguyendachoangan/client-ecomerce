import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "store/app/appSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(showModal({ isShowModal: false, modalChildren: null }))
      }
      className="fixed z-50 inset-0 flex items-center justify-center bg-overlay"
    >
      <div className="bg-white p-8 rounded-md">{children}</div>
    </div>
  );
};

export default memo(Modal);
