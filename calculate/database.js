const{ MongoClient }=require("mongodb");


const url=
"mongodb+srv://prateekpatil096_db_user:Classmate123@cluster0.w5hfl8l.mongodb.net/";

const client=new MongoClient(url);
const dbName="HelloWorld";

async function main(){
    await client.connect();
    console.log("connected successfull to server");
    const db=client.db(dbName);
    const collection=db.collection("User");

    const data={
        firstName:"naruto",
        lastName:"uzumaki",
        city:"leaf village",
        phonenumber:"0987654321",
    };

    const data2={
        firstName:"itachi",
        lastName:"uchia",
        city:"atauski",
        phonenumber:"0987654321",

    };

   // const insertResult=await collection.insertOne(data2);
    //console.log("inserted data =>",insertResult);

    const findResult=await collection.find({}).toArray();
    console.log("found document=>",findResult);

    const update=await collection.updateOne({firstName:"naruto"},
        {$set:{city:"hidden leaf village "}});
        console.log("updated document=>",update);


    const indexName=await collection.createIndex({firstName:1});
    console.log("index created=>",indexName);

    //const deleteResult=await collection.deleteOne({firstName:"itachi"});
    //console.log("deleted document=>",deleteResult);

    

    const countResult=await collection.countDocuments({});
    console.log("count the documents in user collection=>",countResult);

    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close);
