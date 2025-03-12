import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setDie1] = useState<number>(2);
    const [die2, setDie2] = useState<number>(3); // Ensure initial values are not the same
    function rollRight(): void {
        setDie1(d6());
    }
    function rollLeft(): void{
        setDie2(d6());
    }
    function determineWin(die1: number, die2: number): string {
        if (die1 === 1 && die2 === 1) {
            return "Lose!";
        } else if (die1 === die2) {
            return "Win!";
        } else {
            return "";
        }
    }
        return (
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
                <div>Die 1: <span data-testid="left-die">{die1}</span></div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <div>Die 2: <span data-testid="right-die">{die2}</span></div>
                <div>{determineWin(die1, die2)}</div>
            </div>
        );
    }
