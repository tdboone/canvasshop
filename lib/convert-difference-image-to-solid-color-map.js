function convertDifferenceImageToSolidColorMap(differenceImage, mapColor) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width = differenceImage.width;
    canvas.height = differenceImage.height;

    ctx.drawImage(differenceImage, 0, 0);

    var imageData = ctx.getImageData(0, 0, differenceImage.width, differenceImage.height);

    for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] > 0) {
            imageData.data[i] = mapColor[0];
            imageData.data[i + 1] = mapColor[1];
            imageData.data[i + 2] = mapColor[2];
            imageData.data[i + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);

    return canvas;
}

module.exports = convertDifferenceImageToSolidColorMap;
