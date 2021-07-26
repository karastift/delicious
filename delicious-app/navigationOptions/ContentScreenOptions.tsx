import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '../themes/Lighttheme';

export const ContentScreenOptions = (): StackNavigationOptions => ({
  headerTitle: 'delicious',
  headerTintColor: colors.highlighted,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '700',
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
});