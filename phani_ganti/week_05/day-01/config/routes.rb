Rails.application.routes.draw do

  root :to => 'pages#home'

  get '/magic8ball' => 'games#magic8ball'
  get '/magic8ball/answer' => 'games#magic8result'
  # get '/magic8ball/result' => 'games#m8result'

  get '/secretnumber' => 'games#secret_Number'
  get '/secretnumber/result' => 'games#secretresult'

  get '/rockpaperscissors' => 'games#rock_Paper_Scissors'
  get '/rock_paper_scissors/:throw' => 'games#rock_Paper_Scissors_play'


  end
