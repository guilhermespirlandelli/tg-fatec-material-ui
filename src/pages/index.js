import styled from 'styled-components'
import PersistentDrawerLeft from '../components/navBar'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Loginframe = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Home() {
  return (<>
    <Loginframe>
      <PersistentDrawerLeft />
      <Title>My page</Title>
    </Loginframe>
  </>)

}
