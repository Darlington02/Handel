import styled from "styled-components";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";
import bg from '../img/bg.svg';


function Dashboard() {
  return (
    <div>
      

      <Container>
        <Sidebar />
        <MainContent />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100%;
  padding-top: 30px;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Dashboard;
