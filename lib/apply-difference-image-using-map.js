function applyDifferenceImageUsingMap(originalImage, differenceImage, mapImage, mapColor) {
    var width = originalImage.width,
        height = originalImage.height,
        originalCanvas = document.createElement('canvas'),
        originalCtx = originalCanvas.getContext('2d'),
        differenceCanvas = document.createElement('canvas'),
        differenceCtx = differenceCanvas.getContext('2d'),
        mapCanvas = document.createElement('canvas'),
        mapCtx = mapCanvas.getContext('2d');

    originalCanvas.width = width;
    originalCanvas.height = height;
    differenceCanvas.width = width;
    differenceCanvas.height = height;
    mapCanvas.width = width;
    mapCanvas.height = height;

    originalCtx.drawImage(originalImage, 0, 0);
    differenceCtx.drawImage(differenceImage, 0, 0);
    mapCtx.drawImage(mapImage, 0, 0);

    var originalData = originalCtx.getImageData(0, 0, width, height),
        differenceData = differenceCtx.getImageData(0, 0, width, height),
        mapData = mapCtx.getImageData(0, 0, width, height);

    for (var i = 0; i < originalData.data.length; i += 4) {
        if (
            mapData.data[i] === mapColor[0] &&
            mapData.data[i + 1] === mapColor[1] &&
            mapData.data[i + 2] === mapColor[2]
        ) {
            originalData.data[i] = differenceData.data[i];
            originalData.data[i + 1] = differenceData.data[i + 1];
            originalData.data[i + 2] = differenceData.data[i + 2];
            originalData.data[i + 3] = differenceData.data[i + 3];
        }
    }

    delete differenceCanvas;
    delete mapCanvas;

    originalCtx.putImageData(originalData, 0, 0);

    return originalCanvas;
}

module.exports = applyDifferenceImageUsingMap;
