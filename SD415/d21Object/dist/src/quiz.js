export function gradeStudent(studentAnswers, correct) {
    let grade = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === correct[i]) {
            grade++;
        }
    }
    return grade;
}
export function gradeQuiz(studentQuizzes, correct) {
    let gradeArray = [];
    for (let i = 0; i < studentQuizzes.length; i++) {
        let grade = gradeStudent(studentQuizzes[i].quizAnswers, correct);
        gradeArray.push(grade);
    }
    return gradeArray;
}
export function gradeQuizLabeled(studentQuizzes, correct) {
    const scoreArray = [];
    for (let i = 0; i < studentQuizzes.length; i++) {
        let grade = gradeStudent(studentQuizzes[i].quizAnswers, correct);
        let id = i + 101;
        let score = {
            id: id,
            score: grade,
        };
        scoreArray.push(score);
    }
    return scoreArray;
}
