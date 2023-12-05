'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

exports.createItem = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;

    let data;

    try {
        data = JSON.parse(event.body);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        callback(null, {
            statusCode: 400, // Bad Request
            headers,
            body: JSON.stringify({ message: 'Invalid JSON in request body' })
        });
        return;
    }

    console.log('event.body:', event.body);

    //create new timestamp value
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let ts = h + ':' + m;
    //create new date value
    let MM = addZero(d.getMonth() + 1);
    let dd = addZero(d.getDate());
    let y = d.getFullYear();
    let dt = y + '/' + MM + '/' + dd;

    const params = {
        TableName: process.env.ITEMS_TABLE, // Adjust table name as needed
        Item: {
            id: uuid.v1(),
            name: data.name,
            points: data.points,
            size_options: data.size_options,
            color_options: data.color_options,
            image: data.image,
            createdDate: dt,
            createdTimestamp: ts
        }
    };

    console.log("Creating Items");

    try {
        await dynamoDb.put(params).promise()
            .then(res => {
                callback(null, {
                    statusCode,
                    headers,
                    body: JSON.stringify({ message: 'Created Item Successfully!' })
                });
            }).catch(err => {
                console.log(err);
                callback(null, {
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({ message: 'Unable to Create Item' })
                });
            });
    } catch (err) {
        return { error: err };
    }
};

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
