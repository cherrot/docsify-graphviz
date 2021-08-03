# docsify-graphviz

docsify-graphviz is a [docsify](https://docsify.js.org/) plugin to render DOT graphs using Graphviz, which is vendored by [hpcc-js/wasm](https://github.com/hpcc-systems/hpcc-js-wasm) using Web-Assembly.

## Usage

Add `hpcc-js` and this plugin in your `index.html`:

```html
<script src="//unpkg.com/@hpcc-js/wasm/dist/index.min.js"></script>
<script src="//unpkg.com/docsify-graphviz@latest/dist/docsify-graphviz.js"></script>
```

Now you can include Graphviz diagrams in your markdown files:

    ```graphviz
    digraph {
        A -> B
    }
    ```

## Roadmap

- [x] Render DOT graphs in code blocks.
- [ ] Render DOT files by URL
