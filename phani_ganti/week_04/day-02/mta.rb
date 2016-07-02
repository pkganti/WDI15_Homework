require 'pry'
Lines = {
"N" => %w(TimesSquare 34th 28th 23rd UnionSquare 8th),
"L" => %w(8th 6th UnionSquare 3rd 1st),
"6" => %w(GrandCentral 33rd 28th 23rd UnionSquare AstorPlace)
}

def prompt(message)
  print message
  gets.chomp
end

def boarding_Line
  prompt "Enter the boarding line: "
end

def boarding_Stop
  prompt "Enter the boarding stop: "
end

def dest_Line
  prompt "Enter the destination line: "
end

def dest_Stop
  prompt "Enter the destination stop: "
end

def get_Stop_Index(line, stop)
  index = Lines[line].index(stop)
  return index.to_i
end

def get_Intersection(line)
  index = Lines[line].index("UnionSquare")
  return index.to_i
end

def travel_Route(line1, stop1, line2, stop2)
  intersection1 = get_Intersection(line1)
  intersection2 = get_Intersection(line2)
  iPoint = ["UnionSquare"]

  stops1 = []
  stops2 = []

  stops1 = Lines[line1][intersection1..stop1].reverse if stop1 > intersection1 #Reversing the array since slicing is from the lower index to higher
  stops1 = Lines[line1][stop1..intersection1] if stop1 < intersection1

  stops2 = Lines[line2][intersection2..stop2] if stop2 > intersection2
  stops2 = Lines[line2][stop2..intersection2].reverse if stop2 < intersection2 #Reversing the array since slicing is from lower index

  return (stops1 - iPoint) + iPoint + (stops2 - iPoint)
end


def get_Stops
  iPoint = ["UnionSquare"]
  l1 = boarding_Line #Getting boarding line
  l1stop = boarding_Stop #Getting boarding stop
  startIndex = get_Stop_Index(l1, l1stop)
  l2 = dest_Line #Getting destination line
  l2stop = dest_Stop #Getting destination stop
  stopIndex = get_Stop_Index(l2, l2stop)
  totalStops = travel_Route(l1, startIndex, l2, stopIndex) #Getting the array of stops from starting point to end point

  change_over = totalStops.index("UnionSquare") #Getting the UnionSquare index get the user notified of the change over
  length = (totalStops.size)-1 #Actual length of the totalStops array

  # If the source and destination lines and stops are same
  if l1==l2 && l1stop == l2stop
    puts "Wake up.. time to go to work"
  # If the source and destination lines are same
  elsif l1==l2
    puts "Total stops are: #{totalStops.size}"
    totalStops[0..change_over].each do |i| #Displaying the stops in Line 1
      puts "Journey Line #{l1} - #{i}"
    end
    totalStops[change_over+1..length].each do |i| #Displaying the stops in Line 2
      puts "Journey Line #{l2} - #{i}"
    end
  # If the Source and destination lines are different
  else
    puts "Total stops are: #{totalStops.size}"
    totalStops[0...change_over].each do |i| #Displaying the stops in Line 1
      puts "Journey Line #{l1} - #{i}"
    end
    puts "Change at UnionSquare"
    totalStops[change_over+1..length].each do |i| #Displaying the stops in Line 2
      puts "Journey Line #{l2} - #{i}"
    end
  end
end
get_Stops
