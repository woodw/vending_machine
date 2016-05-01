#My Train of Thought
# Identifying test files format
I need to read the requirements of the kata to understand what module I want to establish first.

This vending machine will accept coins. This means I will have a vending machine object as well as a money object.
*? If coins are determined by size and weight how are dollars figured out.*
1 Todo: learn how vending machines figure out different dollars.

User input will be required to push vending machine buttons including a change return button. Another action will be that they pick the item out of the delivery tray.

If a selection is made, too much change will give money back... but too little change will mean I need to to display how much is required.

Coins return if there is too many, the user chooses not to get something, or if they insert a value that is not accepted. (apparently pennies are go good anymore :0 ) 

Exact change...
*? What prompts Exact change, does this mean the vending machine has no coins at first? I have to start out with 0 money? This would mean that at the beginning of the day there are no nickles. So if we try and return a nickle we will have to reject the transaction because we can not brake the inserted value. Im pretty sure a regular vending machine starts the day with money but how much?*
2 Todo: Figure out how much money a vending machine starts the day with...
Or what I could do for fun is start the user session with a random number of each type of coin so that it emulates a random vending machine encounter instead of a fresh machine.
*? Mwa hahahaha I hold the POWER so I think the Sacagawea dollar will be accepted*