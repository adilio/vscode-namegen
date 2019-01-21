/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";"function"!=typeof define&&"object"==typeof module&&"object"==typeof module.exports&&(global.define=function(e,t){module.exports=t(),global.define=void 0}),define([],function(){function e(e){const t=global._performanceEntries;for(let n=t.length-1;n>=0;n-=5)if(t[n-3]===e)return t[n-2];throw new Error(e+" not found")}var t=this;"undefined"!=typeof global&&(t=global),t._performanceEntries=t._performanceEntries||[];const n=Date.now;let r=0;return{mark:function(e){global._performanceEntries.push("mark",e,n(),0,r++),"function"==typeof console.timeStamp&&console.timeStamp(e)},measure:function(t,r,o){let i,l,f=n();i=r?e(r):f,l=o?e(o)-i:f-i,global._performanceEntries.push("measure",t,i,l)},getEntries:function(e,t){const n=[],r=global._performanceEntries;for(let o=0;o<r.length;o+=5)r[o]!==e||void 0!==t&&r[o+1]!==t||n.push({type:r[o],name:r[o+1],startTime:r[o+2],duration:r[o+3],seq:r[o+4]});return n.sort((e,t)=>e.startTime-t.startTime||e.seq-t.seq)},getEntry:function(e,t){const n=global._performanceEntries
;for(let r=0;r<n.length;r+=5)if(n[r]===e&&n[r+1]===t)return{type:n[r],name:n[r+1],startTime:n[r+2],duration:n[r+3],seq:n[r+4]}},getDuration:function(e,t){const n=global._performanceEntries;let r=t,o=0;for(let i=n.length-1;i>=0;i-=5)if(n[i-3]===r){if(r!==t)return o-n[i-2];o=n[i-2],r=e}return 0},importEntries:function(e){global._performanceEntries.splice(0,0,...e)},exportEntries:function(){return global._performanceEntries.slice(0)}}});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/61122f88f0bf01e2ac16bdb9e1bc4571755f5bd8/core/vs\base\common\performance.js.map
