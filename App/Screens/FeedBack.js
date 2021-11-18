import React from 'react';

import {
  Input,
  Center,
  NativeBaseProvider,
  FormControl,
  VStack,
  TextArea,
  Button,
} from 'native-base';

function FeedBack(props) {
  const [formData, setData] = React.useState({});

  return (
    <NativeBaseProvider>
      <Center
        shadow={1}
        bg="#9F9867"
        _text={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
        }}
        height={150}
        width={{
          base: 414,
        }}>
        {/* Feedback */}
      </Center>

      {/* <VStack width="90%" mx="3" paddingTop="7" p="3">
        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>Full Name</FormControl.Label>
          <Input
            placeholder="John Smith"
            onChangeText={value => setData({...formData, name: value})}
          />
        </FormControl>
      </VStack>
      <VStack width="90%" mx="3" paddingTop="7" p="3">
        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>Email</FormControl.Label>
          <Input
            type="email"
            placeholder="John Smith@yahoo.com"
            onChangeText={value => setData({...formData, name: value})}
          />
        </FormControl>
      </VStack> */}
      <VStack width="90%" mx="3" paddingTop="7" p="3">
        <FormControl >
          <FormControl.Label _text={{bold: true}}>We would love to learn your thoughts on what you love about samahra and what we can improve. </FormControl.Label>
          <TextArea h={20} placeholder=" Is there any content you would like to learn more about? Share that here, too! " />
        </FormControl>
      </VStack>
      <VStack width="90%" mx="3" paddingTop="10" p="5" >
        <Button size="lg" type="submmit" >
          Submmit
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
}

export default FeedBack;
