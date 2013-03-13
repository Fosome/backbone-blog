class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :body, :created_at, :updated_at
end
