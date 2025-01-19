import mongoose, {Schema, Document, } from "mongoose";


 

export interface Blog extends Document{
    tital : string;
    content : String;
   
}

const BlogSchema : Schema<Blog> = new Schema({
    tital : String,
    content : {type : String, default : null},
   

})

export const Blog = ( mongoose.models.Blog as mongoose.Model<Blog>) || mongoose.model<Blog>("Blog", BlogSchema)