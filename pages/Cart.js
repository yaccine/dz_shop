/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && <div>your cart is empty</div>}
            {products?.length > 0 && (
              <>
                <h2>cart</h2>
                {products.map((product) => (
                  <CartItems key={product._id}>
                    <Images
                      src={product?.image[0]?.links[0]}
                      alt=""
                      width={80}
                      height={100}
                      priority={true}
                    />

                    {product.title}
                    {cartProducts.filter((id) => id === product._id).length}
                  </CartItems>
                ))}
              </>
            )}
          </Box>
          <Box>Order information</Box>
        </ColumnsWrapper>
      </Center>
    </>
  );
};
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  margin-top: 80px;
`;
const Box = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`;
const CartItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* width: 100px; */
  /* height: 80px; */
  background-color: #fafafa;
  margin-block: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 6px;
`;
const Images = styled(Image)`
  height: 100%;
  object-fit: fill;
  border-radius: 4px;
`;
const Line = styled.div`
  height: 1px;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.2);
`;
export default Cart;
