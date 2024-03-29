import { ViewStyle } from "react-native";

export const colors = {
  background: 'white',
  text: 'black',
  highlighted: 'rgb(0, 200, 0)',
  darkHiglighted: 'rgb(0, 180,0)',
  lighterText: 'grey',
  evenLighterText: 'rgba(0, 0, 0, 0.05)',
  oppositeText: 'red',
};

export const defaultContainerStyles: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.background,
};