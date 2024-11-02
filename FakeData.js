const UserList =  [
    {
        id: 1,
        name: 'John Doe',
        username: 'john_doe',
        age: 30,
        nationality: 'CANADA',
        friends: [
            {
                id: 2,
                name: 'Jane Smith',
                username: 'jane_smith',
                age: 28,
                nationality: 'BRAZIL'
            },
            {
                id: 3,
                name: 'Alice Johnson',
                username: 'alice_johnson',
                age: 35,
                nationality: 'INDIA'
            }
        ]
    },
    {
        id: 2,
        name: 'Jane Smith',
        username: 'jane_smith',
        age: 28,
        nationality: 'BRAZIL'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        username: 'alice_johnson',
        age: 35,
        nationality: 'INDIA',
        friends: [
            {
                id: 1,
                name: 'John Doe',
                username: 'john_doe',
                age: 30,
                nationality: 'CANADA'
            }
        ]
    },
    {
        id: 4,
        name: 'Bob Brown',
        username: 'bob_brown',
        age: 40,
        nationality: 'GERMANY'
    },
    {
        id: 5,
        name: 'Charlie Davis',
        username: 'charlie_davis',
        age: 25,
        nationality: 'CHILE'
    }
]


const MovieList =  [
    {
        id: 1,
        name: 'Inception',
        yearOfPublication: 2010,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'The Matrix',
        yearOfPublication: 1999,
        isInTheaters: false
    },
    {
        id: 3,
        name: 'The Shawshank Redemption',
        yearOfPublication: 1994,
        isInTheaters: true
    },
    {
        id: 4,
        name: 'Star Wars: The Force Awakens',
        yearOfPublication: 2015,
        isInTheaters: true
    },
    {
        id: 5,
        name: 'The Dark Knight',
        yearOfPublication: 2008,
        isInTheaters: true
    },
    {
        id: 6,
        name: 'Avatar',
        yearOfPublication: 2009,
        isInTheaters: true
    },
    {
        id: 7,
        name: 'The Godfather',
        yearOfPublication: 1972,
        isInTheaters: true
    }
    
]

module.exports = {UserList, MovieList}