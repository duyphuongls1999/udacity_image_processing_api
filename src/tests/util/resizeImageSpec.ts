import resizeImage from '../../util/resizeImage';
import Image from '../../app/models/Image';

describe('Test function resizeImage', () => {
    it('Return resized image', async () => {
        //Initialization image
        const width = 500;
        const height  = 500;
        const imageName = 'spiderman.png';
        const image : Image = {imageName, width, height};
        const result = await resizeImage(image);
        expect(result).toEqual(
            jasmine.objectContaining({
                format: 'png',
                width: 500,
                height: 500,
            }),
        );
    });
});
