# Logic Test ChicksGold

After cloning this repository, run the following commands to run the development environment:

```sh
npm install
npm run dev
```

Likewise, This project is deployed at the following link:

```sh
https://logic-test-chicksgold.netlify.app
```

# Challenge Description
## _OVERVIEW_
Build an application that solves the Water Jug Riddle for dynamic inputs (X, Y, Z). The 
simulation should have a UI (if SPA) to display state changes for each state for each jug 
(Empty, Full or Partially Full).

You have an X-gallon and a Y-gallon jug that you can fill from a lake. (Assume lake has unlimited amount 
of water.) By using only an X-gallon and Y-gallon jug (no third jug), measure Z gallons of water

## _GOLAS_
- Measure Z gallons of water in the most efficient way.
- Build a UI where a user can enter any input for X, Y, Z and see the solution.
- If no solution, display “No Solution”.

## _LIMITATIONS_
 - Actions allowed: Fill, Empty, Transfer

 ## _DELIVERABLES_
The application source code should be on Github and a link should be provided. If this is not an 
option, a public link to the application source code or a zip archive is also acceptable.


# Logical Thinking to Solve the Challenge
The first thing I did was separate the desired algorithm into logical steps. Initially with a pencil and paper I separated the steps into the following:

- Possible use cases (validations).
- Necessary internal aglorhythm functions.
- Main algorithm and function calls within it.

After having defined these resources, I began to evaluate how to expose it in a React component. I decided to use a hook called "useCalcBuckets" to use the logic that I defined on paper, and I created a form that would save its values in a state that would later reach my algorithm using that hook.

Finally, I made the "useCalcBuckets" hook return the value of an array with the values that I would later render into a table with the JavaScript map function inside my component's table.