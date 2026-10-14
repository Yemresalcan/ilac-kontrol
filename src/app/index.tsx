import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, touchTarget } from '@/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>İlacınızı kontrol edin</Text>
      <Text style={styles.body}>Kutunun üzerindeki karekodu kameraya tutun.</Text>
      {/* Kamera ekranı Sprint 1'de (#7) bağlanacak. */}
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled: true }}
        disabled
        style={[styles.button, styles.buttonDisabled]}
      >
        <Text style={styles.buttonText}>İlacı Okut</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: '700',
    color: colors.text,
  },
  body: {
    fontSize: fontSize.body,
    color: colors.text,
  },
  button: {
    minHeight: touchTarget,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: fontSize.button,
    fontWeight: '700',
    color: colors.onPrimary,
  },
});
