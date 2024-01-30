import React, { useState } from "react";
import { Breadcrumb } from "../../components";
import { useParams } from "react-router-dom";
import clsx from "clsx";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  const { category } = useParams();

  return (
    <div className={clsx("w-full", "mb-10")}>
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-main">
          <h3 className="font-semibold uppercase">FAQS</h3>
          <Breadcrumb category={category} />
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            1. What payment you accept?
            <span
              className={clsx("faq-toggle", {
                "text-red-600 cursor-pointer": !isOpen,
              })}
              onClick={toggleAnswer}
            ></span>
          </div>
          {isOpen && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            2. In what country can you deliver?
            <span
              className={clsx("faq-toggle", {
                "text-red-600 cursor-pointer": !isOpen,
              })}
              onClick={toggleAnswer}
            ></span>
          </div>
          {isOpen && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            3. what payments you accept?
            <span
              className={clsx("faq-toggle", {
                "text-red-600 cursor-pointer": !isOpen,
              })}
              onClick={toggleAnswer}
            ></span>
          </div>
          {isOpen && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            4. how to track my parcel?
            <span
              className={clsx("faq-toggle", {
                "text-red-600 cursor-pointer": !isOpen,
              })}
              onClick={toggleAnswer}
            ></span>
          </div>
          {isOpen && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            5. how to handle my parcel?
            <span
              className={clsx("faq-toggle", {
                "text-red-600 cursor-pointer": !isOpen,
              })}
              onClick={toggleAnswer}
            ></span>
          </div>
          {isOpen && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            6. Why amadea is the best e-commerce theme?
            <span
              className={clsx("faq-toggle", {
                "text-red-600 cursor-pointer": !isOpen,
              })}
              onClick={toggleAnswer}
            ></span>
          </div>
          {isOpen && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
