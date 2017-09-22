#Install and use mongoose

    npm install mongoose

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');


#Check for database connections
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    // we're connected!
    });

#MongooseSchema Details

    Schema is blueprint

    Model is a class representation of schema as a document user can create 
    documents using model with new keyword

    Collection name is plural of model name

    


    With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens

        var kittySchema = mongoose.Schema({
        name: String
    });

    We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.

    var Kitten = mongoose.model('Kitten', kittySchema);

    A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); 

    Methods can be added to schema and can be used in documents

            kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
        }

        var fluffy = new Kitten({ name: 'fluffy' });
        fluffy.speak(); 


#Saving documents to MongoDB

    We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occured.
   
        fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
    });

#find all documents of that model

    We can access all of the kitten documents through our Kitten model.

        Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
        })
    we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.
    Kitten.find({ name: /^fluff/ }, callback);


#Plugins
    Schemas are pluggable, that is, they allow for applying pre-packaged capabilities to extend their functionality. This is a very powerful feature.

        module.exports = exports = function lastModifiedPlugin (schema, options) {
    schema.add({ lastMod: Date })
    
    schema.pre('save', function (next) {
        this.lastMod = new Date
        next()
    })
    
    if (options && options.index) {
        schema.path('lastMod').index(options.index)
    }
    }

    // game-schema.js
    var lastMod = require('./lastMod');
    var Game = new Schema({ ... });
    Game.plugin(lastMod, { index: true });

    // player-schema.js
    var lastMod = require('./lastMod');
    var Player = new Schema({ ... });
    Player.plugin(lastMod);