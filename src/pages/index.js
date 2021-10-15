import styled from "styled-components";
import PersistentDrawerLeft from "../components/navBar";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const Loginframe = styled.div`
  padding-right: 50px;
  
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Imagem = styled.img`
  border-radius: 1%;
  opacity: 0.1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Loginframe>
        <PersistentDrawerLeft />
        <Imagem alt="logo" src="/2logoolhosdobem-5-1140x380.jpg" />
      </Loginframe>
    </>
  );
}
