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
function getMatch(callback) {

    MongoClient.connect( url, { useUnifiedTopology : true }, async (error, client)=>{ 

        if(error){
            callback('cant connect to database', error.message)
            console.log(error)
            return;
        }

        const theCollection = client.db(dbName).collection(dbCollection); 
        try{
            const cursor = theCollection.aggregate([ { $sample: { size: 2 } } ]);
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
    const document = reqBody;
    MongoClient.connect(url, {useUnifiedTopology:true},
        async (error, client) => {
            if (error){
                callback("'Error! Couldnt connect'");
                return;
            }
            const col = client.db(dbName).collection(collectionName);
            try {
                const result = await col.insertOne(document);
                callback({
                    result: result.result,
                    ops: result.ops
                })
            } catch(error){
                console.error('Failed to add boat: ' + error.message);
                callback('"ERROR! query error"');
            } finally{
                client.close();
            }
        }
    )
}
function getAllHamsters(callback) {
    get({}, callback)
}

module.exports = {
    getAllHamsters,
	getMatch,
	addHamster
}
