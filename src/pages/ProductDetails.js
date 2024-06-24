import React from "react";
import MenuSm from "../Component/Header&Hero/Header/MenuSm";
import HeaderMd from "../Component/Header&Hero/Header/HeaderMd";
import HeaderSm from "../Component/Header&Hero/Header/HeaderSm";
import Footer from "../Component/Footer/Footer";
import ProductDetailsSection from "../Component/ProductDetails/ProductDetailsSection";
import CommentSection from "../Component/ProductDetails/CommentSection";
import AddNewComment from "../Component/ProductDetails/AddNewComment";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../services/getProduct";
import Error from "../Component/Error";
import Spinner from "../Component/Spinner/Spinner";

const ProductDetails = () => {
  const params = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["productDetails", params?.productid],
    queryFn: getProductDetails,
  });
  const productData = data?.at(0);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <div className="w-full lg:hidden">
            <HeaderSm />
          </div>
          <MenuSm />
          <HeaderMd />

          {isError ? (
            <Error message={error.message} />
          ) : (
            <div className="flex flex-col items-center gap-16 w-full m-36 px-5">
              <ProductDetailsSection
                image={productData.photo}
                id={productData.id}
                title={productData.productName}
                subTitle={productData.description}
                price={productData.price}
              />
              <CommentSection comments={productData.comments} />
              <AddNewComment productData={productData} />
            </div>
          )}

          <div className="hidden absolute top-28 right-0 rotate-180 md:block">
            <img src="/images/icon/bg-cofe.svg" alt="" />
          </div>
          <div className="hidden absolute -bottom-5 left-0 md:block">
            <img src="/images/icon/bg-cofe.svg" alt="" />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
