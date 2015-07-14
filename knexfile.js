module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'lesssetup',
      user: 'postgres'
    }
  },

  production: this.development

};