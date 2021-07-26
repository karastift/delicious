import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
  code: Scalars['Int'];
};

export type Food = {
  __typename?: 'Food';
  id: Scalars['Int'];
  foodName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  recipeLink?: Maybe<Scalars['String']>;
  house: House;
  createdAt: Scalars['String'];
};

export type FoodInput = {
  foodName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  recipeLink?: Maybe<Scalars['String']>;
};

export type FoodResponse = {
  __typename?: 'FoodResponse';
  food?: Maybe<Food>;
  error?: Maybe<FieldError>;
};

export type House = {
  __typename?: 'House';
  id: Scalars['Int'];
  name: Scalars['String'];
  private: Scalars['Boolean'];
  wishes?: Maybe<Array<Wish>>;
  foods?: Maybe<Array<Food>>;
  createdAt: Scalars['String'];
};

export type HouseResponse = {
  __typename?: 'HouseResponse';
  error?: Maybe<FieldError>;
  house?: Maybe<House>;
};

export type LoginInput = {
  houseName: Scalars['String'];
  password: Scalars['String'];
};

export type MultipleFoodsResponse = {
  __typename?: 'MultipleFoodsResponse';
  foods?: Maybe<Array<Food>>;
  error?: Maybe<FieldError>;
};

export type MultipleWishesResponse = {
  __typename?: 'MultipleWishesResponse';
  wishes?: Maybe<Array<Wish>>;
  error?: Maybe<FieldError>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFood: FoodResponse;
  deleteFood: Scalars['Boolean'];
  updateFood: FoodResponse;
  register: HouseResponse;
  updateMyHouse: HouseResponse;
  deleteMyHouse: Scalars['Boolean'];
  login: HouseResponse;
  logout: Scalars['Boolean'];
  createWish: WishResponse;
  updateWish: WishResponse;
  deleteWish: Scalars['Boolean'];
};


export type MutationCreateFoodArgs = {
  foodInput: FoodInput;
};


export type MutationDeleteFoodArgs = {
  foodId: Scalars['Int'];
};


export type MutationUpdateFoodArgs = {
  foodInput: UpdateFoodInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdateMyHouseArgs = {
  input: UpdateHouseInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationCreateWishArgs = {
  wishInput: WishInput;
};


export type MutationUpdateWishArgs = {
  wishInput: UpdateWishInput;
};


export type MutationDeleteWishArgs = {
  wishId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  chickenNuggets: Scalars['String'];
  allFoods: Array<Food>;
  foodById: FoodResponse;
  foodByName: MultipleFoodsResponse;
  foodForHouseById: MultipleFoodsResponse;
  houseByName: HouseResponse;
  myHouse?: Maybe<HouseResponse>;
  houseById?: Maybe<HouseResponse>;
  wishById: WishResponse;
  myWishesForTimespan: MultipleWishesResponse;
  wishesForHouse: MultipleWishesResponse;
};


export type QueryFoodByIdArgs = {
  foodId: Scalars['Int'];
};


export type QueryFoodByNameArgs = {
  foodName: Scalars['String'];
};


export type QueryFoodForHouseByIdArgs = {
  houseId: Scalars['Int'];
};


export type QueryHouseByNameArgs = {
  houseName: Scalars['String'];
};


export type QueryHouseByIdArgs = {
  id: Scalars['Float'];
};


export type QueryWishByIdArgs = {
  wishId: Scalars['Int'];
};


export type QueryMyWishesForTimespanArgs = {
  endTime: Scalars['String'];
  startTime: Scalars['String'];
};


export type QueryWishesForHouseArgs = {
  houseId: Scalars['Int'];
};

export type RegisterInput = {
  houseName: Scalars['String'];
  password: Scalars['String'];
  private: Scalars['Boolean'];
};

export type UpdateFoodInput = {
  foodName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  recipeLink?: Maybe<Scalars['String']>;
  foodId: Scalars['Int'];
};

export type UpdateHouseInput = {
  houseName: Scalars['String'];
  private: Scalars['Boolean'];
};

export type UpdateWishInput = {
  foodId: Scalars['Int'];
  time: Scalars['String'];
  wishId: Scalars['Int'];
};

export type Wish = {
  __typename?: 'Wish';
  id: Scalars['Int'];
  foodId: Scalars['Int'];
  food: Food;
  houseId: Scalars['Int'];
  house: House;
  time: Scalars['String'];
  createdAt: Scalars['String'];
};

export type WishInput = {
  foodId: Scalars['Int'];
  time: Scalars['String'];
};

export type WishResponse = {
  __typename?: 'WishResponse';
  wish?: Maybe<Wish>;
  error?: Maybe<FieldError>;
};

export type LoginMutationVariables = Exact<{
  houseName: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'HouseResponse' }
    & { house?: Maybe<(
      { __typename?: 'House' }
      & Pick<House, 'id' | 'name'>
    )>, error?: Maybe<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )> }
  ) }
);

export type MyHouseQueryVariables = Exact<{ [key: string]: never; }>;


export type MyHouseQuery = (
  { __typename?: 'Query' }
  & { myHouse?: Maybe<(
    { __typename?: 'HouseResponse' }
    & { house?: Maybe<(
      { __typename?: 'House' }
      & Pick<House, 'id' | 'name' | 'private'>
    )> }
  )> }
);


export const LoginDocument = gql`
    mutation Login($houseName: String!, $password: String!) {
  login(input: {houseName: $houseName, password: $password}) {
    house {
      id
      name
    }
    error {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      houseName: // value for 'houseName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MyHouseDocument = gql`
    query myHouse {
  myHouse {
    house {
      id
      name
      private
    }
  }
}
    `;

/**
 * __useMyHouseQuery__
 *
 * To run a query within a React component, call `useMyHouseQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyHouseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyHouseQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyHouseQuery(baseOptions?: Apollo.QueryHookOptions<MyHouseQuery, MyHouseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyHouseQuery, MyHouseQueryVariables>(MyHouseDocument, options);
      }
export function useMyHouseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyHouseQuery, MyHouseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyHouseQuery, MyHouseQueryVariables>(MyHouseDocument, options);
        }
export type MyHouseQueryHookResult = ReturnType<typeof useMyHouseQuery>;
export type MyHouseLazyQueryHookResult = ReturnType<typeof useMyHouseLazyQuery>;
export type MyHouseQueryResult = Apollo.QueryResult<MyHouseQuery, MyHouseQueryVariables>;