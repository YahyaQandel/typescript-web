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
        Then cell 1 should have "X" as its value

    Scenario: Verify going back to a certain move goes back to the correct board state
        When user "X" plays in cell 1
        And user "O" plays in cell 2
        And user "X" plays in cell 5
        And user "O" plays in cell 9
        And user moves back to move 2
        Then cell 5 should have "" as its value
        Then cell 9 should have "" as its value
        Then cell 1 should have "X" as its value
        Then cell 2 should have "O" as its value
        Then board state is equal to its state at move 2