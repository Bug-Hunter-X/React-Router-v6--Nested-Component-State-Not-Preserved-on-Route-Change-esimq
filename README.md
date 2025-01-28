# React Router v6 Nested Component State Preservation Bug

This repository demonstrates a bug in React Router v6 where the state of nested components is not preserved when navigating between routes.  The issue occurs when using nested components within route elements.  The solution provided addresses the issue by using a state management solution to preserve the nested component's state between route changes.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Run the application: `npm start`

## Bug Description

The bug is demonstrated in `bug.js`.  When navigating between the home and about pages, the state of the nested counter component is not preserved.  This is unexpected behavior in a typical application, and it could create issues with data integrity. 

## Solution

The solution provided in `bugSolution.js` demonstrates how to solve the problem using React Context API to manage state globally.  The context API allows data to be passed down to child components while still being available even if routing changes occur.  Other state management libraries like Redux or Zustand could also achieve this.
