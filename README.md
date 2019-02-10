# Dignity and Debt

Hugo project for the [Dignity and Debt](https://dignityanddebt.org) project.


## Development

This project uses the standard [HUGO](https://gohugo.io) build engine.

To build locally:

```
hugo server -w
```

Before committing and pushing your changes, this command will build the files for publishing in `/public`:

```
hugo
```

Make sure your git commit contains files in `/public` or netlify will complain.
