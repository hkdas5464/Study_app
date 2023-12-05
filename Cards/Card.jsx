import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const MyComponent = ({title,id}) => (
  <Card style={styles.container}>
    <Avatar.Text label={id} size={40}/>
    <Card.Title title={title} subtitle="Card Subtitle"/>
  
  </Card>
);

const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
    },
  });
export default MyComponent;