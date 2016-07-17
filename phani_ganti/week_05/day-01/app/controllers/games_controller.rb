class GamesController < ApplicationController

  def magic8ball
    answers = {1 => 'It is certain', 2 => 'It is decidedly so', 3 => 'Without a doubt',
      4 => 'Yes, definitely', 5 => 'You may rely on it', 6 => 'As I see it, yes',
      7 => 'Most likely', 8 => 'Outlook good', 9 => 'Yes',
      10 => 'Signs point to yes', 11 => 'Reply hazy try again',
      12 => 'Ask again later', 13 => 'Better not tell you now',
      14 => 'Cannot predict now', 15 => 'Concentrate and ask again',
      16 => "Don't count on it", 17 => 'My reply is no',
      18 => 'My sources say no', 19 => 'Outlook not so good',
      20 => 'Very doubtful'}
      values = answers.values
      @result=values[rand(values.size)]

  end

  def magic8result
      magic8ball
  end

  def secret_Number

  end

  def secretresult
    @computer_Value = rand(1...10)
    @user_guess = params[:number].to_i

    if @computer_Value==@user_guess
      render :secretsuccess
    else
      render :secretfailure
    end
  end

  def rock_Paper_Scissors
  end

  def rock_Paper_Scissors_play
    value = ["rock", "paper", "scissors"]
    @server_Value = value[rand(value.size)]
    result = ""
    if @server_Value=='rock' && params[:throw]=='scissors'
      result = "Computer Won"
    elsif @server_Value=='paper' && params[:throw]=='rock'
      result = "Computer Won"
    elsif @server_Value=='scissors' && params[:throw]=='paper'
      result = "Computer Won"
    elsif @server_Value == params[:throw]
      result = "Game is a tie"
    else
      result = "You won !!"
    end
    @end_result = result
    
  end

end
