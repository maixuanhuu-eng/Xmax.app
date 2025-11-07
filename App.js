import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function XmaxApp() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const post = () => {
    if (text) {
      setPosts([...posts, {id: Date.now(), text: text, author: 'You'}]);
      setText("");
    }
  };

  return (
    <View style={{flex: 1, padding: 20, paddingTop: 50}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Xmax</Text>
      
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="What's happening?"
        style={{borderWidth: 1, padding: 10, marginVertical: 10}}
      />
      
      <TouchableOpacity onPress={post} style={{backgroundColor: 'red', padding: 15}}>
        <Text style={{color: 'white', textAlign: 'center'}}>Post</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'white', padding: 10, marginTop: 5}}>
            <Text style={{fontWeight: 'bold'}}>{item.author}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
