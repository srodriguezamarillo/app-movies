const fs = require('fs');

module.exports = func = {
    movies: JSON.parse(fs.readFileSync('movies.json', 'utf-8')),
    searchMovie: function (p) { return this.movies.find(m => m.id == p || m.title == p) },
    searchMoviesByGenre: function (g) { return this.movies.filter(m => m.genre == g) },
    totalPrice: function () { return this.movies.reduce((a, m) => a + m.price, 0) },
    changeMovieGenre: function (id, g) { this.movies[this.movies.findIndex(e => e === this.searchMovie(id))].genre = g, this.saveChange(this.movies) },
    saveChange: function (arr) { fs.writeFileSync('movies.json', JSON.stringify(arr)) }
}


