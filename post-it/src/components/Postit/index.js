import React, {useState, useEffect} from 'react';
import styled from 'styled-components';




const PostitStyled = styled.div`
    padding: 15px 25px;
    box-shadow: 2px 4px 6px #444;
    width: 250px;
    height: 150px;
    margin: 10px;
    cursor: pointer;
   
    @media screen and (max-width: 768px) {
        width: 250px;
        height: 250px;
    }
`;

// class Postit extends Component {

//     drag = (e) => {
//         e.dataTransfer.setData('transfer', e.target.id);
//     }

//     noAllowDrop = (e) => {
//         e.stopPropagation();
//     }

//     render() { 
//         return ( 
//             <PostitStyled id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.noAllowDrop} >
//                 {this.props.children}
//             </PostitStyled>
//          );
//     }
// }
 
//     Postit.propTypes = {
//         id: propTypes.string,
//         children: propTypes.node,
// }
// export default Postit;


function Postit (props) {

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);

    }

    const dragOver = e => {
        e.stopPropagation();
    }


    return (
            
            <PostitStyled
                id={props.id}
                // className={props.className}
                draggable= {props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
                {...props}
            >  
            
                { props.children }
            </PostitStyled>


       
    )
}

export default Postit
