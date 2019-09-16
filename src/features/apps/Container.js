import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// actions
import { actFetchProjects } from "./redux/actions";

// components
import Card from "../../components/Card";

const App = ({ data, isError, actFetchProjects }) => {
  useEffect(() => {
    actFetchProjects();
  }, [actFetchProjects]);

  return (
    <main>
      <ContainerStyled>
        <TitleStyled>Projects</TitleStyled>
        {!isError ? (
          <GridStyled>
            {data.length > 0 &&
              data.map((val, key) => (
                <Card key={key} name={val.project_name} date={val.updated_at} />
              ))}
          </GridStyled>
        ) : (
          <div>Error fetch data</div>
        )}
      </ContainerStyled>
    </main>
  );
};

const mapStateToProps = state => {
  const {
    app: { data, isError }
  } = state;
  return {
    data,
    isError
  };
};

const mapDispatchToProps = {
  actFetchProjects,
  actDeleteProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// styled
const ContainerStyled = styled.div`
  max-width: 768px;
  margin: 0 auto;
  border: 1px solid #a5a4a4;
  margin-top: 30px;
  padding: 10px 20px;
`;

const TitleStyled = styled.h1`
  margin-bottom: 15px;
`;

const GridStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  > * {
    flex: 0 0 32%;
    margin: 1% 0;
  }
  > :nth-child(3n-1) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;
