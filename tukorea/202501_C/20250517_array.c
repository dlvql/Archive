#include <stdio.h>

int main() {
  int sum = 0, score;
  for (int i = 1; i <= 3; i++) {
    printf("게임 %d에서 선수의 득점은? ", i);
    scanf("%d", &score);
    sum += score;
  }
  printf("평균 득점은 %lf입니다.", (double) sum / 3);
}