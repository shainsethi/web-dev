# Terminal Fundamentals (Study Guide)

This study guide explains how to use the terminal to move around your computer and manage files, matching the lessons and examples in this directory.

> [!NOTE]
> The example scripts work inside a temporary practice folder and delete it when they finish, so they do not touch your files.

---

## 📖 Chapter 1: What is the Terminal?
The **terminal** is a text-based way to control your computer. Instead of clicking icons, you type commands.
```bash
echo "Hello from the terminal!"
```

Developers use it because it is fast, repeatable, and required by tools such as Git, Node.js, and npm.

---

## 📖 Chapter 2: Different Terms Related to Terminal

| Term | Meaning |
|---|---|
| **Terminal** | The window where you type and read text |
| **Shell** | The program that understands and runs your commands |
| **Bash / Zsh** | Popular shells |
| **Command Line (CLI)** | The text interface for running programs |
| **Prompt** | The text showing the terminal is ready, often ending in `$` |
| **Command** | The instruction you run, such as `ls` |
| **Argument** | The value a command works on |
| **Flag** | An option that changes how a command behaves |

```
ls -l projects
│   │  └── argument
│   └───── flag
└───────── command
```

---

## 📖 Chapter 3: (Windows Users Only) Installing Git Bash
**Git Bash** gives Windows a Bash terminal, so the commands in this course work the same way.

1.  Download Git for Windows from [git-scm.com](https://git-scm.com/downloads).
2.  Run the installer and keep the default options.
3.  Open **Git Bash** from the Start menu.
4.  Check the installation:
    ```bash
    git --version
    ```

macOS and Linux already include a terminal.

---

## 📖 Chapter 4: Basic Commands

| Command | Purpose |
|---|---|
| `pwd` | Print the current folder |
| `ls` | List files and folders |
| `echo` | Print text |
| `date` | Show the date and time |
| `whoami` | Show the current user |
| `clear` | Clear the screen |

> [!TIP]
> Press `Tab` to autocomplete names, `↑` to reuse earlier commands, and `Ctrl+C` to stop a running command.

---

## 📖 Chapter 5: Navigation Commands
`cd` means **change directory**.
```bash
cd projects         # Move into projects
cd projects/website # Move through several folders
cd ..               # Move up one folder
cd ../..            # Move up two folders
cd -                # Return to the previous folder
cd ~                # Go to your home folder
cd                  # Also goes to your home folder
```

---

## 📖 Chapter 6: Paths in Navigation
A **path** is the location of a file or folder.

```
/home/riya/site
├── css
│   └── style.css
└── js
    └── app.js
```

*   **Absolute path**: starts from the root `/`, such as `/home/riya/site/css`.
*   **Relative path**: starts from your current folder, such as `site/css`.

| Symbol | Meaning |
|---|---|
| `/` | The root folder, or a separator between names |
| `.` | The current folder |
| `..` | The parent folder |
| `~` | Your home folder |

From inside `site/js`, you can reach the CSS folder with:
```bash
ls ../css
```

---

## 📖 Chapter 7: Making Directories
`mkdir` means **make directory**.
```bash
mkdir notes                 # One folder
mkdir html css js           # Several folders
mkdir "my projects"         # A name with a space
mkdir -p app/src/components # Nested folders
```

*   `-p` creates missing parent folders.
*   `-p` also avoids an error if the folder already exists.

> [!WARNING]
> Without quotes, `mkdir my projects` creates **two** folders: `my` and `projects`.

---

## 📖 Chapter 8: What are Flags?
**Flags** change how a command behaves. They usually start with `-` or `--`.
```bash
ls       # Normal list
ls -a    # Include hidden files
ls -l    # Long format with details
ls -la   # Combine both flags
ls -l -a # Same as ls -la
```

Files whose names start with `.` are **hidden**. `.` and `..` also appear in `ls -a`.

To learn a command's flags:
```bash
man ls     # Manual page on macOS and Linux, press q to exit
ls --help  # Help text in Linux and Git Bash
```

---

## 📖 Chapter 9: Touch Command
`touch` creates an empty file.
```bash
touch index.html
touch style.css app.js
touch "my notes.txt"
```

If the file already exists, `touch` keeps its content and only updates its modified time.

---

## 📖 Chapter 10: Deleting Files & Folders
```bash
rm old.txt   # Delete a file
rm -i old.txt # Ask before deleting
rmdir empty  # Delete an empty folder
rm -r full   # Delete a folder and everything inside it
```

> [!CAUTION]
> The terminal has **no Recycle Bin**, so deleted files are usually gone for good.
> *   Run `pwd` and `ls` before deleting.
> *   Be especially careful with `rm -rf`. The `-f` flag removes files without asking.
> *   Never run `rm -rf` on `/`, `~`, or a path you have not checked.

---

## 📊 Command Summary

| Task | Command |
|---|---|
| Where am I? | `pwd` |
| What is here? | `ls` |
| Show everything | `ls -la` |
| Move into a folder | `cd name` |
| Move up | `cd ..` |
| Create a folder | `mkdir name` |
| Create nested folders | `mkdir -p a/b/c` |
| Create a file | `touch file.txt` |
| Delete a file | `rm file.txt` |
| Delete an empty folder | `rmdir name` |
| Delete a folder with contents | `rm -r name` |

### Absolute vs Relative Paths

| Feature | Absolute | Relative |
|---|---|---|
| **Starts from** | Root `/` | Current folder |
| **Example** | `/home/riya/site/css` | `site/css` |
| **Depends on current folder** | ❌ No | ✅ Yes |
