# Frontend Mentor - Article preview component

![Design preview for the Article preview component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## 1. Adjusting the Color of an SVG

### **For Inline SVG (using the `fill` property):**

If your SVG is embedded directly in the HTML, you can target it with CSS and set its fill color:

```
/* Set the fill color of all inline SVGs to white */
svg {
  fill: #fff;
}

/* Alternatively, you can use 'currentColor'
   so that the SVG inherits the parent's text color */
svg {
  fill: currentColor;
}
```

### **For External SVG (using the `filter` property):**

If your SVG is referenced as an `<img>` element, use the filter property:

```
/* Applies a filter to change the external SVG to white */
img.svg-white {
  filter: brightness(0) invert(1);
}
```

---

## 2. Using a Short State Class (.share-active) for Toggling

To simplify state management and avoid lengthy variable names, you can use a single state class like `.share-active` to toggle styles across elements.

```
/* Default state for elements that need toggling */
.element {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* When the .share-active class is added, the element becomes visible */
.share-active .element {
  opacity: 1;
  visibility: visible;
}
```

In your JavaScript, simply add or remove the `.share-active` class on the target element to switch its state.

```
const shareBtns = document.querySelectorAll(".share__btn");

shareBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.closest(".card__footer").classList.toggle("share-active");
  });
});

document.body.addEventListener("click", () => {
  document.querySelectorAll(".card__footer").forEach((footer) => {
    footer.classList.remove("share-active");
  });
});
```

---

## 3. Using Opacity and Visibility to Show/Hide an Element

You can achieve smooth visibility transitions by combining the `opacity` and `visibility` properties:

```
/* Element is hidden by default */
.toggle-element {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Adding .share-active class makes the element visible */
.toggle-element.share-active {
  opacity: 1;
  visibility: visible;
}
```

This technique ensures that the element not only fades in/out via opacity but also remains non-interactive when hidden (due to `visibility: hidden`).

---

## 4. Creating a Triangle Using a Pseudo-Element

You can create a triangle shape using CSS borders on a pseudo-element (e.g., `::after`). Here’s how:

```
.element::after {
  content: "";
  position: absolute; /* Adjust positioning as needed */
  bottom: -20px;      /* Places the triangle below the element */
  left: 50%;          /* Centers the triangle horizontally */
  transform: translateX(-50%);
  border-width: 10px; /* Adjust size of the triangle */
  border-style: solid;
  border-color: blue transparent transparent transparent;
}
```

This snippet creates a downward-pointing triangle where only the top border is colored blue while the others are transparent.
