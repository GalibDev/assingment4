## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?



# 📝 Answers to Questions

---

### 1️⃣ Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- `getElementById()` selects a single element using its ID.
- `getElementsByClassName()` selects multiple elements using class name and returns a live HTMLCollection.
- `querySelector()` selects the first matching element using CSS selector.
- `querySelectorAll()` selects all matching elements and returns a static NodeList.

---

### 2️⃣ How do you create and insert a new element into the DOM?

You can create a new element using:

```javascript
const div = document.createElement("div");


### 3. **What is Event Bubbling? And how does it work?**

Event Bubbling is a process where an event starts from the target element and then moves up to its parent elements.

For example, if a button is inside a div and we click the button, the event first runs on the button, then on the div, and then on the body.



### 4. **What is Event Delegation in JavaScript? Why is it useful?**

Event Delegation is a technique where we add one event listener to a parent element instead of adding listeners to many child elements.

It is useful because:

It improves performance.

It works for dynamically created elements.

It reduces duplicate code.

### 5. **What is the difference between preventDefault() and stopPropagation() methods?**

preventDefault() stops the default browser action. For example, it can stop a form from reloading the page when submitted.

stopPropagation() stops the event from moving up to parent elements. It prevents event bubbling.












