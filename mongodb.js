// CURD
const {MongoClient,ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectID();
console.log(id);
MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
    if (error) {
        return console.log('Unable to connect to databse');
    }
    //console.log('Connected correctly!!');
    const db= client.db(databaseName);
    // db.collection('new-tasks').findOne({_id:new ObjectID('60bf480da2b69658044fdefd')},(error,result)=>{
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(result);
    // })
    // db.collection('new-tasks').find({completed:true}).toArray((error,result)=>{
    //     console.log(result);
    // })

    // db.collection('new-tasks').updateMany({completed:false},{
    //     $set : {
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    db.collection('new-tasks').deleteMany({description:'learn DSA'}).then((r)=>{
        console.log(r);
    }).catch((e)=>{
        console.log(e);
    })
})