import { NAVIGATION } from '@/Constants';
import { navigate } from '@/Navigation/NavigationRef';
import { imagePicker } from '@/Services/ImagePicker.service';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './Home.styles';

function showImagePicker(index: number) {
  imagePicker(index)
    .then((res) => {
      if (res !== undefined) {
        let fileName = res.path;

        if (!fileName.includes('file')) {
          fileName = 'file://' + fileName;
        }

        const newFile = {
          base64: res.data,
          uri: fileName,
          name: res.filename ?? 'media',
          type: res.mime,
        };
        navigate(NAVIGATION.imageDetails, { image: newFile });
      }
    })
    .catch((e) => {
      Alert.alert('', e);
    });
}

export function Home(): JSX.Element {
  return (
    <View>
      <Text>App title</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => showImagePicker(0)}>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => showImagePicker(1)}>
        <Text>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContainer}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
