import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { SIDEBAR_CONTENTS } from "../constants/dataConstants";

const Layout = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
`;

export default function AppLayout() {
  return (
    <Layout>
      <Sidebar contents={SIDEBAR_CONTENTS} />
      <Main>
        <Header name={"Hello Navneeth"} greetings={"Good Morning"} />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Layout>
  );
}
