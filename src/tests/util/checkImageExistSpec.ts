import checkImageExist from '../../util/checkImageExist';

describe('Test checkImageExist function', () => {
    it('Image exist', async () => {
        //Initialization image
        const imageFileName = 'spiderman.png';
        const result = await checkImageExist(imageFileName);
        expect(result).toBe(true);
    });
    it('Image not exist', async () => {
        //Initialization image
        const imageFileName = 'image.png';
        const result = await checkImageExist(imageFileName);
        expect(result).toBe(false);
    });
});

