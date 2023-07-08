import express from 'express';
import checkImageResized from '../../util/checkImageResized';
import resizeImage from '../../util/resizeImage';
import { promises as fs } from 'fs';
import checkRequest from '../../util/checkRequest';
import Image from '../models/Image';
import RequestStatusEnum from '../enum/RequestStatusEnum';
import ImageSourceEnum from '../enum/ImageSourceEnum';

const processResizeImage = async (
    req: express.Request,
    res: express.Response,
    next: Function,
): Promise<void> => {
    console.log('Process resize image');

    const query = req.query;

    //Initialization image
    const width = parseInt(query.width as unknown as string);
    const height = parseInt(query.height as unknown as string);
    const imageName = query.imageFileName as string;
    const image: Image = { imageName, width, height };

    //Check image request
    const requestStatus = await checkRequest(image);
    if(requestStatus !== RequestStatusEnum.PASS) {
        res.write(
            `<p style="font-size: 22px; color: red;">${requestStatus}</p><p>Please, enter url follow template:<p><p style="color: blue;">http://localhost:3000/api/image?imageFileName={imageName.imageExtension}&width={width}&height={height}</p>`,
        );
        return;
    }

    //Check cache image and process resize image
    if (!(await checkImageResized(image))) {
        await resizeImage(image);
        const imageResized = await fs.readFile(
            `${ImageSourceEnum.RESIZED_IMAGES}/${width}-${height}-${imageName as string}`,
        );
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(
            '<p style="font-size: 22px;">Image Resized </p><img style="display: block;" src="data:image/jpeg;base64,',
        );
        res.write(Buffer.from(imageResized).toString('base64'));
        res.end('"/>');
    } else {
        const imageResized = await fs.readFile(
            `${ImageSourceEnum.RESIZED_IMAGES}/${width}-${height}-${imageName as string}`,
        );
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(
            '<p style="font-size: 22px;">Image Resized </p><img style="display: block;" src="data:image/jpeg;base64,',
        );
        res.write(Buffer.from(imageResized).toString('base64'));
        res.end('"/>');
    }
    try {
        return;
    } catch (err) {
        console.error(err);
    }

    next();
};

export default processResizeImage;
