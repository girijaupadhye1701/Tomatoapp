import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://girijaupadhye1710:9657214415@cluster1.pnaah.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster1').then(() =>console.log("DB Connected"));

}