Package.describe({
  name: 'caching-compiler',
  version: '1.0.0',
  summary: 'An easy way to make compiler plugins cache',
  documentation: 'README.md'
});

Npm.depends({'lru-cache': '2.6.4'});

Package.onUse(function(api) {
  api.use(['ecmascript', 'random']);
  api.addFiles(['caching-compiler.js'], 'server');
  api.export(['CachingCompiler'], 'server');
});