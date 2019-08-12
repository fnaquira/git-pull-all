const nodeGitPull = require('./node-git-pull');

const repos = require('./repos.json');

repos.forEach(rep => {
	nodeGitPull(rep.url, rep.branch, `/mnt/d/tecsup/isea/students/${rep.path}`);
});
