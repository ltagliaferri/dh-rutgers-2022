---
title: Deploy Eleventy on GitHub with GitHub Actions
description: Video walkthrough on deploying an Eleventy website with GitHub Actions
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/d7HDAbkJR7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Run the following command to generate keys:

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

Ensure that you copy and paste the above command exactly and run it in the Terminal within the repository we're using.