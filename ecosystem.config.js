/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max',
      name: 'app',
    },
  ],
}
