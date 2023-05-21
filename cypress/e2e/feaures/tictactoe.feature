Feature: Tic tac toe game

    #    Board layout
    #    -------------
    #    | 1 | 2 | 3 |
    #    -------------
    #    | 4 | 5 | 6 |
    #    -------------
    #    | 7 | 8 | 9 |
    #    -------------

    Background: User navigates to tic tac toe game screen
        Given user navigated to tic tac toe game screen

    Scenario: Verify that user wins when a row is complete
        When user "X" plays in cell 1
        And user "O" plays in cell 4
        And user "X" plays in cell 2
        And user "O" plays in cell 5
        And user "X" plays in cell 3
        Then the info panel should show that the winner is player "X"

    Scenario: Verify that a cell selected by a player cannot be selected by the other player
        When user "X" plays in cell 1
        And user "O" plays in cell 1
        Then cell 1 should has "X" as its value

    Scenario: Verify going back to a certain move goes back to the correct board state
        # TODO : Implement steps