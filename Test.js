const chai = require('chai')
const program = require('./SecondGo')

function sortAndStringify(array) {
    return array.sort((a, b) => a - b).join(",");
  }

describe('Four sums', function () {

    it('Test #1', function() {
    let output = program.fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10);

    output = output.map(sortAndStringify);
    
    const quadruplets = [
    
        [1, 2, 3, 4],
    
    ];
    
    chai.expect(output.length === 1).to.be.true;
    
    for (const quadruplet of quadruplets) {
    
        chai.expect(output).to.include(sortAndStringify(quadruplet));
    
    }
    });

    it('Test #2', function() {

    let output = program.fourNumberSum([7, 6, 4, -1, 1, 2], 16);

    output = output.map(sortAndStringify);
    
    const quadruplets = [
    
        [7, 6, 4, -1],
    
        [7, 6, 1, 2],
    
    ];
    
    chai.expect(output.length === 2).to.be.true;
    
    for (const quadruplet of quadruplets) {
    
        chai.expect(output).to.include(sortAndStringify(quadruplet));
    
    }
    });

it('Test #3', function() {

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




});
