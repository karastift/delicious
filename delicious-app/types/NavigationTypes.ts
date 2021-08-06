import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

// house
export type HouseProps = StackScreenProps<ContentParamList, 'House'>;

// kitchen
export type KitchenProps = StackScreenProps<ContentParamList, 'Kitchen'>;

// whiteboard
export type WhiteBoardProps = StackScreenProps<ContentParamList, 'Whiteboard'>;

// content
export type ContentParamList = {
  Whiteboard: undefined;
  Kitchen: undefined;
  House: undefined;
};

type ContentNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Content'>,
  StackNavigationProp<ContentParamList>
>

export type ContentProps = {
  navigation: ContentNavigationProp,
};

// login
export type LoginProps = StackScreenProps<LoginStackParamList, 'Login'>;

// memberselect
export type MemberSelectProps = StackScreenProps<LoginStackParamList, 'MemberSelect'>;

// loginstack
export type LoginStackParamList = {
  Login: undefined;
  MemberSelect: undefined;
};

type LoginStackNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'LoginStack'>,
  StackNavigationProp<LoginStackParamList>
>;

export type LoginStackProps = {
  navigation: LoginStackNavigationProp,
};

// root
export type RootStackParamList = {
  Content: undefined;
  LoginStack: undefined;
};