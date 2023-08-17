# Testuj.to Assignment - hubmatyas@gmail.com

-   [LIVE BUILD HERE](https://hubma-testujto-assignment.web.app) hosted on firebase
-   **Time to finish**: 2.5 hrs

## Review of the assignment scope

### Usage of React.js/Vue/Angular

I'm using React for this assignment. I'm not that familiar with vue and think that angular could be a little overkill for this.

### Usage of state management of your choice

Im using redux for state management of the table data, but that is not really necessary here. Otherwise i would use useState from the imported json. I would use either fetch() or axios lib in real situation, but I would need an endpoint or put it in the public folder. Putting it in the public folder is not the best idea since the data has user information 🫣

Plus i added the handleRemove() helper function to add the interactivity into the table yb deleting the row and its children.

### Structure of medium-size production application

For sake of this, i added the dataSlice and the store in their separate folders, where they should be (#bestpractice), but it's not that necessary in this project.

### Focus on performance, code quality, correct usage of chosen technologies, data consistency

I used useMemo hook to make sure that the data headers are sent only when the data changes. I dont think that it would be the best case for real app (highly depends on the state of the backend), but for this one its okay.

### Design is not important

Yeah I know, I at least used MUI to display the table. Less strain on eyes. 😎 Still long way to go for something usable.

### (Optional) Write down known issues and what you would done different if you have more time

-   I would definitely work on the visual aspect of the application. The table is really laggy and moves when item gets deleted.
-   The recursive data call is effective, but may cause performance issues - i would set a vertical limit (depthLimit lets say) and logging when it goes over that.
-   I would also render only the cells that are in the window (lazyloading), not all of them at once. Pagination could help, but im not a fan of that in those data tables, because they often have filters and it could get messy (depends on the situation of course).
-   etc.

_And i could fix the return statement in the extract header function, instead of writing cool markdown report :D_
