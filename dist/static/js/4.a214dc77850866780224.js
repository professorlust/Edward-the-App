(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1SLA":function(t,e,n){"use strict";n.r(e);var r=n("tXD0"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var s=n("DSwS"),o=n("JFUb");var u=function(t){n("vyQ2")},l=Object(o.a)(a.a,s.a,s.b,!1,u,"data-v-6c39893f",null);e.default=l.exports},DSwS:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"analyser-wrap"},[n("div",{staticClass:"analyser"},[n("div",{staticClass:"analyses"},[n("h4",{staticClass:"analysis-title"},[t._v("\n        Select an analysis:\n      ")]),t._v(" "),t._l(t.Analyses,function(e,r){return n("button",{directives:[{name:"tooltip",rawName:"v-tooltip"}],key:r,staticClass:"analysis-button",attrs:{title:e.description},on:{click:function(n){t.selectAnalysis(e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})],2),t._v(" "),t.currentAnalysis?n("div",{staticClass:"analysis-inputs"},[t.showInputs?[n("h4",{staticClass:"analysis-title"},[t._v("\n          Enter desired inputs:\n        ")]),t._v(" "),t._l(t.currentAnalysis.inputs,function(e,r){return n("div",{key:r,staticClass:"analysis-input"},[n("label",{attrs:{for:t.getInputId(e)}},[t._v(t._s(e))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentAnalysis.args[e],expression:"currentAnalysis.args[input]"}],attrs:{id:t.getInputId(e)},domProps:{value:t.currentAnalysis.args[e]},on:{input:function(n){n.target.composing||t.$set(t.currentAnalysis.args,e,n.target.value)}}})])})]:t._e(),t._v(" "),n("button",{staticClass:"analysis-button button-green",on:{click:function(e){t.runAnalysis(t.currentAnalysis)}}},[t._v("Run the analysis")])],2):t._e(),t._v(" "),n("div",{ref:"results",staticClass:"results"})])])},a=[]},Da1h:function(t,e,n){(t.exports=n("I1BE")(!0)).push([t.i,".analyser-wrap[data-v-6c39893f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.analyser[data-v-6c39893f]{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:1050px}.analyses[data-v-6c39893f]{margin-bottom:10px}.analysis-button[data-v-6c39893f]{margin-right:6px;margin-top:12px}.results[data-v-6c39893f]{margin-top:12px}","",{version:3,sources:["C:/code/Edward-the-App/src/app/analyser/analyser.page.vue"],names:[],mappings:"AACA,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,UAAY,CACb,AACD,2BACE,cAAe,AACf,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAkB,CACnB,AACD,2BACE,kBAAoB,CACrB,AACD,kCACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,0BACE,eAAiB,CAClB",file:"analyser.page.vue",sourcesContent:["\n.analyser-wrap[data-v-6c39893f] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\n}\n.analyser[data-v-6c39893f] {\r\n  display: block;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  max-width: 1050px;\n}\n.analyses[data-v-6c39893f] {\r\n  margin-bottom: 10px;\n}\n.analysis-button[data-v-6c39893f] {\r\n  margin-right: 6px;\r\n  margin-top: 12px;\n}\n.results[data-v-6c39893f] {\r\n  margin-top: 12px;\n}\r\n"],sourceRoot:""}])},ZrAT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n("GQeE")),a=d(n("FyfS")),i=d(n("m1cH")),s=d(n("tCnl")),o=d(n("VXWU")),u=d(n("Rqpp")),l=d(n("eDNR")),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("VphZ")),f=n("fU7r");function d(t){return t&&t.__esModule?t:{default:t}}var p="\n  the a an\n  and but not or\n  I me we us you she her he him they them it\n  I've I'll I'd we've we'll we'd you've you'll you'd\n  she's she'll she'd he's he'll he'd they've they'll they'd\n  it's it'll it'd\n  I'm you're they're\n  myself ourself ourselves yourself yourselves\n  herself himself theirself theirselves themselves\n  my mine our ours your yours hers his their theirs its\n  to from of in for as with so at by on\n  be being is was were would will\n  do doing did done go going went\n  have having had\n  that those this these\n  not\n  what who which".split(/\s/).map(function(t){return t.toLowerCase()});e.default=function(t,e){var n,d=t.g,y=t.maxHeight,h=t.maxWidth,v=(n=[]).concat.apply(n,(0,i.default)(e.map(function(t){return(0,f.GetWordArray)(t.content).map(function(t){return t.toLowerCase()}).filter(function(t){return!p.includes(t)})}))),A=(0,s.default)((0,o.default)(function(t){return t}))(v),m=[],g=!0,w=!1,x=void 0;try{for(var C,b=(0,a.default)((0,r.default)(A));!(g=(C=b.next()).done);g=!0){var _=C.value;if(!A.hasOwnProperty(_))return;m.push({frequency:A[_].length,word:_})}}catch(t){w=!0,x=t}finally{try{!g&&b.return&&b.return()}finally{if(w)throw x}}var B=(0,s.default)((0,u.default)([function(t){return t.frequency}],["desc"]),(0,l.default)(10))(m);if(!B.length)throw new Error("No content was found.");var k=20,q=20,M=20,I=20,O=d.attr("transform","translate("+q+", "+M+")"),W=(y-k-M)/B.length,j=W-12,E=c.scaleLinear().domain([0,B[0].frequency]).rangeRound([0,h-q-I-50]),D=O.selectAll("g").data(B).enter().append("g");D.append("rect").attr("x","0").attr("y",6).attr("height",j).attr("width",function(t){return E(t.frequency)}).attr("fill","#90caf9"),D.attr("transform",function(t,e){return"translate(0, "+e*W+")"}).append("text").text(function(t){return t.word}).attr("font-size","14").attr("x","5").attr("y",""+j),D.append("text").text(function(t){return t.frequency}).attr("font-size","14").attr("x",function(t){return E(t.frequency)+6}).attr("y",""+j)}},"cp+B":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(n("FyfS")),a=l(n("m1cH")),i=l(n("ZrAT")),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("VphZ")),o=l(n("GUC0")),u=l(n("epi3"));function l(t){return t&&t.__esModule?t:{default:t}}var c=function(t){t.innerHTML=""},f=function(t){var e=t.offsetWidth;return{g:s.select(t).append("svg").style("background-color","#FFF").attr("height",400).attr("width",e).append("g"),maxHeight:400,maxWidth:e}},d=function(t,e,n){try{t.apply(void 0,(0,a.default)(e))}catch(t){(0,o.default)({icon:"error",text:t}),n()}},p=[{description:'Find your top 10 most frequently used words (ignoring common English words like "the")',inputs:null,run:function(t,e){var n=e.chapters;c(t);var r=n.filter(function(t){return!t.archived&&!!t.content});d(i.default,[f(t),r],function(){return c(t)})},title:"Most common words"},{description:"Track your usage of a specific word in each chapter",inputs:["Word"],run:function(t,e,n){var a=e.chapters;if(function(t,e){var n=!0,a=!1,i=void 0;try{for(var s,u=(0,r.default)(t);!(n=(s=u.next()).done);n=!0)if(!e[s.value])return(0,o.default)({icon:"error",text:"Please fill in all required inputs."}),!1}catch(t){a=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return!0}(this.inputs,n)){c(t);var i=a.filter(function(t){return!t.archived&&!!t.content});d(u.default,[f(t),i,n],function(){return c(t)})}},title:"Word over time"}].map(function(t){return t.args={},t});e.default=p},epi3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n("FyfS")),a=u(n("m1cH")),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("VphZ")),s=n("fU7r"),o=u(n("WjpJ"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e,n){var u=t.g,l=t.maxWidth,c=t.maxHeight,f=n.Word,d=[],p=!0,y=!1,h=void 0;try{for(var v,A=(0,r.default)(e);!(p=(v=A.next()).done);p=!0){var m=v.value,g=(0,s.GetWordArray)(m.content).filter(function(t){return t.toLowerCase()===f.toLowerCase()}).length;d.push({frequency:g,title:m.title})}}catch(t){y=!0,h=t}finally{try{!p&&A.return&&A.return()}finally{if(y)throw h}}var w=d.map(function(t){return t.frequency}),x=[0,Math.max.apply(Math,(0,a.default)(w))],C=40,b=30,_=20,B=50,k=u.attr("transform","translate("+b+", "+_+")"),q=i.scaleLinear().domain([1,d.length]).rangeRound([0,l-b-B]),M=i.scaleLinear().domain(x).rangeRound([c-C-_,0]);k.append("g").attr("transform","translate(0, "+(c-C-_)+")").call(i.axisBottom(q).tickFormat(function(t){return e=d[t-1].title,n=20,e.length<n?e:e.substring(0,n)+"...";var e,n}).tickValues((0,o.default)(1,d.length+1))).selectAll("text").attr("transform","rotate(-8)"),k.append("g").attr("transform","translate(0, 0)").call(i.axisLeft(M));var I=i.line().x(function(t,e){return q(e+1)}).y(function(t){return M(t.frequency)});k.append("path").datum(d).attr("fill","none").attr("stroke","#0d47a1").attr("stroke-linejoin","bevel").attr("stroke-linecap","round").attr("stroke-width","2").attr("d",I),k.append("rect").attr("x","5").attr("y","-9").attr("height","22").attr("width","67").attr("fill","rgba(230, 230, 230, 0.8)"),k.append("text").attr("font-size","12").attr("x","10").attr("y","5").text("Occurrences")}},tXD0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("cp+B")),a=i(n("76JW"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={computed:{document:function(){return this.$store.state.chapters},showInputs:function(){return this.currentAnalysis&&this.currentAnalysis.inputs&&this.currentAnalysis.inputs.length}},data:function(){return{Analyses:r.default,currentAnalysis:null}},directives:{tooltip:a.default},methods:{getInputId:function(t){return"input-"+t},runAnalysis:function(t){t.run(this.$refs.results,this.document,t.args)},selectAnalysis:function(t){this.currentAnalysis=t}}}},vyQ2:function(t,e,n){var r=n("Da1h");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("SZ7m").default)("03de765f",r,!0,{})}}]);
//# sourceMappingURL=4.a214dc77850866780224.js.map