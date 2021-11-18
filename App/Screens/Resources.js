/**********************************************************
 * Important documents, Boarding Tutorial, Images, and
 * additional resources to the Daily Article will be posted
 * here.
 **********************************************************/
import React from 'react';
import {
  Linking,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native';
import {globalStyles} from '../Styles/global';
import {
  ScrollView,
  Box,
  Heading,
  Text,
  Stack,
  NativeBaseProvider,
  Center,
  Divider,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TabView, SceneMap} from 'react-native-tab-view';
// import {marginTop} from 'styled-system';

const FirstRoute = () => <Center flex={1}>This is Tab 1</Center>;

const SecondRoute = () => <Center flex={1}>This is Tab 2</Center>;

const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

const FourthRoute = () => <Center flex={1}>This is Tab 4 </Center>;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});
export default function Resources() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Tab 1'},
    {key: 'second', title: 'Tab 2'},
    {key: 'third', title: 'Tab 3'},
    {key: 'fourth', title: 'Tab 4'},
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    // <View style = {globalStyles.container}>
    //     <Text>Resources</Text>
    // </View>
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
        {/* Resources */}
      </Center>

      <Heading size="lg" ml="-1" p="6" space={3}>
        Books
      </Heading>
      <ScrollView
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
          marginBottom: 50,
        }}>
        <View>
          <Stack p="4" space={3}>
            <TouchableOpacity onPress={() => console.log('pressed 1')}>
              <Text fontWeight="500">
                Baxley, T. Social Justice Parenting How to Raise Compassionate
                Anti Racist Justice Minded Kids in an Unjust World.
              </Text>
            </TouchableOpacity>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              October 12, 2021
            </Text>
          </Stack>
          <Divider my="2" />

          <Stack p="4" space={3}>
            <Text fontWeight="500">
              Jogia, A. Mixed Feelings: Poems and Stories Paperback.
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              September 17, 2019
            </Text>
          </Stack>
          <Divider my="2" />
          <Stack p="4" space={3}>
            <Text fontWeight="500">
              Ginsburg, Kenneth R., and Martha M. Jablow. Building resilience in
              children and teens: Giving kids roots and wings. American Academy
              of Pediatrics .
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              2005
            </Text>
          </Stack>
          <Divider my="2" />
          <Stack p="4" space={3}>
            <Text fontWeight="500">
              Van der Kolk, Bessel A. The body keeps the score: Brain, mind, and
              body in the healing of trauma. Penguin Books.
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              2015
            </Text>
          </Stack>
          <Divider my="2" />
          <Stack p="4" space={3}>
            <Text fontWeight="500">
              Kay, Matthew R. Not light, but fire: How to lead meaningful race
              conversations in the classroom. Stenhouse Publishers.
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              2018
            </Text>
          </Stack>
          <Divider my="2" />
          <Stack p="4" space={3}>
            <Text fontWeight="500">
              Wright, Marguerite A. I'm chocolate, you're vanilla: Raising
              healthy Black and biracial children in a race-conscious world.
              Jossey-Bass Inc., Publishers, 350 Sansome Street, San Francisco,
              CA 94104.
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              1998.
            </Text>
          </Stack>
        </View>
      </ScrollView>
      <Stack p="6" space={5} paddingBottom="70" paddingTop="10">
        <Heading size="md" ml="-1" space={3}>
          Social Justice Parenting How to Raise Compassionate Anti Racist
          Justice Minded Kids in an Unjust World Hardcover
        </Heading>
        <Text fontWeight="500">
          by
          <Text fontWeight="500" style={{color: 'green'}}>
            Dr. Traci Baxley
          </Text>
          (Author) {'\n'}October 19, 2021
        </Text>
        <Text fontWeight="500">Podcasts NPR Code Switch</Text>

        <Text fontWeight="500">
          Specific Podcast Episodes
          <TouchableOpacity
            onPress={() => Linking.openURL('https://podcasters.apple.com')}>
            <Icon
              style={{paddingBottom: 100}}
              name="podcast"
              size={30}
              color="green"
            />
          </TouchableOpacity>
        </Text>
        {/* <Text fontWeight="500" >Information on the US Cenus and how racial categories have changed over time. Very informative and interesting podcast episode:
Code Switch. Episode 308
</Text> */}
      </Stack>
      {/* <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{marginTop: StatusBar.currentHeight}}
      /> */}
    </NativeBaseProvider>
  );
}
