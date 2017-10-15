module.exports = {
  servers: {
    one: {
      host: '165.227.188.21',
      username: 'root',
      password: 'kl0n0likespen15'
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'party_vibe',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {/*
      serverOnly: true,*/
    },
    docker: {
      image: 'abernix/meteord:base'
    },
    env: {
      ROOT_URL: 'http://partyvibe.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
