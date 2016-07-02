require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

#This is the first view page, sort of home page which displays all the indexes
get '/library' do
  @books = query_db "select * from books"
  erb :library_index
end

#This is the home page that gets redirected to the library page by default
get '/' do
  erb :home
end

#This takes you to add new book screen
get '/library/new' do
  erb :library_new
end

get '/library/search' do
  @mybooks = query_db "select * from books where name='#{params[:name]}'"
  erb :books_search
end

#This is the book page that is selected
get '/library/:id' do
  @book = query_db "select * from books where id=#{params[:id]}"
  @book = @book.first
  erb :book_show
end

#This is the post method to create new book
post '/library' do
  query = "INSERT INTO books(name, cover, author, pubyear)
  VALUES('#{params[:name]}','#{params[:cover]}','#{params[:author]}','#{params[:pubyear]}')";
  query_db query;
  redirect to ('/library')
end

#This method allows you to edit the book
get '/library/:id/edit' do
  @book = query_db "select * from books where id=#{params[:id]}"
  @book = @book.first
  erb :book_edit
end

#This post method updates after editing the book
post '/library/:id' do
  query = "update books set name='#{params[:name]}', author='#{params[:author]}', cover='#{params[:cover]}',
  pubyear='#{params[:pubyear]}' where id='#{params[:id]}'"
  query_db query
  redirect to('/library/'+params[:id]+'/edit')
end

#This get method deletes the book and redirects to the list page
get '/library/:id/delete' do
  query_db "delete from books where id=#{params[:id]}"
  redirect to '/library'
end

#Method to establish connection with database and do the CRUD operations based on query
def query_db(sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  result = db.execute sql
  db.close
  result
end
