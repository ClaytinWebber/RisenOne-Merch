'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

exports.createUser = async (event, context, callback) => {
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

    // Create new timestamp value
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let ts = h + ':' + m;
    // Create new date value
    let MM = addZero(d.getMonth() + 1);
    let dd = addZero(d.getDate());
    let y = d.getFullYear();
    let dt = y + '/' + MM + '/' + dd;

    const params = {
        TableName: process.env.USERS_TABLE, // Adjust table name as needed
        Item: {
            id: uuid.v1(),
            username: data.username,
            password: data.password,
            name: data.name,
            admin: data.admin,
            points: data.points,
            profile_pic: data.profile_pic,
            total_points_redeemed: data.total_points_redeemed,
            createdDate: dt,
            createdTimestamp: ts
        }
    };

    console.log("Creating Users");

    try {
        await dynamoDb.put(params).promise()
            .then(res => {
                callback(null, {
                    statusCode,
                    headers,
                    body: JSON.stringify({ message: 'Created User Successfully!' })
                });
            }).catch(err => {
                console.log(err);
                callback(null, {
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({ message: 'Unable to Create User' })
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
