import styled from "styled-components";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// import { CartContext } from "@/components/CartContext";

function CartProduct({ _id, title, description, price, image }) {
  // const { addProduct } = useContext(CartContext);
  const uri = "/product/" + _id;
  return (
    <Cart>
      <FavoritesIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          width={20}
          height={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </FavoritesIcon>
      <Box1 href={uri} key={image?.id}>
        <Images
          src={image[0]?.links[0]}
          alt=""
          width={200}
          height={200}
          priority={true}
        />
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Box1>
      {/* <BtnAddToCart onClick={() => addProduct(_id)}>Add to cart</BtnAddToCart> */}
    </Cart>
  );
}

const Box1 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6px;
  padding-bottom: 16px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    border-color: #ff8500;
    transition: all 0.2s ease-in-out;
    transform: scale(1.02, 1.01);
    box-shadow: 0 0 1px #ff8500;
  }
`;
const BtnAddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 100px;
  border-radius: 13px;
  transition: all 0.3s ease-in-out;
  position: relative;
  top: -16px;
  color: #000;
  border-style: none;
  cursor: pointer;
  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.5);
  padding: 6px;
  font-size: 13px;
  font-weight: 300;
  &:hover {
    background-color: #ff8500;
    color: #fafafa;
    border-color: #ff8500;
  }
`;
const Title = styled.span`
  font-size: 12px;
  letter-spacing: 0.2px;
  margin-block: 3px;
  height: 20px;
  /* background-color: #000; */
`;
const Price = styled.p`
  margin: 0px;
  color: #6411ad; 
  font-weight: 600;
`;
const Cart = styled.div`
  border-radius: 3px;
  width: 90%;
  min-width: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const FavoritesIcon = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 34px;
  left: 36%;
  width: 22px;
  height: 22px;
  border-radius: 12px;
  background-color: #fff;
  /* transition: all 0.3s ease-in-out; */
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #ff8500;
    border-color: #ff8500;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1, 1.1);
  }

  svg {
    transition: all 0.2s ease-in-out;
    stroke: transparent;
    fill: rgba(0, 0, 0, 0.3);
    padding: 2px;
    &:hover {
      padding: 4px;
      fill: #fff;
      stroke: #fff;
    }
  }
`;
const Images = styled(Image)`
  border-radius: 3px;
`;

export default CartProduct;
