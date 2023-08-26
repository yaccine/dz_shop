import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import SearchSection from "@/components/SearchSection";

import { useState, useEffect, useRef, useContext } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { CartContext } from "@/components/CartContext";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const ModelRef = useRef(null);
  const buttonRef = useRef(null);
  const LoginRef = useRef(null);
  const RegisterRef = useRef(null);

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <StyledHeader>
        <Wrapper1>
          <Logo href={"/"}>ALG-Express</Logo>
          <List>
            <li>
              <Links href={"/"}>Home</Links>
            </li>
            <li>
              <Links href={"/Shop"}>Shop</Links>
            </li>
            <li>
              <Links href={"/About"}>About</Links>
            </li>
          </List>
          <Box>
            <Spliter />
            <Favorites href={"/Favorites"}>
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
            </Favorites>
            <Spliter />
            <Account
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              ref={buttonRef}
            >
              <span>Account</span>
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Account>
          </Box>
        </Wrapper1>
        <Line />
        {!!isHover && (
          // <Center>
          <ContainerModel>
            <Model
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              // onClick={() => setIsSelected(false ? !isSelected : !isSelected)}
              ref={ModelRef}
              isHover={isHover}
            >
              <Treangel
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 " />
              </Treangel>
              <Buttons>
                <AcountBtn
                  onClick={() => {
                    setOpenLogin(!openLogin);
                  }}
                >
                  Login
                </AcountBtn>
                <AcountBtn
                  onClick={() => {
                    setOpenRegister(!openRegister);
                  }}
                >
                  Register
                </AcountBtn>
              </Buttons>
              <Line />
            </Model>
          </ContainerModel>
        )}
      </StyledHeader>
      {/* <UserSection>
        <Register
          RegisterRef={RegisterRef}
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
        />
        <Login
          LoginRef={LoginRef}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
        />
      </UserSection> */}
    </>
  );
};
const Treangel = styled.svg`
  display: flex;
  position: absolute;
  right: 50px;
  top: -14px;
  fill: #fff;
`;
const UserSection = styled.div``;
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 40px;
  width: 100%;
  padding-block: 4px;
  background-color: #fafafa;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); */
  z-index: 999;
`;
const Wrapper1 = styled.div`
  margin-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 6px;
`;
const Logo = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  font-size: large;
  font-weight: bolder;
  color: #ff8500;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    text-decoration: none;
    list-style: none;
    margin-inline: 4px;
  }
`;
const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 400;
  font-family: "Roboto Mono", monospace;
  padding-inline: 20px;
  height: 80%;
  color: #000;
  padding-block: 6px;

  &:hover {
    font-size: 13px;
    font-weight: 500;
    font-family: "Roboto Mono", monospace;
    color: #ff8500;
    transition: all 0.1s ease-in-out;
    transform: scale(1.1, 1.1);
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Favorites = styled(Link)`
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
const Account = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 30px;
  /* background-color: #900; */
  &:hover {
    color: #ff8500;
  }
  svg {
    padding: 2px;
  }
  span {
    padding-block: 12px;
    font-weight: bold;
    /* background-color: #900; */
  }
`;
const Model = styled.div`
  width: 320px;
  height: 380px;
  position: relative;
  top: -2px;
  right: 0px;
  background-color: #fff;
  display: ${(props) => (props.isHover ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px;
  border-radius: 3px;

  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  z-index: ${(props) => (props.isHover ? 100 : -10)};
`;
const ContainerModel = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 999;
`;
const Line = styled.div`
  /* margin-block: 6px; */
  background-color: #000;
  opacity: 0.2;
  height: 1px;
  width: 100%;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  z-index: 999;
`;
const AcountBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  letter-spacing: 0.5px;
  font-size: 14px;
  border-style: solid;
  border-width: 1px;
  border-color: #ff8500;
  background-color: transparent;
  border-radius: 3px;

  &:hover {
    border-style: solid;
    border-width: 2px;
    border-color: #ff8500;
    border-radius: 4px;
    background-color: #ff8500;
    color: #fafafa;
  }
`;
const Spliter = styled.div`
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  /* opacity: 0.2; */
  margin-inline: 10px;
`;
export default Header;
