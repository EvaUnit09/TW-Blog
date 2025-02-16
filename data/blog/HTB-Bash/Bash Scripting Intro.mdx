---
title: 'Bash Scripting Intro'
date: '2025-2-16'
tags: ['HTB', 'guide', 'Bash']
draft: false
summary: 'Bash is a scripting language used to interact with Unix-based systems. Mastering it is crucial for penetration testers, especially for automating tasks like privilege escalation and data filtering in large environments..'
created: 2025-02-16T12:51
updated: 2025-02-16T14:00
---

# Bourne Again Shell (Bash) - HTB Notes

## Overview

Bash is a scripting language used to interact with Unix-based systems. Mastering it is crucial for penetration testers, especially for automating tasks like privilege escalation and data filtering in large environments.

## Key Concepts

- **Bash scripting structure:**
  - Input & Output
  - Arguments, Variables & Arrays
  - Conditional execution
  - Arithmetic operations
  - Loops & Comparison operators
  - Functions
- **Execution Methods:**
  ```bash
  bash script.sh <optional arguments>
  sh script.sh <optional arguments>
  ./script.sh <optional arguments>
  ```

````

---

## Problem Description: CIDR.sh Script

A Bash script that automates network reconnaissance by:

1. Identifying the IP address of a target domain.
2. Determining the network range (CIDR) of the discovered IP.
3. Pinging hosts to check availability.

### **Input & Output**

**Input:** A domain name
**Output:** IP addresses, network range, and host availability status.

**Example Execution:**

```bash
./CIDR.sh inlanefreight.com
````

**Example Output:**

```
Discovered IP address(es):
165.22.119.202

Additional options available:
4) Identify the network range
5) Ping discovered hosts
6) Run all checks
*) Exit
```

---

## Topics & Patterns

- **Network Reconnaissance:** Automating `whois`, `host`, and `ping` for gathering information.
- **Shell Scripting Basics:** Functions, loops, conditionals, and command execution.
- **Automating Security Tasks:** Writing scripts to quickly analyze network structures.

---

## Solution & Complexity

### **Key Ideas**

- Uses `host` to resolve domain IPs.
- `whois` retrieves CIDR information.
- `ping` checks if hosts are up.
- Implements user input for execution choices.

### **Python Equivalent**

A Python implementation using `subprocess`:

```python
import subprocess

def get_ip(domain):
    result = subprocess.run(["host", domain], capture_output=True, text=True)
    return [line.split()[-1] for line in result.stdout.split("\n") if "has address" in line]

def get_cidr(ip):
    result = subprocess.run(["whois", ip], capture_output=True, text=True)
    for line in result.stdout.split("\n"):
        if "CIDR" in line:
            return line.split(":")[-1].strip()

domain = "inlanefreight.com"
ips = get_ip(domain)
for ip in ips:
    print(f"IP: {ip}, CIDR: {get_cidr(ip)}")
```

**Complexity:**

- `host` and `whois` queries are **O(1)** per lookup.
- `ping` checks are **O(n)** based on host count.

---

## Step-by-Step Walkthrough

| Step | Description                   | Command Used                |
| ---- | ----------------------------- | --------------------------- |
| 1    | Check if a domain is provided | `if [ $# -eq 0 ]; then ...` |
| 2    | Identify IP of domain         | `host $domain`              |
| 3    | Fetch network range info      | `whois $ip                  |
| 4    | Ping discovered hosts         | `ping -c 2 $host`           |
| 5    | Present user options          | `case $opt in ...`          |

---

## Similar Questions & Real-World Uses

- **Similar Scripts:** Automating subdomain enumeration, open port checks, or SSL certificate retrieval.
- **Real-World Use Cases:**
  - **Pentesting:** Quick network footprint analysis.
  - **SysAdmin Tasks:** Automating IP and availability monitoring.
  - **Red Teaming:** Scripting enumeration processes in engagements.

---
