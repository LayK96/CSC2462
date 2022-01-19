CSC 2463- Programming Images and Graphics - Paint App
Layton T. Knight
Lkngig21@lsu.edu
89-0021801

Environment:
I am running a p5 module downloaded on my Mac. I am using Atom.io, the text
editor from Github. I am using a package called "Atom-Live-Server" in order to run a local server on my machine that I then view in Google Chrome. I use chrom because the developer tools with javascript allows me to troubleshoot from the console as well as disable browser caching so I can see everything I type in my javascript file without having to refresh.

Implementation:
I had issues getting my canvas set up at first, but after reading documentation on P5 website, I was able to build a class for selector boxes, to help create them as an object and display them. I had to create methods inside my draw function to determine how to handle mouse position and what to do. I created a function drawing() to specifically handle what to do when mouseX > colorBox positions.
