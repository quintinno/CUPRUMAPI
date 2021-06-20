const AWS = require("aws-sdk");

module.exports = {
    IAM_USER_KEY: "AKIATPTLBOXKBAIY4DQH",
    IAM_USER_SECRET: "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",
    BUCKET_NAME: "cuprumdesenvolvimento",
    AWS_REGION: "us-east-1",
    uploadS3: function( arquivo, nomeArquivo, acl = "public-read" ) {

        return new Promise( (resolve, reject) => {
            let IAM_USER_KEY = this.IAM_USER_KEY;
            let IAM_USER_SECRET = this.IAM_USER_SECRET;
            let BUCKET_NAME = this.BUCKET_NAME;

            let s3bucket = new AWS.S3({
                accessKeyId: IAM_USER_KEY,
                secretAccessKey: IAM_USER_SECRET,
                Bcket: BUCKET_NAME
            });

            s3bucket.createBucket(function() {
                var params = {
                    Bucket: BUCKET_NAME,
                    Key: nomeArquivo,
                    Body: arquivo.data,
                    ACL: acl,
                };
            });

            s3bucket.upload( params, function(error, dados) {
                if(error) {
                    console.log(error);
                    return resolve({ error: true, message: error.message });   
                }
                console.log(data);
                return resolve({ error: false, message: dados });
            });

        });
    },
    deleteS3: function( chaveArquivo ) {
        return new Promise( (resolve, reject) => {
            let IAM_USER_KEY = this.IAM_USER_KEY;
            let IAM_USER_SECRET = this.IAM_USER_SECRET;
            let BUCKET_NAME = this.BUCKET_NAME;

            let s3bucket = new AWS.S3({
                accessKeyId: IAM_USER_KEY,
                secretAccessKey: IAM_USER_SECRET,
                Bcket: BUCKET_NAME
            });

            s3bucket.createBucket(function() {
                s3bucket.deleteObject({
                    Bucket: BUCKET_NAME,
                    Key: chaveArquivo,
                }),
                function(error, dados) {
                    if(error) {
                        console.log(error);
                        return resolve({ error: true, message: error });   
                    }
                    console.log(data);
                    return resolve({ error: false, message: dados });
                }
            });

        });
    },
};