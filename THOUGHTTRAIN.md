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

I am making a vending machine test file. the tricky part is figuring out what actions are fully on the client vs whats on the server.
* I will push a button - client - I dont think that I care about validating the pushed button.
* Once the... 4 buttons are pressed I will send a request about these 4 values. - server - The server should accept 4 digits and determine what the next action is
* If the digits correlate to an item I need to determine if the item is there. - server
* If the item is there then I need to see the price of the item - server
* Determine the course of action that needs to happen based on the price inserted - server
**? When someone enters coins do I need to store this information server side ... initial thoughts is no*

I think those are the first thoughts I will care about and then there will be a seperate coin validation test.
[{'size':1,'weight':1},{'size':2,'weight':2}]
I need an enum of size weights on the coin object 

# And my brian takes over
I know it says coins... but how fun would it be to design this for hyrule? :-)

Working on the vending machine test I need to make sure that it contains rupees which means that I need to make rupees before I make the vending machine. So I will now have to turn my focus onto rupees.

A thing to note is the instructions talk about determining currency by size and weight. I will play loose with the fact that they are two variables which are uniuqe between coins. I will use size and color and pretend that my vending machine has a method of determining color.