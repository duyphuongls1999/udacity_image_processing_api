import checkImageExist from './checkImageExist';
import Image from '../app/models/Image';
import RequestStatusEnum from '../app/enum/RequestStatusEnum';

const checkRequest = async (
    image: Image
): Promise<string> => {
    console.log('Process check request');
    if (!image.imageName) {
        return RequestStatusEnum.MISSING_IMAGE_FILE_NAME;
    }
    if (!image.width) {
        return RequestStatusEnum.MISSING_WIDTH;
    } else if (image.width < 0) {
        return RequestStatusEnum.WIDTH_INVALID;
    }
    if (!image.height) {
        return RequestStatusEnum.MISSING_HEIGHT;
    } else if (image.height < 0) {
        return RequestStatusEnum.HEIGHT_INVALID;
    } 
    if (!(await checkImageExist(image.imageName))) {
        return RequestStatusEnum.IMAGE_NOT_EXIST;
    }
    return RequestStatusEnum.PASS;
};

export default checkRequest;
