---
title: 'Functions'
date: '2025-2-16'
tags: ['HTB', 'guide', 'Bash']
draft: false
summary: 'Functions help organize scripts, reduce redundancy, and improve clarity by grouping reusable code blocks'
created: 2025-02-16T13:49
updated: 2025-02-16T13:51
---

# Functions - HTB Notes

## Overview

Functions in Bash help organize scripts, reduce redundancy, and improve clarity by grouping reusable code blocks. Functions can accept parameters and return values, making them a core component of scripting.

---

## Problem Description: Using Functions to Modularize Code

A script should define functions for specific tasks and call them when needed.

### **Input & Output**

**Input:** Function parameters  
**Output:** Processed data or execution results

**Example Execution:**

```bash
./script.sh
```

**Example Output:**

```
First parameter Second parameter Third parameter
```

---

## Topics & Patterns

- **Function Definition (`function name {}` or `name() {}`)**: Declaring reusable code blocks.
- **Function Execution (`name arg1 arg2`)**: Calling functions.
- **Parameter Passing (`$1, $2, ...`)**: Providing arguments to functions.
- **Return Values (`return`, `echo`, `$?`)**: Handling function outputs.

---

## Solution & Complexity

### **Key Ideas**

- `function my_function {}`: Defines a function.
- `$1, $2, $3`: Accesses function arguments.
- `return <code>`: Returns a status code to the parent process.

### **Python Equivalent**

```python
def print_pars(one, two, three):
    print(one, two, three)

one, two, three = "First parameter", "Second parameter", "Third parameter"
print_pars(one, two, three)
```

**Complexity:**

- **Function calls:** **O(1)** (constant time).
- **Loop-based functions:** **O(n)** based on iterations.

---

## Step-by-Step Walkthrough

| Step | Description       | Command Used                 |
| ---- | ----------------- | ---------------------------- |
| 1    | Define a function | `function name { commands }` |
| 2    | Call the function | `name arg1 arg2`             |
| 3    | Pass arguments    | `echo $1 $2 $3`              |
| 4    | Return values     | `return 0` or `echo "value"` |

---

## Similar Questions & Real-World Uses

- **Similar Scenarios:**
  - Creating modular Bash scripts.
  - Handling error codes in automation scripts.
- **Real-World Applications:**
  - **Cybersecurity Scripts:** Automating recon tasks.
  - **System Administration:** Writing reusable functions for system checks.
  - **DevOps Pipelines:** Modularizing CI/CD tasks.

---
