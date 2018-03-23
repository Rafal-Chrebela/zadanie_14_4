var movies = [
  {
    id: 1,
    title: "The Matrix",
    desc: "Film o walce człowieka z maszynami",
    image: "./matrix.jpg"
  },
  {
    id: 2,
    title: "The Lord of The Rings",
    desc: "Trylogia fantasy",
    image: "./lord.jpg"
  },
  {
    id: 3,
    title: "Gladiator",
    desc: "Rola życia Russella Crowe'a",
    image: "./gladiator.jpg"
  },
  {
    id: 4,
    title: "Saving Private Ryan",
    desc: "Jeden z najlepszych filmów wojennych wszechczasów",
    image: "./ryan.jpg"
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement(
      "li",
      { key: this.props.movie.id },
      React.createElement(MovieTitle, { title: this.props.movie.title }),
      React.createElement(MovieDescription, { desc: this.props.movie.desc }),
      React.createElement(MovieImage, { image: this.props.movie.image })
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.IsRequired
  },
  render: function() {
    return React.createElement("h2", {}, this.props.title);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.IsRequired
  },

  render: function() {
    return React.createElement("p", {}, this.props.desc);
  }
});

var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.object.IsRequired
  },

  render: function() {
    return React.createElement("img", { src: this.props.image });
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, { key: movie.id, movie: movie });
});

var moviesList = React.createClass({
  render: function() {
    return React.createElement("ul", {}, moviesElements);
  }
});

var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement(moviesList, {})
);

ReactDOM.render(element, document.getElementById("app"));
