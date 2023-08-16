# Quay.io registries

## Hints

- In a hostRule for matchHost: https://quay.io/v2/ the user and password of a quay [robot account](https://docs.quay.io/glossary/robot-accounts.html) should be used.
- In a different hostRule for matchHost: https://quay.io/api/v1/ the OAuth token of an []organisation application](https://docs.quay.io/api/#generating-a-token-for-internal-application-use) should be used as you mention.

---

![](https://img.shields.io/github/commit-activity/m/ik-workshop/renovate-issue-blueprint)
![](https://img.shields.io/github/last-commit/ik-workshop/renovate-issue-blueprint)
[![](https://img.shields.io/github/license/ivankatliarchuk/.github)](https://github.com/ivankatliarchuk/.github/LICENCE)
[![](https://img.shields.io/github/languages/code-size/ik-workshop/renovate-issue-blueprint)](https://github.com/ik-workshop/renovate-issue-blueprint)
[![](https://img.shields.io/github/repo-size/ik-workshop/renovate-issue-blueprint)](https://github.com/ik-workshop/renovate-issue-blueprint)
![](https://img.shields.io/github/languages/top/ik-workshop/renovate-issue-blueprint?color=green&logo=markdown&logoColor=blue)

---

## Issue

quay.io configuration

```json
{
  "hostRules": [
    {
      "hostType": "docker",
      "matchHost": "https://quay.io/v2/",
      "username": "usr",
      "password": "apitoken"
    },
    {
      "hostType": "docker",
      "matchHost": "https://quay.io/api/v1/",
      "token": "apitoken"
    }
  ]
}
```

### Current result

### Expected result

## Create

[**Create a repository using this template →**][template.generate]

## Resources

### Commands

```
$ curl -sv https://quay.company.com/v2/auth?service=quay.company.com&scope=repository:repo/org:pull
```

### Renovate Docs

- [Example Exercises](./examples)
- [Useful info](./docs/Notes.md)
- [Configuration Options](https://docs.renovatebot.com/configuration-options/)

### Renovate somewhere similar Issues

- [Quay authentication issue (issue-10188)](https://github.com/renovatebot/renovate/discussions/10188)
- [Self-Hosted quay enterprise support(Issue-13709)](https://github.com/renovatebot/renovate/discussions/13709)
- [Docker quay.io label fetching error (issue-4626)](https://github.com/renovatebot/renovate/issues/4626)

### Supporting Docs

- [Example repo](https://github.com/MaronHatoum/renovate-4626/pull/6/files)
- [Quay.io generate tokens](https://docs.quay.io/api/#generating-a-token-for-internal-application-use)

---

<!-- resources -->
[template.generate]: https://github.com/ik-workshop/renovate-issue-blueprint/generate
[code-style.badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
