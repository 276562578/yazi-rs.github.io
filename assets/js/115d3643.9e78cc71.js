"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[318],{1293:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"plugins/layout","title":"Layout","description":"Learn how to use Yazi\'s Lua API.","source":"@site/docs/plugins/layout.md","sourceDirName":"plugins","slug":"/plugins/layout","permalink":"/docs/plugins/layout","draft":false,"unlisted":false,"editUrl":"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/plugins/layout.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Learn how to use Yazi\'s Lua API."},"sidebar":"docsSidebar","previous":{"title":"Types","permalink":"/docs/plugins/types"},"next":{"title":"Utils","permalink":"/docs/plugins/utils"}}');var s=i(3274),t=i(3623);const c={sidebar_position:2,description:"Learn how to use Yazi's Lua API."},r="Layout",a={},d=[{value:"Rect",id:"rect",level:2},{value:"Pad",id:"pad",level:2},{value:"Style",id:"style",level:2},{value:"Span",id:"span",level:2},{value:"Line",id:"line",level:2},{value:"Text",id:"text",level:2},{value:"Layout",id:"layout",level:2},{value:"Constraint",id:"constraint",level:2},{value:"<code>Min(min)</code>",id:"constraint.min",level:3},{value:"<code>Max(max)</code>",id:"constraint.max",level:3},{value:"<code>Length(len)</code>",id:"constraint.length",level:3},{value:"<code>Percentage(p)</code>",id:"constraint.percentage",level:3},{value:"<code>Ratio(num, den)</code>",id:"constraint.ratio",level:3},{value:"<code>Fill(scale)</code>",id:"constraint.fill",level:3},{value:"List",id:"list",level:2},{value:"Bar",id:"bar",level:2},{value:"Border",id:"border",level:2},{value:"Gauge",id:"gauge",level:2},{value:"Clear",id:"clear",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"layout",children:"Layout"})}),"\n",(0,s.jsx)(n.p,{children:"Text, List, Bar, Border, and Gauge are renderable elements; others need to be placed within any of them."}),"\n",(0,s.jsx)(n.h2,{id:"rect",children:"Rect"}),"\n",(0,s.jsx)(n.p,{children:"A Rect is represented an area within the terminal by four attributes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ui.Rect {\n\tx = 10, -- x position\n\ty = 10, -- y position\n\tw = 20, -- width\n\th = 30, -- height\n}\n\nui.Rect.default  -- Equal to `ui.Rect { x = 0, y = 0, w = 0, h = 0 }`\n"})}),"\n",(0,s.jsx)(n.p,{children:"Properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"})," - x position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"y"})," - y position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"w"})," - width"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"h"})," - height"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"left"})," - left position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"right"})," - right position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"top"})," - top position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bottom"})," - bottom position"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pad(pad)"})," - Apply a ",(0,s.jsx)(n.a,{href:"#pad",children:"Pad"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can get a pre-computed ",(0,s.jsx)(n.code,{children:"Rect"})," through ",(0,s.jsx)(n.a,{href:"#layout",children:(0,s.jsx)(n.code,{children:"ui.Layout()"})}),".\nNote that if you intend to create a ",(0,s.jsx)(n.code,{children:"Rect"})," yourself, ensure these values are calculated accurately; otherwise, it may cause Yazi to crash!"]}),"\n",(0,s.jsx)(n.h2,{id:"pad",children:"Pad"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Pad"})," represents a padding, and all of its parameters are integers:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ui.Pad(top, right, bottom, left)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"left"})," - left padding"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"right"})," - right padding"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"top"})," - top padding"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bottom"})," - bottom padding"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you want to specify only one of them:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.left(left)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(left, 0, 0, 0)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.right(right)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(0, right, 0, 0)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.top(top)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(0, 0, top, 0)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.bottom(bottom)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(0, 0, 0, bottom)"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Or specify a particular direction for them:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.x(x)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(x, x, 0, 0)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.y(y)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(0, 0, y, y)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Pad.xy(x, y)"})," equal to ",(0,s.jsx)(n.code,{children:"ui.Pad(x, x, y, y)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"style",children:"Style"}),"\n",(0,s.jsx)(n.p,{children:"Create a style:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ui.Style()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fg(color)"})," - Set the foreground color of the style, which accepts a ",(0,s.jsx)(n.a,{href:"/docs/configuration/theme#types.color",children:"Color"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bg(color)"})," - Set the background color of the style, which accepts a ",(0,s.jsx)(n.a,{href:"/docs/configuration/theme#types.color",children:"Color"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bold()"})," - Set the style to bold"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dim()"})," - Set the style to dim"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"italic()"})," - Set the style to italic"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"underline()"})," - Set the style to underline"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blink()"})," - Set the style to blink"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blink_rapid()"})," - Set the style to blink rapidly"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reverse()"})," - Set the style to reverse"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hidden()"})," - Set the style to hidden"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"crossed()"})," - Set the style to crossed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reset()"})," - Reset the style"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"patch(style)"})," - Patch the style with another ",(0,s.jsx)(n.code,{children:"Style"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"span",children:"Span"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ui.Span"})," is the smallest unit of text, yet a component of ",(0,s.jsx)(n.code,{children:"ui.Line"}),". Create a span:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Span("foo")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For convenience, ",(0,s.jsx)(n.code,{children:"ui.Span"})," can also accept itself as a argument:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Span(ui.Span("bar"))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"visible()"})," - Whether the span is visible (includes any printable characters), which returns a boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - Set the style of the span, which accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Besides applying the whole ",(0,s.jsx)(n.a,{href:"#style",children:(0,s.jsx)(n.code,{children:"Style"})}),", you can also call those methods of ",(0,s.jsx)(n.code,{children:"Style"})," directly on it, which means:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local style = ui.Style():fg("white"):bg("black"):bold()\nui.Span("Hello world"):style(style)\n'})}),"\n",(0,s.jsx)(n.p,{children:"can be also written as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Span("Hello world"):fg("white"):bg("black"):bold()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"line",children:"Line"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ui.Line"})," represents a line, consisting of multiple ",(0,s.jsx)(n.code,{children:"ui.Span"}),"s, and it accepts a table of them:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Line { ui.Span("foo"), ui.Span("bar") }\n'})}),"\n",(0,s.jsx)(n.p,{children:"For convenience, the following types are also supported:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- string\nui.Line("foo")\n\n-- ui.Span\nui.Line(ui.Span("bar"))\n\n-- ui.Line itself\nui.Line(ui.Line("baz"))\n\n-- Mixed table of string, ui.Span, ui.Line\nui.Line { "foo", ui.Span("bar"), ui.Line("baz") }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the line. If not specified, returns the current area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"width()"})," - Get the width of the line, which returns an integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"align(alignment)"})," - Set the alignment of the line. It accepts the following constants:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Line.LEFT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Line.CENTER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Line.RIGHT"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"visible()"})," - Whether the line is visible (includes any printable characters), which returns a boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - Set the style of the line, which accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Like with ",(0,s.jsx)(n.a,{href:"#span",children:(0,s.jsx)(n.code,{children:"Span"})}),", you can directly call ",(0,s.jsx)(n.a,{href:"#style",children:(0,s.jsx)(n.code,{children:"Style"})})," methods on it"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Line("Hello world"):fg("white"):bg("black"):bold()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"text",children:"Text"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ui.Text"})," is used to represent multi-line text, it takes a table of ",(0,s.jsx)(n.code,{children:"ui.Line"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Text { ui.Line("foo"), ui.Line("bar") }\n'})}),"\n",(0,s.jsx)(n.p,{children:"For convenience, the following types are also supported:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- string\nui.Text("foo\\nbar")\n\n-- ui.Line\nui.Text(ui.Line("foo"))\n\n-- ui.Span\nui.Text(ui.Span("bar"))\n\n-- Mixed table of string, ui.Line, ui.Span\nui.Text { "foo", ui.Line("bar"), ui.Span("baz") }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(n.code,{children:"ui.Text.parse(code)"})," to parse an ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ANSI_escape_code",children:"ANSI escape sequence"})," string into a text."]}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the text. If not specified, returns the current area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"align(alignment)"})," - Set the alignment of the text, accepts the following constants:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Text.LEFT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Text.CENTER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Text.RIGHT"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wrap(wrap)"})," - Set the wrap of the text, which accepts the following constants:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Text.WRAP_NO"})," - No wrap"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Text.WRAP"})," - Wrap at the end of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui.Text.WRAP_TRIM"})," - Wrap at the end of the line, and trim the leading whitespace"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_width()"})," - Get the maximum width of the text, which returns an integer"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - Set the style of the text, which accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Like with ",(0,s.jsx)(n.a,{href:"#span",children:(0,s.jsx)(n.code,{children:"Span"})}),", you can directly call ",(0,s.jsx)(n.a,{href:"#style",children:(0,s.jsx)(n.code,{children:"Style"})})," methods on it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.Text("Hello world"):fg("white"):bg("black"):bold()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"layout",children:"Layout"}),"\n",(0,s.jsx)(n.p,{children:"Create a layout:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local areas = ui.Layout()\n\t:direction(ui.Layout.HORIZONTAL)\n\t:constraints({ ui.Constraint.Percentage(50), ui.Constraint.Percentage(50) })\n\t:split(area)\n\nlocal left = areas[1] -- The first rect\nlocal right = areas[2] -- The second rect\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"direction(direction)"})," - Set the direction of the layout, which accepts the following constants:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Layout.HORIZONTAL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Layout.VERTICAL"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"margin(margin)"})," - Set the margin of the layout, which accepts an positive integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"margin_h(margin)"})," - Set the horizontal margin of the layout, which accepts an positive integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"margin_v(margin)"})," - Set the vertical margin of the layout, which accepts an positive integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"constraints({ constraint, ... })"})," - Set the constraints of the layout, which accepts a list of ",(0,s.jsx)(n.a,{href:"#constraint",children:"Constraint"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split(rect)"})," - Accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"})," and split it into multiple ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"})," according to the constraints."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"constraint",children:"Constraint"}),"\n",(0,s.jsx)(n.p,{children:"A constraint that defines the size of a layout element."}),"\n",(0,s.jsx)(n.p,{children:"Constraints can be used to specify a fixed size, a percentage of the available space, a ratio of\nthe available space, a minimum or maximum size or a fill proportional value for a layout\nelement."}),"\n",(0,s.jsx)(n.p,{children:"Relative constraints (percentage, ratio) are calculated relative to the entire space being\ndivided, rather than the space available after applying more fixed constraints (min, max,\nlength)."}),"\n",(0,s.jsx)(n.p,{children:"Constraints are prioritized in the following order:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Constraint.Min(min)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Constraint.Max(max)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Constraint.Length(len)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Constraint.Percentage(p)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Constraint.Ratio(num, den)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Constraint.Fill(scale)"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"constraint.min",children:(0,s.jsx)(n.code,{children:"Min(min)"})}),"\n",(0,s.jsx)(n.p,{children:"Applies a minimum size constraint to the element"}),"\n",(0,s.jsx)(n.p,{children:"The element size is set to at least the specified amount."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- { Percentage(100), Min(20) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502            30 px           \u2502\u2502       20 px      \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- { Percentage(100), Min(10) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502                 40 px                \u2502\u2502  10 px \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constraint.max",children:(0,s.jsx)(n.code,{children:"Max(max)"})}),"\n",(0,s.jsx)(n.p,{children:"Applies a maximum size constraint to the element"}),"\n",(0,s.jsx)(n.p,{children:"The element size is set to at most the specified amount."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- { Percentage(0), Max(20) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502            30 px           \u2502\u2502       20 px      \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- { Percentage(0), Max(10) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502                 40 px                \u2502\u2502  10 px \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constraint.length",children:(0,s.jsx)(n.code,{children:"Length(len)"})}),"\n",(0,s.jsx)(n.p,{children:"Applies a length constraint to the element"}),"\n",(0,s.jsx)(n.p,{children:"The element size is set to the specified amount."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- { Length(20), Length(20) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502       20 px      \u2502\u2502       20 px      \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- { Length(20), Length(30) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502       20 px      \u2502\u2502            30 px           \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constraint.percentage",children:(0,s.jsx)(n.code,{children:"Percentage(p)"})}),"\n",(0,s.jsx)(n.p,{children:"Applies a percentage of the available space to the element"}),"\n",(0,s.jsx)(n.p,{children:"Converts the given percentage to a floating-point value and multiplies that with area.\nThis value is rounded back to an integer as part of the layout split calculation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- { Percentage(75), Fill(1) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502                38 px               \u2502\u2502   12 px  \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- { Percentage(50), Fill(1) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502         25 px         \u2502\u2502         25 px         \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constraint.ratio",children:(0,s.jsx)(n.code,{children:"Ratio(num, den)"})}),"\n",(0,s.jsx)(n.p,{children:"Applies a ratio of the available space to the element"}),"\n",(0,s.jsx)(n.p,{children:"Converts the given ratio to a floating-point value and multiplies that with area.\nThis value is rounded back to an integer as part of the layout split calculation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- { Ratio(1, 2), Ratio(1, 2) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502         25 px         \u2502\u2502         25 px         \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- { Ratio(1, 4), Ratio(1, 4), Ratio(1, 4), Ratio(1, 4) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502   13 px   \u2502\u2502   12 px  \u2502\u2502   13 px   \u2502\u2502   12 px  \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constraint.fill",children:(0,s.jsx)(n.code,{children:"Fill(scale)"})}),"\n",(0,s.jsxs)(n.p,{children:["Applies the scaling factor proportional to all other ",(0,s.jsx)(n.code,{children:"Fill"})," elements\nto fill excess space"]}),"\n",(0,s.jsxs)(n.p,{children:["The element will only expand or fill into excess available space, proportionally matching\nother ",(0,s.jsx)(n.code,{children:"Fill"})," elements while satisfying all other constraints."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- { Fill(1), Fill(2), Fill(3) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502 8 px \u2502\u2502     17 px     \u2502\u2502         25 px         \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- { Fill(1), Percentage(50), Fill(1) }\n-- \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n-- \u2502   13 px   \u2502\u2502         25 px         \u2502\u2502   12 px  \u2502\n-- \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://docs.rs/ratatui/latest/ratatui/layout/enum.Constraint.html",children:"https://docs.rs/ratatui/latest/ratatui/layout/enum.Constraint.html"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"list",children:"List"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"List"})," that takes a table of ",(0,s.jsx)(n.code,{children:"ui.Text"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'ui.List { ui.Text("foo"), ui.Text("bar") }\n'})}),"\n",(0,s.jsx)(n.p,{children:"For convenience, the following types are also supported:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- Table of string\nui.List { "foo", "bar" }\n\n-- Table of ui.Line\nui.List { ui.Line("foo"), ui.Line("bar") }\n\n-- Table of ui.Span\nui.List { ui.Span("foo"), ui.Span("bar") }\n\n-- Mixed table of string, ui.Line, ui.Span\nui.List { "foo", ui.Line("bar"), ui.Span("baz") }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the text. If not specified, returns the current area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - Set the style of the list, which accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"bar",children:"Bar"}),"\n",(0,s.jsx)(n.p,{children:"Create a bar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ui.Bar(direction)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first attribute denotes the direction of the bar and accepts the following constants:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Bar.NONE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Bar.TOP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Bar.RIGHT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Bar.BOTTOM"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Bar.LEFT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Bar.ALL"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the bar. If not specified, returns the current area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"symbol(symbol)"})," - accepts a string, specifying the symbol for the bar"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"}),", specifying the style of the bar"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"border",children:"Border"}),"\n",(0,s.jsx)(n.p,{children:"Create a border:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ui.Border(position)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first attribute denotes the position of the border and accepts the following constants:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.NONE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.TOP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.RIGHT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.BOTTOM"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.LEFT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.ALL"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the border. If not specified, returns the current area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type(type)"})," - accepts a type, specifying the type of the border:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.PLAIN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.ROUNDED"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.DOUBLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.THICK"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.QUADRANT_INSIDE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ui.Border.QUADRANT_OUTSIDE"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"}),", specifying the style of the border"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"gauge",children:"Gauge"}),"\n",(0,s.jsx)(n.p,{children:"Create a gauge:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"ui.Gauge()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the gauge. If not specified, returns the current area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"percent(percent)"})," - Set the percentage of the gauge"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ratio(ratio)"})," - Set the ratio of the gauge"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"label(label)"})," - Set the label of the gauge"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"style(style)"})," - Set the style of everything except the bar itself, which accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gauge_style(style)"})," - Set the style of the bar, which accepts a ",(0,s.jsx)(n.a,{href:"#style",children:"Style"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"clear",children:"Clear"}),"\n",(0,s.jsxs)(n.p,{children:["Clear the content of a specific area, which is a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),". Place it followed by the component that you want to clear:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local components = {\n\tui.Text("..."):area(rect),\n\t-- ...\n\n\tui.Clear(rect),\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Methods (return ",(0,s.jsx)(n.code,{children:"self"})," if not specified):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area(rect)"})," - accepts a ",(0,s.jsx)(n.a,{href:"#rect",children:"Rect"}),", changing the area of the clear. If not specified, returns the current area."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3623:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var l=i(9474);const s={},t=l.createContext(s);function c(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);