import React from 'react';
import styled from 'styled-components';
// import { SteppedLineTo, Line } from 'react-lineto';


const DivStyled = styled.div`
    height: 100px;
    top: 0;
    left: 0;
    width: 100px;
    position: absolute; 
    background-color: yellow;
`

const DivStyled2 = styled.div`
    height: 100px;
    width: 100px;
    top: 300px;
    left: 300px;
    position: absolute; 
    background-color: pink;
`



function Lines(props) {
    return (
        <div>
            <DivStyled className="A">Element A</DivStyled>
            <DivStyled2 className="B">Element B</DivStyled2>
      
            {/* <Line x0={0} y0={0} x1={100} y1={100} /> */}
            {/* <SteppedLineTo from="A" to="B" orientation="h" /> */}
        
        </div>
    );
}

export default Lines;