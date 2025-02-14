import dbPromise from '../database/index.js';
 
const getClassifications = async () => {
    const db = await dbPromise;
    const links = await db.all('SELECT * FROM navigation');
    return links;
};
 
export { getClassifications };