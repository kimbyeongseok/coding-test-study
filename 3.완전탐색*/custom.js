// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

function solution(answers) {
  var answer = [];
  var user1 = [1, 2, 3, 4, 5];
  var user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var point = [0, 0, 0];

  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == user1[i % user1.length]) point[0]++;
    if (answers[i] == user2[i % user2.length]) point[1]++;
    if (answers[i] == user3[i % user3.length]) point[2]++;
  }
  var max = Math.max(point[0], point[1], point[2]);

  for (var i = 0; i < point.length; i++) {
    if (max == point[i]) answer.push(i + 1);
  }
  return answer;
}
