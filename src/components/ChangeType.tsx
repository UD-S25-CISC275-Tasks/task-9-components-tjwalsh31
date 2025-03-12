import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const type: QuestionType[] = ["multiple_choice_question", "short_answer_question"];
    const [questionType, setQuestionType] = useState<QuestionType>(type[1]);

    function toggleQuestionType(): void {
        setQuestionType(
            questionType === type[0] ? type[1] : type[0]
        );
    }

    return (
        <div>
            <Button onClick={toggleQuestionType}>Change Type</Button>
            <div>
                {questionType === "multiple_choice_question" ? "Multiple Choice" : "Short Answer"}
            </div>
        </div>
    );
}
