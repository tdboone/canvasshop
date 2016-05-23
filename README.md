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
Combine several images with equal dimensions, passed in as an array of array of images or canvases, into one large image. This function is the inverse of `separateGridImageIntoArray`.

#### Arguments:
* `imagesArray` - A two-dimensional array of equally sized images, where the first index indicates the row that the image will appear in and the second index indicates the column. For example, the image in `imagesArray[2][1]` will appear in the thrid row from the top, in th second column from the left.

#### Returns:
* A canvas element with the resulting image

### `convertDifferenceImageToSolidColorMap`
Convert a difference image created using `getImageWithOlyChangedPixels` to a solid color map that can be used by `applyDifferenceImageUsingMap`.

#### Arguments:
* `differenceImage` - The difference image to convert into a solid color map.
* `mapColor` - The solid color to use on the map image.

#### Returns:
* A canvas element with the resulting image

### `generateShadingImageFromLightingComponents`
Combine a diffuse-lighting-only image and a specular-lighting-only image to create a semi-transparent shading image that can be overlayed on a flat color image to give the appearance of depth.

#### Arguments:
* `diffuseImage` - The image with only diffuse lighting. The rendered object should have a base color with green = 255, as that's the channel that's looked at to generate the shading image.
* `specularImage` - The image with only specular lighting. The specular reflections should usually be white, but they must at least have red = 255, as that's the channel that's looked at to generate the lighting image.

#### Returns:
* A canvas element with the resulting semi-transparent lighting/shading image

### `getImageWithOnlyChangedPixels`
Compare two images and return an image that is transparent except for those pixels that are different between the two images being compared.

#### Arguments:
* `originalImage` - The first image to compare.
* `changedImage` - The second image to compare. The non-transparent pixels of the resulting image will match the pixels of this image.

#### Returns:
* A canvas element with the resulting difference image

### `replaceRGBChannelsWithColors`
Replace the red, green and blue channels of a given image with a weighted blend of three other colors.

#### Arguments:
* `image` - The image in which to replace the RGB channels
* `redReplacement` - An array of three values, e.g., [255, 0, 255], representing the RGB values of the color that is to replace the red channel.
* `greenReplacement` - The same thing, but the color to replace green with.
* `blueReplacement` - The same thing, but the color to replace blue with.

#### Returns:
* A Canvas elements with the resulting image

### `separateGridImageIntoArray`
Separate one large image into an array of smaller, eqally sized images. This function is the inverse of `concatenateImagesIntoGridImage`.

#### Arguments:
* `compositeImage` - The image to split into multiple images
* `xCount` - The number of columns to split the composite image into
* `yCount` - The number of rows to split the composite image into

#### Returns:
* An two-dimensional array of images, where the first index indicates the row that the image was in and the second index indicates the column.
