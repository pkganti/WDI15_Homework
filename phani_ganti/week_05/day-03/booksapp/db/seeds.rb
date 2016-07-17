# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Book.destroy_all
Book.create(:name => 'Who Moved My Cheese', :image => 'http://ecx.images-amazon.com/images/I/71il0yFMDSL.jpg', :classification => 'Fiction, Self-help book', :pubyear => '1998', :awards => 'A New York Times business bestseller upon release')

Author.destroy_all
Author.create(:name => 'Spencer Johnson', :dob => '01-01-1940', :publications => 'Yes or No, Who Moved My Cheese, Peaks and Valleys', :awards => '', :bestsellers => 'Who Moved My Cheese', :image => 'http://www.azquotes.com/public/pictures/authors/83/7e/837e154f4d8d045ef6ef98e311dbd821/53b145d402241_spencer_johnson.jpg')
