# 📦 Package Sorting Robot – Thoughtful Robotics

This project contains a simple Node.js function used by a robotic arm to sort packages based on their **volume**, **dimensions**, and **mass**. The sorting logic follows a set of predefined rules to dispatch packages into appropriate stacks.

---

## ✅ Objective

Sort incoming packages into one of three categories:

- **STANDARD**: Package is neither bulky nor heavy.
- **SPECIAL**: Package is bulky **or** heavy.
- **REJECTED**: Package is **both** bulky and heavy.

---

## 🧮 Sorting Rules

### A package is considered:

- **Bulky** if:
  - Its **volume** (Width × Height × Length) is **≥ 1,000,000 cm³**, or
  - **Any single dimension** is **≥ 150 cm**

- **Heavy** if:
  - Its **mass** is **≥ 20 kg**

---

## 🚀 Installation & Execution

### 1. Clone the Repository (or download the code)

```bash
git clone https://github.com/ChangDreamDev/Test-for-Thoughtful-AI.git
cd Test-for-Thoughtful-AI
node.js sortPackages.js
