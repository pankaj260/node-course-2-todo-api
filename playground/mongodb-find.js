const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
	if (err) {
		console.log("Unable to connect to database")
	}else{
		console.log("connected");
	}

	db.collection("Todos").find().toArray().then((docs) => {
		console.log("TODOS");
		console.log(JSON.stringify(docs, undefined,2));

	},(err)=>{
		console.log("Cannot fetch data"+err);
	})
	db.close();
});