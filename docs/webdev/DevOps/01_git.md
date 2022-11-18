---
sidebar_position: 1
---
# GitHub Cheat sheet 
## Initialising a new .git directory
### …or create a new repository on the command line
```bash
echo "# Title Page" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lehelbeni/<reponame.git>
git push -u origin main
```
### …or create a new repository on the command line
```bash
git remote add origin https://github.com/lehelbeni/new.git
git branch -M main
git push -u origin main
```

## Share and Update 
```bash
# add a git URL as an alias
git remote add [alias] [url]

# fetch down all the branches from that Git remote
git fetch [alias]

# merge a remote branch into your current branch to bring it up to date
git merge [alias]/[branch]

# Transmit local branch commits to the remote repository branch
git push [alias] [branch]

# fetch and merge any commits from the tracking remote branch
git pull
```



## Setup and Init
Configuring information, initializing and cloning repositories
```bash
git init
git clone [url]
```
## Stage and Snapshot
Working with snapshots and the Git staging area.
```bash
# show modified files in working directory, staged for your next commit
git status
# add a file as it looks now to your next commit (stage)
git add [file]
# unstage a file while retaining the changes in working directory
git reset [file] 
# diff of what is changed but not staged
git diff
# commit your staged content as a new commit snapshot
git commit -m "[descriptive message]"
```
## Branch and Merge
Isolating work in branches, changing context, and integrating changes
```bash
# list your branches. a * will appear next to the currently active branch
git branch

# create a new branch at the current commit
git branch [branch-name]

# switch to another branch and check it out into your working directory
git checkout

# merge the specified branch’s history into the current one
git merge [branch]

# show all commits in the current branch’s history
git log
```

## Setup 
Configuring user information used across all local repositories
```bash
# set a name that is identifiable for credit when review version history
git config --global user.name “[firstname lastname]”

# set an email address that will be associated with each history marker
git config --global user.email “[valid-email]”

# set automatic command line coloring for Git for easy reviewing
git config --global color.ui auto
```
