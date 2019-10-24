import React from 'react';
import styled from 'styled-components';

const PostitStyled = styled.div`
    padding: 15px 25px;
    box-shadow: 2px 4px 6px #444;
    width: 150px;
    height: 100px;
    margin: 10px;
    cursor: pointer;
    background-color: yellow;
    @media screen and (max-width: 768px) {
        width: 250px;
        height: 250px;
    }
`;

function Postit (props) {
    

    // const dragStart = e => {
    //     const target = e.target;
    //     e.dataTransfer.setData('card_id', target.id);

    //     setTimeout(() => {
    //         target.style.display = 'none';
    //     }, 0);

    // }

    // const dragOver = e => {
    //     e.stopPropagation();
    // }


    return (
            
            <PostitStyled
                // id={props.id}
                // // className={props.className}
                // draggable= {props.draggable}
                // onDragStart={dragStart}
                // onDragOver={dragOver}
                {...props}
            >  
            
                { props.children }
            </PostitStyled>


       
    )
}

export default Postit
