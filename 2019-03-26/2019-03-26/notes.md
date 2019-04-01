01-array
the initial array was 2 in length and the final length of the array was 8 in lenghth

02-array
In the process.argv there 2 and a 0
when x=2 y=6
in this example the coefficients being in reverse did not change the results.

03-array-concat

IF you console.log(clubs.length); you get a result of 2.  clubs2 and clubs1 can't be equal because clubs1 is adding an array of numbers, not just two numbers to an array.
The push after to concate changes the results. the push, changes the arragements of the array in that the push statement is produced before the .concat. If you place the .push before the .concat then the new array is added inside array for club1 and changes the value of clubs, which also changes the value of clubs2. Clubs2 will then have the result of adding the new array due to the .push.

04-array slice
If you add a console.log(.reverse(index)); then we should be able to change the order of the cards.

To change the order of the cards displayed for cards after the cut to the cards before the cut, change the placement of the console.log for the cut cards. You can log the cards that were cut.
Update: create another const to display the cards that were cut before the cards that weren't cut.

05-array spread
06-indexOf
07-array-join
check
08-string split

09-array includes
 diff b/w process.argv[2] and process.argv.slice(2)- The slice returns and empty array vs the .argv[2] returning an undefined. But in each all the card are still displayed. The .argv.slice also add a new card to the array. This means that the card gets included in the array.
 When console.log for the options and you check for a card not in the array it returns false, with the use of argv.slice(2). With the .argv[2] the function can't process

 10-destucturing
 when adding z to the const, the value cannot be defined because the point has not been defined in the const point. There would have to be another value added in order for z to be true. the constant z needs to then be initialized in the console.log. (tested adding z and the program could not be initialized).
 with the [x,y]=[y,x] it means that the values of each variable will stay the same no matter the location within the array.

11-objects
COME BACK to this point

12-destructuring

13-mutate
To change the original values of something
14- assign

15- spread

