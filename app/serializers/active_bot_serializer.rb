class ActiveBotSerializer < ActiveModel::Serializer
    attributes :id, :active, :bot_name, :user_name
  
    has_one :user
    has_one :bot
  
    def bot_name
      "#{object.bot.name}"
    end
  
    def user_name
      "#{object.user.name}"
    end
  
  end