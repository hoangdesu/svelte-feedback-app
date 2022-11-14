var ghpages = require("gh-pages");

ghpages.publish(
  "public", 
  {
    branch: "gh-pages",
    repo: "https://github.com/hoangdesu/svelte-feedback-app.git", // Update to point to your repository
    user: {
      name: "Hoang Nguyen", 
      email: "hoandesu@gmail.com", 
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
