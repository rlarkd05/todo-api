import mongoose from 'mongoose';
import data from './mock.js';
import Task from '../models/Task.js';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

await Task.deleteMany({});
//deleteMany는 삭제조건을 파라미터로 받는다
await Task.insertMany(data);
//삽입할 데이터를 파라미터로 받는다.

mongoose.connection.close();