/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import CartProduct from "@/components/CartProduct";
import React from "react";

const NewProducts = ({ newProduct }) => {
  return (
    <>
      <TitleSection>
        <div />
        <span>New Arrivals</span>
        <div />
      </TitleSection>
      <Center>
        <Products>
          {newProduct?.length > 0 &&
            newProduct.map((products) => (
              <CartProduct key={products._id} {...products} />
            ))}
        </Products>
      </Center>
    </>
  );
};

const Products = styled.div`
  display: grid;
  grid-template-rows: 260px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 320px;
  gap: 30px;
  align-items: center;
  justify-content: center;
  /* scroll-behavior: smooth; */
  /* box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3); */
`;
const TitleSection = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-block: 30px;
  width: 100%;
  span {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-inline: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    opacity: 0.5;
    /* margin-top: 0; */
  }
  div {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-inline: 10px;
    background-color: #000;
    opacity: 0.2;
    height: 1px;
    width: 30%;
  }
`;

export default NewProducts;
