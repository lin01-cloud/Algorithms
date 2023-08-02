# 88. MergeSorted Array - leetcode

## 📘 소요 시간

- 40분

<br/>

## 접근 및 풀이

- 목적: 배열의 특정 구간을 추출한 뒤 추가한다.
- `nums1`의 m ~ num1.length - 1 만큼 제거한다.
- `nums2`의 n ~ nums2.length -1 만큼 제거한다.
- `nums1`에 `nums2`를 push한다.
- `num1`을 sort한다.

<br/>

## 시간복잡도 & 공간복잡도

- 시간복잡도 : O(n log n)
- 공간복잡도 : O(1)

chrome 브라우저 내의 `sort` 메서드는 병합 정렬과 삽입 정렬의 하이브리드를 사용하므로 병합 정렬의 시간복잡도 `O(n log n)`을 따릅니다.

https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity

<br/>

## 📘 문제

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

> 비내림차순으로 정렬된 정수인 두 개의 배열 nums1, nums2와 num1과 nums2의 개별 요소의 숫자(개수)가 주어집니다.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

> 각각의 비내림차순으로 정렬된 nums1과 nums2는 합쳐집니다.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

> 마지막으로 정렬된 함수는 함수에서 반환되지 않고, 대신 배열 `num1` 내부에 저장됩니다. 이를 위해 `nums1`의 길이는 m + n입니다. 여기서 m은 병합되어야 하는 요소를 나타내며, n이 0이라면 무시됩니다. `num2`는 n 만큼의 길이를 갖습니다.

### Example 1:

```js
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

### Example 2:

```js
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

### Example 3:

```js
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

Constraints:

```js
nums1.length == m + n;
nums2.length == n;
0 <= m, n <= 200;
1 <= m + n <= 200 - 109 <= nums1[i], nums2[j] <= 109;
```

<br/>
