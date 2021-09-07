// Inspired by https://unpkg.com/docsify-mermaid@1.0.0/dist/docsify-mermaid.js
var LANG = 'graphviz'
var SELECTOR = 'pre[data-lang="' + LANG + '"]'

function replace(html, element) {
  const parent = element.parentNode;
  const newElem = document.createElement('div');
  newElem.dataset.lang = LANG;
  newElem.innerHTML = html;
  parent.replaceChild(newElem, element);
}

function install(hook, vm) {
  var hpccWasm = window["@hpcc-js/wasm"];
  const config = Object.assign({}, {
    // someKey: 'someVal',
  }, vm.config.graphviz)

  hook.doneEach(function () {
    promises = [];
    document.querySelectorAll(SELECTOR).forEach(function (element) {
      promises.push(hpccWasm.graphviz.layout(element.textContent, "svg", "dot").then(svg => {
        replace(svg, element);
      }).catch(err => console.error(err.message)));
    });
  });
}

if (!window.$docsify) {
  window.$docsify = {};
}
window.$docsify.plugins = (window.$docsify.plugins || []).concat(install)
