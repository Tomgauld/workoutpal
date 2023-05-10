import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableHighlight, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Video} from 'expo-av';



const Stack = createNativeStackNavigator();
const name = '';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'WorkoutPal'}}/>
        <Stack.Screen name="Templates" component={TemplatesScreen}/>
        <Stack.Screen name="Videos" component={VideosScreen}/>
        <Stack.Screen name="History" component={HistoryScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
      source={{
        height: 120,
        width: "100%",
        position: '',
        uri: "https://media.licdn.com/dms/image/C5612AQG3oBVWgNCdvw/article-cover_image-shrink_600_2000/0/1631716244974?e=2147483647&v=beta&t=rSQ4GFoGZrV4YByG1ZurEDHk8d8fBi6hIf02geAFDPo"
      }}/>

      <View style={styles.headButtons}>

      <Button 
        title="Home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />

      <Button
        title="Videos"
        onPress={() =>
          navigation.navigate('Videos')
        }
      />

      <Button
        title="Profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'UP2061679'})
        }
      />    

      <Button
        title="History"
        onPress={() =>
          navigation.navigate('History')
        }
      />    

      <Button
        title="Templates"
        onPress={() =>
          navigation.navigate('Templates')
        }
      /> 
      </View>

      <Button 
        title="Change Profile Name"
        onPress={() =>
          Alert.prompt("Change profile name:", "Type new name below.                         Current profile name: Test", text => name)
        }
      />

      <Button 
        title="Turn on Notifications" 
        onPress={() => 
          alert('Notifications on.')
        }
      />

      <Button 
        title="Turn off Notifications" 
        onPress={() => 
          alert('Notifications off.')
        }
      />

      <Text style={{padding: (10, 20, 10, 20), color: "black"}}>Welcome to WorkoutPal! Are you ready to take your fitness to the next level? Our app is designed to help you achieve your fitness goals, whether you're just starting out or looking to push yourself to new heights. With a wide range of workouts and expert guidance, our app is the perfect tool to help you get fit, stay motivated, and see results. Let's get started on your fitness journey today!</Text>
        
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image 
          blurRadius={1}
          source={{
            width: 400,
            height: 200,
            uri: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80"
        }}/>
      </TouchableHighlight>
        <StatusBar style="auto" />

        
      </SafeAreaView>
  );
};


const ProfileScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.profile}>
        <Image 
        source={{
          uri:'https://imageio.forbes.com/specials-images/imageserve/946365998/Fit--young-African-American-woman-working-out-with-hand-weights-in-a-fitness-gym-/960x0.jpg?height=474&width=711&fit=bounds'
        }}
        style={{
          width: 300,
          height: 300,
          borderRadius: 1000,
          borderWidth: 1,
        }}
        />
        <Text style={styles.profile}>{route.params.name}'s Profile</Text>
        <Text style={styles.profile}>Weight: 73KG</Text>
        <Text style={styles.profile}>Age: 25</Text>
    </SafeAreaView>
  )
};
function VideosScreen() {
    return (
        <Video
          style={styles.video}
          source={{uri:"https://www.youtube.com/watch?v=DqtN-9GVdZ8&ab_channel=Men%27sHealth",}}
        />
  )};
    

const HistoryScreen = () => {
  return <Text>This is the History screen</Text>;
};

const TemplatesScreen = () => {
  return <Text>This is the Templates screen</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
  },
  headButtons: {
    flex: 0, 
    flexDirection: 'row',
    backgroundColor: 'darkorange',
    borderRadius: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  profile: {
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  }
});
