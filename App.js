//All imports below functions for App.js to run correctly
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, ScrollView, Text, TouchableHighlight, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Video} from 'expo-av';


//Variable to enable React Native's Navigation
const Stack = createNativeStackNavigator();

//Variable to set default name for profile
const name = '';

//Homepage navigation container within a function
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
  );
};

//Home screen page including buttons from navigation, images, text and working buttons
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/*Banner image*/}
      <Image 
      source={{
        height: 120,
        width: "100%",
        position: '',
        uri: "https://media.licdn.com/dms/image/C5612AQG3oBVWgNCdvw/article-cover_image-shrink_600_2000/0/1631716244974?e=2147483647&v=beta&t=rSQ4GFoGZrV4YByG1ZurEDHk8d8fBi6hIf02geAFDPo"
      }}/>

      {/*View created for navigation buttons*/}
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

      {/*Welcome text including inline styling*/}
      <Text style={{padding: (10, 20, 10, 20), color: "black"}}>Welcome to WorkoutPal! Are you ready to take your fitness to the next level? Our app is designed to help you achieve your fitness goals, whether you're just starting out or looking to push yourself to new heights. With a wide range of workouts and expert guidance, our app is the perfect tool to help you get fit, stay motivated, and see results. Let's get started on your fitness journey today!</Text>
        
      {/*Weights image*/}  
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image 
          blurRadius={1}
          source={{
            width: 400,
            height: 200,
            uri: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80"
        }}/>
      </TouchableHighlight>

      {/*Change profile name button*/} 
      <Button 
        title="Change Profile Name"
        onPress={() =>
          Alert.prompt("Change profile name:", "Type new name below.                         Current profile name: Test", text => name)
        }
      />

      {/*Turn on notification button*/}   
      <Button 
        title="Turn on Notifications" 
        onPress={() => 
          alert('Notifications on.')
        }
      />

      {/*Turn off notification button*/} 
      <Button 
        title="Turn off Notifications" 
        onPress={() => 
          alert('Notifications off.')
        }
      />

      {/*Bottom text*/} 
      <Text style={{padding: (10, 20, 10, 20), color: "black"}}>For any questions, queries and other matters, please contact us at 'workoutpal@gmail.com', and we will aim to get back to you ASAP!</Text>
      <StatusBar style="auto" />

    </SafeAreaView>
  );
};


//Profile page
const ProfileScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.profile}>

      {/*Profile Picture image*/} 
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

      {/*Profile information*/} 
      <Text style={styles.profile}>{route.params.name}'s Profile</Text>
      <Text style={styles.profile}>Weight: 73KG</Text>
      <Text style={styles.profile}>Age: 25</Text>

    </SafeAreaView>
  );
};


//Videos page
function VideosScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'orange'}}>

      {/*First video thumbnail and title*/} 
      <Text style={styles.templateText}>Top 10 workouts to build muscle: https://www.youtube.com/watch?v=1y2pbhUCy28&ab_channel=GravityTransformation</Text>
      <Image 
      source={{uri:"https://i.ytimg.com/vi/1y2pbhUCy28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3-UI4TRj2wY8c3ZN3LNkcO2trlQ"}}
      style={{
        width: '100%',
        height: 210
      }}
      />

      {/*Second video thumbnail and title*/} 
      <Text style={styles.templateText}>20 Minute FULL BODY Strength X HIIT Workout [No Equipment]: https://www.youtube.com/watch?v=59tchbMrjIg&ab_channel=Juice%26Toya</Text>
      <Image 
      source={{uri:"https://i.ytimg.com/vi/59tchbMrjIg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADW5-J3BXzT1gIh79eV4QcB4JGAg"}}
      style={{
        width: '100%',
        height: 210
      }}
      />

      <Video
        style={styles.video}
        source={{uri:"https://www.youtube.com/watch?v=DqtN-9GVdZ8&ab_channel=Men%27sHealth",}}
      />

    </SafeAreaView>
  );
};
    

//History page
const HistoryScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'orange'}}>
        
        {/*History page text (DIDNT FINISH)*/} 
       <Text>This is the History screen, currently a work in progress, COMING SOON!</Text>

    </SafeAreaView>
  );
};


//Templates page
const TemplatesScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'orange'}}>

      {/*Text of Templates screen*/} 
      <Text style={styles.templateText}>Check out our 4 different available Weekly Templates and screenshot so you won't forget them!</Text>
       
       {/*First template*/} 
        <Image 
          source={{uri:"https://blog.classpass.com/wp-content/uploads/2021/08/5-Day-Workout-Routine-ClassPass.png"}}
          style={{
          width: "100%",
          height: 300,
        }}
        />

        {/*Second template*/} 
        <Image 
        source={{uri:'https://blog.classpass.com/wp-content/uploads/2021/08/7-Day-Workout-Plan-ClassPass.png'}}
        style={{
          width: "100%",
          height: 300,
        }}
        />

    </SafeAreaView>
  );
};

//Style links for entire App.js
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
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
    backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  templateText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    padding: (10, 20, 10, 20)
  },
  notifications: {
    alignItems: 'stretch'
  },
  scrollView: {
    marginHorizontal: 20
  }
});