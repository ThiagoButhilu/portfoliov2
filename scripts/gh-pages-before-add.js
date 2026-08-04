/**
 * Force-add index.html before gh-pages commits.
 * Needed when ~/.gitignore_global ignores index.html globally.
 */
module.exports = async function beforeAdd(git) {
  return git.exec('add', '-f', 'index.html');
};
