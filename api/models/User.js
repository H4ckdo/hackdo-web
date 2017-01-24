module.exports = _.extend({
  validatePassword: function(data, candidate, resolve, reject) {
		bcrypt.compare(candidate, data.password, function(err, match) {
			if(err) return reject(new Error("serverError"));
			if(match) {
				User.update(data.id, {isLogin : true})
						.then(function(docs) {
							if(utils.not(docs)) return resolve(null);
              return resolve({authentication : true, id : data.id, rol: data.rol});
						})
						.catch((err)=> reject(new Error("serverError")));
			} else {
				return reject(new Error("forbidden"));
			}
		});
  },//validatePassword

  updateSure: function(id, update, session) {
    return (new Promise((resolve, reject)=> {
        let remove = ['id', 'rol', 'isLogin'];
        if(session.rol === 'superadmin') {
          //superadmin path
          _.remove(remove, (rm)=> rm === 'rol');//allow to superadmin change rol
          if(update.hasOwnProperty('rol')) update.rol = 'superadmin';//dont allow that a superadmin downgrade
        } else {
          //admin path
          if(update.hasOwnProperty('rol')) return reject(new Error("forbidden"))
        }

        update = utils.clearUpdate(update, remove);
        if(Object.keys(update).length === 0) reject(new Error("badRequest"));//candidate update invalid
        let isValid = utils.model.validateData(User, update);
        if(isValid) {
          if(update.hasOwnProperty('password')) {
            bcrypt.hash(update.password, 10, function(err, hash) {
              if(err) return reject(new Error("serverError"));
              update.password = hash;
              User.update(id, update).then((updated)=> {
                if(updated && updated.length === 0) return reject(new Error("notFound"));
                resolve(update);
              }).catch(reject);
            });
          } else {
            return User.update(id, update).then((updated)=> {
              if(updated && updated.length === 0) return reject(new Error("notFound"));
              resolve(update);
           }).catch(reject);
          }
        } else {
          return reject(new Error("forbidden"));
        }
      })
    );
    /*
      @params
        *id<String>: mongodb id represent as a string
        *update<Object>: Represent the data to update
        *session<Object>: Represent the session object which store the session information
      Description: `Update a document restricting the update access for rol of the user via session.
                    Also clean the @update argument | do the query`
      Return<Promise>
    */
  },//end updateSure

  login: function(data = {}, req = {}) {
  	let self = this;
  	return (new Promise(function(resolve, reject) {
        let hasEmail = data.hasOwnProperty("email");
        let hasPassword = data.hasOwnProperty("password");
  			if(utils.not(hasPassword) || utils.not(hasEmail)) return reject(new Error("badRequest"));
  			User.findOne({email: data.email}).then(function(docs) {
  				if(utils.not(docs)) return resolve(null);
  				self.validatePassword(docs, data.password, resolve, reject);
   			}).catch((err)=> reject(err));
  		})
  	)
  },//end login

  logout: function(session) {
  	let self = this;
  	let id = session.userId;
  	return (new Promise(function(resolve, reject) {
			if(!session.hasOwnProperty('authenticated') || session.authenticated === false) return reject(new Error("notAllow"));
      User.update(id, {isLogin: false})
				.then(function(docs) {
					if(utils.not(docs)) return resolve(null);
					session.destroy((err)=> err ? reject(new Error("serverError")) : resolve({authentication: false}));
				})
				.catch((err)=> reject(new Error("serverError")));
  		})
  	)
  },
  beforeCreate: function(data, next) {
	  bcrypt.hash(data.password, 10, function(err, hash) {
	    if(err) return next(err);
	    data.password = hash;
	   	next();
	  })
  },

	attributes: {
 		id: {
      type: 'objectid',
      primaryKey: true
    },
    isLogin: {
    	type: 'boolean',
    	defaultsTo: false
    },
    password: {
      type: 'string',
      size: 20,
      required: true
    },
    rol: {
      type: 'string',
      required: true,
      enum: ['admin', 'superadmin', 'speaker']
    },
		name: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true,
			unique: true
		},
    events: {
      collection: 'event',
      via: 'speakers'
    }
	}
}, utils.model);
