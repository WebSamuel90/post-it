import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    cursor: pointer;
    margin-bottom: 50px;
    visibility: hidden;
    // position: absolute;

    @media screen and (max-width: 768px) {
        visibility: visible;
    }
`;
const PlusButton = (props) => {
    return(
        <Svg onClick={props.onClick} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" width="40px" height="40px" fill="var(--main-font-color)" xmlSpace="preserve">
<g>
	<g>
		<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</Svg>

    )
}

export default PlusButton;