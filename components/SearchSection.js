import styled from "styled-components";
import Center from "./Center";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/components/CartContext";

function SearchSection({ allProducts, setQuery, query }) {
  const { cartProducts } = useContext(CartContext);
  return (
    <Container>
      <Center>
        <Wrapper>
          <Search>
            <Categories>
              <span>All categories</span>
            </Categories>
            <Spliter>
              <IconCat>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width={20}
                  height={20}
                >
                  <path
                    // fill="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </IconCat>
            </Spliter>
            <Input
              type="text"
              // value={searchFilter}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ..."
            />
            <Icon>
              <svg
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Icon>
          </Search>
          <Cart href={"/Cart"}>
            <Svg
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </Svg>
            <NumberProducts>
              <span>{cartProducts.length}</span>
            </NumberProducts>
          </Cart>
        </Wrapper>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 3px;
  background-color: #fafafa;
  margin-top: 40px;
  z-index: 10;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 520px;
`;
const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: medium;
  color: #000;
  margin-inline: 10px;
  &:hover {
    color: #ff8500;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border-radius: 13px;
  background-color: #fff;
  padding-inline: 2px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  svg {
    margin-inline: 6px;
    margin-block: 2px;
    &:hover {
      color: #ff8500;
    }
  }
`;
const Categories = styled.div`
  margin-inline: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: #ff8500;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6411ad;
  height: 30px;
  width: 60px;
  position: relative;
  left: 10px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ff8500;
  }
  svg {
    stroke: #fff;
  }
`;
const IconCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30px;
  position: relative;
  left: -14px;
  border-radius: 20px;

  svg {
    stroke: rgba(0, 0, 0, 0.2);
    fill: #fff;
  }
`;
const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
const Input = styled.input`
  background-color: transparent;
  width: 60px;
  height: 100%;
  font-size: 13px;
  border: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease-in-out;
  margin-inline: 10px;
  padding: 2px;
  &:focus {
    outline: none;
    width: 200px;
  }
  &:hover {
  }
  &::placeholder {
    color: #000;
  }
`;
const Spliter = styled.div`
  height: 90%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  /* opacity: 0.2; */
  margin-inline: 10px;
`;
const NumberProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 2px;
  border-radius: 13px;
  background-color: #ff8500;
  position: relative;
  top: -10px;
  left: -8px;

  span {
    color: #fff;
    font-size: 12px;
  }
`;
export default SearchSection;
