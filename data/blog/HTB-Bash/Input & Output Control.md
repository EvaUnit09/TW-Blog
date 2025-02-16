---
title: 'Input & Output Control'
date: '2025-2-16'
tags: ['HTB', 'guide', 'Bash']
draft: false
summary: 'input handling for user interaction and managing outputs'
created: 2025-02-16T13:38
updated: 2025-02-16T13:39
---

# Input and Output - HTB Notes

## Overview

Bash provides input handling for user interaction and output control for managing results. These features allow scripts to process data dynamically and store results efficiently.

---

## Problem Description: Handling User Input & Output in Bash

A script should accept user input for execution control and redirect output for logging.

### **Input & Output**

**Input:** User selection via `read`, command execution  
**Output:** Printed results or redirected output to files

**Example Execution:**

```bash
./script.sh
```

**Example Output:**

```bash
Select your option: 1
NetRange for 165.22.119.202:
NetRange:       165.22.0.0 - 165.22.255.255
CIDR:           165.22.0.0/16
```

---

## Topics & Patterns

- **User Input (`read -p`)**: Prompt users for input.
- **Case Statements (`case $var in ... esac`)**: Execute different actions based on user input.
- **Output Redirection (`>` and `>>`)**: Save command output to files.
- **`tee` Command (`| tee file.txt`)**: Display and save output simultaneously.

---

## Solution & Complexity

### **Key Ideas**

- `read -p "Prompt" var`: Gets user input and stores it in `var`.
- `case $var in "1") command ;; esac`: Executes a function based on input.
- `command | tee file.txt`: Displays output while saving it to a file.

### **Python Equivalent**

```python
import sys

option = input("Select your option: ")

if option == "1":
    print("Executing Option 1...")
elif option == "2":
    print("Executing Option 2...")
else:
    sys.exit(0)
```

**Complexity:**

- **User input handling:** **O(1)** (constant time)
- **Output redirection with `tee` and file writing:** **O(n)** (depends on output size)

---

## Step-by-Step Walkthrough

| Step | Description              | Command Used                         |
| ---- | ------------------------ | ------------------------------------ |
| 1    | Display menu options     | `echo "1) Option 1"`                 |
| 2    | Prompt for input         | `read -p "Select your option: " opt` |
| 3    | Use `case` for execution | `case $opt in "1") command ;; esac`  |
| 4    | Store and display output | `command                             |

---

## Similar Questions & Real-World Uses

- **Similar Scenarios:**
  - Logging network scans while displaying results.
  - Interactive menu-driven Bash scripts.
- **Real-World Applications:**
  - **System Administration:** Interactive user scripts for automation.
  - **Security Testing:** Logging enumeration results dynamically.
  - **DevOps & Monitoring:** Capturing logs while displaying output.

---

This summary keeps key takeaways clear and easy to reference in the future. Let me know if you need modifications!
