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

    const insertResult=await collection.insertMany([data]);
    console.log("inserted data =>",insertResult);

    const findResult=await collection.find({}).toArray();
    console.log("found document=>",findResult);



    return "done.";
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close);
