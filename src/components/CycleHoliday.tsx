import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "thanksgiving" | "christmas" | "labor-day" | "new-years-eve" | "independence-day";

const holidayEmojis: Record<Holiday, string> = {
    "thanksgiving": "🦃",
    "christmas": "🎄",
    "labor-day": "🛠️",
    "new-years-eve": "🎉",
    "independence-day": "🎆"
};

const holidaysAlphabetical: Holiday[] = ["christmas", "independence-day", "labor-day", "new-years-eve", "thanksgiving"];
const holidaysByYear: Holiday[] = ["new-years-eve", "labor-day", "independence-day", "thanksgiving", "christmas"];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("thanksgiving");

    function cycleAlphabet(): void {
        const currentIndex = holidaysAlphabetical.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysAlphabetical.length;
        setCurrentHoliday(holidaysAlphabetical[nextIndex]);
    }

    function cycleYear(): void {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    }

    return (
        <div>
            <div>Holiday: {holidayEmojis[currentHoliday]}</div>
            <Button onClick={cycleAlphabet}>Advance by Alphabet</Button>
            <Button onClick={cycleYear}>Advance by Year</Button>
        </div>
    );
}
