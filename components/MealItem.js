import { View, Text, StyleSheet } from 'react-native';

function MealItem({ title }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealItem;
