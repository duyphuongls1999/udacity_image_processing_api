import checkRequest from '../../util/checkRequest';
import Image from '../../app/models/Image';
import RequestStatusEnum from '../../app/enum/RequestStatusEnum';

describe('Test resizeImage Function', () => {
    it('Url valid, return Pass', async () => {
        //Initialization image
        const width: number = 500;
        const height: number  = 500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await checkRequest(image);
        expect(result).toEqual(RequestStatusEnum.PASS);
    });
    it('Missing image file name', async () => {
        //Initialization image
        const width: number = 500;
        const height: number  = 500;
        const image : Image = {width, height};
        const result = await checkRequest(image);
        expect(result).toEqual(RequestStatusEnum.MISSING_IMAGE_FILE_NAME);
    });
    it('Image missing width', async () => {
        //Initialization image
        const height: number  = 500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, height};
        const result = await checkRequest(image);
        expect(result).toEqual(RequestStatusEnum.MISSING_WIDTH);
    });
    it('Image missing height', async () => {
        //Initialization image
        const width: number = 500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width};
        const result = await checkRequest(image);
        expect(result).toEqual(RequestStatusEnum.MISSING_HEIGHT);
    });
    it('Image invalid height', async () => {
        //Initialization image
        const width: number = 500;
        const height: number  = -500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await checkRequest(image);
        expect(result).toEqual(RequestStatusEnum.HEIGHT_INVALID);
    });
    it('Image invalid width', async () => {
        //Initialization image
        const width: number = -500;
        const height: number  = 500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await checkRequest(image);
        expect(result).toEqual(RequestStatusEnum.WIDTH_INVALID);
    });
});
