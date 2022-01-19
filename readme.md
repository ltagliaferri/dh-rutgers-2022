# Digital Humanities: Theories and Practice Public Site

This is the public-facing frontend site of Rutgers Spring 2022 course 16:560:670:01 Digital Humanities, convened by Lisa Tagliaferri. The site will be under development throughout the length of the course.

The website can be accessed via [https://ltagliaferri.github.io/dh-rutgers-2022/](https://ltagliaferri.github.io/dh-rutgers-2022/).

## Developing the site

This site is built with [Eleventy](https://www.11ty.dev/) and is mostly written in HTML and markdown. If you would like to have a local version of this site, or use the site for a template, you can take the following steps. Note that this repo is set up to serve its contents on GitHub Pages, and there are a few files in this repo that are specific to this workflow, and some less intuitive file pathways. You may need to adapt some of the files to deploy the site through other means.

### Step 1 — Clone the repository

Clone this code repository by clicking on the green **Code** button at the top of this repo (in the _Code_ section) and selecting the option that works best for you.

To learn more about cloning repositories, review the [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 

### Step 2 — Install packages and dependencies

Locate the directory on your local machine where you cloned the repository. Within this parent directory run the following command to install packages and dependencies needed to run the software:

```
npm install
```

This requires npm to be installed on your machine. If you receive an error message or no output, follow the npm documentation to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

You should receive output that indicates that the relevant packages have installed.

### Step 3 — Build the site

Next, you'll want to use npm to build the site, which you can achieve with the following command.

```
npm run build
```

You should receive output that files have been written.

### Step 4 — Serve the site

You can now serve the web app, by running the following.

```
npm start
```

You'll know that this is working when you get output of how to access the local version of the site. Most likely, you'll be able to now access the site with your web browser of choice from the following URL and port:

```
http://localhost:8080
```

If you are having issues, review the terminal output you have received to ensure that the port is correct for your version.

At this point, you can review the site while you edit. You may want to build the site again with the `npm run build` command while working on the code or content.

## Contributing to this site

If you would like to make a suggestion to this repo (for example, to add resources), feel free to [open an issue](https://github.com/ltagliaferri/dh-rutgers-2022/issues/new). If you are participating in the course, we will review how to contribute.

## Credits

11ty theme based on [NikitaZanella/11ty-SASS](https://github.com/NikitaZanella/11ty-SASS).

Banner photo by [Eric Krull](https://unsplash.com/@ekrull) on [Unsplash](https://unsplash.com/s/photos/robot).
  