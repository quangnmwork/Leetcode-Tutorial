class Solution {
  double myPow(double x, int n) {
    if (x == 0) return 0;
    if (n == 0) return 1;

    double temp = myPow(x, n ~/ 2);

    if (n % 2 == 1) {
      if (n > 0) {
        return x * temp * temp;
      }
      return (temp * temp) / x;
    }

    return temp * temp;
  }
}

void main() {
  Solution solution = new Solution();

  print(solution.myPow(1, 2));
  print(solution.myPow(2, -2));
  print(solution.myPow(3, -3));

  print(solution.myPow(4, 0));
}
