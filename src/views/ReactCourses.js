import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
// import jsonData from '../resource/courses.json'
import { Card } from 'react-native-elements'

export default class ReactCourses extends React.Component {
  render() {
    const {navigate} =this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to React Courses</Text>
        <FlatList
          data={jsonData}
          renderItem={({item})=>
            <Card title={item.title} key={item.id}>
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
var jsonData =[
  {
    "id": 1,
    "title": "Building an App with ReactJS and MeteorJS",
    "category": "react",
    "description": "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform.",
    "link": "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
    "release_date": "12/21/2016",
    "views": "21,160",
    "image": "https://cdn.lynda.com/course/533228/533228-636179098122239600-16x9.jpg"
  },
  {
    "id": 2,
    "title": "React.js Essential Training",
    "category": "native",
    "description": "Among all other JavaScript libraries, React.js stands out. It relies on reusable components, not templates, for UI development, allowing developers to render views where data changes over time. React applications are more scalable and more maintainable, making developers more efficient and users more satisfied.",
    "link": "https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3aReact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
    "release_date": "12/24/2016",
    "views": "78,286",
    "image": "https://cdn.lynda.com/course/496905/496905-636178336143345335-16x9.jpg"
  },
  {
    "id": 3,
    "title": "React.js Essential Training",
    "category": "react",
    "description": "Among all other JavaScript libraries, React.js stands out. It relies on reusable components, not templates, for UI development, allowing developers to render views where data changes over time. React applications are more scalable and more maintainable, making developers more efficient and users more satisfied.",
    "link": "https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3aReact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
    "release_date": "12/24/2016",
    "views": "78,286",
    "image": "https://cdn.lynda.com/course/496905/496905-636178336143345335-16x9.jpg"
  }
]
