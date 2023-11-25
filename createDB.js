var MongoClient = require('mongodb').MongoClient 
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("coffee"); database.dropDatabase()
        database = client.db("coffee");
        const cup = database.collection("cup");
        const result = await cup.insertOne({name:"Капучино"}); 
        console.log(`${result} documents were inserted`);
    } 
    finally {
           await client.close();
    } 
}
run()