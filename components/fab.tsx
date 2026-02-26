import { Pressable, StyleSheet, Text } from 'react-native';
// Definimos una interfaz para tipar las propiedades del componente
interface Props {
label: string; // Texto que mostrará el botón
position?: 'left' | 'right' | 'center' ; // Posición horizontal del botón
onPress?: () => void; // Acción al presionar
onLongPress?: () => void; // Acción al mantener presionado
}
export default function FAB({
label,
onPress,
onLongPress,
position = 'right',
}: Props) {
return (
<Pressable
style={({ pressed }) => [
styles.floatingButton, 
position === 'right' ? styles.positionRight : position === 'left' ? styles.positionLeft : styles.centerP,
pressed ? { opacity: 0.7 } : { opacity: 1 },
]}
onPress={onPress}
onLongPress={onLongPress}
>
<Text style={styles.text}>{label}</Text>
</Pressable>
);
}
const styles = StyleSheet.create({
floatingButton: {
position: 'absolute',
bottom: 20,
backgroundColor: '#65558F',
padding: 20,
borderRadius: 15,
elevation: 3,
color: 'white',
},
positionRight: {
right: 20,
},
positionLeft: {
left: 20,
},
centerP: {
left: 100,
},
text: {
color: 'white',
fontSize: 20,
},
color: {
    color: 'white',
},

});