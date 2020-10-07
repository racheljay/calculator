# calculator

### Classes
- numbers
- operators
- calculator - the mother ship, has its own view contains all other objects?
- buttons - child classes
- clear
- display
- place where the equasion is done.

# items 
- currentDisplay = holds whatever current number is


init() {
    loadDisplay {
        set num to 0
    }
    reneder buttons {
        num
        operators
        clear
        decimal
        calculate
    }
};

## calculator 

    # display
        # shows number btn that has been pressed
            - if number is pressed again tack on another number
                - for now lets set the max at 9 digits
            - if operator has been pressed:
                - if there is no number in display do nothing
                    -unless it's '-' the make the next number negative
                - next number btn press goes to new number string
            - if '=' is pressed return current display value
           
        # returns value of completed equasion
            - if '=' has been pressed
                - if no other operator has been pressed return the number currently in display
                - else result of num and operator conditions
    # buttons
        - num 0-9
            -push to digit display
        - operators
            - (+, -, *, /)
        - (=) => returns equasion result, or num if there is no operator
        - clear => zeros out the dispay
            -removes any saved numbers or operators
        - (.) 
            - if this is the first thing pressed, (num / 10)
            - if num is first, place after that num digit
                -disable, cannot be pressed twice
            - if it comes after num and before operator, nothing happends

        # brains
            # takes number from display
                - saves to var or datastructure after btn press that is !== num || clear
            # if operator is pressed
                - apply operator condition to num
                    - after condition applied, return modified num to display
                    - keep going as long as operators are being pressed
                    - if two operators in a row, the newest operator replaces the old operator
            # if (=) return the final sum
            # if (clear) start from scratch




How to get a number to display?

- event listener click
    - get button content
        - if number (push to display array)

How to I compute?

function (num, operator, equals) {

}