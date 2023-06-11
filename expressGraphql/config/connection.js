const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://admin:admin@sanjeevcluster.h2whbxu.mongodb.net/jwtwithgraphql?retryWrites=true&W=majority")
        console.log("database connected", connect.connection.name)
    }
    catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = { connectDb }