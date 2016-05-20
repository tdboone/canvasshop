function generateShadingImageFromLightingComponents(diffuseImage, specularImage)
{
    var width = diffuseImage.width,
        height = diffuseImage.height,
        diffuseCanvas = document.createElement('canvas'),
        diffuseCtx = diffuseCanvas.getContext('2d'),
        specularCanvas = document.createElement('canvas'),
        specularCtx = specularCanvas.getContext('2d'),
        shadingCanvas = document.createElement('canvas'),
        shadingCtx = shadingCanvas.getContext('2d');

    diffuseCanvas.width = width;
    diffuseCanvas.height = height;
    specularCanvas.width = width;
    specularCanvas.height = height;
    shadingCanvas.width = width;
    shadingCanvas.height = height;

    diffuseCtx.drawImage(diffuseImage, 0, 0);
    specularCtx.drawImage(specularImage, 0, 0);

    var diffuseData = diffuseCtx.getImageData(0, 0, width, height);
    var specularData = specularCtx.getImageData(0, 0, width, height);

    // Convert the diffuse image to an all-black image with different alpha levels using the
    // green channel.
    for (var i = 0; i < diffuseData.data.length; i += 4) {
        var alpha;

        if (diffuseData.data[i + 3] > 0) {
            alpha = 255 - diffuseData.data[i + 1];
            alpha *= diffuseData.data[i + 3] / 255;
        } else {
            alpha = 0;
        }

        diffuseData.data[i]     = 0;
        diffuseData.data[i + 1] = 0;
        diffuseData.data[i + 2] = 0;
        diffuseData.data[i + 3] = Math.floor(alpha);
    }
    diffuseCtx.putImageData(diffuseData, 0, 0);

    // Convert the specular image to an all-white image with different alpha levels using the
    // red channel.
    for (var i = 0; i < specularData.data.length; i += 4) {
        var alpha;

        if (specularData.data[i + 3] > 0) {
            alpha = specularData.data[i];
            alpha *= specularData.data[i + 3] / 255;
        } else {
            alpha = 0;
        }

        specularData.data[i]     = 255;
        specularData.data[i + 1] = 255;
        specularData.data[i + 2] = 255;
        specularData.data[i + 3] = Math.floor(alpha);
    }
    specularCtx.putImageData(specularData, 0, 0);

    shadingCtx.drawImage(diffuseCanvas, 0, 0);
    shadingCtx.drawImage(specularCanvas, 0, 0);

    delete diffuseCanvas;
    delete specularCanvas;

    return shadingCanvas;
}

module.exports = generateShadingImageFromLightingComponents;
