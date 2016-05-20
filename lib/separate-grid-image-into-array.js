function separateGridImageIntoArray(compositeImage, xCount, yCount) {
    var resultImages = [],
        imageWidth = compositeImage.width / xCount,
        imageHeight = compositeImage.height / yCount;

    for (var i = 0; i < yCount; i += 1) {
        var rowImages = [];
        for (var j = 0; j < xCount; j += 1) {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
                canvas.width = imageWidth;
                canvas.height = imageHeight;

                ctx.drawImage(
                    compositeImage,
                    imageWidth * j,
                    imageHeight * i,
                    imageWidth,
                    imageHeight,
                    0,
                    0,
                    imageWidth,
                    imageHeight
                );
            rowImages.push(canvas);
        }
        resultImages.push(rowImages);
    }

    return resultImages;
}

module.exports = separateGridImageIntoArray;
