import mongoose from 'mongoose';
import { connectToServer } from './server';
import { config } from './config' 

const url = config.connectionDB;
const options = config.options;

mongoose.connect(url, options, (err: any) => {
    if (err) throw err; 
    console.log('Connected to data base');
    connectToServer();
});
