# expand.md

## 1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections?

IDs and classes serve as essential connectors between HTML, CSS, and JavaScript. In HTML, they structure the content; in CSS, they define the styles; in JS, they enable interaction and behavior. Choosing meaningful, consistent, and unique IDs or reusable classes ensures maintainability, readability, and clear separation of concerns. Poor naming or overlapping usage can lead to style conflicts or broken functionality when scripting.

---

## 2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

Data attributes are custom attributes that start with `data-`, used to store extra information directly on HTML elements (e.g. `<div data-user-id="42">`). They are useful for embedding metadata without affecting semantics or requiring additional JS variables. You can access them in JavaScript using `element.dataset`, like `element.dataset.userId`. In microdata or semantic HTML, data attributes allow web crawlers or APIs to extract structured data efficiently, but overusing them can bloat the HTML and reduce performance or clarity.

---

## 3. What is a DOM fragment? Why are they powerful?

A DOM fragment (`DocumentFragment`) is a lightweight, invisible container that can hold DOM nodes. They are powerful because operations on fragments (like appending multiple elements) happen in memory, not directly in the live DOM. This avoids repeated reflows and repaints, improving performance. Once ready, the fragment can be inserted into the DOM in a single operation.

---

## 4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

The Virtual DOM is an abstraction of the real DOM, used by frameworks like React. It allows changes to be calculated in memory and only the necessary updates to be applied to the actual DOM. You gain speed, performance, and a declarative UI programming model. However, you lose direct access to the real DOM, and there's a learning curve and abstraction overhead, which might be unnecessary for small projects.

---

## 5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?

The word `class` is a reserved keyword in JavaScript (especially in ES6 for defining classes). To avoid naming conflicts, the DOM API uses `className` to access or modify an element’s class attribute (e.g. `element.className = "active"`). Similarly, `for` becomes `htmlFor` in form labels.

---

## 6. What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?

Using `addEventListener()` allows you to attach multiple event listeners of the same type to a single element, and gives more flexibility (like setting options or removing listeners later). For example:
```js
element.addEventListener("click", handler)
