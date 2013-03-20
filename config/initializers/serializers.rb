ActiveSupport.on_load(:active_model_serializers) do
  ActiveModel::ArraySerializer.root = false   # turn off array root
  self.root = false                           # turn off model root
end
