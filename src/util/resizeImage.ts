import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import Image from '../app/models/Image';
import ImageSourceEnum from '../app/enum/ImageSourceEnum';

const resizeImage = async (
    image: Image
): Promise<unknown> => {
    const imageRead = await fsPromises.readdir(ImageSourceEnum.IMAGES);
    const img = imageRead.find((file) => file === `${image.imageName}`);
    try {
        if (img) {
            const resizedImage: sharp.OutputInfo = await sharp(
                `${ImageSourceEnum.IMAGES}/${image.imageName}`,
            )
                .resize(image.width, image.height, { fit: 'contain' })
                .toFile(`${ImageSourceEnum.RESIZED_IMAGES}/${image.width}-${image.height}-${image.imageName}`);
            return resizedImage;
        }
    } catch (err) {
        console.error(err);
    }
};

export default resizeImage;
