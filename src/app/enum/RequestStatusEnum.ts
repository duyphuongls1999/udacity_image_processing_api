enum RequestStatusEnum {
    MISSING_IMAGE_FILE_NAME = 'Missing image file name',
    MISSING_WIDTH = 'Missing width',
    WIDTH_INVALID = 'Width invalid, width must numerical pixel value > 0',
    MISSING_HEIGHT = 'Missing height',
    HEIGHT_INVALID = 'Height invalid, height must numerical pixel value > 0',
    IMAGE_NOT_EXIST = 'Image not exist',
    PASS = 'Pass',

}

export default RequestStatusEnum;