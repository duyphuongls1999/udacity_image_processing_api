import { promises as fs } from 'fs';
import Image from '../app/models/Image';
import ImageSourceEnum from '../app/enum/ImageSourceEnum';

const checkImageResized = async (
    image: Image
): Promise<Boolean> => {
    console.log('Process check image exist in cache');
    const cachedFiles = await fs.readdir(ImageSourceEnum.RESIZED_IMAGES);
    const file = cachedFiles.find(
        (file) => file === `${image.width}-${image.height}-${image.imageName}`,
    );
    if (file) {
        console.log('Image exist in cache');
        return true;
    } else {
        console.log('Image not exist in cache');
        return false;
    }
};

export default checkImageResized;
