const Fs = require('fs');

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": JSON.parse(Fs.readFileSync('repos.json', 'utf8')),
  "logLevel": process.env.LOG_LEVEL,
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": true,
  "recreateWhen": "always",
  "onboarding": false,
  "requireConfig": "optional",
  "baseBranches": ["master", "main"],
  "enabledManagers": ["cloudbuild", "dockerfile", "regex"],
  "packageRules": [
    // {
    //   "matchDatasources": ["docker"],
    //   "matchPackageNames": ["quay.io/helmpack/chart-testing"],
    //   "versioning": "loose"
    // },
    {
      "matchDatasources": ["docker"],
      "matchPackageNames": ["quay.io/coreos/kube-state-metrics"],
      "versioning": "regex:^v?(?<major>\\d+)\.(?<minor>\\d+)\.(?<patch>\\d+)$"
    }
  ],
  "regexManagers": [
    // {
    //   "fileMatch": [".*\/cloudbuild.yaml$"],
    //   "matchStrings": [
    //     "name: (?<depName>.*):(?<currentValue>.*)"
    //   ],
    //   "datasourceTemplate": "docker"
    // }
  ]
}