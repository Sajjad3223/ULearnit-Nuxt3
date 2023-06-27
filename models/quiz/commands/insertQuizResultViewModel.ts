export interface InsertQuizResultViewModel{
    quizId: number;
    answers: InterQuizResultAnswerViewModel[];
}

export interface InterQuizResultAnswerViewModel {
    questionId: number;
    answer: string;
}

export interface SignQuizResultViewModel{
    quizResultId:number;
    teacherNote:string;
    answers:SignQuestionResultViewModel[];
}

export interface SignQuestionResultViewModel {
    questionResultId:number;
    isCorrect:boolean;
}