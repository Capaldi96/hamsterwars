const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb+srv://dbHamsters:dbHamsters123@cluster0.setpc.mongodb.net/<dbname>?retryWrites=true&w=majority'
const dbName = 'hamsterwars';
const dbCollection = 'hamster';

function get( filter, callback) {

    MongoClient.connect( url, { useUnifiedTopology : true }, async (error, client)=>{ 

        if(error){
            callback('cant connect to database', error.message)
            console.log(error)
            return;
        }

        const theCollection = client.db(dbName).collection(dbCollection); 

        try{
            const cursor = theCollection.find(filter);
            const array = await cursor.toArray();
            callback(array);

        } catch(error){
            console.log('Wrong query, error: ', error.message);
            callback('Wrong query'); 

        } finally{
            client.close();
        }
    })
}
function getGroup(filter, callback) {
    MongoClient.connect( url, { useUnifiedTopology : true }, async (error, client)=>{ 
        if(error){
            callback('cant connect to database', error.message)
            console.log(error)
            return;
        }
        const theCollection = client.db(dbName).collection(dbCollection); 
        try{
            const cursor = theCollection.aggregate(filter);
            const array = await cursor.toArray();
            callback(array);

        } catch(error){
            console.log('Wrong query, error: ', error.message);
            callback('Wrong query'); 

        } finally{
            client.close();
        }
    })
} 
function addHamster(reqBody, callback){
	console.log('database addHamster')

	

    const document = reqBody;
    MongoClient.connect(url, {useUnifiedTopology: true},
        async (error, client) => {
            if (error){
                callback("'Error! Couldnt connect'");
                return;
            }
            const col = client.db(dbName).collection(dbCollection);
            try {
                const result = await col.insertOne(document);
                callback({
                    result: result.result,
                    ops: result.ops
                })
            } catch(error){
                console.error('Failed to add hamster: ' + error.message);
                callback('"ERROR! query error"');
            } finally{
                client.close();
            }
        }
    )
}
function editHamster(obj,id, callback){
    MongoClient.connect(url, {useUnifiedTopology:true},
        async (error, client) => {
            if (error){
                callback("'Error! Couldnt connect'");
                return;
            }
            const col = client.db(dbName).collection(dbCollection);
            try {
                const result = await col.updateOne({_id: new ObjectID(id) }, { $set: obj });
                callback({
                    result: result.result,
                    ops: result.ops
                })
            } catch(error){
                console.error('Failed to update hamster: ' + error.message);
                callback('error');
            } finally{
                client.close();
            }
        }
    )
}

/* function postWinnerHamster(){

} */

function getAllHamsters(callback) {
    get({}, callback)
}

function getGroupOfHamsters(sort,callback){
	let filter;
	switch (sort) {
		case 'topWinners':
			filter = [ {$sort: {wins : -1} },{ $limit: 5 } ];
			break;
		case 'topLoosers':
			filter = [ {$sort: {defeats : -1} },{ $limit: 5 } ];
			break;
		case 'mostGames':
			filter = [ {$sort: {games : -1} },{ $limit: 5 } ];	
			break;
		case 'leastGames':
			filter = [ {$sort: {games : 1} },{ $limit: 5 } ];	
			break;
		case 'totalGamesEachHamster':
			filter = [ { $project: { totalGamesEachHamster: { $sum: [ "$wins", "$defeats" ]}}}];
			break;
		case 'sumAllWins':
			filter = [ {$group: {_id: null, sumAllWins: {$sum: "$wins"} }} ];
			break;
		case 'sumAllDefeats':
			filter = [ {$group: {_id: null, sumAllDefeats: {$sum: "$defeats"} }} ];
			break;
		case 'sumAllGames':
			filter = [ {"$group" : { _id : null, sumAllGames : { "$sum" : {"$sum" : ["$wins", "$defeats"]}}}}];
			break;
		case 'latestBattles':
			break;
		case 'battle':
			filter = [ {$sample: {size : 2} }];	
			break;
		default:
			filter = [ {$sort: {wins : -1} },{ $limit: 5 } ];
			break;
	}
	getGroup(filter, callback)
}
module.exports = {
    getAllHamsters,
	getGroupOfHamsters,
	addHamster,
	editHamster
}
