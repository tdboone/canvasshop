function concatentateImagesIntoGridImage(imagesArray) {
    var imageWidth = imagesArray[0][0].width,
        imageHeight = imagesArray[0][0].height,
        compositeCanvas = document.createElement('canvas'),
        compositeCtx = compositeCanvas.getContext('2d'),
        compositeWidth = 0,
        compositeHeight = imageHeight * imagesArray.length;

    for (i = 0; i < imagesArray.length; i += 1) {
        if (imageWidth * imagesArray[i].length > compositeWidth) {
            compositeWidth = imageWidth * imagesArray[i].length;
        }
    }

    compositeCanvas.width = compositeWidth;
    compositeCanvas.height = compositeHeight;

    for (i = 0; i < imagesArray.length; i += 1) {
        for (j = 0; j < imagesArray[i].length; j += 1) {
            compositeCtx.drawImage(
                imagesArray[i][j],
                imageWidth * j,
                imageHeight * i
            );
        }
    }

    return compositeCanvas;
}

module.exports = concatentateImagesIntoGridImage;
