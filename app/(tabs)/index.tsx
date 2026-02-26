import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from '../../components/fab';
export default function CounterScreen() {
  // Estado que almacena el valor del contador
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <FAB
        label="+1"
        position="right"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      <View>
        
        <FAB
          label="-1"
          onPress={() => setCount(count - 1)}
          onLongPress={() => setCount(0)}
        />
      </View>

      <FAB
        label="Reset"
        position="left"
        onPress={() => setCount(0)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 120,
    fontWeight: '100',
    color: 'white',
  },
  color: {
    color: 'white'
  }

});