import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'Bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    },

    'Bins.remove': function(bin) {
        if(bin.ownerId === this.userId) {
            return Bins.remove(bin);
        }
    },

    'Bins.update': function(bin, content) {
        return Bins.update(bin._id, { $set: { content } });
    },

    'Bins.share': function(bin, email) {
        if(bin.ownerId === this.userId) {
            return Bins.update(bin._id, { $push: { sharedWith: email } });
        }
    },

});

export const Bins = new Mongo.Collection('Bins');