const breaks = require('remark-breaks');
module.exports = ({ markdownAST }) => markdownAST;
module.exports.setParserPlugins = () => [breaks];
