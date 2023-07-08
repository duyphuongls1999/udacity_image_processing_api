import checkImageExist from '../../util/checkImageExist';
import Image from '../../app/models/Image';

describe('Test checkImageExist function', () => {
    it('Image exist', async () => {
        //Initialization image
        const imageFileName: string = 'spiderman.png';
        const result = await checkImageExist(imageFileName);
        expect(result).toBe(true);
    });
    it('Image not exist', async () => {
        //Initialization image
        const imageFileName: string = 'image.png';
        const result = await checkImageExist(imageFileName);
        expect(result).toBe(false);
    });
});

