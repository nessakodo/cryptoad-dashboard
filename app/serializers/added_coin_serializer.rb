class AddedCoinSerializer < ActiveModel::Serializer
    attributes :id, :added, :coin_name, :user_name
  
    has_one :user
    # has_one :coin

  
    def coin_name
      "#{object.coin.name}"
    end
  
    def user_name
      "#{object.user.name}"
    end
  
  end