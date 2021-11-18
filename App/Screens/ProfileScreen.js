import React, {useState} from 'react';
import {Avatar, VStack, Heading, Center, NativeBaseProvider} from 'native-base';
import { View ,StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ImagePicker from 'react-native-image-crop-picker';

export const ProfileScreen = () => {

  const handlePress = () =>{
    console.log("picking image")
  }
  return (
    <NativeBaseProvider>
      <Center>
        <VStack
          space={2}
          alignItems={{
            base: 'center',
            md: 'flex-start',
          }}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
              <Icon
                color="black"
                name="camera-plus"
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="xl"
            source={{
              uri: 'https://lh3.googleusercontent.com/XejZgR3wP1KTrB0824Ah7OMjGMPjyTMSN0zbzw-m4NJ5jvHlwyh5p13AUyrp5qDy26qscAJh8ep8RNF4F2Kqkw=s1200',
            }}>
            RB
          </Avatar>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});