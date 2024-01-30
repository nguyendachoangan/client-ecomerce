// src/components/BlogPage.js

import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Breadcrumb } from "../../components";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { category } = useParams();
  return (
    <div className={clsx("w-full ")}>
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-main">
          <h3 className="font-semibold uppercase">BLOG</h3>
          <Breadcrumb category={category} />
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2023/08/AI-circuit.jpg"
              alt="Image for Decoding E-Commerce KPIs"
              className="w-full h-auto mx-auto"
              style={{ marginLeft: "-178px" }}
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-2xl font-bold mb-4 text-lg">
              {" "}
              AI No Longer Curiosity for Retailers but Key to Better Business:
              Report
            </h1>
            <p className="text-gray-600 mb-2">Apr 14, 2022</p>
            <p className="max-h-[200px] overflow-y-auto text-justify">
              According to the report, retailers can also achieve significant
              productivity gains from AI. It cited one
              multibillion-dollar-revenue North American retailer, with more
              than 2,000 stores, that sells...
            </p>
            <Link
              to="https://www.ecommercetimes.com/story/ai-no-longer-curiosity-for-retailers-but-key-to-better-business-report-177857.html"
              className="text-blue-500"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2023/12/business-analytics.jpg"
              alt="Image for Decoding E-Commerce KPIs"
              className="w-full h-auto mx-auto"
              style={{ marginLeft: "-178px" }}
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-2xl font-bold mb-4 text-lg">
              {" "}
              Finding the Right Loan for Your E-Commerce Business
            </h1>
            <p className="text-gray-600 mb-2">Apr 14, 2022</p>
            <p className="max-h-[200px] overflow-y-auto text-justify">
              Merchant advances and loans are helpful tools for any e-commerce
              business. Whether those funds go toward essential expenses like
              payroll, inventory, marketing, or shipping, businesses often ...
            </p>
            <Link
              to="https://www.ecommercetimes.com/story/finding-the-right-loan-for-your-e-commerce-business-177849.html"
              className="text-blue-500"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2023/12/ecommerce-success.jpg"
              alt="Image for Decoding E-Commerce KPIs"
              className="w-full h-auto mx-auto"
              style={{ marginLeft: "-178px" }}
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-2xl font-bold mb-4 text-lg">
              {" "}
              5 Ways Retailers Can Sell More Online With a Personal Touch
            </h1>
            <p className="text-gray-600 mb-2">Apr 14, 2022</p>
            <p className="max-h-[200px] overflow-y-auto text-justify">
              Online shopping is still experiencing growing pains as more
              consumers shift away from the limitations and challenges of
              in-store shopping, which has been exacerbated by recent supply
              chain issues...
            </p>
            <Link
              to="https://www.ecommercetimes.com/story/5-ways-retailers-can-sell-more-online-with-a-personal-touch-177854.html"
              className="text-blue-500"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
