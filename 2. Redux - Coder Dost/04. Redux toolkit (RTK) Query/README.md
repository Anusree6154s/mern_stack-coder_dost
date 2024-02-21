## Chapter 3 - Redux Toolkit Query

- **Assignment 1** : Add more cases in Account Reducer called `decrementByAmount` . Also check that amount should not be decremented in case `amount` to be decremented is less than account Balance. For e.g. if total amount in account is 10, you can't decrement by 11. Also show an error in that situation to user.

- **Assignment 2** : Create more async thunk examples, we only tried GET USER- `READ` example. But try the `CRUD` example to `Create` new user, `Update` the user, `Delete` the user. 
	  - You have to create a list of `users` which has names of all users in local database
	  - You an `INPUT BOX` to add new users to `list` , users show also add to database and updated in list.[Hint: use REST API concepts for Create API, POST method]
	  - You can put a `delete` button on end of list item. On clicking of this button `user` list item will be deleted from database. [Hint: use REST API concepts Delete API, DELETE method]
	  - You can put a `selected` button on end of list item. On clicking of this button `user` list item will change colors. [Hint: use REST API concepts Update API, PUT/PATCH method]
	  - 
### Related Videos
1. [ REST API concepts](https://youtu.be/xrB51fPM1K4)
2. [REST API complete explanation in NodeJS](https://youtu.be/ChVE-JbtYbM?t=10913)
