Feature: Tic tac toe game

    Scenario: Verify that user wins when a row is complete
        Given user navigated to tic tac toe game screen
        When user "X" plays in index 0
        And user "O" plays in index 3
        And user "X" plays in index 1
        And user "O" plays in index 4
        And user "X" plays in index 2
        Then the info panel should show that the winner is player "X"

    Scenario: Verify that a cell selected by a player cannot be selected by the other player
    # TODO : Implement steps


    Scenario: Verify going back to a certain move goes back to the correct board state
    # TODO : Implement steps