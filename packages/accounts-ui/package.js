Package.describe({
  summary: "Simple templates to add login widgets to an app",
  version: "1.1.1"
});

Package.on_use(function (api) {
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-ui-unstyled', 'client');
  api.use('less', 'client');

  api.add_files(['login_buttons.less'], 'client');
});
