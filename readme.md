
# Regex HexCode Matcher

## Table of Contents

[tutorial](#tutorial)
  -[part1](#part-1)
  -[part2](#part-2)
  -[part3](#part-3)
  -[part4](#part-4)

## Tutorial

  the regex we are working with is: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
  lets break it down into sections >

### part 1

/^#?   ^ means match any first character, in this case the first character must be a #, and the ? means this must be followed by- part2>

### part 2

skipping the brackets... you can assume they do the same thing as they would in js... [a-f0-9]  {6}    a-f will mean any english alphabetical character between and including a through f, likewise with 0-9,[a-f0-9] in total meaning any character a through f or any number 0-9. Lastly {6} all this means is there must be 6 characters within the rules defined before

### part 3

 |  [a-f0-9]{3}   " | "    meanning or again any character a-f or number 0-9 and {3}, 3 characters within these rules.


### part 4

4: $/ essentialy ending the regex...

### test

  you can test and work with the specific regex, with the code I have provided in the github repository [HERE](https://github.com/whotf1/regexHexMatcher). This code snippet requires node to be installed, run the js file in your favorite IDE or console, mine is bash, and run node main.js and you will see the outputs!