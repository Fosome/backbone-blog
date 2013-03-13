class Post < ActiveRecord::Base
  attr_accessible :title, :author, :body

  validates :title, :author, :body, :presence => true
end
