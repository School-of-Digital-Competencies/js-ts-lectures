# Git

---

## Why?

> Git is a a distributed version control system that tracks versions of files.

---

## Usage

- track versions of code changes
- switch from different version of a project
- improve team collaboration
- independant feature/bugfix/etc development

---

## Git vs Github

> Git - a distributed version control system

> Repository - a folder/directory keeping Git system itself and project source code

---

## Why distributed version control system?

On every working machine there is a full version of a repository with history and version-tracking abbilities, independent of network access or a central server.

Git provides features to synchronize changes between repos that share history; copied (cloned) from each other.

For collaboration, Git supports synchronizing with repos on remote machines.

---

## Github

> GitHub/GitLab/Bitbucket/etc - a service to host Git repositories

---

## Git Download

https://git-scm.com/downloads

---

## Git Init

```md
# initialize Git repository

git init
```

---

## Git Config

```md
# git config command

# global

git config --global user.name "Name Surname"
git config --global user.email "your_email_address@mail.com"

# local for a folder

git config user.name "Name Surname"
git config user.email "your_email_address@mail.com"
```

---

## Stage files

```md
git add FILENAME

# git add --all

# git add -A

# git add .
```

---

## Commit files

Stage before, then

```md
git commit -m "Commit Name"
```

---

## Git log

```md
# to verify Git is tracking your changes

git log

# display in a compact view

git log --oneline
```

---

## Git Environments

- Working
- Staging
- Commit

---

## File states

- Tracked
- Untracked

---

## File states

- Unmodified
- Modified
- Staged

---

## .gitignore file

Why ignoring files?

- Sensitive information
- Personal notes
- System files

---

## .gitignore file

Example

```md
# .gitignore file

.DS-Store
.vscode/
node\*modules \*\*/\_.md
```

---

## Deleting files

```md
# 2. via "rm" command

git rm FILENAME

# how to restore?

git restore -S FILENAME

# git restore -S .
```

---

## Renaming files

```md
# 1. via manual renaming in OS

# do the manual renaming

git status

# actually happens deletion + addition

# restoring

git restore .
git status

# manual delete another file

git status

# nothing to commit
```

---

## Renaming files

```md
# 1. via "mv" command

git mv OLDNAME NEWNAME

git status

# automatically put in stage

# how to restore?

git mv NEWMANE OLDNAME

git status

# nothing to commit

# GIT IS ALWAYS LOOKING AT WHAT YOU'RE DOING BASED TO THE LAST COMMIT
```

---

## Differences

```
# showing difference between files
git diff

git log ---oneline
git diff COMMITHASH
```

---

## Branches

```md
# displays local branches

git branch
```

---

## Copying a branch

```md
git switch -c NAME

# git checkout -b NAME
```

---

## Merging

```md
# Merge code from <branch> into current branch

git merge <branch>
```

---

## Remote repository

```md
get remote add NAME URL

# git remote remove NAME

# git rename OLDNAME NEWNAME

# git remote -v
```

---

## Push

```md
git push REMOTE BRANCH

# local branches have to connected to remote version of the branch

git push -u origin master

# git push --all

# git branch --set-upstream-to <origin/remote-branch>
```

---

## Fetch

```md
get fetch

# get fetch origin

# get fetch upstream
```

---

## Pull

```md
git pull

# git pull origin

# git pull origin master
```

---

## Materials

https://www.linkedin.com/learning/learning-git-and-github-14213624

https://gist.github.com/jedmao/5053440

https://medium.com/@shanikae/git-beginners-cheatsheet-6abbc15f108b
