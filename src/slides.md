# Cascading style sheet

---

## Cascading style sheet

There are about of 250 defferent style properties.

---

## Cascading style sheet
### Box model

- width - define exact width of element in any valid css units.
- height - define exact height of element in any valid css units.
- min/max-width - define min/max possible width of element in any valid css units depends of content.
- min/max-height - define min/max possible height of element in any valid css units depends of content.
- margin - define external indents for the element, can be used different syntax
- padding - define internal indents for the element, can be used different syntax
- box-sizing - define which parts of the box model will be included into the element size

---

## Cascading style sheet
### Box model

```css
  .block {
    width: 30px;
    heigth: 30px;
  }
  .all-different-indents {
    margin: 10px 20px 30px 40px;
    padding: 10px 20px 30px 40px;
  }
  .equal-verticals-and-horisontals-indents {
    margin: 20px 40px;
    padding: 20px 40px;
  }
  .all-indents-are-equal {
    margin: 40px;
    padding: 40px;
  }
```

---

## Cascading style sheet
### Box model

<div class="two-columns">
<div>
<pre><code class="language-html">
  <div class="block" >Hello world</div>
  <div class="block box-sizing" >Hello world</div>
</code></pre>

<pre><code class="language-css">
  .block {
    height: 40px;
    border: 20px solid #fff;
  }

  .box-sizing {
    box-sizing: border-box;
  }
</code></pre>
</div>
<div>
  <style>
    .block {
      height: 50px;
      border: 20px solid #fff !important;
      color: green;
    }

    .box-sizing {
      box-sizing: border-box;
    }
  </style>
  <div class="block" >Hello world</div>
  <div class="block box-sizing" >Hello world</div>
</div>
</div>

---
## Cascading style sheet
### Border
<ul style="max-height: 50vh; overflow-y: scroll; padding-left: 40px; ">
<li>border</li>
<li>border-width</li>
<li>border-style</li>
<li>border-color</li>
<li>border-top</li>
<li>border-right</li>
<li>border-bottom</li>
<li>border-left</li>
<li>border-top-width</li>
<li>border-right-width</li>
<li>border-bottom-width</li>
<li>border-left-width</li>
<li>border-top-style</li>
<li>border-right-style</li>
<li>border-bottom-style</li>
<li>border-left-style</li>
<li>border-top-color</li>
<li>border-right-color</li>
<li>border-bottom-color</li>
<li>border-left-color</li>
<li>border-radius</li>
<li>border-top-left-radius</li>
<li>border-top-right-radius</li>
<li>border-bottom-left-radius</li>
<li>border-bottom-right-radius</li>
</ul>

---
## Cascading style sheet
### Border

```css
  .block {
    border: 10px solid red;
    border-radius: 10px 20px 30px 40px;
  }

```
---
## Cascading style sheet
### Display & Visibility

```css
  .block {
    display: none;
    display: block; // by default for the block elements
    display: inline-block; // by default for the inline-block elements
    display: inline; // by default for the inline elements
    display: flex;
    display: grid;
  }

```
---
## Cascading style sheet
### Display & Visibility
The CSS visibility property controls whether an element is visible or hidden while still taking up space in the layout
```css
  .block {
    visibility: hidden;
    visibility: visible; // by default
  }

```
---
## Cascading style sheet
### Overflow
The CSS overflow property controls what happens when content is too large to fit inside an element’s box, such as whether it is clipped, hidden, or scrollable. 
```css
  .block {
    overflow: hidden;
    overflow: scroll;
    overflow: visible;
    overflow: auto;
  }

```
---
## Cascading style sheet
### Position

```css
  .block {
    position: static; /* by default */
    position: relative; /* positions an element relative to its 
      own original (default) position.*/
    position: absolute; /* positions an element relative to 
      the closest parent with property position different from static . */
    position: fixed; /* positions an element relative to the viewport. */
    position: sticky; /* positions an element relative to its normal position
      until a scroll threshold is reached, after which
      it sticks to a specified position within its container. */
  }

```
---
## Cascading style sheet
### Position

```css
  .block {
    top: 20px; /* any valid css unit */
    left: 20px; /* any valid css unit */
    right: 20px; /* any valid css unit */
    bottom: 20px; /* any valid css unit */
    inset: tru10px 20px 30px 40px; /* top right bottom left */
  }

```
---
## Cascading style sheet
### Z-index
Controls the stacking order of positioned elements, determining which elements appear in front of or behind others along the z-axis.
```css
  .block {
    z-index: 2; /* any number */
  }

```
