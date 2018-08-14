import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Card } from 'react-native-elements'

export default class NativeCourses extends React.Component {
  render() {
    const {navigate} =this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to React Native Courses</Text>
        <FlatList
          data={jsonData}
          renderItem={({item})=>
            <Card title={item.title} key={item.title}>
              <Text>Views: {item.views}</Text>
              <Image source={{uri:item.image}} style={{width:400, height:200}}/>
              <Text>Description: {item.description}</Text>
            </Card>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    marginTop: 18,
    textAlign: 'center',
  }
});
var jsonData =[{
  "id": 4,
  "title": "React Native: Building Mobile Apps",
  "category": "native",
  "description": "React Native is almost ready for primetime. In fact, companies like Facebook are already using it to create native mobile apps—with native performance—for a variety of platforms. You too can harness the power of React Native to build your own native projects, using JavaScript and the familiar React.js framework.",
  "link": "https://www.lynda.com/React-Native-tutorials/React-Native-Building-Mobile-Apps/547379-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3aReact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
  "release_date": "01/24/2017",
  "views": "17,907",
  "image": "https://cdn.lynda.com/course/547379/547379-636205141682828443-16x9.jpg"
}]
