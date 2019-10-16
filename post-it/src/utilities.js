const collectIdsAndDocs = doc => {
     return { id: doc.id, ...doc.data() }; 
};

export default collectIdsAndDocs;