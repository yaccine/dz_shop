import Head from "next/head";
import Featured from "@/components/Featured";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import { Helmet } from "react-helmet";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import { useState } from "react";
import Products from "@/components/Products";
import useSWR from "swr";
import styled from "styled-components";

export default function Home({ feauteredProduct, newProduct, allProducts }) {
  const [query, setQuery] = useState("");
  const { data: featuredProductData } = useSWR(
    "/api/featuredProduct",
    fetcher,
    {
      initialData: feauteredProduct,
      revalidateOnMount: true,
      refreshInterval: 3600, // تحديث البيانات كل ساعة
    }
  );
  const { data: newProductData } = useSWR("/api/newProduct", fetcher, {
    initialData: newProduct,
    revalidateOnMount: true,
    refreshInterval: 3600, // تحديث البيانات كل ساعة
  });
  const { data: allProductsData } = useSWR("/api/allProducts", fetcher, {
    initialData: allProducts,
    revalidateOnMount: true,
    refreshInterval: 3600, // تحديث البيانات كل ساعة
  });
  return (
    <>
      <Head>
        {" "}
        <Helmet>
          <title>dz_shop</title>
          <meta name="description" content="Generated by yassine zeghabi" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Cache-Control" content="public" />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
      </Head>
      <>
        <Header />
        <SearchSection query={query} setQuery={setQuery} />
        <Featured product={feauteredProduct} />
        <NewProducts newProduct={newProduct} />
        <Products products={allProducts} query={query} setQuery={setQuery} />
        <Footer />
      </>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "64c2cdcf9e35a54324f81539";
  await mongooseConnect();
  const feauteredProduct = await Product.findById(featuredProductId);
  const newProduct = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 5,
  }).lean();
  const allProducts = await Product.find({}).lean();
  return {
    props: {
      feauteredProduct: JSON.parse(JSON.stringify(feauteredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      // revalidate: 360,
    },
  };
}
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};