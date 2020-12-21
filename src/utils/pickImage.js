import ImagePicker from 'react-native-image-crop-picker';

const selectImage = () => {
    return ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    })
}

export default selectImage