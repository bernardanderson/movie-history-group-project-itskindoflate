"use strict";

var app = angular.module("MovieHistory", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/movieCard.html",
      controller: "OMDBSearchCtrl"
    }).
    when("/myMovies", {
      templateUrl: "partials/myMovie.html",
      controller: "myMovieCtrl"
    }).
    when("/watched", {
      templateUrl: "partials/watched.html",
      controller: "WatchedCtrl"
    }).
    when("/register", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/login", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/logout", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/");
});
