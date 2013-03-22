class Comment < ActiveRecord::Base
  attr_accessible :post_id, :body

  belongs_to :post, :inverse_of => :comments

  validates :post_id, :body, :presence => true
end
