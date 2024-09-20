import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.accent500,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});

export default Subtitle;
