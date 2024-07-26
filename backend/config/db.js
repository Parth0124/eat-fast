import mongoose from 'mongoose';

export const connectDb = async () => {
    const uri = 'mongodb+srv://abhangparth:Parth%40Tomato@cluster0.pb1h62i.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database connected"))
        .catch(err => console.error('Connection error', err));
};
