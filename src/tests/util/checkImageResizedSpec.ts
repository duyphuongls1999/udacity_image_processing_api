import checkImageResized from '../../util/checkImageResized';
import Image from '../../app/models/Image';

describe('Test checkImageResized function', () => {
    it('Image resized', async () => {
        //Initialization image
        const width: number = 500;
        const height: number  = 500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await checkImageResized(image);
        expect(result).toBe(true);
    });
    it('Exist image file name in cache but different height', async () => {
        //Initialization image
        const width: number = 500;
        const height: number  = 150;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await checkImageResized(image);
        expect(result).toBe(false);
    });
    it('Exist image file name in cache but different width', async () => {
        //Initialization image
        const width: number = 220;
        const height: number  = 500;
        const imageName: string = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await checkImageResized(image);
        expect(result).toBe(false);
    });
});

