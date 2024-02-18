import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ScrollPageBlock from './ScrollFeedBlock';
import ScrollPageBlockRev from './ScrollFeedBlockRev';

export default function ScrollPage() {
  return (
    <ScrollView style={styles.container}>
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
  },
});
