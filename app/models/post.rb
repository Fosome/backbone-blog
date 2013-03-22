class Post < ActiveRecord::Base
  attr_accessible :title, :author, :body

  has_many :comments, :dependent => :destroy, :inverse_of => :post

  validates :title, :author, :body, :presence => true
end
