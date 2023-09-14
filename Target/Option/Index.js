import{Bytes as e,Default as o,Merge as a}from"files-pipe";var p=a(o,{CSS:(await import("./CSS.js")).default,HTML:(await import("./HTML.js")).default,JavaScript:(await import("./JavaScript.js")).default,Image:(await import("./Image.js")).default,SVG:(await import("./SVG.js")).default,Map:(await import("./Map.js")).default,Action:{Failed:async t=>`Error: Cannot compress file ${t.Input}!`,Passed:async t=>t.Before>Buffer.byteLength(t.Buffer.toString()),Accomplished:async t=>`Compressed ${t.Input} for ${await e(t.Before-t.After)} (${((t.Before-t.After)/t.Before*100).toFixed(2)}% reduction) in ${t.Output}.`,Changed:async t=>Object.defineProperty(t.Info,"Total",{value:(t.Info.Total?t.Info.Total:0)+(t.On.Before-t.On.After),configurable:!0})&&t}});export{p as default};
