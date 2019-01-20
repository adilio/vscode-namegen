module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=40)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r,s,i,c,a=n(0),u=n(1),l=Object.prototype.toString;function d(e){return void 0!==e}function p(e){return"[object String]"===l.call(e)}function f(e){return JSON.parse(u.readFileSync(e,"utf8"))}function g(e,t){return c&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,function(e,n){var o=n[0],r=t[o],s=e;return"string"==typeof r?s=r:"number"!=typeof r&&"boolean"!=typeof r&&null!=r||(s=String(r)),s})}function m(e){return function(t,n){for(var o,r=[],s=2;s<arguments.length;s++)r[s-2]=arguments[s];return o=t,"[object Number]"===l.call(o)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):g(e[t],r):p(n)?(console.warn("Message "+n+" didn't get externalized correctly."),g(n,r)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function h(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return g(t,n)}function b(e,t){return s[e]=t,t}function v(e,t){var n,o,r,s=a.join(i.cacheRoot,e.id+"-"+e.hash+".json"),c=!1,l=!1;try{return n=JSON.parse(u.readFileSync(s,{encoding:"utf8",flag:"r"})),o=s,r=new Date,u.utimes(o,r,r,function(){}),n}catch(e){if("ENOENT"===e.code)l=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),u.unlink(s,function(e){e&&console.error("Deleting corrupted bundle "+s+" failed.")}),c=!0}}if(!(n=function(e,t){var n=i.translationsConfig[e.id];if(n){var o=f(n).contents,r=f(a.join(t,"nls.metadata.json")),s=Object.create(null);for(var c in r){var u=r[c],l=o[e.outDir+"/"+c];if(l){for(var d=[],g=0;g<u.keys.length;g++){var m=u.keys[g],h=l[p(m)?m:m.key];void 0===h&&(h=u.messages[g]),d.push(h)}s[c]=d}else s[c]=u.messages}return s}}(e,t))||c)return n;if(l)try{u.writeFileSync(s,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}function w(e){try{return function(e){var t=f(a.join(e,"nls.metadata.json")),n=Object.create(null);for(var o in t){var r=t[o];n[o]=r.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function y(e,t){var n;if(!0===i.languagePackSupport&&void 0!==i.cacheRoot&&void 0!==i.languagePackId&&void 0!==i.translationsConfigFile&&void 0!==i.translationsConfig)try{n=v(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(i.languagePackSupport)return w(t);var o=function(e){for(var t=i.locale;t;){var n=a.join(e,"nls.bundle."+t+".json");if(u.existsSync(n))return n;var o=t.lastIndexOf("-");t=o>0?t.substring(0,o):void 0}if(void 0===t&&(n=a.join(e,"nls.bundle.json"),u.existsSync(n)))return n}(t);if(o)try{return f(o)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=w(t)}return n}function P(e){if(!e)return h;var t=a.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),i.messageFormat===o.both||i.messageFormat===o.bundle){var n=function(e){for(var t,n=a.dirname(e);t=a.join(n,"nls.metadata.header.json"),!u.existsSync(t);){var o=a.dirname(n);if(o===n){t=void 0;break}n=o}return t}(e);if(n){var r=a.dirname(n),l=s[r];if(void 0===l)try{var p=JSON.parse(u.readFileSync(n,"utf8"));try{var g=y(p,r);l=b(r,g?{header:p,nlsBundle:g}:null)}catch(e){console.error("Failed to load nls bundle",e),l=b(r,null)}}catch(e){console.error("Failed to read header file",e),l=b(r,null)}if(l){var v=e.substr(r.length+1).replace(/\\/g,"/"),w=l.nlsBundle[v];return void 0===w?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):m(w)}}}if(i.messageFormat===o.both||i.messageFormat===o.file)try{var P=f(function(e){var t;if(i.cacheLanguageResolution&&t)t=t;else{if(c||!i.locale)t=".nls.json";else for(var n=i.locale;n;){var o=".nls."+n+".json";if(u.existsSync(e+o)){t=o;break}var r=n.lastIndexOf("-");r>0?n=n.substring(0,r):(t=".nls.json",n=null)}i.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(P)?m(P):d(P.messages)&&d(P.keys)?m(P.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(o=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(r||(r={})),function(){if(i={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:o.bundle},p(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(p(e.locale)&&(i.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(i.languagePackSupport=e._languagePackSupport),p(e._cacheRoot)&&(i.cacheRoot=e._cacheRoot),p(e._languagePackId)&&(i.languagePackId=e._languagePackId),p(e._translationsConfigFile)){i.translationsConfigFile=e._translationsConfigFile;try{i.translationsConfig=f(i.translationsConfigFile)}catch(t){e._corruptedFile&&u.writeFile(e._corruptedFile,"corrupted","utf8",function(e){console.error(e)})}}}catch(e){}var t;c="pseudo"===i.locale,void 0,s=Object.create(null)}(),t.loadMessageBundle=P,t.config=function(e){return e&&(p(e.locale)&&(i.locale=e.locale.toLowerCase(),void 0,s=Object.create(null)),void 0!==e.messageFormat&&(i.messageFormat=e.messageFormat)),c="pseudo"===i.locale,P}},function(e,t){e.exports=require("child_process")},,function(e,t){e.exports=require("vscode")},,function(e,t){e.exports=require("net")},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(3),s=n(18),i=n(7),c=n(12),a=o.loadMessageBundle(n(0).join(__dirname,"node/extension/protocolDetection.ts"));t.INSPECTOR_PORT_DEFAULT=9229,t.LEGACY_PORT_DEFAULT=5858;const u=8e4;function l(e){return new Promise(t=>{r.exec(`lsof -i:${e} -F p`,(e,n)=>{if(e||!n)return void t(-1);const o=n.match(/p(\d+)/);o&&o[1]?t(Number(o[1])):t(-1)})})}t.detectDebugType=function(e,t){switch(e.request){case"attach":return function(e,t){const n=e.address||"127.0.0.1",o=e.port,r=new i.Socket;return new Promise((e,s)=>{r.once("data",n=>{let o,r=void 0;const s=n.toString();s.indexOf("WebSockets request was expected")>=0?(t.debug("Debugging with inspector protocol because it was detected."),o="inspector"):(r=a(0,null),o="legacy"),e({reason:r,protocol:o})}),r.once("error",e=>{s(e)}),r.connect(o,n),r.on("connect",()=>{r.write('Content-Length: 102\r\n\r\n{"command":"evaluate","arguments":{"expression":"process.pid","global":true},"type":"request","seq":1}')}),setTimeout(()=>{s(new Error("timeout"))},2e3)}).catch(e=>({reason:a(1,null,e.toString()),protocol:"inspector"})).then(e=>((()=>{try{r.write('"Content-Length: 50\r\n\r\n{"command":"disconnect","type":"request","seq":2}"'),r.end()}catch(e){}})(),e.reason&&(s.writeToConsole(e.reason),t.debug(e.reason)),e.protocol))}(e,t).then(e=>"inspector"===e?"node2":"node");case"launch":return Promise.resolve("inspector"===function(e,t){if(e.runtimeExecutable)return t.debug("Debugging with inspector protocol because a runtime executable is set."),"inspector";{let n=process.env;e.env&&(n=s.extendObject(s.extendObject({},process.env),e.env));const o=c.spawnSync(e.useWSL,"node",["--version"],{shell:!0,env:n}),r=o.stdout?o.stdout.toString():void 0;return r?(e.__nodeVersion=r.trim(),function(e){const t=e.match(/v(\d+)\.(\d+)\.(\d+)/);return t&&4===t.length?100*(100*parseInt(t[1])+parseInt(t[2]))+parseInt(t[3]):-1}(e.__nodeVersion)>=u?(t.debug(`Debugging with inspector protocol because Node.js ${e.__nodeVersion} was detected.`),"inspector"):(s.writeToConsole(a(2,null,e.__nodeVersion)),t.debug(`Debugging with legacy protocol because Node.js ${e.__nodeVersion} was detected.`),"legacy")):(t.debug("Debugging with inspector protocol because Node.js version could not be determined."),"inspector")}}(e,t)?"node2":"node")}return Promise.resolve(null)},t.detectProtocolForPid=function(e){return"win32"===process.platform?function(e){return function(e){return new Promise(t=>{r.exec("netstat -a -n -o -p TCP",(n,o)=>{!n&&o||t([]);const r=o.split(/\r?\n/).map(e=>e.trim().split(/\s+/)).filter(t=>t[4]&&t[4]===String(e)).map(e=>{const t=e[1];return parseInt(t.split(":")[1])});t(r)})})}(e).then(e=>e.indexOf(t.INSPECTOR_PORT_DEFAULT)>=0?"inspector":e.indexOf(t.LEGACY_PORT_DEFAULT)>=0?"legacy":null)}(e):function(e){return l(t.INSPECTOR_PORT_DEFAULT).then(n=>n===e?"inspector":l(t.LEGACY_PORT_DEFAULT).then(t=>t===e?"legacy":null))}(e)},t.analyseArguments=function(e){const n={usePort:!1,port:-1};let o=/--(inspect|debug)(-brk)?(=((\[[0-9a-fA-F:]*\]|[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+|[a-zA-Z0-9\.]*):)?(\d+))?/.exec(e);return o&&o.length>=2&&(n.usePort=!0,o.length>=6&&o[5]&&(n.address=o[5]),o.length>=7&&o[6]&&(n.port=parseInt(o[6])),n.protocol="debug"===o[1]?"legacy":"inspector"),(o=/--(inspect|debug)-port=(\d+)/.exec(e))&&3===o.length&&(n.port=parseInt(o[2]),n.protocol="debug"===o[1]?"legacy":"inspector"),n.port<0&&(n.port="inspector"===n.protocol?t.INSPECTOR_PORT_DEFAULT:t.LEGACY_PORT_DEFAULT),n}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1),s=n(3),i="win32"===process.platform,c="x64"===process.arch;function a(){if(!i)return!1;const e=process.env.SystemRoot||"C:\\WINDOWS",t=o.join(e,"Sysnative","bash.exe"),n=o.join(e,"System32","bash.exe"),s=c?n:t;return r.existsSync(s)}function u(e,t,n,r,s,u){if(e&&a()){const e=process.env.SystemRoot||"C:\\WINDOWS",a=o.join(e,"Sysnative","bash.exe"),l=o.join(e,"System32","bash.exe"),d=c?l:a,p=t?l:d;let f=[r].concat(s||[]).map(e=>(e===u&&(e=e.replace(/\\/g,"/")),e.indexOf(" ")>0?`'${e}'`:e)).join(" ");return{cwd:n,executable:p,args:["-c",f],combined:[p].concat(["-c",f]),localRoot:n,remoteRoot:function(e){if(i&&e)return o.isAbsolute(e)?`/mnt/${e.substr(0,1).toLowerCase()}/${e.substr(3).replace(/\\/g,"/")}`:e.replace(/\\/g,"/")}(n)}}return{cwd:n,executable:r,args:s||[],combined:[r].concat(s||[])}}t.subsystemLinuxPresent=a,t.createLaunchArg=u,t.spawnSync=function(e,t,n,o){const r=u(e,!1,void 0,t,n);return s.spawnSync(r.executable,r.args,e?void 0:o)}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,c)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),s=n(0);class i{constructor(e,t,n,o){this.pid=e,this.ppid=t,this.command=n,this.args=o}}function c(e){function t(e){let t="";return n=>{const o=n.toString().split(/\r?\n/),r=o.slice(0,o.length-1);r[0]=t+r[0],t=o[o.length-1];for(const t of r)e(t)}}return new Promise((n,o)=>{let i;if("win32"===process.platform){const n=/^(.*)\s+([0-9]+)\.[0-9]+[+-][0-9]+\s+([0-9]+)\s+([0-9]+)$/,o=s.join(process.env.WINDIR||"C:\\Windows","System32","wbem","WMIC.exe");(i=r.spawn(o,["process","get","CommandLine,CreationDate,ParentProcessId,ProcessId"])).stdout.setEncoding("utf8"),i.stdout.on("data",t(t=>{let o=n.exec(t.trim());if(o&&5===o.length){const t=Number(o[4]),n=Number(o[3]),r=Number(o[2]);let s=o[1].trim();if(!isNaN(t)&&!isNaN(n)&&s){let o=s;if('"'===s[0]){const e=s.indexOf('"',1);e>0&&(o=s.substr(1,e-1),s=s.substr(e+2))}else{const e=s.indexOf(" ");e>0?(o=s.substr(0,e),s=s.substr(e+1)):s=""}e(t,n,o,s,r)}}}))}else"darwin"===process.platform?((i=r.spawn("/bin/ps",["-x","-o",`pid,ppid,comm=${"a".repeat(256)},command`])).stdout.setEncoding("utf8"),i.stdout.on("data",t(t=>{const n=Number(t.substr(0,5)),o=Number(t.substr(6,5)),r=t.substr(12,256).trim(),s=t.substr(269+r.length);isNaN(n)||isNaN(o)||e(n,o,r,s)}))):((i=r.spawn("/bin/ps",["-ax","-o","pid,ppid,comm:20,command"])).stdout.setEncoding("utf8"),i.stdout.on("data",t(t=>{const n=Number(t.substr(0,5)),o=Number(t.substr(6,5));let r=t.substr(12,20).trim(),s=t.substr(33),i=s.indexOf(r);if(i>=0){for(i+=r.length;i<s.length&&" "!==s[i];)i++;r=s.substr(0,i),s=s.substr(i+1)}isNaN(n)||isNaN(o)||e(n,o,r,s)})));i.on("error",e=>{o(e)}),i.stderr.setEncoding("utf8"),i.stderr.on("data",e=>{o(new Error(e.toString()))}),i.on("close",(e,t)=>{0===e?n():e>0&&o(new Error(`process terminated with exit code: ${e}`)),t&&o(new Error(`process terminated with signal: ${t}`))}),i.on("exit",(e,t)=>{0===e||e>0&&o(new Error(`process terminated with exit code: ${e}`)),t&&o(new Error(`process terminated with signal: ${t}`))})})}t.ProcessTreeNode=i,t.getProcessTree=function(e){return o(this,void 0,void 0,function*(){const t=new Map;t.set(0,new i(0,0,"???",""));try{yield c((e,n,o,r)=>{e!==n&&t.set(e,new i(e,n,o,r))})}catch(e){return}const n=t.values();for(const e of n){const n=t.get(e.ppid);n&&n!==e&&(n.children||(n.children=[]),n.children.push(e))}return!isNaN(e)&&e>0?t.get(e):t.get(0)})},t.getProcesses=c},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(1);t.Logger=class{debug(e){}},t.writeToConsole=function(e){o.debug.activeDebugConsole.appendLine(e)},t.extendObject=function(e,t){for(let n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},t.mkdirP=function(e){return new Promise((t,n)=>{r.mkdir(e,e=>{if(e)return n(e);t()})})}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,c)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(5),i=n(0),c=n(13),a=n(3),u=n(9),l=n(9),d=r.loadMessageBundle(n(0).join(__dirname,"node/extension/processPicker.ts"));function p(e){return o(this,void 0,void 0,function*(){let t=e.processId.trim();if("${command:PickProcess}"===t||"${command:extension.pickNodeProcess}"===t){const e=yield f(!0);if(!e)return!0;t=e}const n=/^(inspector|legacy)?([0-9]+)(inspector|legacy)?([0-9]+)?$/.exec(t);if(!n||5!==n.length)throw new Error(d(1,null,t));if(n[2]&&n[3]&&n[4]){g(Number(n[2])),e.port=Number(n[4]),e.protocol=n[3],delete e.processId}else if(n[1])e.port=Number(n[2]),e.protocol=n[1],delete e.processId;else{const o=Number(n[2]);g(o);const r=yield function(e,t){let n;n=e.port===u.INSPECTOR_PORT_DEFAULT?Promise.resolve("inspector"):e.port===u.LEGACY_PORT_DEFAULT?Promise.resolve("legacy"):e.protocol?Promise.resolve(e.protocol):u.detectProtocolForPid(t);return n.then(e=>"inspector"===e?"node2":"legacy"===e?"node":null)}(e,o);if(!r)throw new Error(d(0,null,t));delete e.processId,e.port="node2"===r?u.INSPECTOR_PORT_DEFAULT:u.LEGACY_PORT_DEFAULT,e.protocol="node2"===r?"inspector":"legacy"}return!1})}function f(e){return function(e){const t=[],n=new RegExp("^(?:node|iojs)$","i");let o=0;return c.getProcesses((r,s,c,a,u)=>{"win32"===process.platform&&0===c.indexOf("\\??\\")&&(c=c.replace("\\??\\",""));const p=i.basename(c,".exe");let f=-1,g="",m=!0;if(e){const e=l.analyseArguments(a);m=e.usePort,g=e.protocol,f=e.port}let h="",b="";m?(h=d("inspector"===g?4:5,null,r,f),b=`${g}${f}`):g&&f>0?(h=d(6,null,r,f,"SIGUSR1"),b=`${r}${g}${f}`):n.test(p)&&(h=d(7,null,r,"SIGUSR1"),b=r.toString()),h&&b&&t.push({label:p,description:a,detail:h,pidOrPort:b,sortKey:u||o++})}).then(()=>t.sort((e,t)=>t.sortKey-e.sortKey))}(e).then(e=>{let t={placeHolder:d(2,null),matchOnDescription:!0,matchOnDetail:!0};return s.window.showQuickPick(e,t).then(e=>e?e.pidOrPort:null)}).catch(e=>s.window.showErrorMessage(d(3,null,e.message),{modal:!0}).then(e=>null))}function g(e){try{if("win32"===process.platform){const t=`node -e process._debugProcess(${e})`;a.execSync(t)}else process.kill(e,"SIGUSR1")}catch(t){throw new Error(d(8,null,e,t))}}t.attachProcess=function(){return o(this,void 0,void 0,function*(){const e={type:"node",request:"attach",name:"process",processId:"${command:extension.pickNodeProcess}"};if(!(yield p(e)))return s.debug.startDebugging(void 0,e)})},t.resolveProcessId=p,t.pickProcess=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(2),s=n(21),i=n(13),c=n(9),a=r.loadMessageBundle(n(0).join(__dirname,"node/extension/cluster.ts")),u=1e3;class l{constructor(e,t){this._folder=e,this._config=t,this._subProcesses=new Set,this._childCounter=1}static prepareAutoAttachChildProcesses(e,t){this.clusters.set(t.name,new l(e,t))}static startSession(e){const t=this.clusters.get(e.name);t&&t.startWatching(e)}static stopSession(e){const t=this.clusters.get(e.name);t&&(t.stopWatching(),this.clusters.delete(e.name))}startWatching(e){s.getPidFromSession(e).then(e=>{this._poller=function(e,t,n){let r=!1;return function t(){(function(e,t){return i.getProcessTree(e).then(n=>{n&&function n(o){if(o.pid!==e){let{protocol:e}=c.analyseArguments(o.args);e&&t(o.pid,o.command,o.args)}for(const e of o.children||[])n(e)}(n)})})(e,n).then(e=>{setTimeout(e=>{r||t()},u)})}(),new o.Disposable(()=>r=!0)}(e,0,(e,t,n)=>{if(!this._subProcesses.has(e)){this._subProcesses.add(e);const t=a(0,null,this._config.name,this._childCounter++);s.attachToProcess(this._folder,t,e,n,this._config)}})})}stopWatching(){this._poller&&(this._poller.dispose(),this._poller=void 0)}}l.clusters=new Map,t.Cluster=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(2),s=n(0),i=n(9),c=n(13),a=r.loadMessageBundle(n(0).join(__dirname,"node/extension/autoAttach.ts")),u=1e3,l=[];let d;function p(e){return new Promise((t,n)=>{setTimeout(n=>{const o=setTimeout(e=>{t(NaN)},100);e?e.customRequest("evaluate",{expression:"process.pid"}).then(e=>{clearTimeout(o),t(parseInt(e.result))},e=>{clearTimeout(o),t(NaN)}):(clearTimeout(o),t(NaN))},"node2"===e.type?500:100)})}function f(e,t,n,r,s){(function(e){return Promise.all(l).then(t=>t.indexOf(e)>=0)})(n).then(c=>{if(c);else{l.push(Promise.resolve(n));const c={type:"node",request:"attach",name:t,stopOnEntry:!1,__autoAttach:!0};s&&(s.timeout&&(c.timeout=s.timeout),s.sourceMaps&&(c.sourceMaps=s.sourceMaps),s.outFiles&&(c.outFiles=s.outFiles),s.sourceMapPathOverrides&&(c.sourceMapPathOverrides=s.sourceMapPathOverrides),s.smartStep&&(c.smartStep=s.smartStep),s.skipFiles&&(c.skipFiles=s.skipFiles),s.showAsyncStacks&&(c.sourceMaps=s.showAsyncStacks),s.trace&&(c.trace=s.trace));let{usePort:a,protocol:u,port:d}=i.analyseArguments(r);c.processId=a?`${u}${d}`:u&&d>0?`${n}${u}${d}`:n.toString(),o.debug.startDebugging(e,c)}})}t.getPidFromSession=p,t.initializeAutoAttach=function(e){e.subscriptions.push(o.debug.onDidStartDebugSession(e=>{"node"!==e.type&&"node2"!==e.type||l.push(p(e))})),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.startAutoAttach",e=>{"number"==typeof e&&(d=function(e,t,n){let r=!1;return function s(){(function(e,t,n){return c.getProcessTree(e).then(e=>{if(e){const r=o.window.terminals;r.length>0&&Promise.all(r.map(e=>e.processId)).then(o=>{!function e(t,o,r){r.indexOf(t.pid)>=0&&(o=!0);let{protocol:s}=i.analyseArguments(t.args);o&&s&&n(t.pid,t.command,t.args);for(const n of t.children||[])e(n,o,r)}(e,!t,o)})}})})(e,t,n).then(e=>{setTimeout(e=>{r||s()},u)})}(),new o.Disposable(()=>r=!0)}(e,!0,(e,t,n)=>{"node"===s.basename(t,".exe")&&f(void 0,a(0,null,e),e,n)}))})),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.stopAutoAttach",()=>{d&&(d.dispose(),d=void 0)}))},t.attachToProcess=f},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(41),s=n(42),i=n(19),c=n(20),a=n(21);function u(e){let t=e;if(!t){const e=o.window.activeTextEditor;t=e&&e.document.fileName}if(t&&o.debug.activeDebugSession){const e="string"==typeof t?{resource:t}:{sourceReference:t};o.debug.activeDebugSession.customRequest("toggleSkipFileStatus",e)}}t.activate=function(e){e.subscriptions.push(o.debug.registerDebugConfigurationProvider("node",new r.NodeConfigurationProvider(e))),a.initializeAutoAttach(e),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.toggleSkippingFile",u)),e.subscriptions.push(o.commands.registerCommand("extension.pickNodeProcess",i.pickProcess)),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.attachNodeProcess",i.attachProcess)),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.pickLoadedScript",s.pickLoadedScript)),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.openScript",(e,t)=>s.openScript(e,t))),e.subscriptions.push(o.commands.registerCommand("extension.node-debug.startWithStopOnEntry",r.startDebuggingAndStopOnEntry)),e.subscriptions.push(o.debug.onDidStartDebugSession(e=>c.Cluster.startSession(e))),e.subscriptions.push(o.debug.onDidTerminateDebugSession(e=>c.Cluster.stopSession(e)))},t.deactivate=function(){}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,c)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),s=n(5),i=n(0),c=n(1),a=n(18),u=n(9),l=n(19),d=n(20),p=r.loadMessageBundle(n(0).join(__dirname,"node/extension/configurationProvider.ts"));let f=!1;t.startDebuggingAndStopOnEntry=function(){f=!0,s.commands.executeCommand("workbench.action.debug.start")};function g(e,t,n){const o={type:"node",request:"launch",name:p(5,null)};n&&n.noDebug&&(o.noDebug=!0);const r=m(e,"package.json");if(r&&"mern-starter"===r.name)t&&a.writeToConsole(p(6,null,"Mern Starter")),function(e){e.protocol="inspector",e.runtimeExecutable="nodemon",e.program="${workspaceFolder}/index.js",e.restart=!0,e.env={BABEL_DISABLE_CACHE:"1",NODE_ENV:"development"},e.console="integratedTerminal",e.internalConsoleOptions="neverOpen"}(o);else{let n,u=!1;if(r&&(n=function(e,t,n){let o;try{if(t.main?o=t.main:t.scripts&&"string"==typeof t.scripts.start&&(o=t.scripts.start.split(" ").pop()),o){let t;if(i.isAbsolute(o)?t=o:(t=e?i.join(e.uri.fsPath,o):void 0,o=i.join("${workspaceFolder}",o)),n&&t&&!c.existsSync(t)&&!c.existsSync(t+".js"))return}}catch(e){}return o}(e,r,t))&&t&&a.writeToConsole(p(7,null)),!n){const t=s.window.activeTextEditor;if(t){const o=t.document.languageId;if("javascript"===o||h(o)){s.workspace.getWorkspaceFolder(t.document.uri)===e&&(n=s.workspace.asRelativePath(t.document.uri),i.isAbsolute(n)||(n="${workspaceFolder}/"+n))}u=h(o)}}if(t||n||(n="${file}"),n&&(o.program=n),u||s.workspace.textDocuments.some(e=>h(e.languageId))){t&&a.writeToConsole(p(8,null));let n="";const r=m(e,"tsconfig.json");if(r&&r.compilerOptions&&r.compilerOptions.outDir){const e=r.compilerOptions.outDir;i.isAbsolute(e)||(0===(n=e).indexOf("./")&&(n=n.substr(2)),"/"!==n[n.length-1]&&(n+="/")),o.preLaunchTask="tsc: build - tsconfig.json"}o.outFiles=["${workspaceFolder}/"+n+"**/*.js"]}}return o}function m(e,t){if(e)try{const n=i.join(e.uri.fsPath,t),o=c.readFileSync(n,"utf8");return JSON.parse(o)}catch(e){}}function h(e){return"typescript"===e||"coffeescript"===e}t.NodeConfigurationProvider=class{constructor(e){this._extensionContext=e,this._logger=new a.Logger}provideDebugConfigurations(e,t){return[g(e,!1)]}resolveDebugConfiguration(e,t,n){return this.resolveConfigAsync(e,t).catch(e=>s.window.showErrorMessage(e.message,{modal:!0}).then(e=>void 0))}resolveConfigAsync(e,t,n){return o(this,void 0,void 0,function*(){if(!(t.type||t.request||t.name||(t=g(e,!0,t)).program))throw new Error(p(0,null));if(t.cwd||(e&&(t.cwd=e.uri.fsPath),!t.cwd&&s.workspace.workspaceFolders&&s.workspace.workspaceFolders.length>0&&(t.cwd=s.workspace.workspaceFolders[0].uri.fsPath),t.cwd||"${file}"!==t.program||(t.cwd="${fileDirname}"),!t.cwd&&t.program&&i.isAbsolute(t.program)&&(t.cwd=i.dirname(t.program)),t.cwd||(t.cwd="${workspaceFolder}")),t.remoteRoot&&!t.localRoot&&(t.localRoot="${workspaceFolder}"),"win32"!==process.platform&&t.useWSL&&(this._logger.debug("useWSL attribute ignored on non-Windows OS."),delete t.useWSL),"launch"===t.request&&"string"==typeof t.runtimeVersion&&"default"!==t.runtimeVersion&&(yield this.nvmSupport(t)),t.autoAttachChildProcesses&&(d.Cluster.prepareAutoAttachChildProcesses(e,t),t.console||(t.console="integratedTerminal")),"integratedTerminal"!==t.console||t.internalConsoleOptions||(t.internalConsoleOptions="neverOpen"),"attach"===t.request&&"string"==typeof t.processId&&(yield l.resolveProcessId(t)))return;const n=yield function(e,t){return"legacy"===e.protocol?Promise.resolve("node"):"inspector"===e.protocol?Promise.resolve("node2"):u.detectDebugType(e,t)}(t,this._logger);if(n&&(t.type=n),t.trace&&!t.logFilePath){const e="node"===t.type?"debugadapter-legacy.txt":"debugadapter.txt";if(this._extensionContext.logPath){try{yield a.mkdirP(this._extensionContext.logPath)}catch(e){}t.logFilePath=i.join(this._extensionContext.logPath,e)}}return f&&(t.stopOnEntry=!0,f=!1),t})}nvmSupport(e){return o(this,void 0,void 0,function*(){let t=void 0,n=void 0,o=process.env.NVS_HOME;if(!o){const e="win32"===process.platform?i.join(process.env.LOCALAPPDATA||"","nvs"):i.join(process.env.HOME||"",".nvs");c.existsSync(e)&&(o=e)}const{nvsFormat:r,remoteName:s,semanticVersion:a,arch:u}=function(e){const t=/^(([\w-]+)\/)?(v?(\d+(\.\d+(\.\d+)?)?))(\/((x86)|(32)|((x)?64)|(arm\w*)|(ppc\w*)))?$/i.exec(e);if(!t)throw new Error("Invalid version string: "+e);const n=!(!t[2]&&!t[8]),o=t[2]||"node",r=t[4]||"",s=function(e){switch(e){case"32":case"x86":case"ia32":return"x86";case"64":case"x64":case"amd64":return"x64";case"arm":const t=process.config.variables.arm_version;return t?"armv"+t+"l":"arm";default:return e}}(t[8]||process.arch);return{nvsFormat:n,remoteName:o,semanticVersion:r,arch:s}}(e.runtimeVersion);if(r||o){if(!o)throw new Error(p(1,null));t=i.join(o,s,a,u),"win32"!==process.platform&&(t=i.join(t,"bin")),n="nvs"}if(!t)if("win32"===process.platform){const o=process.env.NVM_HOME;if(!o)throw new Error(p(2,null));t=i.join(o,`v${e.runtimeVersion}`),n="nvm-windows"}else{let o=process.env.NVM_DIR;if(!o){const e=i.join(process.env.HOME||"",".nvm");c.existsSync(e)&&(o=e)}if(!o)throw new Error(p(3,null));t=i.join(o,"versions","node",`v${e.runtimeVersion}`,"bin"),n="nvm"}if(!c.existsSync(t))throw new Error(p(4,null,e.runtimeVersion,n));e.env||(e.env={}),"win32"===process.platform?e.env.Path=`${t};${process.env.Path}`:e.env.PATH=`${t}:${process.env.PATH}`})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(5),s=n(0),i=o.loadMessageBundle(n(0).join(__dirname,"node/extension/loadedScripts.ts"));class c{constructor(e){this.label=s.basename(e.path),this.description=e.path,this.source=e}}function a(e,t){let n=`debug:${encodeURIComponent(t.path)}`,o="?";e&&(n+=`${o}session=${encodeURIComponent(e.id)}`,o="&"),t.sourceReference&&(n+=`${o}ref=${t.sourceReference}`);let s=r.Uri.parse(n);r.workspace.openTextDocument(s).then(e=>r.window.showTextDocument(e))}t.pickLoadedScript=function(){const e=r.debug.activeDebugSession;return function(e){return e?e.customRequest("loadedSources").then(e=>e.sources,e=>{}):Promise.resolve(void 0)}(e).then(t=>{let n,o={placeHolder:i(0,null),matchOnDescription:!0,matchOnDetail:!0,ignoreFocusOut:!0};n=void 0===t?[{label:i(1,null),description:""}]:t.map(e=>new c(e)).sort((e,t)=>e.label.localeCompare(t.label)),r.window.showQuickPick(n,o).then(t=>{t&&t.source&&a(e,t.source)})})},t.openScript=a}]);