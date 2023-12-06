'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

exports.putImage = async (event, context, callback) => {
    let headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    };
    let statusCode = 200;

    const region = "us-east-1"
    const bucketName = "risen-one-merch-images"
    //const accessKeyId = "AKIA2L6QSTXS3OZDX3WW"
    //const secretAccessKey = "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"

    const s3 = new AWS.S3({
        region
    })

    const data = event.body;

    //create new date value
    let d = new Date();
    let MM = addZero(d.getMonth()+1);
    let dd = addZero(d.getDate());
    let y = d.getFullYear();
    let dt = y + '/' + MM + '/' + dd;

    const params = ({
        Bucket: bucketName,
        Key: "randomname",
        Expires: 60
    })
    

    //const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    //console.log(uploadURL);
    const uploadURL = "https://risen-one-merch-images.s3.amazonaws.com/randomname"

    try{
        await fetch(uploadURL, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: this.data
        })
    } catch (err) {
        return { error: err }
    }
};


function addZero(i) {
    if (i<10) {
        i = '0' + i;
    }
    return i;
}