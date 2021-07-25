import 'reflect-metadata';
import 'dotenv-safe/config';
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
import cors from 'cors';
import { serverUp } from './messages/generalMessages';

const main = async () => {

    await createConnection({
        type: 'postgres',
        database: 'delicious',
        username: 'kara',
        password: 'Luna05',
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        entities: [Wish, Food, House],
    });

    const app = express();

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();
    
    app.set('proxy', 1);

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        }),
    );

    app.use(
        session({
            name: process.env.COOKIE_NAME,
            store: new RedisStore({
                client: redisClient,
                disableTouch: true,
                url: process.env.REDIS_URL,
            }),
            cookie: {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
                secure: false // only set to true if i have a domain for my backend (and ssl)
            },
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET,
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

    app.listen(parseInt(process.env.PORT), () => console.log(serverUp));
};

main()
    .catch(e => console.error(e));