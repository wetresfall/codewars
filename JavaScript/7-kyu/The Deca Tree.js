// https://www.codewars.com/kata/5acf710f46b4cb00810001e2

// function tree(trunks) {
//     this.trunks = trunks;
//     this.branches = trunks * 10;
//     this.twigs = trunks * 100;
//     this.leaves = trunks * 1000;
// }

//your methods here...

  class tree {
    constructor(trunks) {
        this.trunks = trunks
        this.branches = trunks * 10
        this.twigs = trunks * 100
        this.leaves = trunks * 1000
    }
    chopTrunk(n) {
        this.trunks = Math.max(this.trunks - n, 0)
        this.chopBranch(n * 10)
    }
    chopBranch(n) {
        this.branches = Math.max(this.branches - n, 0)
        this.chopTwig(n * 10)
    }
    chopTwig(n) {
        this.twigs = Math.max(this.twigs - n, 0)
        this.chopLeaf(n * 10)
    }
    chopLeaf(n) {
        this.leaves = Math.max(this.leaves - n, 0)
    }
    describe() {
        return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
    }
  }
