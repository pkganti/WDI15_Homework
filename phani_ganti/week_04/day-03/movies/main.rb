require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/movies/about' do
  erb :about
end

get '/movies' do
  erb :movies
end

get '/' do
  erb :movies
end

get '/movieinfo' do
  @title = params[:movietitle]
  url = "http://omdbapi.com/?s=#{@title}"
  movie_info = HTTParty.get url
  @movies=[]
  if movie_info["Search"].length==1
    @title = params[:movietitle]
    url = "http://omdbapi.com/?t=#{@title}"
    movie_info = HTTParty.get url
    @poster = movie_info["Poster"]
    @director = movie_info['Director']
    @poster = movie_info['Poster']
    @genre = movie_info['Genre']
    @plot = movie_info['Plot']
    @rating = movie_info['imdbRating']
    return erb :movie_detail
  end
  movie_info["Search"].each do |i|
    @movies.push(i["Title"])
  end

  erb :movies_list
end

get '/movie/name' do
  @title = params[:title]
  url = "http://omdbapi.com/?t=#{@title}"
  movie_info = HTTParty.get url
  @poster = movie_info["Poster"]
  @director = movie_info['Director']
  @poster = movie_info['Poster']
  @genre = movie_info['Genre']
  @plot = movie_info['Plot']
  @rating = movie_info['imdbRating']

  erb :movie_detail
end
