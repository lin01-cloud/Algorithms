/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  nums2.splice(n, nums2.length - 1);
  nums1.splice(m, nums1.length || 1);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

// - 다른 풀이
// var merge = function(nums1, m, nums2, n) {
//   for (let i = m, j = 0; j < n; i++, j++) {
//       nums1[i] = nums2[j];
//   }
//   nums1.sort((a, b) => a - b);
// };

// m을 기준으로 num1의 값을 num2로 교체한다.
// 이전의 풀이는 num1와 num2가 m, n에 맞게 배열을 바꾸는 로직이 추가되었는데,
// 다른 풀이의 경우 그 과정을 반복문으로 간결하게 나타내고 있다.
