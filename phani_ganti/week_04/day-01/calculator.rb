def prompt(message)
  print message
  gets.chomp#implicit return
end

####Methods in calculator####

def menu
  puts "(a) - addition"
  puts "(s) - substraction"
  puts "(d) - division"
  puts "(m) - multiplication"
  puts "(r) - squareroot"
  puts "(e) - exponent"
  puts "(b) - BMICalculator"
  puts "(o) - Mortgage Calculator"
  puts "(q) - quit"

  prompt "Enter your choice: "
end

def add
  puts "Enter the numbers to add: "
  a = gets.to_i
  b = gets.to_i
  a+b
end

def subtract
  puts "Enter the numbers to subtract: "
  a = gets.to_i
  b = gets.to_i
  a-b
end

def multiply
  puts "Enter the numbers to multiply: "
  a = gets.to_i
  b = gets.to_i
  a*b
end

def divide
  puts "Enter the numbers to divide: "
  a = gets.to_i
  b = gets.to_i
  a/b
end

def squareroot
  puts "Enter the number to find the square root: "
  a = gets.to_i
  Math.sqrt(a)
end

def exponent
  puts "Enter the numbers to find the exponent of: "
  a = gets.to_i
  b= gets.to_i
  a**b
end

def bmiCalculator
  puts "Please enter your weight in kilos and height in feet: "
  bmi_weight = gets.to_f
  bmi_height = gets.to_f
  bmi = bmi_weight/(bmi_height*bmi_height)
end

def mortgagecalc
  puts "Please enter the principal amount, rate of interest and term period in months: "
  pr = gets.to_i
  int = gets.to_f
  int = (int / (12 * 100))
  n = gets.to_i
  monthly_repayment =   (pr * int)/(1-(1+int)**-n)
  monthly_repayment
end




###End of methods of calculator####

menu_selection = menu

until menu_selection=='q'
  case menu_selection
  when 'a'
    puts "The sum of the numbers is #{add}"
  when 's'
    puts "The difference of the numbers is #{subtract}"
  when 'd'
    puts "The division of the numbers is #{divide}"
  when 'm'
    puts "The multiplication of the numbers is #{multiply}"
  when 'r'
    puts "The square root of the number is #{squareroot}"
  when 'e'
    puts "The exponent of the numbers is #{exponent}"
  when 'b'
    puts "Your BMI is #{bmiCalculator}"
  when 'o'
    puts "Your monthly mortgage payment is #{mortgagecalc}"
  else
    puts "Invalid selection, please try again"
  end
  menu_selection = menu
end

puts "Thanks for using this calculator"
