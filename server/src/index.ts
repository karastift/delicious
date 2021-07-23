import 'reflect-metadata';
import { cookieName, port, __prod__ } from './constants';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { ChickenNuggetsResolver } from './resolvers/chickenNuggets';
import { FoodResolver } from './resolvers/food';
import { createConnection } from 'typeorm';
import { Wish } from './entities/Wish';
import { Food } from './entities/Food';
import { House } from './entities/House';
import { HouseResolver } from './resolvers/house';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types/MyContext';

const main = async () => {

    await createConnection({
        type: 'postgres',
        database: 'delicious',
        username: 'kara',
        password: 'Luna05',
        logging: !__prod__,
        synchronize: !__prod__,
        entities: [Wish, Food, House],
    });
    
    const app = express();

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();

    app.use(
        session({
            name: cookieName,
            store: new RedisStore({
                client: redisClient,
                disableTouch: true,
            }),
            cookie: {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
                secure: false // only set to true if i have a domain for my backend
            },
            saveUninitialized: false,
            secret: 'cat',
            resave: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ChickenNuggetsResolver, FoodResolver, HouseResolver],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ req, res }), // add redis
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground,
        ],
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.listen(port, () => console.log('Server started on localhost:'+port))
};

main()
    .catch(e => console.error(e));