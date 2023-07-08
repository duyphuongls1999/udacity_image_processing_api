import express from 'express';
import processResizeImage from '../app/pages/processResizeImage';

const image = express.Router();

image.get('/image',
    processResizeImage,
    function (req: express.Request, res: express.Response): void {
        res.end();
    },
);

export default image;
