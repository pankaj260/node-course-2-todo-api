const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
	if (err) {
		console.log("Unable to connect to database")
	}else{
		console.log("connected");
	}

	db.collection("Todos").insertOne({
		text:"something to do",
		completed:"fasle"
	},(err,result)=>{
		if (err) {
			return console.log("Unable to insert todod",err);
		}

		console.log(JSON.stringify(result.ops,undefined,2));
	});

	db.collection("Users").insertOne({
		name:"pankaj kumar",
		age:"21",
		location:"patna"
	},(err,result)=>{
		if (err) {
			return console.log("Unable to insert todod",err);
		}

		console.log(JSON.stringify(result.ops,undefined,2));
	});

	db.close();
});