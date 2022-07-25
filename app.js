
const mov = require('./funcMovies');

switch (process.argv[2]) {
    case undefined:
        console.log('Atention - You must enter an action.')
        break
    case 'list':
        console.log('\nList of Movies:\n---------------');
        mov.movies.forEach(m => console.log(m.id + '. ' + m.title))
        break
    case 'search':
        const m = mov.searchMovie(process.argv[3]); !m ? console.log('NULL') :
        console.log('\nSearch Movie: ' + m.id + '\n---------------\nTitle: ' + m.title + '\nRating: ' + m.rating
            + '\nAwards: ' + m.awards + '\nLength: ' + m.length + '\nPrice: ' + m.price + '\nGenre: ' + m.genre)
        break
    case 'genre':
        console.log('\nMovies by Genre:\n----------------');
        const mg = mov.searchMoviesByGenre(process.argv[3]); !mg ? console.log('NULL') :
        mg.forEach(m => console.log(m.id + '. ' + m.title))
        break
    case 'total':
        console.log('\nTotal Price:\n------------\n$ ' + mov.totalPrice());
        break
    case 'change':
        mov.changeMovieGenre(process.argv[3], process.argv[4])
        console.log('\nThe movie ' + process.argv[3] + ' genre was changed to ' + process.argv[4])
        break
    default:
        console.log('\nType an option :\n----------------\n1. list\n2. search' +
        '\n3. genre [one genre]\n4. total\n5. change [movie id] [new genre]')
        break
}

