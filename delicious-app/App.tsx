import 'react-native-gesture-handler';
import React, { createContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Content } from './stacks/ContentStack/Content';
import { LoginStack } from './stacks/LoginStack/LoginStack';
import { useState } from 'react';
import { ContentScreenOptions } from './navigationOptions/ContentScreenOptions';
import { Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { client } from './utils/createClient';
import { useMyHouseQuery } from './generated/graphql';
import { LoginScreenOptions } from './navigationOptions/LoginStackOptions';

const RootStack = createStackNavigator();
const Auth = createContext({
  setAuthenticated: undefined as unknown,
});

const RootComponent = () => {

  const { data } = useMyHouseQuery();
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    console.log(data);
    setAuthenticated(!!data?.myHouse?.house);
  }, [data]);

  return (
    <Auth.Provider value={{ setAuthenticated }}>
      <NavigationContainer>
        <RootStack.Navigator>
          { authenticated
          ? (<RootStack.Screen name='Content' component={Content} options={ContentScreenOptions}/>)
          : (<RootStack.Screen name='LoginStack' component={LoginStack} options={LoginScreenOptions}/>)
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </Auth.Provider>
  );
};

const App = () => {
  
  return (
    <ApolloProvider client={client}>
      <PaperProvider
        settings={{
          icon: props => <Icon {...props} />,
        }}
      >
        <RootComponent/>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;