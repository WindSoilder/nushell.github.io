(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{560:function(t,e,a){"use strict";a.r(e);var s=a(35),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "),a("code",[t._v(t._s(t.$frontmatter.title))])]),t._v(" "),a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.$frontmatter.usage))]),t._v(" "),a("h2",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[a("code",[t._v("> ansi (code) --escape --osc --list")])]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("code")]),t._v(": the name of the code to use like 'green' or 'reset' to reset the color")]),t._v(" "),a("li",[a("code",[t._v("--escape")]),t._v(": escape sequence without the escape character(s)")]),t._v(" "),a("li",[a("code",[t._v("--osc")]),t._v(": operating system command (ocs) escape sequence without the escape character(s)")]),t._v(" "),a("li",[a("code",[t._v("--list")]),t._v(": list available ansi code names")])]),t._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("For escape sequences:\nEscape: '\\x1b[' is not required for --escape parameter\nFormat: #(;#)m\nExample: 1;31m for bold red or 2;37;41m for dimmed white fg with red bg\nThere can be multiple text formatting sequence numbers\nseparated by a ; and ending with an m where the # is of the\nfollowing values:\n    attribute_number, abbreviation, description\n    0     reset / normal display\n    1  b  bold or increased intensity\n    2  d  faint or decreased intensity\n    3  i  italic on (non-mono font)\n    4  u  underline on\n    5  l  slow blink on\n    6     fast blink on\n    7  r  reverse video on\n    8  h  nondisplayed (invisible) on\n    9  s  strike-through on\n\n    foreground/bright colors    background/bright colors\n    30/90    black              40/100    black\n    31/91    red                41/101    red\n    32/92    green              42/102    green\n    33/93    yellow             43/103    yellow\n    34/94    blue               44/104    blue\n    35/95    magenta            45/105    magenta\n    36/96    cyan               46/106    cyan\n    37/97    white              47/107    white\n    39       default            49        default\n    https://en.wikipedia.org/wiki/ANSI_escape_code\n\nOSC: '\\x1b]' is not required for --osc parameter\nExample: echo [(ansi -o '0') 'some title' (char bel)] | str collect\nFormat: #\n    0 Set window title and icon name\n    1 Set icon name\n    2 Set window title\n    4 Set/read color palette\n    9 iTerm2 Grown notifications\n    10 Set foreground color (x11 color spec)\n    11 Set background color (x11 color spec)\n    ... others\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Change color to green")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansi green\n")])])]),a("p",[t._v("Reset the color")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansi reset\n")])])]),a("p",[t._v("Use ansi to color text (rb = red bold, gb = green bold, pb = purple bold)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi rb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Hello "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi gb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Nu "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" World "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str collect\n")])])]),a("p",[t._v("Use ansi to color text (italic bright yellow on red 'Hello' with green bold 'Nu' and purple bold 'World')")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3;93;41m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Hello "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi gb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Nu "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" World "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ansi reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str collect\n")])])]),a("p",[t._v("Use ansi to color text with a style (blue on red in bold)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"(ansi -e { fg: '#0000ff' bg: '#ff0000' attr: b })Hello Nu World(ansi reset)\"")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);