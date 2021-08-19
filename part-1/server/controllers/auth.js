const users = []

const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].passwordHash)) {
          const hashlessCopy = {...users[i]};
          delete hashlessCopy.passwordHash;
          res.status(200).send(hashlessCopy);
          console.log(`successful login for ${username}`)
          return;
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const { username, email, firstName, lastName, password } = req.body;
        const salt = bcrypt.genSaltSync(5);
        const passwordHash = bcrypt.hashSync(password, salt)
        const newUser = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        };
        users.push(newUser)
        const hashlessCopy = {...newUser}
        delete hashlessCopy.passwordHash
        console.log(newUser)
        console.log(hashlessCopy)
        res.status(200).send(hashlessCopy)
    }
}