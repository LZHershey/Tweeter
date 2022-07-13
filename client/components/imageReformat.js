// const ort = require('onnxruntime-web');

const imageReformat = () => {
  var myImage = document.getElementById('input-image');

  // var myImage = img;
  var w = myImage.width,
    h = myImage.height;

  // Create a Canvas element
  var canvas = document.createElement('canvas');

  // Size the canvas to the element
  canvas.width = w;
  canvas.height = h;

  // Draw image onto the canvas
  var ctx = canvas.getContext('2d');
  ctx.drawImage(myImage, 0, 0);

  // Finally, get the image data
  // ('data' is an array of RGBA pixel values for each pixel)
  var data = ctx.getImageData(0, 0, w, h);

  return data;
};

export async function imageDataToTensor(dims = [1, 3, 224, 224]) {
  // 1. Get buffer data from image and create R, G, and B arrays.
  const image = imageReformat();

  var imageBufferData = image.data;

  const [redArray, greenArray, blueArray] = new Array(
    new Array(),
    new Array(),
    new Array()
  );

  // 2. Loop through the image buffer and extract the R, G, and B channels
  for (let i = 0; i < imageBufferData.length; i += 4) {
    redArray.push(imageBufferData[i]);
    greenArray.push(imageBufferData[i + 1]);
    blueArray.push(imageBufferData[i + 2]);
    // skip data[i + 3] to filter out the alpha channel
  }

  // 3. Concatenate RGB to transpose [224, 224, 3] -> [3, 224, 224] to a number array
  const transposedData = redArray.concat(greenArray).concat(blueArray);

  // 4. convert to float32
  let i,
    l = transposedData.length; // length, we need this for the loop
  // create the Float32Array size 3 * 224 * 224 for these dimensions output
  const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
  for (i = 0; i < l; i++) {
    float32Data[i] = transposedData[i] / 255.0; // convert to float
  }
  // 5. create the tensor object from onnxruntime-web.

  // const session = await ort.InferenceSession.create('./model.onnx');
  // prepare inputs. a tensor need its corresponding TypedArray as data
  // const inputTensor = new ort.Tensor('float32', float32Data, [1, 3, 224, 224]);

  return float32Data;
}
