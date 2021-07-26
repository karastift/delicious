import 'react-native-gesture-handler';
import React, { createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Content } from './stacks/ContentStack/Content';
import { LoginStack } from './stacks/LoginStack/LoginStack';
import { useMyHouseQuery } from './generated/graphql';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContentScreenOptions } from './navigationOptions/ContentScreenOptions';

const RootStack = createStackNavigator();
const Auth = createContext({
  setAuthenticated: undefined as unknown,
});

const client = new ApolloClient({
  uri: 'http://192.168.178.61:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});

const RootComponent = () => {

  // const { data } = useMyHouseQuery();
  const [authenticated, setAuthenticated] = useState(true);

  // useEffect(() => {
  //   console.log(data)
  //   setAuthenticated(!!data);
  // }, [data]);

  return (
    <Auth.Provider value={{ setAuthenticated }}>
      <NavigationContainer>
        <RootStack.Navigator>
          { authenticated
          ? (<RootStack.Screen name='Content' component={Content} options={ContentScreenOptions}/>)
          : (<RootStack.Screen name='LoginStack' component={LoginStack}/>)
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </Auth.Provider>
  );
};

const App = () => {
  
  return (
    <ApolloProvider client={client}>
      <RootComponent/>
    </ApolloProvider>
  );
};

export default App;