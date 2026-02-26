import { StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Image } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#b0b0b0"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Hian Michel Osorio
        </ThemedText>
      </ThemedView>
      <ThemedText>Este primer taller exploraremos todo el contenido que maneja expo + react.js </ThemedText>
      <Collapsible title="Conocimiento sobre REACT.JS:">
        <ThemedText>
          TALLERES:{' '} <br />
          <ThemedText type="defaultSemiBold">- Desarrollar un contador</ThemedText>
        </ThemedText>
        <ThemedText type="defaultSemiBold">- Desarrollar una calculadora  </ThemedText>
        <ExternalLink href="https://github.com/Mich344/contador">
          <ThemedText type="link">Proyecto Contador</ThemedText>
        </ExternalLink>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.image}
        />
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image: {
  width: '100%',
  height: 200,
  resizeMode: 'contain',
  marginTop: 20,
},
});
