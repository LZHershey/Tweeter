import React, { useState } from 'react';
import { imageDataToTensor } from './imageReformat';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const identifyImage = async () => {
    imageDataToTensor();

    // const session = new InferenceSession();
    // console.log(getImageTensorFromPath(URL.createObjectURL(selectedImage)));
    // const url = './model.onnx';
    // await session.loadModel(url);
    // const inputs = [
    //   new Tensor(new Float32Array([1.0, 2.0, 3.0, 4.0]), 'float32', [2, 2]),
    // ];
    // const outputMap = await session.run(inputs);
    // const outputTensor = outputMap.values().next().value;
    // console.log(outputTensor);
  };

  if (selectedImage) {
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    async function runIdentify() {
      await delay(1000);
      identifyImage();
    }
    runIdentify();
  }

  return (
    <div className='image-upload'>
      {!selectedImage && <h1 id='upload-text'>Upload Your Bird Photo</h1>}
      {selectedImage && (
        <div className='image-upload'>
          <img
            id='input-image'
            alt='bird photo'
            width={'224px'}
            height={'224px;'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          {prediction ? (
            <h1>Prediction: {prediction} </h1>
          ) : (
            <div className='image-upload'>
              <h4> Loading prediction... </h4>
              <img
                src='https://i.stack.imgur.com/kOnzy.gif'
                width='200px'
                height='200px'
              />
            </div>
          )}
        </div>
      )}
      <br />

      <br />
      <input
        type='file'
        name='myImage'
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
