import { callGoogleVisionAsync } from '@/Services/TextDetector.service';
import { Layout } from '@/Theme';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './ImageDetails.styles';

type HomeParamList = {
  Home: {
    image: {
      uri: string;
      base64: string;
    };
  };
};

export function ImageDetails(): JSX.Element {
  const route = useRoute<RouteProp<HomeParamList, 'Home'>>();
  const image = useMemo(() => {
    return route.params?.image ?? { uri: '', base64: '' };
  }, [route.params?.image]);

  const [media, setMedia] = useState<{ uri: string; base64: string }>({
    uri: '',
    base64: '',
  });
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (image) {
        const response = await callGoogleVisionAsync(image.base64);
        setText(response[0].fullTextAnnotation.text);
      }
    }
    fetchData();
  }, [image]);

  useEffect(() => {
    if (image) {
      setMedia(image);
    }
  }, [image]);

  return (
    <ScrollView style={Layout.fill}>
      <Text>App title</Text>
      <View style={styles.imageContainer}>
        {media && (
          <Image style={styles.image} source={{ uri: media.uri ?? '' }} />
        )}
      </View>
      <View>
        <Text style={styles.detectedText}>{text}</Text>
      </View>
    </ScrollView>
  );
}
