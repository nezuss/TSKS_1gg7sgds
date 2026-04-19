function solution(command) {
  if (command === "upvote") {
    this.upvote++;
  } else if (command === "downvote") {
    this.downvotes++;
  } else if (command === "score") {
    let totalVotes = this.upvotes + this.downvotes;
    let balance = this.upvotes - this.downvotes;
    let reportedUpvotes = this.upvotes;
    let reportedDownvotes = this.downvotes;

    if (totalVotes > 50) {
      let greaterNumber = Math.max(this.upvotes, this.downvotes);
      let addedAmount = Math.ceil(greaterNumber * 0.25);

      reportedUpvotes += addedAmount;
      reportedDownvotes += addedAmount;
    }

    let rating = "";

    if (totalVotes < 10) {
      rating = "new";
    } else if (this.upvotes / totalVotes > 0.66) {
      rating = "hot";
    } else if (balance >= 0 && totalVotes > 100) {
      rating = "controversial";
    } else if (balance < 0) {
      rating = "unpopular";
    } else {
      rating = "new";
    }

    return [reportedUpvotes, reportedDownvotes, balance, rating];
  }
}

let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};

solution.call(post, "upvote");
solution.call(post, "downvote");

let score = solution.call(post, "score");

console.log("First request:", score);

for (let i = 0; i < 50; i++) {
  solution.call(post, "downvote");
}

score = solution.call(post, "score");
console.log("After 50 dislikes:", score);
