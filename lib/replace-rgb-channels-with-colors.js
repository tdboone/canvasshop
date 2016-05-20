function replaceRGBChannelsWithColors(image, redReplacement, greenReplacement, blueReplacement) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    var imageData = ctx.getImageData(0, 0, image.width, image.height);

    for (var i = 0; i < imageData.data.length; i += 4) {
        var total = imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2],
            redProportion = 0,
            greenProportion = 0,
            blueProportion = 0;

        if (total !== 0) {
            redProportion = imageData.data[i] / total;
            greenProportion = imageData.data[i + 1] / total;
            blueProportion = imageData.data[i + 2] / total;

            imageData.data[i] =
                redProportion * redReplacement[0] +
                blueProportion * blueReplacement[0] +
                greenProportion * greenReplacement[0];

            imageData.data[i + 1] =
                redProportion * redReplacement[1] +
                blueProportion * blueReplacement[1] +
                greenProportion * greenReplacement[1];

            imageData.data[i + 2] =
                redProportion * redReplacement[2] +
                blueProportion * blueReplacement[2] +
                greenProportion * greenReplacement[2];
        }
    }

    ctx.putImageData(imageData, 0, 0);

    return canvas;
}

module.exports = replaceRGBChannelsWithColors;
