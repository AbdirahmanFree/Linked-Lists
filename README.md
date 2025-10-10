# 🧱 Singly Linked List (JavaScript)

A simple, educational implementation of a **singly linked list** built entirely in vanilla JavaScript — no libraries, no frameworks.  
This project demonstrates how linked data structures work under the hood using `Node` and `LinkedList` classes.

---

## 📂 Project Structure

Everything is contained in a single file:


This file defines:
- A `Node` class — represents a single element in the list.
- A `LinkedList` class — manages all list operations.

---

## ⚙️ Features

✅ `append(value)` – Add a node to the **end**  
✅ `prepend(value)` – Add a node to the **front**  
✅ `size()` – Return number of nodes  
✅ `getHead()` / `getTail()` – Get first / last node  
✅ `atIndex(index)` – Get node at specific index  
✅ `pop()` – Remove and return the last node  
✅ `contains(value)` – Check if value exists  
✅ `find(value)` – Return index of first occurrence  
✅ `toString()` – Return readable string of all nodes  
✅ `insertAt(value, index)` – Insert before index  
✅ `removeAt(index)` – Remove node at index  

---

## 🧩 Example Usage

```js
const list = new LinkedList();

list.append(10);    // [10]
list.append(20);    // [10, 20]
list.prepend(5);    // [5, 10, 20]

console.log(list.size());         // 3
console.log(list.getHead().value) // 5
console.log(list.getTail().value) // 20

console.log(list.atIndex(1).value) // 10
console.log(list.contains(20));    // true
console.log(list.find(10));        // 1

list.insertAt(15, 2);              // [5, 10, 15, 20]
console.log(list.toString());      // (5) -> (10) -> (15) -> (20) -> null

const last = list.pop();           // removes 20
console.log(last.value);           // 20

list.removeAt(1);                  // removes value 10 → [5, 15]
console.log(list.toString());      // (5) -> (15) -> null

```
## ⏱️ Time Complexity

| **Operation**        | **Time Complexity** | **Description** |
|----------------------|--------------------|-----------------|
| `prepend()`          | **O(1)**           | Constant time — directly updates the head pointer. |
| `append()`           | **O(n)**           | Traverses to the end of the list to attach the new node. |
| `size()`             | **O(n)**           | Counts each node to determine list length. |
| `getHead()`          | **O(1)**           | Returns the head node instantly. |
| `getTail()`          | **O(n)**           | Must traverse to the last node. |
| `atIndex(index)`     | **O(n)**           | Traverses until the specified index is reached. |
| `insertAt(value, i)` | **O(n)**           | Traverses to index-1 before inserting. |
| `removeAt(i)`        | **O(n)**           | Traverses to index-1 before removing. |
| `pop()`              | **O(n)**           | Traverses to the second-last node to remove the tail. |
| `contains(value)`    | **O(n)**           | Checks each node until a match is found or list ends. |
| `find(value)`        | **O(n)**           | Searches through all nodes for the value. |
| **Space**            | **O(n)**           | One node object is allocated per list element. |

> 💡 **Tip:** If you append frequently, maintain a `tail` pointer to make appends run in **O(1)** time instead of **O(n)**.
