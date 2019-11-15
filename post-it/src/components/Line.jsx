import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
  height: 0;
  width: 240px;
  margin-left: 30px;
  border-bottom: 1px solid var(--main-li-color);
`;

const Line = () => {
	return <DivStyled></DivStyled>;
};

export default Line;