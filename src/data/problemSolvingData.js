export const weekData = {
  1: {
    weekNumber: "01",
    title: "Complexity Analysis",
    description:
      "Learn how to analyze the efficiency of algorithms using time and space complexity.",
    problems: 15,
    tutorials: 9,
    hours: 5,
    progress: 60,
  },

  2: {
    weekNumber: "02",
    title: "Complexity Analysis",
    description:
      "Continue practicing algorithm complexity and learn how to compare different solutions.",
    problems: 12,
    tutorials: 7,
    hours: 4,
    progress: 0,
  },
};

export const complexityLevels = [
  {
    title: "Constant",
    notation: "O(1)",
    description:
      "The operation takes the same amount of time regardless of input size.",
  },
  {
    title: "Logarithmic",
    notation: "O(log n)",
    description: "The running time grows logarithmically as the input grows.",
  },
  {
    title: "Linear",
    notation: "O(n)",
    description: "The running time grows directly with the input size.",
  },
  {
    title: "Linearithmic",
    notation: "O(n log n)",
    description: "Common in efficient sorting algorithms such as Merge Sort.",
  },
  {
    title: "Quadratic",
    notation: "O(n²)",
    description: "The running time grows quadratically with the input size.",
  },
];

export const codeExample = {
  language: "C++",
  code: `void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right)
        return;

    int mid = left + (right - left) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}`,
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
};

export const practiceProblems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode #1",
    difficulty: "Easy",
    status: "verified",
  },
  {
    id: 2,
    title: "Valid Anagram",
    platform: "LeetCode #242",
    difficulty: "Easy",
    status: "pending",
  },
  {
    id: 3,
    title: "Binary Search",
    platform: "LeetCode #704",
    difficulty: "Easy",
    status: "pending",
  },
  {
    id: 4,
    title: "Merge Sorted Array",
    platform: "LeetCode #88",
    difficulty: "Easy",
    status: "pending",
  },
];
