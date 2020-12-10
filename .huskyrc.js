const { tasks } = require("./tools/task");

module.exports = {
	hooks: {
		"pre-push": tasks([
      "npm run lint",
      "npm run build:lib"
		]),
    "pre-commit": tasks([]),
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
	},
};
