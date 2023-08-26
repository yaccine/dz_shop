import styled from "styled-components";
import React, { useState, lazy, Suspense, startTransition } from "react";
import Center from "./Center";
import CartProduct from "./CartProduct";
// const CartProduct = lazy(() => import("./CartProduct"));

const Products = ({ products, query, categories }) => {
  return (
    <Container>
      <TitleSection>
        <div />
        <span>All Products</span>
        <div />
      </TitleSection>
      <Center>
        <AllProducts>
          {!!products?.length > 0 &&
            products
              ?.filter((titles) => titles?.title.toLowerCase().includes(query))
              .map((product) => <CartProduct key={product._id} {...product} />)}
        </AllProducts>
      </Center>
    </Container>
  );
};

const H2 = styled.h2`
  text-align: center;
`;

const Container = styled.div`
  background-color: #fafafa;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); */
  padding: 20px;
`;

const AllProducts = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 10px;
  gap: 10px;
  /* margin: 10px; */
  align-items: center;
  justify-content: center;
`;
const TitleSection = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-block: 30px;
  width: 100%;
  span {
    margin-inline: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    opacity: 0.5;
    /* margin-top: 0; */
  }
  div {
    margin-inline: 10px;
    background-color: #000;
    opacity: 0.2;
    height: 1px;
    width: 30%;
  }
`;

export default Products;
