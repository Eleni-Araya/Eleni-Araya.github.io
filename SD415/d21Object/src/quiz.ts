
export interface StudentQuiz {
    studentId: number,
    quizAnswers: number[]
}
export interface Score{
    id:number;
    score:number;
}

export function gradeStudent(studentAnswers: number[], correct: number[]): number {
    let grade:number=0;
    for(let i=0;i<studentAnswers.length;i++){
        if(studentAnswers[i]===correct[i]){
            grade++;
        }
    }
    return grade;
}

export function gradeQuiz(studentQuizzes: StudentQuiz[], correct: number[]): number[] {
  
   let gradeArray:number[]=[];
   for(let i=0;i<studentQuizzes.length;i++){
    let grade:number=gradeStudent(studentQuizzes[i].quizAnswers,correct);
    gradeArray.push(grade)
   }
    return gradeArray;
}

export function gradeQuizLabeled(studentQuizzes:StudentQuiz[],correct:number[]):Score[] {
    const scoreArray:Score[]=[];
    for(let i=0;i<studentQuizzes.length;i++){

        let grade:number=gradeStudent(studentQuizzes[i].quizAnswers,correct);
        let id:number=i+101;
        let score:Score={
            id:id,
            score:grade,
        };
        scoreArray.push(score);
    }
 return scoreArray;
}



