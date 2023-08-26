import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
const Register = ({ openRegister, setOpenRegister, setIsHover, isHover }) => {
  return (
    <Container
      // onClick={() => setIsHover(false ? !isHover : !isHover)}
      openRegister={openRegister}
    >
      <Form>
        <Button onClick={() => setOpenRegister(!openRegister)}>
          {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </Svg> */}
        </Button>

        <Body>
          <H1>Register</H1>
          <FormInput>
            <Input placeholder="Name"></Input>
            <Input placeholder="Password"></Input>
          </FormInput>
          <Buttons>
            <ButtonOutLine>Register</ButtonOutLine>
            {/* <ButtonOutLine>Register</ButtonOutLine> */}
          </Buttons>
          <LoginWith>
            <Line />
            <SocialIcons>
              <P>Register with :</P>
              <Links href={"https://www.facebook.com/"}>
                {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path
                    // fill="#1b1b3a"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </Svg> */}
              </Links>
              <Links href={"https://www.facebook.com/"}>
                {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    // fill="#1b1b3a"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </Svg> */}
              </Links>
              <Links href={"https://twitter.com/"}>
                {/* <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    // fill="#1b1b3a"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </Svg> */}
              </Links>
            </SocialIcons>
          </LoginWith>
        </Body>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.openRegister ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.openRegister ? 999 : -999)};
  opacity: ${(props) => (props.openRegister ? 1 : 0)};
`;
const Form = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  flex-direction: column;
  border-radius: 6px;
  width: 80%;
  max-width: 620px;
  height: 380px;
  background-color: #fafafa;
  padding-block: 10px;
`;

const H1 = styled.h1`
  color: #1b1b3a;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  gap: 6px;
`;
const ButtonOutLine = styled.button`
  width: 110px;
  height: 34px;
  padding: 6px;
  padding-inline: 20px;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: #ff8500;
  border-radius: 4px;
  color: #ff8500;
  &:hover {
    background-color: #ff8500;
    /* border: none; */
    border-style: solid;
    border-width: 1px;
    border-color: #fafafa;
    border-radius: 4px;
    color: #fafafa;
  }
`;
const Line = styled.div`
  margin-block: 10px;
  background-color: #1b1b3a;
  height: 1px;
  width: 60%;
`;
const LoginWith = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #1b1b3a;
`;
const Svg = styled.svg`
  width: 30px;
  height: 30px;
  fill: #1b1b3a;
  &:hover {
    fill: #ff8500;
  }
`;
const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 10px;
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-inline: 30px; */
`;

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  justify-self: flex-end;
  margin-inline: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
`;
const Input = styled.input`
  border-radius: 3px;
  width: 100%;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #ff8500;
  padding: 3px;
  padding-inline: 10px;
  color: #ff8500;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ff8500;
  }
  &:focus {
    border-style: solid;
    border-width: 1px;
    border-color: #ff8500;
  }
`;
export default Register;
