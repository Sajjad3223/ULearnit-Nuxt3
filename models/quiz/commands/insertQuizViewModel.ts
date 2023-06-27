import {EQuestionType} from "~/models/quiz/quizDto";

export interface InsertQuizViewModel{
    sectionId: number;
    title: string;
    totalScore: number;
    passScore: number;
    questions:InsertQuestionViewModel[];
}

export interface InsertQuestionViewModel{
    title: string;
    questionType: EQuestionType;
    correctAnswer: string;
    score: number;
    answers:InsertChoiceViewModel[];
}
export interface InsertChoiceViewModel{
    title: string;
    isCorrectAnswer: boolean;
}