import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";

const Featured = ({ product }) => {
  // console.log(product);
  const { addProduct } = useContext(CartContext);

  const addToCart = () => {
    addProduct(product._id);
  };

  return (
    <Container>
      <Center>
        <Sections>
          <Section1>
            <Title>{product.title}</Title>
            <P>{product.description}</P>
            <Buttons>
              <ButtonOutLine>read me</ButtonOutLine>
              <ButtonFill onClick={addToCart}>
                Add to cart
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </Svg>
              </ButtonFill>
            </Buttons>
          </Section1>
          <Section2>
            {product?.image?.length > 0 && (
              <HeroImag
                key={product.image[0].id}
                src={product.image[0].links[0]}
                width={300}
                height={300}
                priority={true}
                alt=""
              />
            )}
          </Section2>
        </Sections>
      </Center>
    </Container>
  );
};
const Container = styled.div`
  padding-block: 20px;
  margin-top: 120px;
  background-color: #6411ad;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
`;
const Sections = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:60px
`;

const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 360px;
  width: 340px;
`;
const Section2 = styled.div`
  height: 360px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroImag = styled(Image)`
  object-fit: fill;
  height: 100%;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #fafafa;
  margin: 8px;
`;
const P = styled.p`
  font-size: smaller;
  color: #fafafa;
`;
const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px;
  flex-direction: row;
  gap: 20px;
  height: 80%;
`;
const ButtonOutLine = styled.button`
  width: 114px;
  height: 34px;
  padding: 6px;
  padding-inline: 20px;
  font-size: 12px;
  cursor: pointer;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: #fafafa;
  border-radius: 3px;
  color: #fafafa;
  &:hover {
    background-color: #ff8500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-style: solid;
    border-width: 1px;
    border-color: #ff8500;
    border-radius: 4px;
    color: #fafafa;
  }
`;
const ButtonFill = styled.button`
  width: 114px;
  height: 34px;
  padding: 2px;
  padding-inline: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  background-color: #fafafa;
  border: none;
  border-radius: 3px;
  color: #ff8500;
  &:hover {
    border-radius: 4px;
    background-color: #ff8500;
    color: #fafafa;
  }
`;
const Svg = styled.svg``;

export default Featured;
