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
    }
 }

 module.exports = {resolvers}