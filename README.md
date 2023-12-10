[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11974302&assignment_repo_type=AssignmentRepo)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature. I have also not provided any test code, but you
can base yours on test code from other exercises.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

There is not a difference in the asymptotic complexity of this algorithm and that which was
implemented in fibonacci-invariants. In both cases, we are making one recursive call to 
compute one additional fibonacci number. Sure, the tail-recursive method takes two more 
parameters; however, there is no additional work involved given all of the computation
for both of them is done before the recursive call. With this in mind, we conclude the 
time-complexity to be $\theta (n)$ given that each call runs in linear time with respect
to the number of fibonacci numbers to generate.
