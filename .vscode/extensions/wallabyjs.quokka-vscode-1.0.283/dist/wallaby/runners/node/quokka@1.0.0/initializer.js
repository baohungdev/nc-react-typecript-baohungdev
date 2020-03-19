/*
 * Wallaby.js - v1.0.865
 * https://wallabyjs.com
 * Copyright (c) 2014-2020 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
var path=require("path"),vm=require("vm"),Module=require("module"),tracer=global.$_$tracer,utils=tracer._utils,file,entryModule,quokkaSettings={},quokkaSettingsNodeModulesPath,quokkaTempDirNodeModulesPath,beforeExitHandlers=[],startTime,serverPath=path.dirname(process.mainModule.filename);tracer._maxLogEntrySize=1048576,tracer._hiddenGlobalProps={$_$baseDir:1,$_$slow:1,$_$testFiles:1,$_$tests:1,$_$session:1,$_$initialSpecId:1,$_$coverage:1},process.on("unhandledRejection",function(e){throw e});try{quokkaSettings=JSON.parse(process.env.quokka),quokkaSettingsNodeModulesPath=path.join(path.dirname(quokkaSettings.globalConfigFile),"node_modules"),quokkaTempDirNodeModulesPath=path.join(quokkaSettings.tempDir,"node_modules")}catch(e){}var requireFromTheProjectAndGlobalSettingsContext=function(e){var t=Module._load(e,entryModule,!1);try{var n=Module._resolveFilename(e,entryModule,!1);tracer._doWhenReceiverIsReady(function(){tracer._send("module",{path:n})})}catch(r){}return t};requireFromTheProjectAndGlobalSettingsContext.extensions=require.extensions,requireFromTheProjectAndGlobalSettingsContext.resolve=require.resolve;var localProjectRoot=path.dirname(global.wallaby._localNodeModules),rootEntryModule=new Module(".",null);rootEntryModule.filename=path.join(localProjectRoot,"index.js"),rootEntryModule.path=localProjectRoot,rootEntryModule.paths=Module._nodeModulePaths(localProjectRoot).concat([quokkaSettingsNodeModulesPath]);var requireFromTheProjectRootAndGlobalSettingsContext=function(e){return Module._load(e,rootEntryModule,!1)};requireFromTheProjectRootAndGlobalSettingsContext.extensions=require.extensions,requireFromTheProjectRootAndGlobalSettingsContext.resolve=require.resolve;var hideProp=function(e){Object.defineProperty(global,e,{enumerable:!1,value:global[e]})};Object.keys(global).filter(function(e){return"wallaby"===e||0===e.indexOf("$_$")}).forEach(function(e){hideProp(e)}),require.extensions[".jsx"]=require.extensions[".js"];var registerAssetExtensions=function(){[".png",".svg",".ico","jpeg",".jpg",".css",".less",".scss",".sass",".htm",".html"].forEach(function(e){require.extensions[e]=function(){}})};tracer._identifierExpressionAutoLogHitLimit=10;var delayedSendTimeout,delayedSendTimeoutDelay=50,clearDelayedSendTimeout=function(){clearTimeout(delayedSendTimeout),delayedSendTimeout=void 0},delayedSendCalls=[],send=tracer._send;tracer._send=function(e,t){var n=this,r=function(){return send.call(n,e,t)};if(n._receiver)return r();if(delayedSendCalls.push(r),!delayedSendTimeout){var i=global.$_$session;delayedSendTimeout=setTimeout(function(){i===global.$_$session&&tracer&&tracer.reconnect(function(){for(var e=0;e<delayedSendCalls.length;e++)delayedSendCalls[e]();delayedSendCalls.length=0,clearDelayedSendTimeout(),tracer.disconnect()})},delayedSendTimeoutDelay)}};var toInitialize={babel:!0,ts:!0,plugins:!0,globals:["assert","events","fs","os","path"]},runBeforeEach=[],starter={quokkaStackTraceMarker:function(){clearDelayedSendTimeout();var e=global.$_$session;if(quokkaSettings.babel&&toInitialize.babel){var t={ignore:"string"==typeof quokkaSettings.babel.ignore?new RegExp(quokkaSettings.babel.ignore):"[object Array]"===Object.prototype.toString.call(quokkaSettings.babel.ignore)?quokkaSettings.babel.ignore:function(e){return~e.indexOf("quokka.js")||~e.indexOf("node_modules")},presets:quokkaSettings.babel.presets,plugins:quokkaSettings.babel.plugins,extensions:[".js",".jsx",".es6",".es",".mjs",".ts",".tsx"]},n=NaN;if(quokkaSettings.babel.version&&(n=parseInt(quokkaSettings.babel.version.split(".")[0],10)),n>=7){utils.patchBabelResolve(quokkaSettings.babel.path);try{"[object Array]"!==Object.prototype.toString.call(t.ignore)&&(t.ignore=[t.ignore]),require(path.join(path.dirname(quokkaSettings.babel.path),"register"))(t)}catch(r){console.warn("@babel/register is not installed, the module is required if you want to transpile other files imported by the running file.\nYou may install the module in your project by running `npm install @babel/register` command.")}}else require(path.join(quokkaSettings.babel.path,"register"))(t);quokkaSettings.babel.polyfill&&(n>=7?require(path.join(path.dirname(quokkaSettings.babel.path),"polyfill")):require(path.join(path.dirname(quokkaSettings.babel.path),"babel-polyfill"))),delete toInitialize.babel}if(quokkaSettings.ts&&toInitialize.ts){if(quokkaSettings.ts.tsNode){var i=quokkaSettings.ts.tsNode.ignore||["(?:^|/)node_modules/"];i=Array.isArray(i)?i:[i],i.push(serverPath),require(path.join(quokkaSettings.ts.tsNode.path)).register({compiler:process.env.TS_NODE_COMPILER,ignore:i});try{require(path.join(path.dirname(quokkaSettings.ts.tsNode.path),"tsconfig-paths/register"))}catch(r){}}else require.extensions[".ts"]=require.extensions[".tsx"]=function(){throw new Error("To import TypeScript files from quokka, `ts-node` module must be installed.\nIt is also recommended to install `tsconfig-paths` module for tsconfig.json paths mapping.\nYou may install the modules in your project or into quokka global folder by running `npm install ts-node tsconfig-paths` command inside the `~/.quokka/` folder.")};delete toInitialize.ts}quokkaSettings.plugins&&toInitialize.plugins&&("string"==typeof quokkaSettings.plugins&&(quokkaSettings.plugins=[quokkaSettings.plugins]),quokkaSettings.plugins.slice().forEach(function(e){var t=requireFromTheProjectRootAndGlobalSettingsContext(e);t.before&&t.before(quokkaSettings),t.beforeEach&&runBeforeEach.push(t.beforeEach)}),delete toInitialize.plugins),toInitialize.globals&&(toInitialize.globals.forEach(function(e){global[e]||(global[e]=require(e))}),delete toInitialize.globals),runBeforeEach.forEach(function(e){e(quokkaSettings)}),registerAssetExtensions();var o=function(){if(e===global.$_$session&&tracer){var t;if(startTime){var n=process.hrtime(startTime);t=(1e3*n[0]+n[1]/1e6).toFixed(2)}clearDelayedSendTimeout(),tracer.reconnect(function(){for(var e=0;e<delayedSendCalls.length;e++)delayedSendCalls[e]();delayedSendCalls.length=0,tracer.complete({time:t}),clearDelayedSendTimeout()})}};process.once("beforeExit",o),beforeExitHandlers.push(o);var s={quokkaStackTraceMarker:function(){startTime=process.hrtime(),entryModule._compile(file.content,file.path)}};try{s.quokkaStackTraceMarker()}finally{tracer.disconnect()}}};tracer.start(starter.quokkaStackTraceMarker),module.exports={init:function(e){return file={path:e[0],content:global.$_$testFiles[0].content},entryModule=new Module(".",null),entryModule.filename=file.path,entryModule.path=path.dirname(file.path),entryModule.paths=Module._nodeModulePaths(path.dirname(entryModule.filename)).concat([quokkaTempDirNodeModulesPath,quokkaSettingsNodeModulesPath]),entryModule.require=requireFromTheProjectAndGlobalSettingsContext,quokkaSettings&&(quokkaSettings.filePath=file.path),beforeExitHandlers.forEach(function(e){process.removeListener("beforeExit",e)}),beforeExitHandlers.length=0,Object.keys(tracer._hiddenGlobalProps).forEach(function(e){hideProp(e)}),{}}};