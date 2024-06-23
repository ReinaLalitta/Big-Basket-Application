import express from 'express';

const apiRouter: express.Router = express.Router();

// Corrected route definition
apiRouter.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).json({
        msg: 'Welcome to API router'
    });
});

export default apiRouter;