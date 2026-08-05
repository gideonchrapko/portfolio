# Nav routes config

Edit `nav-routes.json` to change the header nav pills and their dropdowns.

## Item fields

- **pillLabel** – Text on the pill (e.g. `"/About"`, `"/Projects/"`).
- **pillHref** – Link when the pill is clicked.
- **pillOuterBg** – Background of the pill wrapper (hex, e.g. `"#cfed77"`).
- **pillLabelBg** – Background of the label (hex).
- **pillSlugLabel** – Optional extra label (e.g. `"[slug]"` for Projects).
- **dropdown** – Optional array. If present, hovering shows a dropdown.

## Dropdown formats

### Simple list

Use for menus like About:

```json
"dropdown": [
  { "label": "About me", "href": "/about" },
  { "label": "Resume", "href": "/about#resume" }
]
```

### Tree (nested – prefixes auto-generated)

Use a `tree` array of nodes. Prefixes (┌, │, ├, └, ○, λ) are generated from the structure.

Each node: **label**, **href**, optional **symbol** (default `"○"`, use `"λ"` for API routes), optional **suffix** (e.g. `"→"`), optional **children** (nested nodes).

Example:

```json
"dropdown": {
  "tree": [
    {
      "label": "/projects",
      "href": "/projects",
      "symbol": "○",
      "children": [
        { "label": "/projects/project-1", "href": "/projects/project-1", "suffix": "→" },
        { "label": "/projects/project-2", "href": "/projects/project-2" },
        { "label": "/projects/project-3", "href": "/projects/project-3" }
      ]
    },
    {
      "label": "/api/projects",
      "href": "/api/projects",
      "symbol": "λ"
    }
  ]
}
```

- First root with children gets `┌ ○`; its children get `│  ├`, `│  │  ├`, `│  └` as needed.
- Last root (no children) gets `└ λ`. Add or remove nodes/children to change the tree.
