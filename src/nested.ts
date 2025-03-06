import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
<<<<<<< HEAD
import { makeBlankQuestion, duplicateQuestion } from "./objects";
=======

>>>>>>> origin/task-state
/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    const published = questions.filter(
        (question: Question): boolean => question.published,
    );

    return published;
=======
    return [];
>>>>>>> origin/task-state
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    const nonEmpty = questions.filter((question: Question): boolean => {
        if (
            question.body === "" &&
            question.expected === "" &&
            question.options.length === 0
        ) {
            return false;
        }

        return true;
    });

    return nonEmpty;
=======
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
<<<<<<< HEAD
    id: number,
): Question | null {
    const found = questions.find(
        (question: Question): boolean => question.id === id,
    );

    if (found) {
        return found;
    }

=======
    id: number
): Question | null {
>>>>>>> origin/task-state
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
<<<<<<< HEAD
    const removed = questions.filter(
        (question: Question): boolean => question.id !== id,
    );
    return removed;
=======
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
<<<<<<< HEAD
    const names = questions.map((question: Question): string => question.name);
    return names;
=======
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
<<<<<<< HEAD
    const points = questions.reduce(
        (sum: number, question: Question): number => sum + question.points,
        0,
    );
    return points;
=======
    return 0;
>>>>>>> origin/task-state
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
<<<<<<< HEAD
    const published = questions.filter(
        (question: Question): boolean => question.published,
    );
    const points = published.reduce(
        (sum: number, question: Question): number => sum + question.points,
        0,
    );
    return points;
}
=======
    return 0;
}

>>>>>>> origin/task-state
/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
<<<<<<< HEAD
    let str: string = "id,name,options,points,published";
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        str += `\n${question.id},${question.name},${question.options.length},${question.points},${question.published}`;
    }
    return str;
=======
    return "";
>>>>>>> origin/task-state
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
<<<<<<< HEAD
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answers;
=======
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
<<<<<<< HEAD
    const published = questions.map(
        (question: Question): Question => ({ ...question, published: true }),
    );
    return published;
=======
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
<<<<<<< HEAD
    if (questions.length === 0) {
        return true;
    }
    const type = questions[0].type;
    for (let i = 1; i < questions.length; i++) {
        if (questions[i].type !== type) {
            return false;
        }
    }
    return true;
=======
    return false;
>>>>>>> origin/task-state
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
<<<<<<< HEAD
    type: QuestionType,
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    const array = [...questions, newQuestion];
    return array;
=======
    type: QuestionType
): Question[] {
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newName: string,
): Question[] {
    questions = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        }
        return question;
    });
    return questions;
=======
    newName: string
): Question[] {
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newQuestionType: QuestionType,
): Question[] {
    questions = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            return {
                ...question,
                type: newQuestionType,
                options:
                    newQuestionType === "multiple_choice_question" ?
                        question.options
                    :   [],
            };
        }
        return question;
    });
    return questions;
=======
    newQuestionType: QuestionType
): Question[] {
    return [];
>>>>>>> origin/task-state
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
<<<<<<< HEAD
    newOption: string,
): Question[] {
    questions = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            const options = [...question.options];
            if (targetOptionIndex === -1) {
                options.push(newOption);
            } else {
                options[targetOptionIndex] = newOption;
            }
            return { ...question, options };
        }
        return question;
    });
    return questions;
=======
    newOption: string
) {
    return [];
>>>>>>> origin/task-state
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newId: number,
): Question[] {
    const index = questions.findIndex(
        (question: Question): boolean => question.id === targetId,
    );
    const newQuestion = questions[index];
    const duplicate = duplicateQuestion(newId, newQuestion);
    const array = [...questions];
    array.splice(index + 1, 0, duplicate);
    return array;
=======
    newId: number
): Question[] {
    return [];
>>>>>>> origin/task-state
}
