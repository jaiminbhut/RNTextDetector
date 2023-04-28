import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 20,
    width: width - 40,
    height: height / 2,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  detectedText: {
    fontSize: 10,
    marginHorizontal: 20,
    marginTop: 20,
    color: '#000000',
  },
});

export default styles;
