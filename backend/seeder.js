const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const User = require('./models/User');
const Task = require('./models/Task');
const bcrypt = require('bcryptjs');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

const importData = async () => {
    await connectDB();

    try {
        // Clear existing data
        await User.deleteMany();
        await Task.deleteMany();

        // Create Admin User
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('123456', salt);

        const createdUser = await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: hashedPassword,
        });

        // Create Sample Tasks
        const tasks = [
            {
                user: createdUser._id,
                title: 'Setup Environment',
                description: 'Install Node.js, MongoDB, and VS Code',
                completed: true,
            },
            {
                user: createdUser._id,
                title: 'Learn React',
                description: 'Understand Components, Props, and State',
                completed: false,
            },
            {
                user: createdUser._id,
                title: 'Build MERN App',
                description: 'Connect frontend to backend',
                completed: false,
            },
        ];

        await Task.insertMany(tasks);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    await connectDB();
    try {
        await User.deleteMany();
        await Task.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
