# Git & GitHub (Study Guide)

This study guide explains version control with Git and collaboration with GitHub, matching the lessons and examples in this directory.

> [!NOTE]
> The example scripts create temporary repositories and delete them afterward. A local folder stands in for GitHub, so they need no account and cannot affect your real projects or settings.

---

## 📖 Chapter 1: What is Git & GitHub?
**Git** is a version control system. It records snapshots of your project so you can review history, undo changes, and work with others.

**GitHub** is a website that hosts Git repositories online.

| Term | Meaning |
|---|---|
| **Repository (repo)** | A project tracked by Git |
| **Commit** | A saved snapshot of the project |
| **Branch** | An independent line of work |
| **Remote** | A copy of the repo on another location, such as GitHub |

---

## 📖 Chapter 2: Creating a GitHub Account
1.  Go to [github.com](https://github.com) and choose **Sign up**.
2.  Enter your email, a strong password, and a username.
3.  Verify your email address.
4.  Turn on **two-factor authentication** in your account settings.

> [!TIP]
> Your username appears in your profile and repository links, so choose one you would be comfortable showing employers.

---

## 📖 Chapter 3: Using GitHub
To create your first repository on the website:

1.  Choose **New repository**.
2.  Enter a name and choose **Public** or **Private**.
3.  Select **Add a README file**.
4.  Choose **Create repository**.

From the repository page, you can browse files, edit them, and read the commit history.

> [!WARNING]
> Anyone can see a public repository. Never upload passwords, API keys, or `.env` files.

---

## 📖 Chapter 4: Using Git
Check that Git is installed:
```bash
git --version
```

If it is missing, download it from [git-scm.com](https://git-scm.com/downloads). Windows users get it with Git Bash.

---

## 📖 Chapter 5: Configuring Git
Tell Git who you are. This information is saved in every commit:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --list
```

*   `--global` applies to all repositories on your computer.
*   Without `--global`, a setting applies only to the current repository.

> [!IMPORTANT]
> Your commit email is public in public repositories. To keep it private, enable **Keep my email addresses private** in GitHub's email settings and use the `noreply` address shown there.

---

## 📖 Chapter 6: Git with VS Code
VS Code has Git built in.

*   Open the **Source Control** panel with `Ctrl+Shift+G`.
*   Press `+` beside a file to stage it.
*   Type a message and choose **Commit**.
*   Choose **Sync Changes** to pull and push.
*   Open the built-in terminal with `` Ctrl+` `` to run Git commands.

---

## 📖 Chapter 7: Clone Command
`git clone` downloads a repository and its history:
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

The original location is saved as a remote named `origin`.

---

## 📖 Chapter 8: Status Command
`git status` shows the state of your files.

| Short Status | Meaning |
|---|---|
| `??` | **Untracked**: Git is not tracking this new file |
| `A ` | **Added**: a new file is staged |
| ` M` | **Modified**: changed but not staged |
| `M ` | **Staged**: changed and ready to commit |

```bash
git status
git status --short
```

---

## 📖 Chapter 9: Add & Commit Commands
Saving changes takes two steps:

```
Working Directory ── git add ──▶ Staging Area ── git commit ──▶ Repository
```

```bash
git add index.html        # Stage one file
git add .                 # Stage all changes in this folder
git commit -m "Add page"  # Save a snapshot
git commit -am "Update"   # Stage tracked files and commit
git log --oneline         # View history
```

> [!TIP]
> Write short, clear commit messages that describe the change, such as `Fix navbar on mobile`.

Use a `.gitignore` file to keep files out of Git:
```
node_modules/
.env
```

---

## 📖 Chapter 10: Push Command
`git push` uploads your local commits to the remote:
```bash
git push origin main
```

*   `origin` is the remote.
*   `main` is the branch.

> [!NOTE]
> GitHub does not accept your account password for Git commands. Sign in with `gh auth login`, SSH keys, or a personal access token.

---

## 📖 Chapter 11: Init Command
`git init` turns the current folder into a repository by creating a hidden `.git` folder.
```bash
mkdir project
cd project
git init
```

> [!WARNING]
> Do not run `git init` inside another repository, and do not delete `.git` unless you mean to erase the project's history.

---

## 📖 Chapter 12: Pushing a Local Repo
Create an **empty** repository on GitHub, then connect your local project:
```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

After `-u`, you can use plain `git push` and `git pull` on this branch.

---

## 📖 Chapter 13: Workflow
The everyday cycle:

```
pull ──▶ edit ──▶ status ──▶ add ──▶ commit ──▶ push
```

---

## 📖 Chapter 14: Git Branches
A **branch** lets you work on a feature without changing `main`.

```
main:     A───B
               \
feature:        C───D
```

Switching branches updates the files in your folder to match that branch.

---

## 📖 Chapter 15: Branch Commands
```bash
git branch                # List branches
git branch dev            # Create a branch
git switch dev            # Move to a branch
git switch -c feature     # Create and move
git branch -m old new     # Rename
git branch -d feature     # Delete a merged branch
```

> [!NOTE]
> You may also see `git checkout branch-name` and `git checkout -b branch-name`, the older equivalents.

---

## 📖 Chapter 16: Merging Branches
Switch to the branch that should **receive** the changes, then merge:
```bash
git switch main
git merge feature
```

*   **Fast-forward**: `main` has no new commits, so it simply moves forward.
*   **Merge commit**: both branches changed, so Git creates a commit joining them.

On GitHub, a **Pull Request (PR)** proposes a merge so others can review it first.

---

## 📖 Chapter 17: Pull Command
`git pull` downloads remote changes and merges them into your branch:
```bash
git pull origin main
```

Pull before you start working to reduce conflicts.

---

## 📖 Chapter 18: Merge Conflicts
A **conflict** happens when two branches change the same lines differently.
```
<<<<<<< HEAD
color: red
=======
color: green
>>>>>>> feature
```

To resolve it:

1.  Edit the file to keep the correct content.
2.  Remove the `<<<<<<<`, `=======`, and `>>>>>>>` lines.
3.  Stage and commit:
    ```bash
    git add style.txt
    git commit
    ```

To cancel instead, run `git merge --abort`.

---

## 📖 Chapter 19: Fixing Mistakes

| Situation | Command |
|---|---|
| Discard unstaged changes | `git restore file` |
| Unstage a file | `git restore --staged file` |
| Fix the last commit message | `git commit --amend -m "New message"` |
| Undo a commit, keep changes staged | `git reset --soft HEAD~1` |
| Undo a commit, keep changes unstaged | `git reset HEAD~1` |
| Undo a pushed commit safely | `git revert HEAD` |
| Delete a commit and its changes | `git reset --hard HEAD~1` |

> [!CAUTION]
> `git restore` and `git reset --hard` discard uncommitted work. On shared branches, use `git revert` instead of rewriting history, and avoid `git push --force`.

---

## 📖 Chapter 20: What is Forking?
A **fork** is your own copy of someone else's repository on GitHub. It lets you propose changes to projects you cannot write to.

```
Original repo ── Fork ──▶ Your repo ── Clone ──▶ Your computer
      ▲                                               │
      └────────────── Pull Request ◀── Push ──────────┘
```

```bash
git clone https://github.com/you/project.git
cd project
git remote add upstream https://github.com/owner/project.git
git switch -c fix-typo
git commit -am "Fix typo"
git push origin fix-typo
```

Then open a Pull Request on GitHub. To sync later:
```bash
git switch main
git fetch upstream
git merge upstream/main
```

---

## 📊 Command Summary

| Task | Command |
|---|---|
| Start a repo | `git init` |
| Copy a repo | `git clone url` |
| Check state | `git status` |
| Stage changes | `git add .` |
| Save changes | `git commit -m "message"` |
| Upload | `git push` |
| Download | `git pull` |
| View history | `git log --oneline` |
| Create a branch | `git switch -c name` |
| Merge a branch | `git merge name` |

### Clone vs Fork

| Feature | Clone | Fork |
|---|---|---|
| **Creates a copy on** | Your computer | Your GitHub account |
| **Done with** | Git | GitHub |
| **Linked to original** | Through `origin` | Can open Pull Requests |

### `reset` vs `revert`

| Feature | `git reset` | `git revert` |
|---|---|---|
| **History** | Rewrites it | Adds a new commit |
| **Safe on shared branches** | ❌ No | ✅ Yes |
| **Best for** | Local commits | Pushed commits |
