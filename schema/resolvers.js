const {UserList, MovieList} = require('../FakeData')
const _ = require("lodash")

const resolvers = {
    Query : {

        // USERS RESOLVERS
        users: () => {
            return UserList
        },
        user: (parent, args) => {
             const id = args.id
             const user = _.find(UserList,{id : Number(id)})
             return user || null
        },

        // MOVIES RESOLVERS
        movies: () => {
            return MovieList
        },
        movie : (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList,{name})
            return movie
        }
    },
    User : {
        favoriteMovies : () => {
            return _.filter(
                MovieList,
                (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <=2010
            )
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = {
                id: UserList[UserList.length - 1].id + 1,
                name: args.input.name,
                username: args.input.username,
                age: args.input.age,
                nationality: args.input.nationality || 'BRAZIL',
            }
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const user = _.find(UserList, {id: Number(args.input.id)})
            if (user) {
                user.username = args.input.newUsername
                return user
            }
        },
        deleteUser: (parent, args) => {
            const id  = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    }
 }

 module.exports = {resolvers}