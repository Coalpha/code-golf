def fizzbuzz(n)
  n.times do |i|
    mod5 = i % 5
    if i % 3
      if i % 5
        puts "fizzbuzz"  
      else
        puts "fizz"
      end
    end
  end
end
fizzbuzz(10)
