# canvasshop
Tools to manipulate html canvas images

## Available functions

### `applyDifferenceImageUsingMap`
Use a map to selectively replace pixels in an original image with those from a difference image. All three images are expected to be the exact same size.
#### Arguments:
* `originalImage` - The image get pixels from wherever the `mapImage` *doesn't* match `mapColor`
* `differenceImage` - The image to get pixels from wherever the `mapImage` *does* match `mapColor`
* `mapImage` - The image that indicates where to use the original or the difference image
* `mapColor` - pixels in `mapImage` that match this color use imageData from `differenceImage`
#### Returns:
* An html canvas element with the resulting image

### `concatenateImagesIntoGridImage`
Combine several images with equal dimensions, passed in as an array of array of images or canvases, into one large image.
#### Arguments:
* `imagesArray` - A two-dimensional array of equally sized images, where the first index indicates the row that the image will appear in and the second index indicates the column. For example, the image in `imagesArray[2][1]` will appear in the thrid row from the top, in th second column from the left.
#### Returns:
* A canvas element with the resulting image

### `convertDifferenceImageToSolidColorMap`
Convert a difference image created using `getImageWithOlyChangedPixels` to a solid color map that can be used by `applyDifferenceImageUsingMap`.
#### Arguments:
* `differenceImage` - The difference image to convert into a solid color map.
* `mapColor` - The solid color to use on the map image.
### Returns:
* A canvas element with the resulting image

### `generateShadingImageFromLightingComponents`
Combine a diffuse-lighting-only image and a specular-lighting-only image to create a semi-transparent shading image that can be overlayed on a flat color image to give the appearance of depth.
#### Arguments:
* `diffuseImage` - The image with only diffuse lighting. The rendered object should have a base color with green = 255, as that's the channel that's looked at to generate the shading image.
* `specularImage` - The image with only specular lighting. The specular reflections should usually be white, but they must at least have red = 255, as that's the channel that's looked at to generate the lighting image.
### Returns:
* A canvas element with the resulting semi-transparent lighting/shading image
