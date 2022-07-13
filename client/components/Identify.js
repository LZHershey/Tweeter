// import { Tensor, InferenceSession } from 'onnxjs';
// import React from 'react';

// const Identify = async (props) => {
//   const inputImage = props.image;

//   const session = new InferenceSession();
//   const url = './client/components/model.onnx';
//   await session.loadModel(url);

//   const inputs = [
//     new Tensor(new Float32Array([1.0, 2.0, 3.0, 4.0]), 'float32', [2, 2]),
//   ];

//   const outputMap = await session.run(inputs);
//   const outputTensor = outputMap.values().next().value;

//   return (
//     <div>
//       <h1>Prediction: </h1>
//     </div>
//   );
// };

// export default Identify;
