import React from "react";
import {
  Banner,
  Sidebar,
  BestSeller,
  DealDaily,
  FeatureProducts,
  CustomSlider,
} from "../../components";
import { useSelector } from "react-redux";
import icons from "../../ultils/icons";
import withBaseComponent from "../../hocs/withBaseComponents";
import { createSearchParams } from "react-router-dom";

const { IoIosArrowForward } = icons;

const Home = ({ navigate }) => {
  const { newProducts } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.app);
  const { isLoggedIn, current } = useSelector((state) => state.app);

  return (
    <>
      <div className="w-main flex mt-6">
        <div className="flex flex-col gap-5 w-[25%] flex-auto">
          <Sidebar />
          <DealDaily />
        </div>
        <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div className="my-8">
        <FeatureProducts />
      </div>
      <div className="my-8">
        <h3 className="text-[20px] font-semibold py-[15px] border-t-2 border-main ">
          NEW ARRIVALS
        </h3>
        <div className=" mt-4 mx-[-10px]">
          <CustomSlider products={newProducts} />
        </div>
      </div>

      <div className="my-8 w-full">
        <h3 className="text-[20px] font-semibold py-[15px] border-t-2 border-main ">
          HOT COLLECTIONS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
          {categories
            ?.filter((el) => el.brand.length > 0)
            ?.map((el) => (
              <div key={el._id} className="w-full">
                <div className="border flex p-4 gap-4 min-h-[197px]">
                  <img
                    src={el?.image}
                    alt=""
                    className="w-full h-32 object-contain ml-[-78px]"
                  />
                  <div className="flex-1 text-gray-700 ml-[-78px]">
                    <h4 className="font-semibold uppercase">{el.title}</h4>
                    <ul className="text-sm space-y-1">
                      {el?.brand?.map((item) => (
                        <span
                          key={item}
                          className="flex cursor-pointer hover:underline items-center text-gray-500"
                          onClick={() =>
                            navigate({
                              pathname: `/${el.title}`,
                              search: createSearchParams({
                                brand: item,
                              }).toString(),
                            })
                          }
                        >
                          <IoIosArrowForward size={14} className="mr-1" />
                          <li>{item}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className="text-xl font-semibold py-5 text-center animate-pulse "
        style={{ color: "red" }}
      >
        Thanks for shopping at HA-TECHTROVE 😊
      </div>
    </>
  );
};

export default withBaseComponent(Home);
