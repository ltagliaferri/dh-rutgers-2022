---
title: Python zip() Function
description: Loop across two lists with the built-in Python zip() function
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/1cgyf2erzOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Code is below:

```python
students = ["Dante", "Leopardi", "Ariosto", "Galileo", "Tasso"]
grades = [100, 55, 66, 75, 88]


for s, g in zip(students, grades):
    # Check if grade is passing first
    if g >= 65:
        if g >= 90:
            print(s + " got an A.")
        elif g >= 80:
            print(s + " got a B.")
        elif g >= 65:
            print(s + " got a C.")
    else:
        print(s + " failed.")
```