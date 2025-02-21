import dbPromise from '../database/index.js';
 
const getClassifications = async () => {
    const db = await dbPromise;
    const links = await db.all('SELECT * FROM classification');
    // console.log(links);
    return links;
};
 
const getGamesByClassification = async (classificationId) => {
    const db = await dbPromise;
    return await db.all(`
        SELECT game.*, classification.classification_name
        FROM game 
        JOIN classification ON game.classification_id = classification.classification_id
        WHERE game.classification_id = ?`,
        [classificationId]
    );
};
 
export { getClassifications, getGamesByClassification };