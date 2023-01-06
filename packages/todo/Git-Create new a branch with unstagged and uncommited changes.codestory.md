---
priority: low
isCodestory: true
headerImage: ![](./abstract-3840x2160-colorful-lines-4k-20643.jpg)
privacy: public
language: english
---

 

Create a new branch with unstagged/uncommited changes

Git version after 2.23

```
git switch -c newbranch
```

Git version before 2.23

```
git checkout -b newbranch
```

To push you have to configure the upstream

```
git push --set-upstream origin newbranch
```

The `git switch` command was introduced as an alternative to reduce the responsibilities of the `git checkout` command.
This separation of responsibilities allows for a more streamlined and intuitive workflow when working with branches in Git.

Git https://git-scm.com/docs/git-switch

Git https://git-scm.com/docs/git-checkout

Git https://git-scm.com/book/en/v2/Git-Branching-Branch-Management