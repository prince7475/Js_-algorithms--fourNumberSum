# Js_-algorithms--fourNumberSum

Four Number Sum
​
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order. If no four numbers sum up to the target sum, the function should return an empty array.
​
Sample input: [7, 6, 4, -1, 1, 2], 16
Sample output: [[7, 6, 4, -1], [7, 6, 1, 2]]
​
Average: 0 (n^2) time | 0 (n^2) space - where n is the length of the input array
Worst: 0 (n^3) time | 0 (n^2) space - where n is the length of the input array

To run test: 'npm test'














Input:Your SolutionOur SolutionNo changes made.
Run Code

1
function fourNumberSum(array, targetSum) {
2
  // Write your code here.
3
}
4
​
5
// Do not edit the line below.
6
exports.fourNumberSum = fourNumberSum;
7
​
Tests:HideShow

49
  output = output.map(sortAndStringify);
50
  const quadruplets = [
51
    [-2, -1, 1, 6],
52
    [-2, 1, 2, 3],
53
    [-2, -1, 2, 5],
54
    [-2, -1, 3, 4],
55
  ];
56
  chai.expect(output.length === 4).to.be.true;
57
  for (const quadruplet of quadruplets) {
58
    chai.expect(output).to.include(sortAndStringify(quadruplet));
59
  }
60
});
61
​
62
it('Test Case #5', function() {
63
  let output = program.fourNumberSum([-1, 22, 18, 4, 7, 11, 2, -5, -3], 30);
64
  output = output.map(sortAndStringify);
65
  const quadruplets = [
66
    [-1, 22, 7, 2],
67
    [22, 4, 7, -3],
68
    [-1, 18, 11, 2],
69
    [18, 4, 11, -3],
70
    [22, 11, 2, -5],
71
  ];
72
  chai.expect(output.length === 5).to.be.true;
73
  for (const quadruplet of quadruplets) {
74
    chai.expect(output).to.include(sortAndStringify(quadruplet));
75
  }
76
});
77

it('Test Case #6', function() {

  let output = program.fourNumberSum([-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5], 20);

  output = output.map(sortAndStringify);

  const quadruplets = [

    [-5, 2, 15, 8],

    [-3, 2, -7, 28],

    [-10, -3, 28, 5],

    [-10, 28, -6, 8],

    [-7, 28, -6, 5],

    [-5, 2, 12, 11],

    [-5, 12, 8, 5],

  ];

  chai.expect(output.length === 7).to.be.true;

  for (const quadruplet of quadruplets) {

    chai.expect(output).to.include(sortAndStringify(quadruplet));

  }

});

​