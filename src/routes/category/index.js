import { Router } from 'express';
import { getGamesByClassification } from '../../models/index.js';
 
const router = Router();
 
// Game category route
router.get('/:id', async (req, res, next) => {
    const games = await getGamesByClassification(req.params.id);
    const title = `${games[0]?.classification_name || ''} Games`.trim();

    // If no games are found, throw a 404 error
    if (games.length <= 0) {
        const title = 'Category Not Found';
        const error = new Error(title);
        error.title = title;
        error.status = 404;
        next(error); // Pass the error to the global error handler
        return;
    }
    
    res.render('category/index', { title, games });
});
 
export default router;