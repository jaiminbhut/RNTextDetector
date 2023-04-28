import ImagePicker, { Options } from 'react-native-image-crop-picker';

function handleError(error: unknown) {
  console.log('error :>> ', error);
}

// for giving default values and checking conditions we can't remove complexity
export async function imagePicker(index: number, values = {}) {
  let response = null;

  const options: Options = {
    includeBase64: true,
    mediaType: 'photo',
    ...values,
  };

  try {
    if (index === 0) {
      response = await ImagePicker.openCamera(options);

      return response;
    } else if (index === 1) {
      response = await ImagePicker.openPicker(options);

      return response;
    }
  } catch (e) {
    handleError(e);
  }
}
