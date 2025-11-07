import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function XmaxApp() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      const newPost = {
        id: Date.now().toString(),
        text: text,
        author: 'You',
        time: new Date().toLocaleTimeString()
      };
      setPosts([newPost, ...posts]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Xmax</Text>
        <Text style={styles.subtitle}>Mang xa hoi don gian</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Ban dang nghi gi?"
          multiline
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Dang</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.postCard}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.postText}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 5,
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    minHeight: 80,
  },
  postButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  postText: {
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#95a5a6',
  },
});
