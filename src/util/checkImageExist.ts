import { promises as fs } from 'fs';
import ImageSourceEnum from '../app/enum/ImageSourceEnum';

const checkImageExist = async (imageFileName: string): Promise<boolean> => {
    console.log('Process check image exist in folder images');
    const image = await fs.readdir(ImageSourceEnum.IMAGES);
    const file = image.find((file) => file === imageFileName);
    if (file) {
        return true;
    } else {
        return false;
    }
};

export default checkImageExist;
