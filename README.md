# alpacasoftwareltd.github.io

The Alpaca Software Ltd company website, built with Jekyll using the [Agency Jekyll Theme](https://github.com/raviriley/agency-jekyll-theme).

## Local Development

**Prerequisites:** Ruby 3.2+, Bundler

```sh
bundle install
bundle exec jekyll serve --trace
```

Open http://localhost:4000.

The site auto-regenerates on file changes — just refresh the browser.

## Deploying

Push to `master` — GitHub Pages builds and deploys automatically.

## Customisation

Content and style are driven by config files, no template changes needed for most edits:

| File | Purpose |
|------|---------|
| `_data/sitetext.yml` | All site text and copy |
| `_data/navigation.yml` | Navigation links |
| `_data/style.yml` | Colors, background images, fonts |
| `_portfolio/` | Portfolio grid items |

## Contact

Uses a `mailto:` link — no third-party form service. The email address is assembled at runtime in `_includes/contact.html` to avoid plain-text exposure to scrapers. To change the address, update the `u` and `d` variables in that file.

## License

[MIT](LICENSE.txt)
