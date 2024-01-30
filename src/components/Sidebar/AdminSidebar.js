import React, { memo, Fragment, useState } from "react";
import logo from "assets/logo.png";
import { adminSidebar } from "ultils/contans";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";

const activeStyle = "px-4 py-2 flex items-center gap-2 bg-blue-500";
const notActiveStyle = "px-4 py-2 flex items-center gap-2 hover:bg-blue-100";

const AdminSidebar = () => {
  const [actived, setActived] = useState([]);

  const handleShowTabs = (tabID) => {
    setActived((prev) =>
      prev.includes(tabID)
        ? prev.filter((el) => el !== tabID)
        : [...prev, tabID]
    );
  };

  return (
    <div className="bg-white h-full py-4">
      <Link
        to="/"
        className="flex flex-col justify-center items-center p-4 gap-2"
      >
        <img src={logo} alt="logo" className="w-[200px] object-contain" />
        <small>Admin Workspace</small>
      </Link>
      <div>
        {adminSidebar.map((el) => (
          <Fragment key={el.id}>
            {el.type === "SINGLE" && (
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  clsx(isActive && activeStyle, !isActive && notActiveStyle)
                }
              >
                <span>{el.icon}</span>
                <span>{el.text}</span>
              </NavLink>
            )}
            {el.type === "PARENT" && (
              <div
                onClick={() => handleShowTabs(+el.id)}
                className="flex flex-col"
              >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-blue-100 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>{el.icon}</span>
                    <span>{el.text}</span>
                  </div>
                  {actived.includes(el.id) ? (
                    <AiOutlineCaretRight />
                  ) : (
                    <AiOutlineCaretDown />
                  )}
                </div>
                {actived.includes(el.id) && (
                  <div className="flex flex-col">
                    {el.submenu.map((item) => (
                      <NavLink
                        key={item.text}
                        to={item.path}
                        onClick={(e) => e.stopPropagation()}
                        className={({ isActive }) =>
                          clsx(
                            isActive && activeStyle,
                            !isActive && notActiveStyle,
                            "pl-10"
                          )
                        }
                      >
                        {item.text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(AdminSidebar);
