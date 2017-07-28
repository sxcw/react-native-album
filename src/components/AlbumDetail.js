import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyles, headerContentStyles } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyles} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyles}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }, 

  thumbnailStyles: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
