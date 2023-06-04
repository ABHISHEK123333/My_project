const mongoose =require("mongoose");
const DB=process.env.DATA_BASE;
mongoose.connect(DB,{useNewUrlParser:true}).then(async()=>{
    console.log("succesfull");
    const foodCollection = await mongoose.connection.db.collection("food_items");
    foodCollection.find({}).toArray(async function (err, data) {
        if(err){
            console.log(err);
        }
        else{
            global.food_items=data;
        }
    });
}).catch((err)=>{
    console.log("error");
});