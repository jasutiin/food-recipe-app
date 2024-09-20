import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: COLORS.accent500,
  },
  itemText: {
    color: COLORS.primary500,
    textAlign: 'center',
  },
});

export default List;
