const { AuthenticationError } = require('apollo-server-express');
const { User, Video } = require('../models');
const { signToken } = require('../utils/auth');


const s3Bucket = process.env.S3_BUCKET_NAME

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    getVideo: async(parent, { key }) => {
      const params= {
        Bucket: s3Bucket,
        Key: key,
      }

      const signedUrl = await s3.getSignedUrlPromise('getObject', params);

      return { key, url: signedUrl };
    }
  },

  // Mutation: {
  //   // AWS 
  //   signS3: async (parent, {
  //     filename, filetype
  //   }) => {
  //     const s3 = new aws.S3({
  //       signatureVersion: 'v4',
  //       region: process.env.S3_BUCKET_REGION
  //     })

  //     const s3Params = {
  //       Bucket: s3Bucket,
  //       Key: filename,
  //       Expires: 60,
  //       ContentType: filetype,
  //       ACL: 'public-read'
  //     };

  //     const signedRequest = await s3.getSignedUrl('putObject', s3Params);
  //     const url = `https://${s3Bucket}.s3.amazonaws.com/${filename}`

  //     return {
  //       signedRequest,
  //       url,
  //     }
  //   }
  // }
};

module.exports = resolvers;
