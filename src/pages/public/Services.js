import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Breadcrumb } from "../../components";
import { useParams } from "react-router-dom";

const Services = () => {
  const { category } = useParams();
  return (
    <div className={clsx("w-full, mb-10")}>
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-main">
          <h3 className="font-semibold uppercase">Services</h3>
          <Breadcrumb category={category} />
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://cdn.shopify.com/s/files/1/1636/8779/files/9069783_orig.jpg?v=1491836163"
              alt="Image for Decoding E-Commerce KPIs"
              className="w-full h-auto mx-auto"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginLeft: "-178px",
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 text-justify">
            <p className="max-h-[200px] ">
              Cras magna tellus, congue vitae congue vel, facilisis id risus.
              Proin semper in lectus id faucibus. Aenean vitae quam eget mi
              aliquam viverra quis quis velit. Curabitur mauris diam, posuere
              vitae nunc eget, blandit pellentesque mi. Pellentesque placerat
              nulla at ultricies malesuada. Aenean mi lacus, malesuada at leo
              vel, blandit iaculis nisl. Praesent vestibulum nisl sed diam
              euismod.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold text-lg mb-4">
        We Offer Best Services
      </h2>

      <div className="grid-container flex justify-center">
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png"
            alt="Image"
            className="w-10 h-10 mx-auto mb-4"
          />
          <p className="text-center">Customizable Page</p>
          <p className="text-center">
            Fusce arcu molestie eget libero consectetur congue consectetur in
            bibendum litora
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
            alt="Image"
            className="w-10 h-10 mx-auto mb-4"
          />
          <h2 className="text-center mb-2">Revolution Slider</h2>
          <p className="text-center">
            Fusce arcu molestie eget libero consectetur congue consectetur in
            bibendum litora
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1159/1159876.png"
            alt="Image"
            className="w-10 h-10 mx-auto mb-4" // Thay đổi kích thước ảnh ở đây
          />
          <h2 className="text-center mb-2">Drag & Drop Page</h2>
          <p className="text-center">
            Fusce arcu molestie eget libero consectetur congue consectetur in
            bibendum litora
          </p>
        </div>
      </div>
      <div className="mb-6"> </div>
      <div className="grid-container flex justify-center">
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png"
            alt="Image"
            className="w-10 h-10 mx-auto mb-4"
          />
          <p className="text-center">Customizable Page</p>
          <p className="text-center">
            Fusce arcu molestie eget libero consectetur congue consectetur in
            bibendum litora
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
            alt="Image"
            className="w-10 h-10 mx-auto mb-4"
          />
          <h2 className="text-center mb-2">Revolution Slider</h2>
          <p className="text-center">
            Fusce arcu molestie eget libero consectetur congue consectetur in
            bibendum litora
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1159/1159876.png"
            alt="Image"
            className="w-10 h-10 mx-auto mb-4" // Thay đổi kích thước ảnh ở đây
          />
          <h2 className="text-center mb-2">Drag & Drop Page</h2>
          <p className="text-center">
            Fusce arcu molestie eget libero consectetur congue consectetur in
            bibendum litora
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
