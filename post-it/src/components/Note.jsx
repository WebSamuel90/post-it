import React from 'react';
import { firestore } from '../firebase';

const Note = () => {

    // const noteRef = firestore.doc(`notes/${id}`);
    // const remove = () => noteRef.delete();
    // const like = () => noteRef.update({ likes: like + 1 });

    return ( 
        <>
            {/* <button className="delete" onClick={remove}>X</button>
            <button className="like" onClick={like}>Like</button> */}
        </>
     );
}
 
export default Note;
