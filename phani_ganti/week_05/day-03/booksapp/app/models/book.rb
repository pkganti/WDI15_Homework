# == Schema Information
#
# Table name: books
#
#  id             :integer          not null, primary key
#  name           :string
#  author         :string
#  image          :text
#  classification :text
#  pubyear        :string
#  awards         :text
#

class Book < ActiveRecord::Base
  belongs_to :author
end
