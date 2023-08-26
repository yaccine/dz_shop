/* eslint-disable @next/next/no-img-element */
import Center from "@/components/Center";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const [images, setImages] = useState(product.image[0].links);
  const [selected, setSelected] = useState(product.image[0].links[0]);
  const handelClick = (id) => {
    setSelected(id);
  };
  const addToCart = () => {
    addProduct(product._id);
  };
  return (
    <>
      <Header />

      <Center>
        {" "}
        <Container>
          <PageTitle>Product Detail</PageTitle>
          <Wrapper>
            <WrapperRight>
              {/* <Image alt="" width={220} height={220} src={images} /> */}{" "}
              <ListImg>
                {!!product.image.length > 0 &&
                  product?.image.map((products) => (
                    <ContainerImages key={products.id}>
                      <Image
                        onClick={() => handelClick(products.links[0])}
                        priority={false}
                        height={70}
                        width={60}
                        src={products.links[0]}
                        alt=""
                      />
                    </ContainerImages>
                  ))}
              </ListImg>
              <MainImg>
                <Image
                  alt=""
                  priority={true}
                  width={220}
                  height={290}
                  src={selected}
                />
              </MainImg>
            </WrapperRight>
            <WrapperLeft>
              <Title>{product.title}</Title>
              <Reviw>
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </Reviw>
              <Price>${product.price}</Price>
              <Discription>
                <span>{product.description}</span>
              </Discription>
              <Color>
                <span>Color:</span>
              </Color>
              <Size>
                <span>Size:</span>
              </Size>
              <AddToCart>
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
              </AddToCart>
            </WrapperLeft>
          </Wrapper>
        </Container>
      </Center>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 30px;
  margin-top: 80px;
`;
const PageTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
const WrapperRight = styled.div`
  display: flex;
  flex-direction: row;
`;
const WrapperLeft = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 15px;
  margin: 0;
  padding: 0;
`;
const Price = styled.h3`
  margin-block: 20px;
  color: #ff8500;
`;
const Reviw = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    transition: all 0.3s ease-in-out;

    &:hover {
      /* stroke: #ff8500; */
      fill: #ff8500;
    }
  }
`;
const Discription = styled.p`
  font-size: 13px;
`;
const MainImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background-color: #fff;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);

  img {
    border-radius: 3px;
    /* height: 300px; */
    object-fit: fill;
  }
`;
const ListImg = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin-inline: 4px;
  gap: 4px;

  Image {
    object-fit: fill;
  }
`;
const ContainerImages = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  height: 70px;
  object-fit: cover;
  padding: 1px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    border-color: #ff8500;
    background-color: #ff8500;
  }
`;
const Color = styled.div``;
const Size = styled.div``;
const AddToCart = styled.div``;
const ButtonFill = styled.button`
  width: 114px;
  height: 34px;
  padding: 2px;
  padding-inline: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  background-color: #ff8500;
  border: none;
  border-radius: 3px;
  color: #fff;
  &:hover {
    transition: 0.3ms ease-in-out;
    transform: scale(1.2px, 1.3);
  }
`;
const Svg = styled.svg``;

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
