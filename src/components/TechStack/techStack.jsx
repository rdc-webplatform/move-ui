import { Fragment } from "react";
import styled from "styled-components";

const StyledStack = styled.div`
  display: flex;
  justify-content: space-between;
  
  div {
    display: flex;
  }
`;

const TechStack = (props) => {
  const { stack } = props;

  return (
    <StyledStack>
      <Fragment>{
        stack.map((item) => (
          <div style={{ marginBottom: '4px' }}>
            <img src={item.src} />
            <a href={`${item.href}`}>{item.name}</a>
          </div>
        ))
      }
      </Fragment>
    </StyledStack>
  )
}

export default TechStack;