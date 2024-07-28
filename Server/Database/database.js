import mongoose from "mongoose";

const connection = async (username, password) => {

const url = `mongodb://${username}:${password}@ac-g8ilejk-shard-00-00.n7nl6tg.mongodb.net:27017,ac-g8ilejk-shard-00-01.n7nl6tg.mongodb.net:27017,ac-g8ilejk-shard-00-02.n7nl6tg.mongodb.net:27017/crud-app?ssl=true&replicaSet=atlas-12yg2t-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
      await mongoose.connect(url, {useUnifiedTopology : true, useNewUrlParser : true})
      console.log("Database Created, Connected & running Successfully :)")
    } catch (error) {
        console.log(`Error while connecting database`, error)
    }
}

export default connection;