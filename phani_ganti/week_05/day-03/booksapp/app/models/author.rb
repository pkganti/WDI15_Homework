# == Schema Information
#
# Table name: authors
#
#  id           :integer          not null, primary key
#  name         :string
#  dob          :date
#  publications :text
#  awards       :text
#  bestsellers  :text
#  image        :text
#

class Author < ActiveRecord::Base
  has_many :books
end
