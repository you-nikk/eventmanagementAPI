const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const dbConnect = require("./db/conn");
const { ObjectId } = require('mongodb');
// Body parser middleware
app.use(express.json());

//GET REQUEST
app.get('/api/v3/app/events', async (req, res) => {
  try {
    const db = await dbConnect();
    const {id,type,limit,page}=req.query;
    // console.log(type);
    const event_id = parseInt(req.query.id);
    if (id) {
      const eventById = await db.findOne({id: event_id });
      console.log(eventById);
      res.json(eventById);
    }else{
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const eventByType = await db.find({type}).skip(skip).limit(parseInt(limit)).toArray();
    console.log(eventByType);
    res.json(eventByType);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//POST REQUEST

app.post("/api/v3/app/events",async(req,res)=>{
   try {
    const db = await dbConnect();
    const postData = await db.insertOne(req.body);
    // const dataPosted = await postData.save();
    console.log(postData);
    res.status(201).json(postData);
   } catch (error) {
    console.log(error);
    res.status(400).json({error:"Could Not post data"});
   }
});
//Update PUT REQUEST
app.put("/api/v3/app/events/:id",async(req,res)=>{
   try {
    const db = await dbConnect();
    const _id = parseInt(req.params.id);
    const updateData = await db.updateOne({id:_id},{$set:req.body},{new:true});
    // const dataPosted = await postData.save();
    console.log(updateData);
    res.status(201).json(updateData);
   } catch (error) {
    console.log(error);
    res.status(400).json({error:"Could update data"});
   }
});
//DELETE REQUEST
app.delete("/api/v3/app/events/:id",async(req,res)=>{
   try {
    const db = await dbConnect();
    const _id = parseInt(req.params.id);
    const deleteData = await db.deleteOne({id:_id});
    // const dataPosted = await postData.save();
    console.log(deleteData);
    res.status(201).json(deleteData);
   } catch (error) {
    console.log(error);
    res.status(400).json({error:"Could update data"});
   }
});

  // Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
