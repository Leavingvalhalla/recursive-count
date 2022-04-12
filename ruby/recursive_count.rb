def recursive_count(num = 0)
  if num < 10
    puts num
    recursive_count(num + 1)
  end

end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
