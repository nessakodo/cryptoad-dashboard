class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :membership_required, :description
end