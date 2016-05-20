function getImageWithOnlyChangedPixels(originalImage, changedImage) {
    var width = originalImage.width,
        height = originalImage.height,
        originalCanvas = document.createElement('canvas'),
        originalCtx = originalCanvas.getContext('2d'),
        changedCanvas = document.createElement('canvas'),
        changedCtx = changedCanvas.getContext('2d'),
        differenceCanvas = document.createElement('canvas'),
        differenceCtx = differenceCanvas.getContext('2d');

    originalCanvas.width = width;
    originalCanvas.height = height;
    changedCanvas.width = width;
    changedCanvas.height = height;
    differenceCanvas.width = width;
    differenceCanvas.height = height;

    originalCtx.drawImage(originalImage, 0, 0);
    changedCtx.drawImage(changedImage, 0, 0);

    var originalData = originalCtx.getImageData(0, 0, width, height);
    var changedData = changedCtx.getImageData(0, 0, width, height);
    var differenceData = differenceCtx.getImageData(0, 0, width, height);

    for (var i = 0; i < originalData.data.length; i += 4) {
        if (
            originalData.data[i] !== changedData.data[i] ||
            originalData.data[i + 1] !== changedData.data[i + 1] ||
            originalData.data[i + 2] !== changedData.data[i + 2] ||
            originalData.data[i + 3] !== changedData.data[i + 3]
        ) {
            differenceData.data[i] = changedData.data[i];
            differenceData.data[i + 1] = changedData.data[i + 1];
            differenceData.data[i + 2] = changedData.data[i + 2];
            differenceData.data[i + 3] = changedData.data[i + 3];
        }
    }

    differenceCtx.putImageData(differenceData, 0, 0);

    delete originalCanvas;
    delete changedCanvas;

    return differenceCanvas;
}

module.exports = getImageWithOnlyChangedPixels;
