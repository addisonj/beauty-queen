var beautifier = require("beautifyjs").js_beautify
var _ = require("underscore")
var fs = require("fs")

var default_opts = {
  indent_size: 4,
  indent_char: ' ',
  preserve_newlines: true,
  jslint_happy: false,
  keep_array_indentation: false,
  brace_style: 'collapse',
  space_before_conditional: true
}

function beautify(file, opts) {
  opts = _.defaults(opts, default_opts)

  fs.readFile(file, "utf8", function(err, text) {
    if (err) throw err
    if (!text) throw new Error("empty!")

    console.log(beautifier(text, opts))
  })
}

module.exports = beautify
