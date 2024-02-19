import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import ScrollPageBlock from './ScrollFeedBlock';
import ScrollPageBlockRev from './ScrollFeedBlockRev';
import SearchBar from './SearchBar';

export default function ScrollPage() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar/>
      <ScrollPageBlock style={{ backgroundColor: "#111", }} />
      <ScrollPageBlockRev style={{ backgroundColor: "#111", }} />
      <ScrollPageBlock style={{ backgroundColor: "#111", }} />
      <ScrollPageBlockRev style={{ backgroundColor: "#111", }} />
      <ScrollPageBlock style={{ backgroundColor: "#111", }} />
      <ScrollPageBlockRev style={{ backgroundColor: "#111", }} />
      <ScrollPageBlock style={{ backgroundColor: "#111", }} />
      <ScrollPageBlockRev style={{ backgroundColor: "#111", }} />
      <ScrollPageBlock style={{ backgroundColor: "#111", }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});
