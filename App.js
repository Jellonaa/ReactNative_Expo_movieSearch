import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import useMovieData from './hooks/useMovieData';

export default function App() {
  const [query, setQuery] = useState("")
  const { movies, getMovieData } = useMovieData()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movie Search</Text>
      <TextInput
        placeholder="Search movies..."
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <Button title="Search" onPress={() => getMovieData(query)} />
      <ScrollView>
        {
          movies !== null &&
          movies.map((item,i) => {
            return (
              <Text key={i}>{movies[i].title}</Text>
            )
          })
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32
  },
  header: {
    fontSize: 24
  }
});
