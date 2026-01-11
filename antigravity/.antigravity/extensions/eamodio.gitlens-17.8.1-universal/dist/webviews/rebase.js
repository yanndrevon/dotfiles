let e,t,i,o,r;var s,a,c,h,p,u,g,m,f,b,v={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},5090:(e,t,i)=>{i.d(t,{FlowLayout:()=>FlowLayout,flow:()=>r}),i.r(t);let SizeCache=class SizeCache{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let i=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-i}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}};function o(e){return"horizontal"===e?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){(e="horizontal"===e?e:"vertical")!==this._direction&&(this._direction=e,this._sizeDim="horizontal"===e?"width":"height",this._secondarySizeDim="horizontal"===e?"height":"width",this._positionDim="horizontal"===e?"left":"top",this._secondaryPositionDim="horizontal"===e?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:i}=this;Object.assign(this._viewportSize,e),i!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[o(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let e=this._scrollPosition,{index:t,block:i}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:i||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,i=Math.min(this.items.length,Math.max(0,e.index)),o=this._getItemPosition(i)[this._positionDim],r=o;if("start"!==t){let e=this._getItemSize(i)[this._sizeDim];if("center"===t)r=o-.5*this._viewDim1+.5*e;else{let i=o-this._viewDim1+e;if("end"===t)r=i;else{let e=this._scrollPosition;r=Math.abs(e-o)<Math.abs(e-i)?o:i}}}return r+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(r)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(-1!==this._first&&-1!==this._last)for(let t=this._first;t<=this._last;t++)e.set(t,this._getItemPosition(t));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let i=this._last;for(;i>this._first&&Math.round(this._getItemPosition(i)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)i--;(t!==this._firstVisible||i!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=i,e&&e.emit&&this._sendVisibilityChangedMessage())}};let r=e=>Object.assign({type:FlowLayout},e);function s(e){return"horizontal"===e?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(e,t){let i=new Set;for(let r of(Object.keys(e).forEach(r=>{let s=Number(r);this._metricsCache.set(s,e[s]),this._childSizeCache.set(s,e[s][o(t)]),i.add(s),i.add(s+1)}),i)){let e=this._metricsCache.get(r)?.[s(t)]||0,i=this._metricsCache.get(r-1)?.["horizontal"===t?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(r,function(e,t){let i=[e,t].sort();return i[1]<=0?Math.min(...i):i[0]>=0?Math.max(...i):i[0]+i[1]}(e,i))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[s(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let i=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(i*t.averageChildSize+(i-1)*t.averageMarginSize)}{let i=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+i*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:i}=this._metricsCache;return 0===e?this._metricsCache.getMarginSize(0)??i:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(e,t);let i=this._getPhysicalItem(this._first),o=this._getPhysicalItem(this._last),r=i.pos;if(o.pos+this._metricsCache.getChildSize(this._last)<e||r>t)return this._calculateAnchor(e,t);let s=this._firstVisible-1,a=-1/0;for(;a<e;)a=this._getPhysicalItem(++s).pos+this._metricsCache.getChildSize(s);return s}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e,t,i=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:e}=this.pin;this._anchorIdx=e,this._anchorPos=this._getPosition(e)}if(e=this._scrollPosition-this._overhang,(t=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(e,t),this._anchorPos=this._getPosition(this._anchorIdx));let o=this._getSize(this._anchorIdx);void 0===o&&(this._stable=!1,o=this._getAverageSize());let r=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,s=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=r),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-s-o);let a=0;for(this._anchorPos+o+s<e&&(a=e-(this._anchorPos+o+s)),this._anchorPos-r>t&&(a=t-(this._anchorPos-r)),a&&(this._scrollPosition-=a,e-=a,t-=a,this._scrollError+=a),i.set(this._anchorIdx,{pos:this._anchorPos,size:o}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-r,this._physicalMax=this._anchorPos+o+s;this._physicalMin>e&&this._first>0;){let e=this._getSize(--this._first);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._first);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize),this._physicalMin-=e;let o=this._physicalMin;if(i.set(this._first,{pos:o,size:e}),this._physicalMin-=t,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<t&&this._last<this.items.length-1;){let e=this._getSize(++this._last);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._last);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize);let o=this._physicalMax;if(i.set(this._last,{pos:o,size:e}),this._physicalMax+=e+t,!this._stable&&!this._estimate)break}let c=this._calculateError();c&&(this._physicalMin-=c,this._physicalMax-=c,this._anchorPos-=c,this._scrollPosition-=c,i.forEach(e=>e.pos-=c),this._scrollError+=c),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}},6047:(e,t,i)=>{i(602)}},_={};function w(e){var t=_[e];if(void 0!==t)return t.exports;var i=_[e]={exports:{}};return v[e](i,i.exports,w),i.exports}w.d=(e,t)=>{for(var i in t)w.o(t,i)&&!w.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});var x=w(5090);let C=globalThis,$=C.ShadowRoot&&(void 0===C.ShadyCSS||C.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,S=Symbol(),E=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==S)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if($&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=E.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&E.set(t,e))}return e}toString(){return this.cssText}};let A=e=>new n("string"==typeof e?e:e+"",void 0,S),P=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,S),O=$?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return A(t)})(e):e,{is:D,defineProperty:T,getOwnPropertyDescriptor:B,getOwnPropertyNames:F,getOwnPropertySymbols:q,getPrototypeOf:V}=Object,U=globalThis,j=U.trustedTypes,W=j?j.emptyScript:"",G=U.reactiveElementPolyfillSupport,K={toAttribute(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Z=(e,t)=>!D(e,t),J={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=J){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&T(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=B(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let s=o?.call(this);r?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??J}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=V(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...F(e),...q(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(O(i));else void 0!==e&&t.push(O(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if($)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=C.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:K).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:K;this._$Em=o;let s=r.fromAttribute(t,e.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){let o=this.constructor,r=this[e];if(!(((i??=o.getPropertyOptions(e)).hasChanged??Z)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,G?.({ReactiveElement:y}),(U.reactiveElementVersions??=[]).push("2.1.1");let Y=globalThis,X=Y.trustedTypes,Q=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,ee="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,ei="?"+et,eo=`<${ei}>`,er=document,es=()=>er.createComment(""),en=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ea=Array.isArray,el=e=>ea(e)||"function"==typeof e?.[Symbol.iterator],ec=`[ 	
\f\r]`,eh=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ed=/-->/g,ep=/>/g,eu=RegExp(`>|${ec}(?:([^\\s"'>=/]+)(${ec}*=${ec}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eg=/'/g,em=/"/g,ef=/^(?:script|style|textarea|title)$/i,eb=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ev=eb(1),ey=eb(2),e_=eb(3),ew=Symbol.for("lit-noChange"),ex=Symbol.for("lit-nothing"),ek=new WeakMap,eC=er.createTreeWalker(er,129);function e$(e,t){if(!ea(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Q?Q.createHTML(t):t}let eS=(e,t)=>{let i=e.length-1,o=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=eh;for(let t=0;t<i;t++){let i=e[t],c,h,p=-1,u=0;for(;u<i.length&&(a.lastIndex=u,null!==(h=a.exec(i)));)u=a.lastIndex,a===eh?"!--"===h[1]?a=ed:void 0!==h[1]?a=ep:void 0!==h[2]?(ef.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=eu):void 0!==h[3]&&(a=eu):a===eu?">"===h[0]?(a=r??eh,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?eu:'"'===h[3]?em:eg):a===em||a===eg?a=eu:a===ed||a===ep?a=eh:(a=eu,r=void 0);let g=a===eu&&e[t+1].startsWith("/>")?" ":"";s+=a===eh?i+eo:p>=0?(o.push(c),i.slice(0,p)+ee+i.slice(p)+et+g):i+et+(-2===p?t:g)}return[e$(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let N=class N{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0,a=e.length-1,c=this.parts,[h,p]=eS(e,t);if(this.el=N.createElement(h,i),eC.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eC.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(ee)){let t=p[s++],i=o.getAttribute(e).split(et),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),o.removeAttribute(e)}else e.startsWith(et)&&(c.push({type:6,index:r}),o.removeAttribute(e));if(ef.test(o.tagName)){let e=o.textContent.split(et),t=e.length-1;if(t>0){o.textContent=X?X.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],es()),eC.nextNode(),c.push({type:2,index:++r});o.append(e[t],es())}}}else if(8===o.nodeType)if(o.data===ei)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(et,e+1));)c.push({type:7,index:r}),e+=et.length-1}r++}}static createElement(e,t){let i=er.createElement("template");return i.innerHTML=e,i}};function eE(e,t,i=e,o){if(t===ew)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=en(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=eE(e,r._$AS(e,t.values),r,o)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??er).importNode(t,!0);eC.currentNode=o;let r=eC.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new R(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new z(r,this,e)),this._$AV.push(t),c=i[++a]}s!==c?.index&&(r=eC.nextNode(),s++)}return eC.currentNode=er,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=ex,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){en(e=eE(this,e,t))?e===ex||null==e||""===e?(this._$AH!==ex&&this._$AR(),this._$AH=ex):e!==this._$AH&&e!==ew&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):el(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ex&&en(this._$AH)?this._$AA.nextSibling.data=e:this.T(er.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=N.createElement(e$(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new M(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ek.get(e.strings);return void 0===t&&ek.set(e.strings,t=new N(e)),t}k(e){ea(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new R(this.O(es()),this.O(es()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=ex,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ex}_$AI(e,t=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!en(e=eE(this,e,t,0))||e!==this._$AH&&e!==ew)&&(this._$AH=e);else{let o,a,c=e;for(e=r[0],o=0;o<r.length-1;o++)(a=eE(this,c[i+o],t,o))===ew&&(a=this._$AH[o]),s||=!en(a)||a!==this._$AH[o],a===ex?e=ex:e!==ex&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.j(e)}j(e){e===ex?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ex?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ex)}};let L=class L extends k{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=eE(this,e,t,0)??ex)===ew)return;let i=this._$AH,o=e===ex&&i!==ex||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==ex&&(i===ex||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eE(this,e)}};let eA=Y.litHtmlPolyfillSupport;eA?.(N,R),(Y.litHtmlVersions??=[]).push("3.3.1");let ez=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new R(t.insertBefore(es(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ew}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,ez.litElementHydrateSupport?.({LitElement:lit_element_i});let eI=ez.litElementPolyfillSupport;eI?.({LitElement:lit_element_i}),(ez.litElementVersions??=[]).push("4.2.1");let eP=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eO={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Z};function eD(e){return(t,i)=>{let o;return"object"==typeof i?((e=eO,t,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,i):(o=t.hasOwnProperty(i),t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eL(e){return eD({...e,state:!0,attribute:!1})}let eR=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function eM(e,t){return(i,o,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof o?i:r??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eR(i,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return eR(i,o,{get(){return s(this)}})}}let eT=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let eB={},eF=eT(class extends directive_i{constructor(){super(...arguments),this.ot=eB}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return ew}else if(this.ot===t)return ew;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}});let FilterMapIterator=class FilterMapIterator{constructor(e,t){this.predicateMapper=t,this.done=!1,this.iterator=e[Symbol.iterator]()}next(){if(this.done)return{done:!0,value:void 0};for(;;){let e=this.iterator.next();if(e.done)return this.done=!0,{done:!0,value:void 0};let t=this.predicateMapper(e.value);if(null!=t)return{done:!1,value:t}}}[Symbol.iterator](){return this}};function eN(e){let t=.001*performance.now(),i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(o-=e[1])<0&&(i--,o+=1e9)),[i,o]}w(6047);var eq=((s=eq||{})[s.Hash=35]="Hash",s[s.Slash=47]="Slash",s[s.Digit0=48]="Digit0",s[s.Digit1=49]="Digit1",s[s.Digit2=50]="Digit2",s[s.Digit3=51]="Digit3",s[s.Digit4=52]="Digit4",s[s.Digit5=53]="Digit5",s[s.Digit6=54]="Digit6",s[s.Digit7=55]="Digit7",s[s.Digit8=56]="Digit8",s[s.Digit9=57]="Digit9",s[s.Backslash=92]="Backslash",s[s.A=65]="A",s[s.B=66]="B",s[s.C=67]="C",s[s.D=68]="D",s[s.E=69]="E",s[s.F=70]="F",s[s.Z=90]="Z",s[s.a=97]="a",s[s.b=98]="b",s[s.c=99]="c",s[s.d=100]="d",s[s.e=101]="e",s[s.f=102]="f",s[s.z=122]="z",s),eV=((a=eV||{}).AngleBracketLeftHeavy="❰",a.AngleBracketRightHeavy="❱",a.ArrowBack="↩",a.ArrowDown="↓",a.ArrowDownUp="⇵",a.ArrowDropRight="⤷",a.ArrowHeadRight="➤",a.ArrowLeft="←",a.ArrowLeftDouble="⇐",a.ArrowLeftRight="↔",a.ArrowLeftRightDouble="⇔",a.ArrowLeftRightDoubleStrike="⇎",a.ArrowLeftRightLong="⟷",a.ArrowRight="→",a.ArrowRightDouble="⇒",a.ArrowRightHollow="⇨",a.ArrowUp="↑",a.ArrowUpDown="⇅",a.ArrowUpRight="↗",a.ArrowsHalfLeftRight="⇋",a.ArrowsHalfRightLeft="⇌",a.ArrowsLeftRight="⇆",a.ArrowsRightLeft="⇄",a.Asterisk="∗",a.Bullseye="◎",a.Check="✔",a.Dash="—",a.Dot="•",a.Ellipsis="…",a.EnDash="–",a.Envelope="✉",a.EqualsTriple="≡",a.Flag="⚑",a.FlagHollow="⚐",a.MiddleEllipsis="⋯",a.MuchLessThan="≪",a.MuchGreaterThan="≫",a.Pencil="✎",a.Space=" ",a.SpaceThin=" ",a.SpaceThinnest=" ",a.SquareWithBottomShadow="❏",a.SquareWithTopShadow="❐",a.Warning="⚠",a.ZeroWidthSpace="​",a);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var eU=((c=eU||{}).File="file",c.Git="git",c.GitHub="github",c.GitLens="gitlens",c.GitLensAIMarkdown="gitlens-ai-markdown",c.PRs="pr",c.Remote="vscode-remote",c.Vsls="vsls",c.VslsScc="vsls-scc",c.Virtual="vscode-vfs",c);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let ej="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",eH=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${ej}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${ej}`,graph:`https://gitkraken.com/solutions/commit-graph?${ej}`,launchpad:`https://gitkraken.com/solutions/launchpad?${ej}`,platform:`https://gitkraken.com/devex?${ej}`,pricing:`https://gitkraken.com/gitlens/pricing?${ej}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${ej}`,security:`https://help.gitkraken.com/gitlens/security?${ej}`,workspaces:`https://gitkraken.com/solutions/workspaces?${ej}`,cli:`https://gitkraken.com/cli?${ej}`,browserExtension:`https://gitkraken.com/browser-extension?${ej}`,desktop:`https://gitkraken.com/git-client?${ej}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${ej}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${ej}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${ej}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${ej}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${ej}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${ej}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${ej}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${ej}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${ej}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${ej}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${ej}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${ej}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${ej}`}),eW=new Map;function eG(t,i){null==t&&(t="decimal");let o=`${i??""}:${t}`,r=eW.get(o);if(null==r){let s={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],s),eW.set(o,r)}return r.format}function eK(e){let[t,i]=eN(e);return 1e3*t+Math.floor(i/1e6)}function eZ(e,i,o){let r;if(null==o)return t??=eG(),`${t(i)} ${e}${1===i?"":"s"}`;let s=1===i?e:o.plural??`${e}s`;return o.only?s:(0===i?r=o.zero??i:!1===o.format?r=i:null!=o.format?r=o.format(i):(t??=eG(),r=t(i)),`${r}${o.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let IpcCall=class IpcCall{constructor(e,t,i=!1){this.scope=e,this.reset=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i){super(e,t,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let eJ=new IpcRequest("core","webview/ready"),eY=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let eX=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let eQ=new IpcCommand("core","telemetry/sendEvent"),e0=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let e1=new IpcCommand("core","webview/focus/didChange"),e2=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let e5="rebase";function e8(e){return"commit"===e.type}let e3=new IpcCommand(e5,"abort"),e6=new IpcCommand(e5,"continue"),e7=new IpcCommand(e5,"search"),e4=new IpcCommand(e5,"skip"),e9=new IpcCommand(e5,"start"),te=new IpcCommand(e5,"switch"),tt=new IpcCommand(e5,"reorder"),ti=new IpcCommand(e5,"change/entry"),to=new IpcCommand(e5,"change/entries"),tr=new IpcCommand(e5,"move/entry"),ts=new IpcCommand(e5,"move/entries"),tn=new IpcCommand(e5,"shift/entries"),ta=new IpcCommand(e5,"selection/update"),tl=new IpcCommand(e5,"revealRef"),tc=new IpcCommand(e5,"avatars/get"),th=new IpcCommand(e5,"commits/get"),td=new IpcCommand(e5,"recompose/open"),tp=new IpcRequest(e5,"conflicts/get"),tu=new IpcNotification(e5,"didChange"),tg=new IpcNotification(e5,"avatars/didChange"),tm=new IpcNotification(e5,"commits/didChange"),tf=new IpcNotification(e5,"subscription/didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tb({context:e}){return(t,i)=>{let o=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,r)}}}function tv({context:e,subscribe:t}){return(i,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[o]=e},subscribe:t})})}}function ty(e,t,i){let o,r,s,a,c,h,p,u,g,m,f=0;null!=i&&({edges:h,maxWait:p,signal:u,aggregator:g}=i);let b="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function _(){if(null!=o){f=Date.now();let t=o,i=m;return m=void 0,o=void 0,s=e.apply(i,t)}}function w(){null!=a&&(clearTimeout(a),a=void 0)}function x(){null!=c&&(clearTimeout(c),c=void 0)}function C(){w(),x(),m=void 0,o=void 0,r=void 0,f=0}function $(...e){if(u?.aborted)return;let i=Date.now();null!=g&&null!=o?o=g(o,e):(m=this,o=e);let h=null==a&&null==c;r=i,w();let x=Date.now();if(r=x,a=setTimeout(()=>{var e;let i,o;a=void 0,i=(e=Date.now())-(r??0),o=e-f,(null==r||i>=t||i<0||null!=p&&o>=p)&&v&&_(),C()},t),null!=p&&!c){let e=p-(x-f);e>0?c=setTimeout(()=>{c=void 0,v&&null!=o&&_(),f=Date.now()},e):(v&&null!=o&&_(),C())}return b&&h?_():s}return $.cancel=C,$.flush=function(){return w(),x(),_()},$.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",C,{once:!0}),$}let t_=new WeakMap;function tw(e,t){return function(i,o,r){let s=t_.get(i.constructor);null==s&&t_.set(i.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){let t=t_.get(this.constructor);if(null!=t)for(let{keys:i,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};var tx=((h=tx||{})[h.Off=0]="Off",h[h.Error=1]="Error",h[h.Warn=2]="Warn",h[h.Info=3]="Info",h[h.Debug=4]="Debug",h);let tk=["accessToken","password","token"],tC=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){if(null!=e.sanitizeKeys)for(let t of tk)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tk);this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=t$(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=t$(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let i;this.level<4&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...i){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let i;this.level<3&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let i;this.level<2&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,(e,i)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(i=t(e,i)),this.provider?.sanitizer!=null&&(i=this.provider.sanitizer(e,i)),i))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};function t$(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tS=new WeakMap,tE={enabled:e=>tC.enabled(e)||tC.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":tC.error(void 0,t,i,...o);break;case"warn":tC.warn(t,i,...o);break;case"info":tC.log(t,i,...o);break;default:tC.debug(t,i,...o)}}},tA=0x40000000-1;function tz(){let e=0;return{get current(){return e},next:function(){return e===tA&&(e=0),++e},reset:function(){e=0}}}let tI=tz(),tP=new Map;function tO(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tD(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let i=t?tI.current:void 0,o=tI.next();return{scopeId:o,prevScopeId:i,prefix:`${tO(o,i)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tD(e,void 0),tC.configure({name:e,createChannel:function(e){return{name:e,appendLine:tC.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tC.log(this.scope,e,...t):tC.log(e,t.shift(),...t)}};let tL="home";new IpcRequest(tL,"launchpad/summary"),new IpcRequest(tL,"overview/active"),new IpcRequest(tL,"overview/inactive"),new IpcRequest(tL,"overviewFilter"),new IpcCommand(tL,"overview/repository/change"),new IpcNotification(tL,"overview/repository/didChange"),new IpcCommand(tL,"previewEnabled/toggle"),new IpcCommand(tL,"section/collapse"),new IpcCommand(tL,"walkthrough/dismiss"),new IpcNotification(tL,"ai/allAccess/didChange"),new IpcNotification(tL,"mcp/didChange"),new IpcCommand(tL,"ai/allAccess/dismiss"),new IpcCommand(tL,"overview/filter/set"),new IpcCommand(tL,"openInGraph"),new IpcNotification(tL,"repositories/didCompleteDiscovering"),new IpcNotification(tL,"previewEnabled/didChange"),new IpcNotification(tL,"repository/wip/didChange"),new IpcNotification(tL,"repositories/didChange"),new IpcNotification(tL,"walkthroughProgress/didChange"),new IpcNotification(tL,"integrations/didChange"),new IpcNotification(tL,"launchpad/didChange");let tR=new IpcNotification(tL,"subscription/didChange");new IpcNotification(tL,"org/settings/didChange"),new IpcNotification(tL,"home/ownerFilter/didChange"),new IpcNotification(tL,"account/didFocus");let tM="graph";new IpcCommand(tM,"chooseRepository"),new IpcCommand(tM,"dblclick"),new IpcCommand(tM,"avatars/get"),new IpcCommand(tM,"refs/metadata/get"),new IpcCommand(tM,"rows/get"),new IpcCommand(tM,"pullRequest/openDetails"),new IpcCommand(tM,"row/action"),new IpcCommand(tM,"search/openInView"),new IpcCommand(tM,"search/cancel"),new IpcCommand(tM,"columns/update"),new IpcCommand(tM,"refs/update/visibility"),new IpcCommand(tM,"filters/update/excludeTypes"),new IpcCommand(tM,"configuration/update"),new IpcCommand(tM,"search/update/mode"),new IpcCommand(tM,"filters/update/includedRefs"),new IpcCommand(tM,"selection/update"),new IpcRequest(tM,"jumpToHead"),new IpcRequest(tM,"chooseRef"),new IpcRequest(tM,"chooseComparison"),new IpcRequest(tM,"chooseAuthor"),new IpcRequest(tM,"chooseFile"),new IpcRequest(tM,"rows/ensure"),new IpcRequest(tM,"search/history/get"),new IpcRequest(tM,"search/history/store"),new IpcRequest(tM,"search/history/delete"),new IpcRequest(tM,"counts"),new IpcRequest(tM,"row/hover/get"),new IpcRequest(tM,"search"),new IpcNotification(tM,"repositories/integration/didChange"),new IpcNotification(tM,"didChange",!0),new IpcNotification(tM,"configuration/didChange");let tT=new IpcNotification(tM,"subscription/didChange");new IpcNotification(tM,"org/settings/didChange"),new IpcNotification(tM,"avatars/didChange"),new IpcNotification(tM,"mcp/didChange"),new IpcNotification(tM,"branchState/didChange"),new IpcNotification(tM,"refs/didChangeMetadata"),new IpcNotification(tM,"columns/didChange"),new IpcNotification(tM,"scrollMarkers/didChange"),new IpcNotification(tM,"refs/didChangeVisibility"),new IpcNotification(tM,"rows/didChange"),new IpcNotification(tM,"rows/stats/didChange"),new IpcNotification(tM,"selection/didChange"),new IpcNotification(tM,"workingTree/didChange"),new IpcNotification(tM,"didSearch"),new IpcNotification(tM,"didFetch"),new IpcNotification(tM,"featurePreview/didStart");let tB="timeline";new IpcRequest(tB,"ref/choose"),new IpcRequest(tB,"path/choose"),new IpcCommand(tB,"point/open"),new IpcCommand(tB,"config/update"),new IpcCommand(tB,"scope/update");let tF=new IpcNotification(tB,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tR.is(e)||tT.is(e)||tF.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let i=`${e}|${t}`,o=this._promos.get(i);return null==o&&(o=this.ipc.sendRequest(eX,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(i,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(eQ,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var tN=Uint8Array,tq=Uint16Array,tV=Int32Array,tU=new tN([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tj=new tN([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tH=new tN([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tW=function(e,t){for(var i=new tq(31),o=0;o<31;++o)i[o]=t+=1<<e[o-1];for(var r=new tV(i[30]),o=1;o<30;++o)for(var s=i[o];s<i[o+1];++s)r[s]=s-i[o]<<5|o;return{b:i,r:r}},tG=tW(tU,2),tK=tG.b,tZ=tG.r;tK[28]=258,tZ[258]=28;var tJ=tW(tj,0),tY=tJ.b;tJ.r;for(var tX=new tq(32768),tQ=0;tQ<32768;++tQ){var t0=(43690&tQ)>>1|(21845&tQ)<<1;t0=(61680&(t0=(52428&t0)>>2|(13107&t0)<<2))>>4|(3855&t0)<<4,tX[tQ]=((65280&t0)>>8|(255&t0)<<8)>>1}for(var t1=function(e,t,i){for(var o,r=e.length,s=0,a=new tq(t);s<r;++s)e[s]&&++a[e[s]-1];var c=new tq(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(i){o=new tq(1<<t);var h=15-t;for(s=0;s<r;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],g=c[e[s]-1]++<<u,m=g|(1<<u)-1;g<=m;++g)o[tX[g]>>h]=p}else for(s=0,o=new tq(r);s<r;++s)e[s]&&(o[s]=tX[c[e[s]-1]++]>>15-e[s]);return o},t2=new tN(288),tQ=0;tQ<144;++tQ)t2[tQ]=8;for(var tQ=144;tQ<256;++tQ)t2[tQ]=9;for(var tQ=256;tQ<280;++tQ)t2[tQ]=7;for(var tQ=280;tQ<288;++tQ)t2[tQ]=8;for(var t5=new tN(32),tQ=0;tQ<32;++tQ)t5[tQ]=5;var t8=t1(t2,9,1),t3=t1(t5,5,1),t6=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},t7=function(e,t,i){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&i},t4=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(7&t)},t9=function(e,t,i){return(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length),new tN(e.subarray(t,i))},ie=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],it=function(e,t,i){var o=Error(t||ie[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,it),!i)throw o;return o},ii=function(e,t,i,o){var r=e.length,s=o?o.length:0;if(!r||t.f&&!t.l)return i||new tN(0);var a=!i,c=a||2!=t.i,h=t.i;a&&(i=new tN(3*r));var p=function(e){var t=i.length;if(e>t){var o=new tN(Math.max(2*t,e));o.set(i),i=o}},u=t.f||0,g=t.p||0,m=t.b||0,f=t.l,b=t.d,v=t.m,_=t.n,w=8*r;do{if(!f){u=t7(e,g,1);var x=t7(e,g+1,3);if(g+=3,x)if(1==x)f=t8,b=t3,v=9,_=5;else if(2==x){var C=t7(e,g,31)+257,$=t7(e,g+10,15)+4,S=C+t7(e,g+5,31)+1;g+=14;for(var E=new tN(S),A=new tN(19),P=0;P<$;++P)A[tH[P]]=t7(e,g+3*P,7);g+=3*$;for(var O=t6(A),D=(1<<O)-1,T=t1(A,O,1),P=0;P<S;){var B=T[t7(e,g,D)];g+=15&B;var F=B>>4;if(F<16)E[P++]=F;else{var q=0,V=0;for(16==F?(V=3+t7(e,g,3),g+=2,q=E[P-1]):17==F?(V=3+t7(e,g,7),g+=3):18==F&&(V=11+t7(e,g,127),g+=7);V--;)E[P++]=q}}var U=E.subarray(0,C),j=E.subarray(C);v=t6(U),_=t6(j),f=t1(U,v,1),b=t1(j,_,1)}else it(1);else{var F=((g+7)/8|0)+4,W=e[F-4]|e[F-3]<<8,G=F+W;if(G>r){h&&it(0);break}c&&p(m+W),i.set(e.subarray(F,G),m),t.b=m+=W,t.p=g=8*G,t.f=u;continue}if(g>w){h&&it(0);break}}c&&p(m+131072);for(var K=(1<<v)-1,Z=(1<<_)-1,J=g;;J=g){var q=f[t4(e,g)&K],Y=q>>4;if((g+=15&q)>w){h&&it(0);break}if(q||it(2),Y<256)i[m++]=Y;else if(256==Y){J=g,f=null;break}else{var X=Y-254;if(Y>264){var P=Y-257,Q=tU[P];X=t7(e,g,(1<<Q)-1)+tK[P],g+=Q}var ee=b[t4(e,g)&Z],et=ee>>4;ee||it(3),g+=15&ee;var j=tY[et];if(et>3){var Q=tj[et];j+=t4(e,g)&(1<<Q)-1,g+=Q}if(g>w){h&&it(0);break}c&&p(m+131072);var ei=m+X;if(m<j){var eo=s-j,er=Math.min(j,ei);for(eo+m<0&&it(3);m<er;++m)i[m]=o[eo+m]}for(;m<ei;++m)i[m]=i[m-j]}}t.l=f,t.p=J,t.b=m,t.f=u,f&&(u=1,t.m=v,t.d=b,t.n=_)}while(!u)return m!=i.length&&a?t9(i,0,m):i.subarray(0,m)},io=new tN(0),ir="undefined"!=typeof TextDecoder&&new TextDecoder;try{ir.decode(io,{stream:!0})}catch{}var is=function(e){for(var t="",i=0;;){var o=e[i++],r=(o>127)+(o>223)+(o>239);if(i+r>e.length)return{s:t,r:t9(e,i-1)};r?3==r?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536)>>10,56320|1023&o):1&r?t+=String.fromCharCode((31&o)<<6|63&e[i++]):t+=String.fromCharCode((15&o)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(o)}};function ia(e,t){if(t){for(var i="",o=0;o<e.length;o+=16384)i+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return i}if(ir)return ir.decode(e);var r=is(e),s=r.s,i=r.r;return i.length&&it(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let il=/\(([\s\S]*)\)/,ic=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ih=/\s?=.*$/;function id(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function ip(e,t=!1){let i,o,r,s,a,c=0,h=!1,p=!1,u=!0;null!=e&&({args:i,if:o,enter:r,exit:s,prefix:a,logThreshold:c=0,scoped:h=!0,singleLine:p=!1,timed:u=!0}=e),c>0&&(p=!0,u=!0),u&&(h=!0);let g=tC.isDebugging,m=t?tC.debug:tC.log,f=g?"debug":"info";return(e,t,b)=>{let v,_;if("function"==typeof b.value?(v=b.value,_="value"):"function"==typeof b.get&&(v=b.get,_="get"),null==v||null==_)throw Error("Not supported");let w=!1!==i?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(ic,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");i=i>=0?i+1:0,o=o>0?o:t.indexOf("="),t=t.slice(i,o),t=`(${t})`;let r=il.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(ih,"")):[]}(v):[];b[_]=function(...e){var b;let _,x;if(!g&&!tC.enabled(f)||null!=o&&!o.apply(this,e))return v.apply(this,e);let C=tI.current,$=tI.next(),S=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",o=i.indexOf("_");-1!==o&&(i=i.substring(o+1));let r=tS.get(t);return r?.(e,i)??i}(this):void 0,E=S?h?`${tO($,C)} ${S}.${t}`:`${S}.${t}`:t;null!=a&&(E=a({id:$,instance:this,instanceName:S??"",name:t,prefix:E},...e)),h&&(b={scopeId:$,prevScopeId:C,prefix:E},b={prevScopeId:tI.current,...b},tP.set($,b),_=b);let A=null!=r?r(...e):"";if(!1===i||0===e.length)x="",p||m.call(tC,`${E}${A}`);else{let t,o,r,s;x="";let a=-1;for(s of e){if(o=w[++a],null!=(t=i?.[a])){if("boolean"==typeof t)continue;if(x.length>0&&(x+=", "),"string"==typeof t){x+=t;continue}r=String(t(s))}else x.length>0&&(x+=", "),r=tC.toLoggable(s);x+=o?`${o}=${r}`:r}p||m.call(tC,x?`${E}${A}(${x})`:`${E}${A}`)}if(p||u||null!=s){let t,i=u?eN():void 0,o=e=>{let t=void 0!==i?` [${eK(i)}ms]`:"";p?tC.error(e,x?`${E}${A}(${x})`:`${E}${A}`,_?.exitDetails?`failed${_.exitDetails}${t}`:`failed${t}`):tC.error(e,E,_?.exitDetails?`failed${_.exitDetails}${t}`:`failed${t}`),h&&tP.delete($)};try{t=v.apply(this,e)}catch(e){throw o(e),e}let r=e=>{let t,o,r,a;if(null!=i?(t=eK(i))>500?(o=tC.warn,r=` [*${t}ms] (slow)`):(o=m,r=` [${t}ms]`):(r="",o=m),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tC.toLoggable(e)}`);else _?.exitFailed?(a=_.exitFailed,o=(e,...t)=>tC.error(null,e,...t)):a="completed";p?(0===c||t>c)&&o.call(tC,x?`${E}${A}(${x}) ${a}${_?.exitDetails||""}${r}`:`${E}${A} ${a}${_?.exitDetails||""}${r}`):o.call(tC,x?`${E}(${x}) ${a}${_?.exitDetails||""}${r}`:`${E} ${a}${_?.exitDetails||""}${r}`),h&&tP.delete($)};return null!=t&&id(t)?t.then(r,o):r(t),t}return v.apply(this,e)}}}(()=>{let e;var t,i,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,o="",r=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)i=e.charCodeAt(c);else{if(47===i)break;i=47}if(47===i){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(o.length<2||2!==r||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",r=0):r=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),s=c,a=0;continue}}else if(2===o.length||1===o.length){o="",r=0,s=c,a=0;continue}}t&&(o.length>0?o+="/..":o="..",r=2)}else o.length>0?o+="/"+e.slice(s+1,c):o=e.slice(s+1,c),r=c-s-1;s=c,a=0}else 46===i&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(r=e+"/"+r,s=47===e.charCodeAt(0));return r=i(r,!s),s?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!o)).length||o||(e="."),e.length>0&&r&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var r=arguments[i];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=o.resolve(e))===(i=o.resolve(i)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,c=1;c<i.length&&47===i.charCodeAt(c);++c);for(var h=i.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===i.charCodeAt(c+g))return i.slice(c+g+1);if(0===g)return i.slice(c+g)}else a>p&&(47===e.charCodeAt(r+g)?u=g:0===g&&(u=0));break}var m=e.charCodeAt(r+g);if(m!==i.charCodeAt(c+g))break;47===m&&(u=g)}var f="";for(g=r+u+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===f.length?f+="..":f+="/..");return f.length>0?f+i.slice(c+u):(c+=u,47===i.charCodeAt(c)&&++c,i.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),o=47===i,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?o?"/":".":o&&1===r?"//":e.slice(0,r)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var o,r=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var c=i.length-1,h=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(47===p){if(!a){r=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===i.charCodeAt(c)?-1==--c&&(s=o):(c=-1,s=h))}return r===s?s=h:-1===s&&(s=e.length),e.slice(r,s)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){r=o+1;break}}else -1===s&&(a=!1,s=o+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var i=-1,o=0,r=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===r&&(s=!1,r=c+1),46===h?-1===i?i=c:1!==a&&(a=1):-1!==i&&(a=-1);else if(!s){o=c+1;break}}return -1===i||-1===r||0===a||1===a&&i===r-1&&i===o+1?"":e.slice(i,r)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var o,r=e.charCodeAt(0),s=47===r;s?(i.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u)if(47!==(r=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===r?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(i.base=i.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(i.name=e.slice(1,a),i.base=e.slice(1,h)):(i.name=e.slice(c,a),i.base=e.slice(c,h)),i.ext=e.slice(a,h)),c>0?i.dir=e.slice(0,c-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>i}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let m=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,i,o,r,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,i||""),this.query=o||"",this.fragment=r||"",u(this,s))}get fsPath(){return w(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:i,path:o,query:r,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===i?i=this.authority:null===i&&(i=""),void 0===o?o=this.path:null===o&&(o=""),void 0===r?r=this.query:null===r&&(r=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&i===this.authority&&o===this.path&&r===this.query&&s===this.fragment?this:new d(t,i,o,r,s)}static parse(e,t=!1){let i=m.exec(e);return i?new d(i[2]||"",$(i[4]||""),$(i[5]||""),$(i[7]||""),$(i[9]||""),t):new d("","","","","")}static file(t){let i="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(i=t.substring(2),t="/"):(i=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",i,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return x(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===f?e.fsPath:null,t}}return e}};let f=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=w(this,!1)),this._fsPath}toString(e=!1){return e?x(this,!0):(this._formatted||(this._formatted=x(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=f),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let b={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function v(e,t,i){let o,r=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||i&&91===a||i&&93===a||i&&58===a)-1!==r&&(o+=encodeURIComponent(e.substring(r,s)),r=-1),void 0!==o&&(o+=e.charAt(s));else{void 0===o&&(o=e.substr(0,s));let t=b[a];void 0!==t?(-1!==r&&(o+=encodeURIComponent(e.substring(r,s)),r=-1),o+=t):-1===r&&(r=s)}}return -1!==r&&(o+=encodeURIComponent(e.substring(r))),void 0!==o?o:e}function _(e){let t;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);35===o||63===o?(void 0===t&&(t=e.substr(0,i)),t+=b[o]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function w(t,i){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function x(e,t){let i=t?_:v,o="",{scheme:r,authority:s,path:a,query:c,fragment:h}=e;if(r&&(o+=r,o+=":"),(s||"file"===r)&&(o+="/",o+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=i(t,!1,!1):(o+=i(t.substr(0,e),!1,!1),o+=":",o+=i(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?o+=i(s,!1,!0):(o+=i(s.substr(0,e),!1,!0),o+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}o+=i(a,!0,!1)}return c&&(o+="?",o+=i(c,!1,!1)),h&&(o+="#",o+=t?h:v(h,!1,!1)),o}let C=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function $(e){return e.match(C)?e.replace(C,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var S=s(975);let E=S.posix||S;(t=i||(i={})).joinPath=function(e,...t){return e.with({path:E.join(e.path,...t)})},t.resolvePath=function(e,...t){let i=e.path,o=!1;"/"!==i[0]&&(i="/"+i,o=!0);let r=E.resolve(i,...t);return o&&"/"===r[0]&&!e.authority&&(r=r.substring(1)),e.with({path:r})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=E.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return E.basename(e.path)},t.extname=function(e){return E.extname(e.path)},g=a})();let{URI:iu,Utils:ig}=g;function im(e,t){return JSON.parse(e,(e,i)=>(function(e,t,i){let o=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(t);if(null==o)return t;switch(o.__ipc){case"date":return new Date(o.value);case"promise":return i(o.value);case"uri":return iu.revive(o.value)}})(0,i,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tD(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tE,this._time=eN(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=eN(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=eN(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[i,o]=eN(this._time),r=1e3*i+Math.floor(o/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}};function ib(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function iv(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}(m||(m={})).on=function(e,t,i,o){let r=!1;if("string"==typeof e){let s=function(t){let o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,s,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,o??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let iy={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?iy:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var i_=Object.defineProperty,iw=Object.getOwnPropertyDescriptor,ix=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?iw(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&i_(t,i,s),s};let ik=tz();function iC(){return`webview:${ik.next()}`}let i$=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i??=acquireVsCodeApi(),this._disposable=m.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,i,o,r;let s=tP.get(tI.current),a=e.data,c=function(e,t,...i){return(t?.provider??tE).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(tD(`(e=${a.id}|${a.method})`,s),{log:!1,logLevel:"debug"});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=ia((t=a.params,ii(t,{i:2},void 0,void 0)))}catch(e){a.params=ia(a.params)}else a.params=ia(a.params);c?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=im(a.params,e=>this.getResponsePromise(e.method,e.id)),c?.stop({message:`\u2022 deserialized params`})):null==a.params?c?.stop({message:`\u2022 no params`}):c?.stop({message:`\u2022 invalid params`}),i=` \u2022 ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`,null!=s&&(null!=s.exitDetails&&null!=i?s.exitDetails+=i:s.exitDetails=i),null!=a.completionId){let e=(o=a.method,r=a.completionId,`${o}|${r}`);this._pendingHandlers.get(e)?.(a);return}this._onReceiveMessage.fire(a)}deserializeIpcData(e){return im(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let i=iC();this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let i=iC(),o=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:i}),o}getResponsePromise(e,t){return new Promise((i,o)=>{var r,s;let a,c=(r=e,s=t,`${r}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(tC.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===e0.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function iS(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}ix([ip({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],i$.prototype,"onMessageReceived",1),ix([ip({args:{0:e=>e.method,1:!1}},!0)],i$.prototype,"sendCommand",1),ix([ip({args:{0:e=>e.method,1:!1,2:!1}},!0)],i$.prototype,"sendRequest",1),ix([ip({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],i$.prototype,"postMessage",1),i$=ix([(p=e=>`${e.appName}(HostIpc)`,e=>void tS.set(e,p))],i$);let RGBA=class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=iS(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=iS(Math.max(Math.min(1,t),0),3),this.l=iS(Math.max(Math.min(1,i),0),3),this.a=iS(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=e.a,s=Math.max(t,i,o),a=Math.min(t,i,o),c=0,h=0,p=(a+s)/2,u=s-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:c=(i-o)/u+6*(i<o);break;case i:c=(o-t)/u+2;break;case o:c=(t-i)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,r)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,o,r=e.h/360,{s,l:a,a:c}=e;if(0===s)t=i=o=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,r+1/3),i=HSLA._hue2rgb(c,e,r),o=HSLA._hue2rgb(c,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=iS(Math.max(Math.min(1,t),0),3),this.v=iS(Math.max(Math.min(1,i),0),3),this.a=iS(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=Math.max(t,i,o),s=r-Math.min(t,i,o);return new HSVA(Math.round(60*(0===s?0:r===t?((i-o)/s%6+6)%6:r===i?(o-t)/s+2:(t-i)/s+4)),0===r?0:s/r,r,e.a)}static toRGBA(e){let{h:t,s:i,v:o,a:r}=e,s=o*i,a=s*(1-Math.abs(t/60%2-1)),c=o-s,[h,p,u]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(h=a,u=s):t<=360&&(h=s,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),r)}};function iE(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(iE(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return iS(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(t,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,o=t.a,r=i+o*(1-i);return r<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*i/r+t.r*o*(1-i)/r,this.rgba.g*i/r+t.g*o*(1-i)/r,this.rgba.b*i/r+t.b*o*(1-i)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${iA(e.rgba.r)}${iA(e.rgba.g)}${iA(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(r-o)/r,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(o-r)/o,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function iA(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let iz=new Emitter,iI=iz.event;function iP(e){let t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),s=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=iE("--vscode-editor-background",i),c=iE("--vscode-editor-foreground",i);return c||(c=iE("--vscode-foreground",i)),{colors:{background:a,foreground:c},computedStyle:i,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var iO=Object.defineProperty,iD=Object.getOwnPropertyDescriptor,iL=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?iD(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&iO(t,i,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new i$(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger),this._webview={webviewId:this._stateProvider.state.webviewId,webviewInstanceId:this._stateProvider.state.webviewInstanceId};let t=iP();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(t),this.disposables.push(((e=new MutationObserver(e=>{iz.fire(iP(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(iI(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case e1.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case e2.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=ty(e=>{this._ipc.sendCommand(eY,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ev`<slot></slot>`}};iL([eD({type:String})],GlAppHost.prototype,"name",2),iL([eD({type:String})],GlAppHost.prototype,"placement",2),iL([tb({context:"ipc"})],GlAppHost.prototype,"_ipc",2),iL([tb({context:"logger"})],GlAppHost.prototype,"_logger",2),iL([tb({context:"promos"})],GlAppHost.prototype,"_promos",2),iL([tb({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),iL([tb({context:"webview"})],GlAppHost.prototype,"_webview",2),iL([eD({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let iR=P`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;P`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${iR}
	}
`;let iM=P`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,iT=P`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;P`
	:focus-visible {
		${iM}
	}
`;let iB=P`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;P`
	* {
		box-sizing: border-box;
	}
`,P`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${iM}
	}
	a:hover {
		text-decoration: underline;
	}
`;let iF=P`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;P`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let iN=P`
	/* ==========================================================================
	   CSS Custom Properties (Theme Variables)
	   ========================================================================== */

	:host {
		/* Layout & Typography */
		--gk-avatar-size: 2.2rem;
		--font-family: var(--vscode-font-family);
		--font-size: var(--vscode-font-size);

		/* Colors */
		--color-background: var(--vscode-editor-background);
		--color-foreground: var(--vscode-editor-foreground, var(--vscode-foreground));
		--color-link-foreground: var(--vscode-textLink-foreground);
		--color-focus-border: var(--vscode-focusBorder);

		/* Background variants */
		--color-background--lighten-05: color-mix(in srgb, #fff 5%, var(--color-background));
		--color-background--darken-05: color-mix(in srgb, #000 5%, var(--color-background));
		--color-background--lighten-15: color-mix(in srgb, #fff 15%, var(--color-background));
		--color-background--darken-15: color-mix(in srgb, #000 15%, var(--color-background));
		--color-background--lighten-30: color-mix(in srgb, #fff 30%, var(--color-background));
		--color-background--darken-30: color-mix(in srgb, #000 30%, var(--color-background));
		--color-background--darken-50: color-mix(in srgb, #000 50%, var(--color-background));

		/* Foreground variants */
		--color-foreground--75: color-mix(in srgb, transparent 25%, var(--color-foreground));
		--color-foreground--65: color-mix(in srgb, transparent 35%, var(--color-foreground));
		--color-foreground--50: color-mix(in srgb, transparent 50%, var(--color-foreground));
		--color-foreground--35: color-mix(in srgb, transparent 65%, var(--color-foreground));
		--color-foreground--25: color-mix(in srgb, transparent 75%, var(--color-foreground));

		/* Highlight colors */
		--color-highlight: var(--vscode-button-background, var(--vscode-button-border));
		--color-highlight--50: color-mix(in srgb, transparent 50%, var(--color-highlight));
		--color-highlight--25: color-mix(in srgb, transparent 75%, var(--color-highlight));
		--color-highlight--10: color-mix(in srgb, transparent 90%, var(--color-highlight));

		--focus-color: var(--vscode-focusBorder);

		/* Host element styles */
		display: block;
		background-color: var(--color-background);
		color: var(--color-foreground);
		font-size: var(--font-size);
		line-height: 1.4;
		overflow: hidden;
		min-width: 0;
	}

	:focus,
	:focus-within {
		outline-color: var(--focus-color);
	}

	/* Avatar background (used by gl-avatar-list component) */
	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) {
		--avatar-bg: var(--color-background--lighten-30);
	}
	:host-context(.vscode-light) {
		--avatar-bg: var(--color-background--darken-30);
	}
	:host-context(.vscode-high-contrast-light) {
		--avatar-bg: var(--color-foreground--50);
	}

	/* ==========================================================================
	   Base Element Styles
	   ========================================================================== */

	a {
		color: var(--color-link-foreground);
		text-decoration: none;
	}
	a:focus {
		outline: 1px solid var(--color-focus-border);
		outline-offset: 2px;
	}

	h2 {
		font-size: 2.2rem;
		font-weight: 200;
		line-height: normal;
		margin: 1em 0 0.3em 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.4rem;
		font-weight: 200;
		line-height: normal;
		margin: 1em 0 0.3em 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* ==========================================================================
	   Icons
	   ========================================================================== */

	.icon--branch::before {
		content: '\\ea68';
		font-family: codicon;
		font-size: 1.2rem;
		position: relative;
		top: 2px;
		margin: 0 3px;
	}

	.icon--commit::before {
		content: '\\eafc';
		font-family: codicon;
		font-size: 1.2rem;
		position: relative;
		top: 2px;
		margin: 0 1px 0 3px;
	}

	.mr-1 {
		margin-right: 0.4rem;
	}

	/* ==========================================================================
	   Layout (Grid Container)
	   ========================================================================== */

	.container {
		display: grid;
		grid-template-areas:
			'header'
			'banner'
			'entries'
			'footer';
		grid-template-rows: auto auto 1fr auto;
		grid-template-columns: minmax(0, 1fr);
		height: 100vh;
		min-width: 0;
	}

	/* ==========================================================================
	   Banners (Read-only)
	   ========================================================================== */

	.read-only-banner {
		grid-area: banner;
		margin: 0.5rem 1rem;
		margin-block-end: 0.5rem;

		/* Warning-style colors */
		--gl-banner-primary-background: var(--vscode-inputValidation-warningBackground, rgba(205, 145, 0, 0.15));
		--gl-banner-secondary-background: var(--vscode-inputValidation-warningBackground, rgba(205, 145, 0, 0.15));
		--gl-banner-text-color: var(--vscode-inputValidation-warningForeground, inherit);
		--gl-banner-primary-emphasis-background: var(--vscode-inputValidation-warningBorder, #cca700);
	}

	/* ==========================================================================
	   Header
	   ========================================================================== */

	header {
		grid-area: header;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.6rem 1rem;
		min-width: 0;
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);

		gl-checkbox {
			margin-block: 0;
		}

		gl-commit-sha::part(label) {
			font-weight: bold;
		}
	}

	.header__row {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.5rem 1rem;
		min-width: 0;
	}

	.header-info {
		flex: 1 1 0;
		min-width: 0;
		color: var(--color-foreground--65);
		margin-left: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-block: 0.4rem;
	}

	.header-info gl-branch-name,
	.header-info gl-commit-sha {
		vertical-align: baseline;
	}

	.header-info gl-tooltip {
		display: inline;
		min-width: 0;
	}

	.header-count {
		margin-left: 1rem;
		white-space: nowrap;
	}

	.header-onto {
		display: inline;
		white-space: nowrap;
	}

	.header-actions {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		gap: 1.6rem;
		white-space: nowrap;
	}

	.header-toggle {
		flex: 0 0 auto;
		white-space: nowrap;
	}

	.header-title {
		flex: 0 1 auto;
		font-size: 1.6rem;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* Rebase banner */
	.rebase-banner {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor, #c4a000);
		color: #000;
		padding: 0.3rem 0.6rem;
		border-radius: 0.3rem;

		&.has-conflicts {
			background-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#cc6600
			);
			color: #fff;
		}

		code-icon {
			flex: none;
		}

		.rebase-status {
			flex: none;
		}

		gl-tooltip {
			flex: none;
		}

		.rebase-progress {
			flex: none;
			font-weight: 600;
			margin-left: auto;
		}

		.rebase-remaining {
			flex: none;
			opacity: 0.85;
		}

		.rebase-action-link {
			flex: none;
			color: inherit;
			text-decoration: underline dotted;
			text-underline-offset: 0.3rem;
			cursor: pointer;
			opacity: 0.9;
			margin-left: 1rem;

			&:hover {
				text-decoration: none;
				opacity: 1;
			}
		}
	}

	/* ==========================================================================
	   Entries
	   ========================================================================== */

	.entries {
		grid-area: entries;
		display: block;
		height: 100%;
		min-height: 0;
		overflow-x: hidden !important;
		overflow-y: visible;
		outline: none;
		margin-inline: 1rem;
	}

	.entries {
		--current-entry-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor, #c4a000);

		/* Override current entry color when there are conflicts */
		&.has-conflicts {
			--current-entry-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#c74e39
			);
		}
	}

	.entries:focus-within {
		outline: none;
	}

	.entries-empty {
		grid-area: entries;
		display: flex;
		justify-content: center;
		color: var(--color-foreground--85);
		margin-top: 3rem;
		font-style: italic;
	}

	gl-rebase-entry.dragging {
		opacity: 0.4;
	}

	gl-rebase-entry.drag-over::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--vscode-focusBorder);
		z-index: 10;
		pointer-events: none;
	}

	/* When hovering on bottom half of entry, show indicator at bottom */
	gl-rebase-entry.drag-over-bottom::before {
		top: auto;
		bottom: 0;
	}

	/* Base entry indicator position depends on mode:
	   - Ascending (base at top): indicator at bottom (insert after base)
	   - Descending (base at bottom): indicator at top (insert before base) */
	.entries.ascending gl-rebase-entry[isbase].drag-over::before {
		top: auto;
		bottom: 0;
	}

	/* ==========================================================================
	   Footer
	   ========================================================================== */

	footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		background: var(--color-background);
		z-index: 1;
		min-width: 0;
	}

	.shortcuts {
		flex: 1 1 0;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.5rem 1rem;
		overflow: hidden;
		min-width: 0;

		> code-icon {
			flex: 0 0 auto;
		}
	}

	.shortcut {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: baseline;
		color: var(--color-foreground--65);
		gap: 0.2rem;
		white-space: nowrap;

		kbd {
			color: var(--vscode-keybindingLabel-foreground);
			display: inline-block;
			font-family: var(--vscode-font-family);
			font-weight: 600;
			line-height: 1.4;
			vertical-align: middle;

			&.word {
				text-decoration: underline;
				text-underline-offset: 0.3rem;
			}
		}

		.label {
			margin-left: 0.3rem;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	gl-rebase-conflict-indicator {
		margin-right: auto;
		margin-left: 1.6rem;
	}

	gl-button .button-shortcut {
		display: block;
		margin-top: 0.2rem;
		font-weight: 200;
		font-size: 0.9rem;
		opacity: 0.6;
		text-transform: none;
		letter-spacing: normal;
	}

	gl-button:hover .button-shortcut {
		opacity: 1;
	}
`,{fromCharCode:iq}=String;new TextEncoder;let iV=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,i,o){this.host=e,this.ipc=i,this.logger=o,this._state=this.ipc.deserializeIpcData(iV.decode(function(e){let t=globalThis.atob(e),i=t.length,o=new Uint8Array(i),r=0,s=i-i%8;for(;r<s;r+=8)o[r]=t.charCodeAt(r),o[r+1]=t.charCodeAt(r+1),o[r+2]=t.charCodeAt(r+2),o[r+3]=t.charCodeAt(r+3),o[r+4]=t.charCodeAt(r+4),o[r+5]=t.charCodeAt(r+5),o[r+6]=t.charCodeAt(r+6),o[r+7]=t.charCodeAt(r+7);for(;r<i;r++)o[r]=t.charCodeAt(r);return o}(t))),this.logger?.log(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(eJ,{bootstrap:!0});if(null!=e.state){let t=id(e.state)?await e.state:e.state;this.onDeferredBootstrapStateReceived(t)}}else this.ipc.sendRequest(eJ,{bootstrap:!1})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let RebaseStateProvider=class RebaseStateProvider extends StateProviderBase{constructor(e,t,i,o){super(e,t,i,o),this._pendingAvatarEmails=new Map,this._requestedAvatarEmails=new Set,this._pendingCommitShas=new Set,this._requestedCommitShas=new Set,this.host.addEventListener("missing-avatar",this.onMissingAvatar.bind(this)),this.host.addEventListener("missing-commit",this.onMissingCommit.bind(this))}get deferBootstrap(){return!0}createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMissingAvatar(e){let{email:t,sha:i}=e.detail;t&&i&&(this._requestedAvatarEmails.has(t)||(this._pendingAvatarEmails.set(t,i),this._requestedAvatarEmails.add(t),this._sendPendingAvatarRequestsDebounced??=ty(this.sendPendingAvatarRequests.bind(this),50),this._sendPendingAvatarRequestsDebounced()))}sendPendingAvatarRequests(){if(!this._pendingAvatarEmails.size)return;let e=Object.fromEntries(this._pendingAvatarEmails);this._pendingAvatarEmails.clear(),this.ipc.sendCommand(tc,{emails:e})}onMissingCommit(e){let{sha:t}=e.detail;!t||this._requestedCommitShas.has(t)||(this._pendingCommitShas.add(t),this._requestedCommitShas.add(t),this._sendPendingCommitRequestsDebounced??=ty(this.sendPendingCommitRequests.bind(this),50),this._sendPendingCommitRequestsDebounced())}sendPendingCommitRequests(){if(!this._pendingCommitShas.size)return;let e=Array.from(this._pendingCommitShas);this._pendingCommitShas.clear(),this.ipc.sendCommand(th,{shas:e})}onMessageReceived(e){switch(!0){case tu.is(e):this._state={...e.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case tg.is(e):for(let t of(this.updateAvatars(e.params.avatars),Object.keys(e.params.avatars)))this._requestedAvatarEmails.delete(t);break;case tm.is(e):for(let t of(this.updateCommits(e.params.commits,e.params.authors,e.params.isInPlace),Object.keys(e.params.commits)))this._requestedCommitShas.delete(t);break;case tf.is(e):this._state={...this._state,subscription:e.params.subscription,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}updateAvatars(e){if(!this._state?.authors)return;let t=!1;for(let[i,o]of Object.entries(e)){let e=this._state.authors[i];e&&e.avatarUrl!==o&&(e.avatarUrl=o,t=!0)}t&&(this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate())}updateCommits(e,t,i){if(!this._state)return;let o=!1;if(null!=i&&this._state.isInPlace!==i&&(this._state.isInPlace=i,o=!0),this._state.onto&&!this._state.onto.commit){let t=e[this._state.onto.sha];t&&(this._state.onto={...this._state.onto,commit:t},o=!0)}for(let[i,r]of(this._state.entries=this._state.entries.map(t=>{if(!e8(t)||null!=t.commit)return t;let i=e[t.sha];return i?(o=!0,{...t,commit:i}):t}),this._state.doneEntries&&(this._state.doneEntries=this._state.doneEntries.map(t=>{if(!e8(t)||null!=t.commit)return t;let i=e[t.sha];return i?(o=!0,{...t,commit:i}):t})),Object.entries(t))){let e=this._state.authors[i];e?this._state.authors[i]={...r,avatarUrl:e.avatarUrl??r.avatarUrl}:this._state.authors[i]=r,o=!0}o&&(this._state={...this._state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate())}moveEntry(e,t){if(!this._state?.entries||e===t)return;let i=[...this._state.entries],[o]=i.splice(e,1);i.splice(t,0,o),this._state={...this._state,entries:i,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}moveEntries(e,t){if(!this._state?.entries||0===e.length)return;let i=[...this._state.entries],o=new Set(e),r=i.filter(e=>o.has(e.id)),s=i.filter(e=>!o.has(e.id)),a=Math.max(0,Math.min(t,s.length)),c=[...s.slice(0,a),...r,...s.slice(a)];this._state={...this._state,entries:c,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}shiftEntries(e,t){if(!this._state?.entries||0===e.length)return;let i=[...this._state.entries],o=new Set(e),r=i.map((e,t)=>o.has(e.id)?t:-1).filter(e=>-1!==e);if(0!==r.length){if("up"===t)for(let e of r){if(0===e)continue;let t=e-1;o.has(i[t].id)||([i[t],i[e]]=[i[e],i[t]])}else for(let e=r.length-1;e>=0;e--){let t=r[e];if(t===i.length-1)continue;let s=t+1;o.has(i[s].id)||([i[s],i[t]]=[i[t],i[s]])}this._state={...this._state,entries:i,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}changeEntryAction(e,t){this.changeEntryActions([{sha:e,action:t}])}changeEntryActions(e){if(!this._state?.entries||0===e.length)return;let t=new Map(e.map(e=>[e.sha,e.action])),i=this._state.entries.map(e=>{if(!e8(e))return e;let i=t.get(e.sha);return null!=i?{...e,action:i}:e});this._state={...this._state,entries:i,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};function iU(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;let{I:ij}={M:ee,P:et,A:ei,C:1,L:eS,R:M,D:el,V:eE,I:R,H:k,N:I,U:L,B:H,F:z},iH=(e,t,i)=>{let o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===i)i=new ij(o.insertBefore(document.createComment(""),r),o.insertBefore(document.createComment(""),r),e,e.options);else{let t=i._$AB.nextSibling,s=i._$AM,a=s!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==r||a){let e=i._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,r),e=t}}}return i},iW=(e,t,i=e)=>(e._$AI(t,i),e),iG={},iK=e=>{e._$AR(),e._$AA.remove()},iZ=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),iZ(e,t);return!0},iJ=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},iY=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),i0(t)}};function iX(e){void 0!==this._$AN?(iJ(this),this._$AM=e,iY(this)):this._$AM=e}function iQ(e,t=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)iZ(o[e],!1),iJ(o[e]);else null!=o&&(iZ(o,!1),iJ(o));else iZ(this,e)}let i0=e=>{2==e.type&&(e._$AP??=iQ,e._$AQ??=iX)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),iY(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(iZ(this,e),iJ(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let i1=(e,t,i)=>{let o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},i2=eT(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);let r=[],s=[],a=0;for(let t of e)r[a]=o?o(t,a):a,s[a]=i(t,a),a++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){let r=e._$AH,{values:s,keys:a}=this.dt(t,i,o);if(!Array.isArray(r))return this.ut=a,s;let c=this.ut??=[],h=[],p,u,g=0,m=r.length-1,f=0,b=s.length-1;for(;g<=m&&f<=b;)if(null===r[g])g++;else if(null===r[m])m--;else if(c[g]===a[f])h[f]=iW(r[g],s[f]),g++,f++;else if(c[m]===a[b])h[b]=iW(r[m],s[b]),m--,b--;else if(c[g]===a[b])h[b]=iW(r[g],s[b]),iH(e,h[b+1],r[g]),g++,b--;else if(c[m]===a[f])h[f]=iW(r[m],s[f]),iH(e,r[g],r[m]),m--,f++;else if(void 0===p&&(p=i1(a,f,b),u=i1(c,g,m)),p.has(c[g]))if(p.has(c[m])){let t=u.get(a[f]),i=void 0!==t?r[t]:null;if(null===i){let t=iH(e,r[g]);iW(t,s[f]),h[f]=t}else h[f]=iW(i,s[f]),iH(e,r[g],i),r[t]=null;f++}else iK(r[m]),m--;else iK(r[g]),g++;for(;f<=b;){let t=iH(e,h[b+1]);iW(t,s[f]),h[f++]=t}for(;g<=m;){let e=r[g++];null!==e&&iK(e)}return this.ut=a,((e,t=iG)=>e._$AH=t)(e,h),ew}});let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(e){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(e){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(e,t){this._scrollTo("number"==typeof e&&"number"==typeof t?{left:e,top:t}:e)}scrollBy(e,t){let i="number"==typeof e&&"number"==typeof t?{left:e,top:t}:e;void 0!==i.top&&(i.top+=this.scrollTop),void 0!==i.left&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){null!==this._end&&this._end(),"smooth"===e.behavior?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=void 0===t?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=void 0===i?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),(null===this._destination||i!==this._destination.left||t!==this._destination.top)&&(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:e,scrollLeft:t}=this,{top:i,left:o}=this._destination;i=Math.min(i||0,this.maxScrollTop);let r=Math.abs((o=Math.min(o||0,this.maxScrollLeft))-t);1>Math.abs(i-e)&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let i5="undefined"!=typeof window?window.ResizeObserver:void 0,i8=Symbol("virtualizerRef"),i3="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new i5(()=>this._hostElementSizeChanged()),this._childrenRO=new i5(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[i8]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=function(e,t=!1){let i=!1;return(function(e,t=!1){let i=[],o=t?e:i7(e);for(;null!==o;)i.push(o),o=i7(o);return i})(e,t).filter(e=>{if(i)return!1;let t=getComputedStyle(e);return i="fixed"===t.position,"visible"!==t.overflow})}(this._hostElement,e),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${i3}]`);t||((t=document.createElement("div")).setAttribute(i3,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(i3,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||o;if("function"==typeof t&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,i;if("function"==typeof e.type){i=e.type;let o={...e};delete o.type,t=o}else t=e;void 0===i&&(o=i=(await Promise.resolve().then(w.bind(w,5090))).FlowLayout),this._layout=new i(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let e=window.performance.now(),t=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:i}}return null}_measureChildren(){let e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){let r=t[o],s=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[s]=i.call(this,r,this._items[s]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){var t;let i,{width:o,height:r}=e.getBoundingClientRect();return Object.assign({width:o,height:r},(t=e,{marginTop:i6((i=window.getComputedStyle(t)).marginTop),marginRight:i6(i.marginRight),marginBottom:i6(i.marginBottom),marginLeft:i6(i.marginLeft)}))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){"scroll"===e.type&&(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(e){"stateChanged"===e.type?this._updateDOM(e):"visibilityChanged"===e.type?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):"unpinned"===e.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(i3)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let o,r,s,a,c=e.getBoundingClientRect();o=0,r=0,s=window.innerHeight,a=window.innerWidth;let h=this._clippingAncestors.map(e=>e.getBoundingClientRect());for(let e of(h.unshift(c),h))o=Math.max(o,e.top),r=Math.max(r,e.left),s=Math.min(s,e.bottom),a=Math.min(a,e.right);let p=t.getBoundingClientRect(),u={left:c.left-p.left,top:c.top-p.top},g={width:t.scrollWidth,height:t.scrollHeight},m=o-c.top+e.scrollTop,f=r-c.left+e.scrollLeft;i.viewportSize={width:Math.max(0,a-r),height:Math.max(0,s-o)},i.viewportScroll={top:m,left:f},i.totalScrollSize=g,i.offsetWithinScroller=u}}_sizeHostElement(e){let t=e&&null!==e.width?Math.min(82e5,e.width):0,i=e&&null!==e.height?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${i}px)`;else{let e=this._hostElement.style;e.minWidth=t?`${t}px`:"100%",e.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:i,height:o,xOffset:r,yOffset:s},a)=>{let c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${t}px, ${e}px)`,void 0!==i&&(c.style.width=i+"px"),void 0!==o&&(c.style.height=o+"px"),c.style.left=void 0===r?null:r+"px",c.style.top=void 0===s?null:s+"px")})}async _adjustRange(e){let{_first:t,_last:i,_firstVisible:o,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-o})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),"smooth"===e.behavior){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function i6(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function i7(e){if(null!==e.assignedSlot)return e.assignedSlot;if(null!==e.parentElement)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}let i4=e=>e,i9=(e,t)=>ev`${t}: ${JSON.stringify(e,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>i9(e,t+this._first),this._keyFunction=(e,t)=>i4(e,t+this._first),this._items=[],2!==e.type)throw Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return i2(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?ew:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let i=e.parentNode;this._makeVirtualizer(i,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(e,i)=>t(e,i+this._first)),i&&(this._keyFunction=(e,t)=>i(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:i,scroller:o,items:r}=t;this._virtualizer=new Virtualizer({hostElement:e,layout:i,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){let i=e.parentNode;i&&1===i.nodeType&&(i.addEventListener("rangeChanged",e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let oe=eT(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=i9,this.keyFunction=i4,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:i,layout:o,scroller:r}=this;return ev`${oe({items:e,renderItem:t,keyFunction:i,layout:o,scroller:r})}`}element(e){return this[i8]?.element(e)}get layoutComplete(){return this[i8]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};iU([eD({attribute:!1})],LitVirtualizer.prototype,"items",void 0),iU([eD()],LitVirtualizer.prototype,"renderItem",void 0),iU([eD()],LitVirtualizer.prototype,"keyFunction",void 0),iU([eD({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),iU([eD({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);var ot=((u=ot||{})[u.VerificationRequired=-1]="VerificationRequired",u[u.Community=0]="Community",u[u.DeprecatedPreview=1]="DeprecatedPreview",u[u.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",u[u.Trial=3]="Trial",u[u.TrialExpired=4]="TrialExpired",u[u.TrialReactivationEligible=5]="TrialReactivationEligible",u[u.Paid=6]="Paid",u);function oi(e){return null!=e&&(e===ot.Trial||e===ot.Paid)}let oo=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),or=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var os=Object.defineProperty,on=Object.getOwnPropertyDescriptor,oa=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?on(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&os(t,i,s),s};function ol(e,t=""){return A(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let oc=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};oc.styles=P`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${ol(oo)}
		${ol(or,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,oa([eD({reflect:!0})],oc.prototype,"icon",2),oa([eD({reflect:!0})],oc.prototype,"modifier",2),oa([eD({type:Number})],oc.prototype,"size",2),oa([eD({reflect:!0})],oc.prototype,"flip",2),oa([eD({reflect:!0})],oc.prototype,"rotate",2),oc=oa([eP("code-icon")],oc);var oh=P`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let od=new Set,op=new Map,ou="ltr",og="en",om="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(om){let e=new MutationObserver(ob);ou=document.documentElement.dir||"ltr",og=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function of(...e){e.map(e=>{let t=e.$code.toLowerCase();op.has(t)?op.set(t,Object.assign(Object.assign({},op.get(t)),e)):op.set(t,e),r||(r=e)}),ob()}function ob(){om&&(ou=document.documentElement.dir||"ltr",og=document.documentElement.lang||navigator.language),[...od.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){od.add(this.host)}hostDisconnected(){od.delete(this.host)}dir(){return`${this.host.dir||ou}`.toLowerCase()}lang(){return`${this.host.lang||og}`.toLowerCase()}getTranslationData(e){var t,i;let o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!=(i=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?i:"",a=op.get(`${r}-${s}`),c=op.get(r);return{locale:o,language:r,region:s,primary:a,secondary:c}}exists(e,t){var i;let{primary:o,secondary:s}=this.getTranslationData(null!=(i=t.lang)?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!s&&!!s[e]||!!t.includeFallback&&!!r&&!!r[e]}term(e,...t){let i,{primary:o,secondary:s}=this.getTranslationData(this.lang());if(o&&o[e])i=o[e];else if(s&&s[e])i=s[e];else{if(!r||!r[e])return String(e);i=r[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var ov={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};of(ov);var oy=class extends LocalizeController{};of(ov);var o_=P`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ow=Object.defineProperty,ox=Object.defineProperties,ok=Object.getOwnPropertyDescriptor,oC=Object.getOwnPropertyDescriptors,o$=Object.getOwnPropertySymbols,oS=Object.prototype.hasOwnProperty,oE=Object.prototype.propertyIsEnumerable,oA=e=>{throw TypeError(e)},oz=(e,t,i)=>t in e?ow(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,oI=(e,t)=>{for(var i in t||(t={}))oS.call(t,i)&&oz(e,i,t[i]);if(o$)for(var i of o$(t))oE.call(t,i)&&oz(e,i,t[i]);return e},oP=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ok(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ow(t,i,s),s},oO=(e,t,i)=>t.has(e)||oA("Cannot "+i),oD=class extends lit_element_i{constructor(){let e;super(),(e=f).has(this)?oA("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,oI({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch(o){customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",s=r;if("version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),r&&s&&r===s)return}attributeChangedCallback(e,t,i){let o,r;if(oO(this,o=f,"read from private field"),r?!r.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),oO(this,e=f,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};f=new WeakMap,oD.version="2.20.1",oD.dependencies={},oP([eD()],oD.prototype,"dir",2),oP([eD()],oD.prototype,"lang",2);let oL=Math.min,oR=Math.max,oM=Math.round,oT=Math.floor,oB=e=>({x:e,y:e}),oF={left:"right",right:"left",bottom:"top",top:"bottom"},oN={start:"end",end:"start"};function oq(e,t){return"function"==typeof e?e(t):e}function oV(e){return e.split("-")[0]}function oU(e){return e.split("-")[1]}function oj(e){return"x"===e?"y":"x"}function oH(e){return"y"===e?"height":"width"}let oW=new Set(["top","bottom"]);function oG(e){return oW.has(oV(e))?"y":"x"}function oK(e){return e.replace(/start|end/g,e=>oN[e])}let oZ=["left","right"],oJ=["right","left"],oY=["top","bottom"],oX=["bottom","top"];function oQ(e){return e.replace(/left|right|bottom|top/g,e=>oF[e])}function o0(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function o1(e){let{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function o2(e,t,i){let o,{reference:r,floating:s}=e,a=oG(t),c=oj(oG(t)),h=oH(c),p=oV(t),u="y"===a,g=r.x+r.width/2-s.width/2,m=r.y+r.height/2-s.height/2,f=r[h]/2-s[h]/2;switch(p){case"top":o={x:g,y:r.y-s.height};break;case"bottom":o={x:g,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:m};break;case"left":o={x:r.x-s.width,y:m};break;default:o={x:r.x,y:r.y}}switch(oU(t)){case"start":o[c]-=f*(i&&u?-1:1);break;case"end":o[c]+=f*(i&&u?-1:1)}return o}let o5=async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,c=s.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:g}=o2(p,o,h),m=o,f={},b=0;for(let i=0;i<c.length;i++){let{name:s,fn:v}=c[i],{x:_,y:w,data:x,reset:C}=await v({x:u,y:g,initialPlacement:o,placement:m,strategy:r,middlewareData:f,rects:p,platform:a,elements:{reference:e,floating:t}});u=null!=_?_:u,g=null!=w?w:g,f={...f,[s]:{...f[s],...x}},C&&b<=50&&(b++,"object"==typeof C&&(C.placement&&(m=C.placement),C.rects&&(p=!0===C.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):C.rects),{x:u,y:g}=o2(p,m,h)),i=-1)}return{x:u,y:g,placement:m,strategy:r,middlewareData:f}};async function o8(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:m=!1,padding:f=0}=oq(t,e),b=o0(f),v=c[m?"floating"===g?"reference":"floating":g],_=o1(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(v)))||i?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),w="floating"===g?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,x=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),C=await (null==s.isElement?void 0:s.isElement(x))&&await (null==s.getScale?void 0:s.getScale(x))||{x:1,y:1},$=o1(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:x,strategy:h}):w);return{top:(_.top-$.top+b.top)/C.y,bottom:($.bottom-_.bottom+b.bottom)/C.y,left:(_.left-$.left+b.left)/C.x,right:($.right-_.right+b.right)/C.x}}let o3=new Set(["left","top"]);async function o6(e,t){let{placement:i,platform:o,elements:r}=e,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=oV(i),c=oU(i),h="y"===oG(i),p=o3.has(a)?-1:1,u=s&&h?-1:1,g=oq(t,e),{mainAxis:m,crossAxis:f,alignmentAxis:b}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof b&&(f="end"===c?-1*b:b),h?{x:f*u,y:m*p}:{x:m*p,y:f*u}}function o7(){return"undefined"!=typeof window}function o4(e){return rt(e)?(e.nodeName||"").toLowerCase():"#document"}function o9(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function re(e){var t;return null==(t=(rt(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rt(e){return!!o7()&&(e instanceof Node||e instanceof o9(e).Node)}function ri(e){return!!o7()&&(e instanceof Element||e instanceof o9(e).Element)}function ro(e){return!!o7()&&(e instanceof HTMLElement||e instanceof o9(e).HTMLElement)}function rr(e){return!!o7()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof o9(e).ShadowRoot)}let rs=new Set(["inline","contents"]);function rn(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=rb(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!rs.has(r)}let ra=new Set(["table","td","th"]),rl=[":popover-open",":modal"];function rc(e){return rl.some(t=>{try{return e.matches(t)}catch{return!1}})}let rh=["transform","translate","scale","rotate","perspective"],rd=["transform","translate","scale","rotate","perspective","filter"],rp=["paint","layout","strict","content"];function ru(e){let t=rg(),i=ri(e)?rb(e):e;return rh.some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||rd.some(e=>(i.willChange||"").includes(e))||rp.some(e=>(i.contain||"").includes(e))}function rg(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let rm=new Set(["html","body","#document"]);function rf(e){return rm.has(o4(e))}function rb(e){return o9(e).getComputedStyle(e)}function rv(e){return ri(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ry(e){if("html"===o4(e))return e;let t=e.assignedSlot||e.parentNode||rr(e)&&e.host||re(e);return rr(t)?t.host:t}function r_(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);let r=function e(t){let i=ry(t);return rf(i)?t.ownerDocument?t.ownerDocument.body:t.body:ro(i)&&rn(i)?i:e(i)}(e),s=r===(null==(o=e.ownerDocument)?void 0:o.body),a=o9(r);if(s){let e=rw(a);return t.concat(a,a.visualViewport||[],rn(r)?r:[],e&&i?r_(e):[])}return t.concat(r,r_(r,[],i))}function rw(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rx(e){let t=rb(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=ro(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,c=oM(i)!==s||oM(o)!==a;return c&&(i=s,o=a),{width:i,height:o,$:c}}function rk(e){return ri(e)?e:e.contextElement}function rC(e){let t=rk(e);if(!ro(t))return oB(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:s}=rx(t),a=(s?oM(i.width):i.width)/o,c=(s?oM(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let r$=oB(0);function rS(e){let t=o9(e);return rg()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:r$}function rE(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=rk(e),c=oB(1);t&&(o?ri(o)&&(c=rC(o)):c=rC(e));let h=(void 0===(r=i)&&(r=!1),o&&(!r||o===o9(a))&&r)?rS(a):oB(0),p=(s.left+h.x)/c.x,u=(s.top+h.y)/c.y,g=s.width/c.x,m=s.height/c.y;if(a){let e=o9(a),t=o&&ri(o)?o9(o):o,i=e,r=rw(i);for(;r&&o&&t!==i;){let e=rC(r),t=r.getBoundingClientRect(),o=rb(r),s=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,m*=e.y,p+=s,u+=a,r=rw(i=o9(r))}}return o1({width:g,height:m,x:p,y:u})}function rA(e,t){let i=rv(e).scrollLeft;return t?t.left+i:rE(re(e)).left+i}function rz(e,t){let i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-rA(e,i),y:i.top+t.scrollTop}}let rI=new Set(["absolute","fixed"]);function rP(e,t,i){var o;let r;if("viewport"===t)r=function(e,t){let i=o9(e),o=re(e),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,c=0,h=0;if(r){s=r.width,a=r.height;let e=rg();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,h=r.offsetTop)}let p=rA(o);if(p<=0){let e=o.ownerDocument,t=e.body,i=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-r);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,i);else if("document"===t){let t,i,s,a,c,h,p;o=re(e),t=re(o),i=rv(o),s=o.ownerDocument.body,a=oR(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=oR(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-i.scrollLeft+rA(o),p=-i.scrollTop,"rtl"===rb(s).direction&&(h+=oR(t.clientWidth,s.clientWidth)-a),r={width:a,height:c,x:h,y:p}}else if(ri(t)){let e,o,s,a,c,h;o=(e=rE(t,!0,"fixed"===i)).top+t.clientTop,s=e.left+t.clientLeft,a=ro(t)?rC(t):oB(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,r={width:c,height:h,x:s*a.x,y:o*a.y}}else{let i=rS(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return o1(r)}function rO(e){return"static"===rb(e).position}function rD(e,t){if(!ro(e)||"fixed"===rb(e).position)return null;if(t)return t(e);let i=e.offsetParent;return re(e)===i&&(i=i.ownerDocument.body),i}function rL(e,t){var i;let o=o9(e);if(rc(e))return o;if(!ro(e)){let t=ry(e);for(;t&&!rf(t);){if(ri(t)&&!rO(t))return t;t=ry(t)}return o}let r=rD(e,t);for(;r&&(i=r,ra.has(o4(i)))&&rO(r);)r=rD(r,t);return r&&rf(r)&&rO(r)&&!ru(r)?o:r||function(e){let t=ry(e);for(;ro(t)&&!rf(t);){if(ru(t))return t;if(rc(t))break;t=ry(t)}return null}(e)||o}let rR=async function(e){let t=this.getOffsetParent||rL,i=this.getDimensions,o=await i(e.floating);return{reference:function(e,t,i){let o=ro(t),r=re(t),s="fixed"===i,a=rE(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=oB(0);if(o||!o&&!s)if(("body"!==o4(t)||rn(r))&&(c=rv(t)),o){let e=rE(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else r&&(h.x=rA(r));s&&!o&&r&&(h.x=rA(r));let p=!r||o||s?oB(0):rz(r,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},rM={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e,s="fixed"===r,a=re(o),c=!!t&&rc(t.floating);if(o===a||c&&s)return i;let h={scrollLeft:0,scrollTop:0},p=oB(1),u=oB(0),g=ro(o);if((g||!g&&!s)&&(("body"!==o4(o)||rn(a))&&(h=rv(o)),ro(o))){let e=rE(o);p=rC(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}let m=!a||g||s?oB(0):rz(a,h);return{width:i.width*p.x,height:i.height*p.y,x:i.x*p.x-h.scrollLeft*p.x+u.x+m.x,y:i.y*p.y-h.scrollTop*p.y+u.y+m.y}},getDocumentElement:re,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,s=[..."clippingAncestors"===i?rc(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let o=r_(e,[],!1).filter(e=>ri(e)&&"body"!==o4(e)),r=null,s="fixed"===rb(e).position,a=s?ry(e):e;for(;ri(a)&&!rf(a);){let t=rb(a),i=ru(a);i||"fixed"!==t.position||(r=null),(s?!i&&!r:!i&&"static"===t.position&&!!r&&rI.has(r.position)||rn(a)&&!i&&function e(t,i){let o=ry(t);return!(o===i||!ri(o)||rf(o))&&("fixed"===rb(o).position||e(o,i))}(e,a))?o=o.filter(e=>e!==a):r=t,a=ry(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=s[0],c=s.reduce((e,i)=>{let o=rP(t,i,r);return e.top=oR(o.top,e.top),e.right=oL(o.right,e.right),e.bottom=oL(o.bottom,e.bottom),e.left=oR(o.left,e.left),e},rP(t,a,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:rL,getElementRects:rR,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=rx(e);return{width:t,height:i}},getScale:rC,isElement:ri,isRTL:function(e){return"rtl"===rb(e).direction}};function rT(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let rB=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;let r,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=oq(e,t),m=await o8(t,g),f=oV(a),b=oU(a),v="y"===oG(a),{width:_,height:w}=c.floating;"top"===f||"bottom"===f?(r=f,s=b===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=f,r="end"===b?"top":"bottom");let x=w-m.top-m.bottom,C=_-m.left-m.right,$=oL(w-m[r],x),S=oL(_-m[s],C),E=!t.middlewareData.shift,A=$,P=S;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(P=C),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(A=x),E&&!b){let e=oR(m.left,0),t=oR(m.right,0),i=oR(m.top,0),o=oR(m.bottom,0);v?P=_-2*(0!==e||0!==t?e+t:oR(m.left,m.right)):A=w-2*(0!==i||0!==o?i+o:oR(m.top,m.bottom))}await u({...t,availableWidth:P,availableHeight:A});let O=await h.getDimensions(p.floating);return _!==O.width||w!==O.height?{reset:{rects:!0}}:{}}}},rF=eT(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return ew}});function rN(e){var t=e;for(let e=t;e;e=rq(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=rq(t);e;e=rq(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||ru(t)||"BODY"===e.tagName))return e}return null}function rq(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var rV=class extends oD{constructor(){super(...arguments),this.localize=new oy(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,a=0,c=0,h=0,p=0,u=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=rk(e),g=s||a?[...u?r_(u):[],...r_(t)]:[];g.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let m=u&&h?function(e,t){let i,o=null,r=re(e);function s(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:u,top:g,width:m,height:f}=p;if(c||t(),!m||!f)return;let b={rootMargin:-oT(g)+"px "+-oT(r.clientWidth-(u+m))+"px "+-oT(r.clientHeight-(g+f))+"px "+-oT(u)+"px",threshold:oR(0,oL(1,h))||1},v=!0;function _(t){let o=t[0].intersectionRatio;if(o!==h){if(!v)return a();o?a(!1,o):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||rT(p,e.getBoundingClientRect())||a(),v=!1}try{o=new IntersectionObserver(_,{...b,root:r.ownerDocument})}catch{o=new IntersectionObserver(_,b)}o.observe(e)}(!0),s}(u,i):null,f=-1,b=null;c&&(b=new ResizeObserver(e=>{let[o]=e;o&&o.target===u&&b&&(b.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null==(e=b)||e.observe(t)})),i()}),u&&!p&&b.observe(u),b.observe(t));let v=p?rE(e):null;return p&&function t(){let o=rE(e);v&&!rT(v,o)&&i(),v=o,r=requestAnimationFrame(t)}(),i(),()=>{var e;g.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==m||m(),null==(e=b)||e.disconnect(),b=null,p&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i,o,r,s;let a,c,h,p;if(!this.active||!this.anchorEl)return;let u=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,o;let{x:r,y:s,placement:a,middlewareData:c}=t,h=await o6(t,e);return a===(null==(i=c.offset)?void 0:i.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?u.push(rB({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&u.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,o,r,s,a,c,h,p;let u,g,m,{placement:f,middlewareData:b,rects:v,initialPlacement:_,platform:w,elements:x}=e,{mainAxis:C=!0,crossAxis:$=!0,fallbackPlacements:S,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:P=!0,...O}=oq(t,e);if(null!=(i=b.arrow)&&i.alignmentOffset)return{};let D=oV(f),T=oG(_),B=oV(_)===_,F=await (null==w.isRTL?void 0:w.isRTL(x.floating)),q=S||(B||!P?[oQ(_)]:(u=oQ(_),[oK(_),u,oK(u)])),V="none"!==A;!S&&V&&q.push(...(g=oU(_),m=function(e,t,i){switch(e){case"top":case"bottom":if(i)return t?oJ:oZ;return t?oZ:oJ;case"left":case"right":return t?oY:oX;default:return[]}}(oV(_),"start"===A,F),g&&(m=m.map(e=>e+"-"+g),P&&(m=m.concat(m.map(oK)))),m));let U=[_,...q],j=await o8(e,O),W=[],G=(null==(o=b.flip)?void 0:o.overflows)||[];if(C&&W.push(j[D]),$){let e,t,i,o,r=(c=f,h=v,void 0===(p=F)&&(p=!1),e=oU(c),i=oH(t=oj(oG(c))),o="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[i]>h.floating[i]&&(o=oQ(o)),[o,oQ(o)]);W.push(j[r[0]],j[r[1]])}if(G=[...G,{placement:f,overflows:W}],!W.every(e=>e<=0)){let e=((null==(r=b.flip)?void 0:r.index)||0)+1,t=U[e];if(t&&("alignment"!==$||T===oG(t)||G.every(e=>oG(e.placement)!==T||e.overflows[0]>0)))return{data:{index:e,overflows:G},reset:{placement:t}};let i=null==(s=G.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(E){case"bestFit":{let e=null==(a=G.filter(e=>{if(V){let t=oG(e.placement);return t===T||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(i=e);break}case"initialPlacement":i=_}if(f!==i)return{reset:{placement:i}}}return{}}}),this.shift&&u.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...h}=oq(i,e),p={x:t,y:o},u=await o8(e,h),g=oG(oV(r)),m=oj(g),f=p[m],b=p[g];if(s){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",i=f+u[e],o=f-u[t];f=oR(i,oL(f,o))}if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",i=b+u[e],o=b-u[t];b=oR(i,oL(b,o))}let v=c.fn({...e,[m]:f,[g]:b});return{...v,data:{x:v.x-t,y:v.y-o,enabled:{[m]:s,[g]:a}}}}}),this.autoSize?u.push(rB({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&u.push({name:"arrow",options:a={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:i,placement:o,rects:r,platform:s,elements:c,middlewareData:h}=e,{element:p,padding:u=0}=oq(a,e)||{};if(null==p)return{};let g=o0(u),m={x:t,y:i},f=oj(oG(o)),b=oH(f),v=await s.getDimensions(p),_="y"===f,w=_?"clientHeight":"clientWidth",x=r.reference[b]+r.reference[f]-m[f]-r.floating[b],C=m[f]-r.reference[f],$=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),S=$?$[w]:0;S&&await (null==s.isElement?void 0:s.isElement($))||(S=c.floating[w]||r.floating[b]);let E=S/2-v[b]/2-1,A=oL(g[_?"top":"left"],E),P=oL(g[_?"bottom":"right"],E),O=S-v[b]-P,D=S/2-v[b]/2+(x/2-C/2),T=oR(A,oL(D,O)),B=!h.arrow&&null!=oU(o)&&D!==T&&r.reference[b]/2-(D<A?A:P)-v[b]/2<0,F=B?D<A?D-A:D-O:0;return{[f]:m[f]+F,data:{[f]:T,centerOffset:D-T-F,...B&&{alignmentOffset:F}},reset:B}}});let g="absolute"===this.strategy?e=>rM.getOffsetParent(e,rN):rM.getOffsetParent;(o=this.anchorEl,r=this.popup,s={placement:this.placement,middleware:u,strategy:this.strategy,platform:ox(oI({},rM),oC({getOffsetParent:g}))},c=new Map,p={...(h={platform:rM,...s}).platform,_c:c},o5(o,r,{...h,platform:p})).then(({x:e,y:t,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",h=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,h=r?i:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ev`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${rF({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${rF({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ev`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};rV.styles=[o_,oh],oP([eM(".popup")],rV.prototype,"popup",2),oP([eM(".popup__arrow")],rV.prototype,"arrowEl",2),oP([eD()],rV.prototype,"anchor",2),oP([eD({type:Boolean,reflect:!0})],rV.prototype,"active",2),oP([eD({reflect:!0})],rV.prototype,"placement",2),oP([eD({reflect:!0})],rV.prototype,"strategy",2),oP([eD({type:Number})],rV.prototype,"distance",2),oP([eD({type:Number})],rV.prototype,"skidding",2),oP([eD({type:Boolean})],rV.prototype,"arrow",2),oP([eD({attribute:"arrow-placement"})],rV.prototype,"arrowPlacement",2),oP([eD({attribute:"arrow-padding",type:Number})],rV.prototype,"arrowPadding",2),oP([eD({type:Boolean})],rV.prototype,"flip",2),oP([eD({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],rV.prototype,"flipFallbackPlacements",2),oP([eD({attribute:"flip-fallback-strategy"})],rV.prototype,"flipFallbackStrategy",2),oP([eD({type:Object})],rV.prototype,"flipBoundary",2),oP([eD({attribute:"flip-padding",type:Number})],rV.prototype,"flipPadding",2),oP([eD({type:Boolean})],rV.prototype,"shift",2),oP([eD({type:Object})],rV.prototype,"shiftBoundary",2),oP([eD({attribute:"shift-padding",type:Number})],rV.prototype,"shiftPadding",2),oP([eD({attribute:"auto-size"})],rV.prototype,"autoSize",2),oP([eD()],rV.prototype,"sync",2),oP([eD({type:Object})],rV.prototype,"autoSizeBoundary",2),oP([eD({attribute:"auto-size-padding",type:Number})],rV.prototype,"autoSizePadding",2),oP([eD({attribute:"hover-bridge",type:Boolean})],rV.prototype,"hoverBridge",2),rV.define("sl-popup");var rU=Object.defineProperty,rj=Object.getOwnPropertyDescriptor,rH=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rj(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rU(t,i,s),s};let rW=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=ib(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let i=ib(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of rW.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),rW.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ev`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return rW.closeOthers(this),this.open=!0,rW.openPopovers.add(this),iv(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,rW.openPopovers.delete(this),iv(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};function rG(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}rW.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rW.openPopovers=new Set,rW.styles=[iF,P`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],rH([eM("#popover")],rW.prototype,"body",2),rH([eM("sl-popup")],rW.prototype,"popup",2),rH([eD({reflect:!0})],rW.prototype,"placement",2),rH([eD({type:Object})],rW.prototype,"anchor",2),rH([eD({reflect:!0,type:Boolean})],rW.prototype,"disabled",2),rH([eD({type:Number})],rW.prototype,"distance",2),rH([eD({reflect:!0,type:Boolean})],rW.prototype,"open",2),rH([eD({reflect:!0,type:Boolean})],rW.prototype,"arrow",2),rH([eD({type:Number})],rW.prototype,"skidding",2),rH([eD()],rW.prototype,"trigger",2),rH([eD({type:Boolean})],rW.prototype,"hoist",2),rH([eD({reflect:!0})],rW.prototype,"appearance",2),rH([tw("open",{afterFirstUpdate:!0})],rW.prototype,"handleOpenChange",1),rH([tw(["distance","hoist","placement","skidding"])],rW.prototype,"handleOptionsChange",1),rH([tw("disabled")],rW.prototype,"handleDisabledChange",1),rW=rH([eP("gl-popover")],rW);let rK=P`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;P`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var rZ=new Map,rJ=new WeakMap;function rY(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function rX(e,t){rZ.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function rQ(e,t,i){let o=rJ.get(e);if(null==o?void 0:o[t])return rY(o[t],i.dir);let r=rZ.get(t);return r?rY(r,i.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ex,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ex||null==e)return this._t=void 0,this.it=e;if(e===ew)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let r0=eT(unsafe_html_e);var r1=P`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;function r2(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function r5(e,t,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,ox(oI({},i),oC({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:i.duration})));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function r8(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function r3(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function r6(e,t){let i=oI({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,e)}}}var r7=class extends oD{constructor(){super(),this.localize=new oy(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=r8(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=r8(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await r3(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:i}=rQ(this,"tooltip.show",{dir:this.localize.dir()});await r5(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await r3(this.body);let{keyframes:e,options:i}=rQ(this,"tooltip.hide",{dir:this.localize.dir()});await r5(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,r2(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,r2(this,"sl-after-hide")}render(){return ev`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${rF({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};r7.styles=[o_,r1],r7.dependencies={"sl-popup":rV},oP([eM("slot:not([name])")],r7.prototype,"defaultSlot",2),oP([eM(".tooltip__body")],r7.prototype,"body",2),oP([eM("sl-popup")],r7.prototype,"popup",2),oP([eD()],r7.prototype,"content",2),oP([eD()],r7.prototype,"placement",2),oP([eD({type:Boolean,reflect:!0})],r7.prototype,"disabled",2),oP([eD({type:Number})],r7.prototype,"distance",2),oP([eD({type:Boolean,reflect:!0})],r7.prototype,"open",2),oP([eD({type:Number})],r7.prototype,"skidding",2),oP([eD()],r7.prototype,"trigger",2),oP([eD({type:Boolean})],r7.prototype,"hoist",2),oP([r6("open",{waitUntilFirstUpdate:!0})],r7.prototype,"handleOpenChange",1),oP([r6(["content","distance","hoist","placement","skidding"])],r7.prototype,"handleOptionsChange",1),oP([r6("disabled")],r7.prototype,"handleDisabledChange",1),rX("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),rX("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),r7.define("sl-tooltip");var r4=Object.defineProperty,r9=Object.getOwnPropertyDescriptor,se=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?r9(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&r4(t,i,s),s};rX("tooltip.show",null),rX("tooltip.hide",null);let st=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return ev`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??ex}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?r0(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};st.styles=P`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: var(--gl-tooltip-show-delay, 500ms);
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,se([eD()],st.prototype,"content",2),se([eD({reflect:!0})],st.prototype,"placement",2),se([eD({type:Boolean})],st.prototype,"disabled",2),se([eD({type:Number})],st.prototype,"distance",2),se([eD({type:Boolean,attribute:"hide-on-click"})],st.prototype,"hideOnClick",2),se([eD({type:Boolean})],st.prototype,"hoist",2),se([eL()],st.prototype,"suppressed",2),st=se([eP("gl-tooltip")],st);var si=Object.defineProperty,so=Object.getOwnPropertyDescriptor,sr=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?so(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&si(t,i,s),s};let ss=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ev`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ex}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ev`<gl-tooltip placement=${this.tooltipPlacement??ex}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ev`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??ex}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ev`<button
			class="control"
			role=${this.role??ex}
			aria-checked=${this.ariaChecked??ex}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};ss.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ss.styles=[iB,P`
			:host {
				/* Base color variables - can be overridden by variant */
				--button-foreground: var(--vscode-button-foreground);
				--button-background: var(--vscode-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-border: var(--vscode-button-border, transparent);

				/* Layout variables */
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${iT}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			/* Variant property for semantic states - appearance controls structure, variant controls color */

			/* Solid buttons (default and secondary) with variants get full color treatment */
			:host([variant='danger']) {
				--button-foreground: var(--vscode-errorForeground, #f48771);
				--button-background: var(--vscode-inputValidation-errorBackground, #5a1d1d);
				--button-hover-background: color-mix(
					in srgb,
					#000 30%,
					var(--vscode-inputValidation-errorBorder, #be1100)
				);
				--button-border: var(--vscode-inputValidation-errorBorder, #be1100);
			}

			:host([variant='warning']) {
				--button-foreground: #fff;
				--button-background: var(
					--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
					#cc6600
				);
				--button-hover-background: color-mix(
					in srgb,
					#000 20%,
					var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor, #cc6600)
				);
				--button-border: var(
					--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
					#cc6600
				);
			}

			:host([variant='success']) {
				--button-foreground: #fff;
				--button-background: color-mix(in srgb, #000 40%, var(--vscode-testing-iconPassed, #73c991));
				--button-hover-background: color-mix(in srgb, #000 30%, var(--vscode-testing-iconPassed, #73c991));
				--button-border: color-mix(in srgb, #000 40%, var(--vscode-testing-iconPassed, #73c991));
			}

			/* Transparent appearances (toolbar, input, alert) with variants only change foreground color */
			/* These come after the main variant rules to override background/border back to transparent */
			:host([appearance='toolbar'][variant='danger']),
			:host([appearance='input'][variant='danger']),
			:host([appearance='alert'][variant='danger']) {
				--button-foreground: var(--vscode-errorForeground, #f48771);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='toolbar'][variant='warning']),
			:host([appearance='input'][variant='warning']),
			:host([appearance='alert'][variant='warning']) {
				--button-foreground: var(
					--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
					#cc6600
				);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='toolbar'][variant='success']),
			:host([appearance='input'][variant='success']),
			:host([appearance='alert'][variant='success']) {
				--button-foreground: var(--vscode-testing-iconPassed, #73c991);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],sr([eM(".control")],ss.prototype,"control",2),sr([eD({reflect:!0})],ss.prototype,"appearance",2),sr([eD({reflect:!0})],ss.prototype,"variant",2),sr([eD({type:Boolean,reflect:!0})],ss.prototype,"disabled",2),sr([eD({reflect:!0})],ss.prototype,"density",2),sr([eD({type:Boolean,reflect:!0})],ss.prototype,"full",2),sr([eD()],ss.prototype,"href",2),sr([eD()],ss.prototype,"tooltip",2),sr([eD()],ss.prototype,"tooltipPlacement",2),sr([eD({type:Boolean,reflect:!0})],ss.prototype,"truncate",2),ss=sr([eP("gl-button")],ss);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let sn=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!sn(e))??ew}update(e,t){let i=this._$Cbt,o=i.length;this._$Cbt=t;let r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!sn(a))return this._$Cwt=e,a;e<o&&a===i[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=r.deref();if(void 0!==t){let i=t._$Cbt.indexOf(a);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return ew}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let sa=eT(until_c);var sl=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,sh=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sc(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sl(t,i,s),s};let sd=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ev`${sa(this.promoPromise?.then(e=>this.renderPromo(e)),ex)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ev`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ev`<p class="promo" part="text">${r0(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ev`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ex}"
						>${r0(t.link.html)}</a
					>`}return this.hasPromo=!1,ex}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),rG(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};sd.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sd.styles=[P`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${iM}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],sh([eM('a,button,[tabindex="0"]')],sd.prototype,"_focusable",2),sh([eD({type:Object})],sd.prototype,"promoPromise",2),sh([eD({type:Object})],sd.prototype,"source",2),sh([eD({reflect:!0,type:String})],sd.prototype,"type",2),sh([eD({type:Boolean,reflect:!0,attribute:"has-promo"})],sd.prototype,"hasPromo",1),sd=sh([eP("gl-promo")],sd);var sp=Object.defineProperty,su=Object.getOwnPropertyDescriptor,sg=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?su(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sp(t,i,s),s};let sm=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case ot.VerificationRequired:return ev`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${rG("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${rG("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case ot.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let i=(new Date(t[t.length-1].expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&i>0&&i<24?"active":"expired"}(this.featurePreview))return ev`${this.renderFeaturePreview(this.featurePreview)}`;return ev`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${eH.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${rG("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${rG("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${eZ("day",14)} of
						<a href="${eH.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case ot.TrialExpired:return ev`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${eH.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${rG("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case ot.TrialReactivationEligible:return ev`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${rG("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${eZ("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,i=e.usages.length;return 0===i?ev`<slot name="feature"></slot>
				<gl-button appearance="${t??ex}" href="${this.featurePreviewCommandLink??ex}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
					repos, or
					<a href="${rG("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ev`<br />`:""} For full access to all GitLens Pro features,
					<a href="${rG("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ev`
			${this.renderFeaturePreviewStep(e,i)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??ex}"
					href="${this.featurePreviewCommandLink??ex}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${rG("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${eZ("day",3-i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
				repos.<br />
				${"alert"!==t?ev`<br />`:""} For full access to all GitLens Pro features,
				<a href="${rG("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ev`<slot name="feature"></slot>`;switch(t){case 1:return ev`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-commit-search.webp"
									style="width:100%"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return ev`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-minimap.webp"
									style="width:100%"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return ev`<slot name="feature"></slot>`}}renderPromo(){return ev`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};sm.styles=[P`
			:host {
				--gk-action-radius: 0.3rem;

				--link-foreground: var(--vscode-textLink-foreground);
				--link-foreground-active: var(--vscode-textLink-activeForeground);
			}

			:host([appearance='alert']) {
				--link-decoration-default: underline;
				--link-foreground: color-mix(in srgb, var(--section-foreground) 50%, var(--vscode-textLink-foreground));
				--link-foreground-active: color-mix(
					in srgb,
					var(--section-foreground) 50%,
					var(--vscode-textLink-activeForeground)
				);
			}

			:host([appearance='default']) gl-button:only-child {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='default']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`,rK],sg([eM("gl-button")],sm.prototype,"button",2),sg([eD()],sm.prototype,"appearance",2),sg([eD({type:Object})],sm.prototype,"featurePreview",2),sg([eD()],sm.prototype,"featurePreviewCommandLink",2),sg([eD()],sm.prototype,"featureRestriction",2),sg([eD()],sm.prototype,"featureWithArticleIfNeeded",2),sg([tv({context:"promos"})],sm.prototype,"promos",2),sg([eD({type:Object})],sm.prototype,"source",2),sg([eD({attribute:!1,type:Number})],sm.prototype,"state",2),sg([eD()],sm.prototype,"webroot",2),sm=sg([eP("gl-feature-gate-plus-state")],sm);var sf=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,sv=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?sb(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&sf(t,i,s),s};let sy=class extends lit_element_i{constructor(){super(...arguments),this.compact=!1,this.stale=!1,this._loading=!1,this._loaded=!1}get isLoading(){return this._loading}get hasConflicts(){return null!=this._conflicts&&this._conflicts.files.length>0}connectedCallback(){super.connectedCallback?.(),this.fetchConflicts()}willUpdate(e){if(super.willUpdate(e),e.has("_state")){let t=e.get("_state"),i=oi(t?.subscription?.state),o=oi(this._state?.subscription?.state);i||!o||this._loaded||this._loading||this.fetchConflicts()}}async fetchConflicts(){if(this.branch&&this.onto&&!this._loading&&!this._loaded){this._loading=!0,this.requestUpdate();try{let e=await this._ipc.sendRequest(tp,{branch:this.branch,onto:this.onto});this._conflicts=e.conflicts,this._loaded=!0}catch(e){this._loaded=!0}finally{this._loading=!1,this.requestUpdate()}}}render(){return this._loading?this.renderLoading():oi(this._state?.subscription?.state)?this._conflicts?this.renderConflicts():this.renderClean():this.renderUpgrade()}renderLoading(){return ev`
			<div class="indicator indicator--loading">
				<code-icon class="indicator__icon" icon="loading~spin" size="16"></code-icon>
				${this.compact?ex:ev`<span class="indicator__content">Checking for conflicts...</span>`}
			</div>
		`}renderClean(){let e=this.stale?"indicator--stale":"";return this.compact?ev`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--clean ${e}" tabindex="0">
						<code-icon class="indicator__icon" icon="pass" size="16"></code-icon>
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">No Conflicts Detected</p>
							<p class="popover__message">This rebase should complete without conflicts.</p>
							${this.stale?ev`<p class="popover__message popover__message--warning">
										Detection may be stale. Rebase plan was modified after conflict check.
									</p>`:ex}
						</div>
					</div>
				</gl-popover>
			`:ev`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--clean ${e}" tabindex="0">
					<code-icon class="indicator__icon" icon="pass" size="16"></code-icon>
					<span class="indicator__content"
						>${this.stale?"No Conflicts Detected (may be stale)":"No Conflicts Detected"}</span
					>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">No Conflicts Detected</p>
						<p class="popover__message">This rebase should complete without conflicts.</p>
						${this.stale?ev`<p class="popover__message popover__message--warning">
									Detection may be stale. Rebase plan was modified after conflict check.
								</p>`:ex}
					</div>
				</div>
			</gl-popover>
		`}renderConflicts(){if(!this._conflicts)return ex;let e=this.stale?"indicator--stale":"",t=this._conflicts.files.length;return this.compact?ev`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--conflict ${e}" tabindex="0">
						<code-icon class="indicator__icon" icon="warning" size="16"></code-icon>
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">Potential Conflicts Detected</p>
							<p class="popover__message">
								This rebase will cause conflicts in ${eZ("file",this._conflicts.files.length)}:
							</p>
							<ul class="popover__files scrollable">
								${this._conflicts.files.map(e=>ev`<li class="popover__file">${e.path}</li>`)}
							</ul>
							${this.stale?ev`<p class="popover__message popover__message--warning">
										Detection may be stale. Rebase plan was modified after conflict check.
									</p>`:ex}
						</div>
					</div>
				</gl-popover>
			`:ev`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--conflict ${e}" tabindex="0">
					<code-icon class="indicator__icon" icon="warning" size="16"></code-icon>
					<span class="indicator__content"
						>${t} Conflict${1===t?"":"s"}
						Detected${this.stale?" (may be stale)":""}</span
					>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">Potential Conflicts Detected</p>
						<p class="popover__message">
							This rebase will cause conflicts in ${eZ("file",this._conflicts.files.length)}:
						</p>
						<ul class="popover__files scrollable">
							${this._conflicts.files.map(e=>ev`<li class="popover__file">${e.path}</li>`)}
						</ul>
						${this.stale?ev`<p class="popover__message popover__message--warning">
									Detection may be stale. Rebase plan was modified after conflict check.
								</p>`:ex}
					</div>
				</div>
			</gl-popover>
		`}renderUpgrade(){let e=this.compact?"top":"bottom";return ev`
			<gl-popover placement="${e}" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--upgrade" tabindex="0">
					<code-icon class="indicator__icon" icon="lock" size="16"></code-icon>
					${this.compact?ex:ev`<span class="indicator__content">Conflict Detection (Pro)</span>`}
				</div>
				<gl-feature-gate-plus-state
					slot="content"
					appearance="default"
					featureRestriction="all"
					.source=${{source:"rebaseEditor",detail:"conflict-detection"}}
					.state=${this._state?.subscription?.state}
				>
					<p slot="feature">
						Detect potential conflicts before starting your rebase and take action to resolve them.
					</p>
				</gl-feature-gate-plus-state>
			</gl-popover>
		`}};sy.styles=[iB,iF,P`
			:host {
				display: inline-block;
			}

			gl-popover {
				--max-width: 80vw;
			}

			.indicator {
				position: relative;
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				cursor: pointer;
			}

			/* Compact mode (icon only) */
			:host([compact]) .indicator {
				gap: 0;
			}

			:host([compact]) .indicator__content {
				display: none;
			}

			/* Button mode (full) */
			:host(:not([compact])) .indicator {
				padding: 0.4rem 0.8rem;
				border-radius: 0.3rem;
				background-color: var(--vscode-button-secondaryBackground);
				border: 1px solid var(--vscode-button-secondaryBorder, transparent);
				font-size: 1.2rem;
			}

			.indicator__icon {
				flex: none;
				font-size: 1.6rem;
			}

			.indicator__content {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				font-weight: 500;
			}

			/* Clean state - green */
			.indicator--clean {
				background-color: color-mix(in srgb, var(--vscode-testing-iconPassed) 18%, transparent) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-testing-iconPassed) 50%, transparent) !important;
				color: var(--vscode-foreground);
			}

			.indicator--clean .indicator__icon {
				color: var(--vscode-testing-iconPassed);
			}

			/* Conflict state - warning/orange */
			.indicator--conflict {
				background-color: color-mix(
					in srgb,
					var(--vscode-editorWarning-foreground) 18%,
					transparent
				) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-editorWarning-foreground) 50%, transparent) !important;
				color: var(--vscode-foreground);
			}

			.indicator--conflict .indicator__icon {
				color: var(--vscode-editorWarning-foreground);
			}

			.indicator--upgrade .indicator__icon {
				color: var(--vscode-foreground);
				opacity: 0.6;
			}

			.indicator--stale {
				opacity: 0.6;
			}

			/* Popover content styles */
			.popover {
				padding: 1.2rem;
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.popover__title {
				font-weight: 600;
				margin: 0;
			}

			.popover__message {
				margin: 0;
			}

			.popover__message--warning {
				color: var(--vscode-editorWarning-foreground);
				font-weight: 500;
			}

			.popover__files {
				margin: 0;
				padding: 0.4rem 0.8rem;
				list-style: none;
				max-height: 20rem;
				overflow-y: auto;
				background: var(--vscode-sideBar-background);
			}

			.popover__file {
				padding: 0.4rem 0;
				font-family: var(--vscode-editor-font-family);
				font-size: 1.1rem;
			}

			gl-feature-gate-plus-state {
				display: block;
				margin-inline: 0.5rem;
				margin-block: -0.5rem;
			}
		`],sv([tv({context:"ipc"})],sy.prototype,"_ipc",2),sv([tv({context:"state",subscribe:!0}),eL()],sy.prototype,"_state",2),sv([eD({type:String})],sy.prototype,"branch",2),sv([eD({type:String})],sy.prototype,"onto",2),sv([eD({type:Boolean})],sy.prototype,"compact",2),sv([eD({type:Boolean})],sy.prototype,"stale",2),sv([eL()],sy.prototype,"_conflicts",2),sv([eL()],sy.prototype,"_loading",2),sv([eL()],sy.prototype,"_loaded",2),sy=sv([eP("gl-rebase-conflict-indicator")],sy);let s_=new Set(["pick","reword","edit","squash","fixup","drop"]),sw=P`
	:host {
		/* Dark theme action colors */
		--action-edit-color: hsl(120, 100%, 30%);
		--action-edit-bg: hsl(120, 100%, 10%);

		--action-squash-color: hsl(38, 100%, 42%);
		--action-squash-bg: hsl(38, 100%, 10%);

		--action-drop-color: hsl(0, 100%, 40%);
		--action-drop-bg: hsl(0, 100%, 10%);

		/* Muted text intensity */
		--fg-muted-intensity: 60%;

		--muted-opacity: 0.4;

		display: block;
		width: 100%;
		box-sizing: border-box;
		cursor: grab;

		&:hover {
			z-index: 100;
		}
	}

	/* Light theme overrides */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		/* Brighter, more saturated colors for visibility on light backgrounds */
		--action-edit-color: hsl(130, 100%, 32%);
		--action-edit-bg: hsl(120, 70%, 78%);

		--action-squash-color: hsl(46, 100%, 46%);
		--action-squash-bg: hsl(55, 85%, 70%);

		--action-drop-color: hsl(355, 100%, 40%);
		--action-drop-bg: hsl(355, 80%, 82%);

		--fg-muted-intensity: 70%;
	}

	/* Z-index management for overlays */
	:host:has(sl-select[open]),
	:host:has(gl-tooltip:hover),
	:host:has(gl-tooltip:focus-within),
	:host:has(gl-avatar-list:hover),
	:host:has(gl-avatar-list:focus-within),
	:host:has(gl-popover:hover),
	:host:has(gl-popover:focus-within),
	:host:has(gl-popover[open]),
	:host:has(gl-ref-overflow-chip:hover),
	:host:has(gl-ref-overflow-chip:focus-within) {
		z-index: 1000;
	}

	.entry {
		/*
		 * Two-layer foreground color system:
		 * --fg-color: base color that changes per state (hover/focus/selected)
		 * --fg-intensity: caps brightness, action types can reduce (e.g. drop = 50%)
		 * --fg: computed from both, used for primary text
		 * --fg-muted: derived from --fg for secondary text (date, sha)
		 */
		--fg-color: var(--color-foreground);
		--fg-intensity: 100%;
		--fg: color-mix(in srgb, var(--fg-color) var(--fg-intensity), transparent);
		--fg-muted: color-mix(in srgb, var(--fg) var(--fg-muted-intensity), transparent);

		--action-color: var(--color-foreground--65);
		--action-line-color: var(--color-foreground--65);
		--action-text-decoration: none;

		--entry-bg: var(--color-background);

		--sl-input-background-color: var(--color-background);
		--sl-input-color: var(--color-foreground);
		--sl-input-color-hover: var(--color-foreground);
		--sl-input-color-disabled: var(--color-foreground);

		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		padding-inline: 1rem;
		padding-block: 0.2rem;
		border-radius: 0.3rem;
		box-sizing: border-box;
		color: var(--fg);
		width: 100%;

		&:hover {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));
			--entry-bg: var(--vscode-list-hoverBackground);

			background-color: var(--vscode-list-hoverBackground);
		}

		&:focus,
		&:focus-within {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));

			background-color: var(--vscode-list-focusBackground);
			box-shadow: 0 0 0 1px var(--vscode-list-focusOutline) inset;
			outline: none;
		}

		&.entry--selected {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));
			--entry-bg: var(--vscode-list-activeSelectionBackground);

			background-color: var(--vscode-list-activeSelectionBackground);
		}

		&.entry--first {
			.entry-graph::before {
				inset-block: 50% -0.225rem;
			}
		}

		&.entry--last {
			.entry-graph::before {
				inset-block: -0.225rem 50%;
			}
		}

		/* Done entries - already applied commits */
		&.entry--done {
			--fg-intensity: 50%;
			--action-line-color: var(--color-foreground--50);
			/* Override default transparent action color with opaque muted gray for pick */
			--action-color: color-mix(in srgb, var(--color-foreground) 50%, var(--vscode-editor-background));

			background: var(--vscode-list-inactiveSelectionBackground);
			cursor: default;

			/* Filled circle for done entries */
			.entry-graph::after {
				border-color: transparent;
				background-color: var(--action-color);
			}

			/* Disabled select for done entries */
			.action-select {
				pointer-events: none;
				opacity: 0.6;

				/* Hide chevron for disabled selects */
				code-icon[slot='expand-icon'] {
					display: none;
				}
			}
		}

		/* Current entry - commit being processed (paused) */
		&.entry--current {
			--fg-intensity: 100%;

			background-color: color-mix(in srgb, var(--current-entry-color) 25%, transparent);
			outline: 1px solid color-mix(in srgb, var(--current-entry-color) 50%, transparent);
			outline-offset: -1px;

			.action-select {
				opacity: 1;
			}
		}
	}

	/* Graph node */
	.entry-graph {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex: 0 0 auto;
		width: 16px;
		height: 25px;
		z-index: 2;

		/* circle for commits */
		&::after {
			content: '';
			position: absolute;
			left: 0;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			border: 2px solid var(--action-color);
			background-color: var(--entry-bg);
		}

		/* squircle for commands */
		.entry[data-type='command'] &::after {
			left: -0.2rem;
			width: 16px;
			height: 16px;
			border-radius: 0.4rem;
			z-index: -1;
		}

		/* throughline */
		&::before {
			content: '';
			position: absolute;
			inset-block: -0.225rem;
			width: 0;
			border-right: 2px solid var(--action-line-color);
			z-index: -2;
		}
	}

	/* Action dropdown container */
	.entry-action {
		flex: 0 0 auto;
	}

	/* Done action indicator - shows the completed action text */
	.entry-action--done {
		display: flex;
		align-items: center;
		min-width: 90px;
		padding-left: 0.75rem;
		font-size: 0.9em;
		color: var(--color-foreground--50);
	}

	.action-select {
		color: var(--color-foreground);
		min-width: 90px;

		&::part(combobox) {
			padding: 0 0.75rem;
			outline: none;
		}

		&::part(display-input) {
			field-sizing: content;
		}

		&::part(expand-icon) {
			margin-inline-start: var(--sl-spacing-x-small);
		}

		&::part(listbox) {
			display: flex;
			flex-direction: column;
			gap: 0.1rem;
			padding-block: 0.2rem 0;
			min-width: anchor-size(width, 90px);
			width: max-content;
		}

		sl-option::part(base) {
			padding: 0.2rem 0.4rem;
		}

		sl-option:focus::part(base) {
			background-color: var(--vscode-list-activeSelectionBackground);
			color: var(--vscode-list-activeSelectionForeground);
		}

		sl-option:not(:focus):hover::part(base) {
			background-color: var(--vscode-list-inactiveSelectionBackground);
			color: var(--vscode-list-activeSelectionForeground);
		}

		sl-option::part(checked-icon) {
			display: none;
		}
	}

	/* Message */
	.entry-message {
		flex: 1 1 0;
		align-self: stretch;
		min-width: 0;
		overflow: hidden;
		color: var(--fg);
		text-decoration: var(--action-text-decoration);
	}

	.entry-message-content {
		display: flex;
		align-items: center;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* Update refs */
	.entry-update-refs {
		&:focus,
		&:focus-within {
			outline-color: var(--color-focus-border);
		}

		flex-shrink: 0;
		align-self: center;

		/* Improve chip visibility */
		--vscode-badge-background: var(--vscode-activityBarBadge-background, var(--vscode-badge-background));
		--vscode-badge-foreground: var(--vscode-activityBarBadge-foreground, var(--vscode-badge-foreground));
	}

	/* Avatar */
	.entry-avatar {
		flex: 0 0 auto;
		margin: 0;

		gl-avatar-list& {
			--gl-avatar-size: 2.4rem;
		}
	}

	/* Date */
	.entry-date {
		flex: 0 0 auto;
		margin: 0;
		color: var(--fg-muted);
		text-decoration: var(--action-text-decoration);
	}

	/* SHA */
	.entry-sha {
		flex: 0 0 auto;
		margin: 0;
		color: var(--fg-muted);
		text-decoration: var(--action-text-decoration);

		a {
			color: inherit;
			text-decoration: none;

			&:focus,
			&:focus-visible {
				outline-color: var(--color-focus-border);
			}
		}
	}

	/* ==========================================================================
	   Entry Actions
	   ========================================================================== */

	.entry[data-type='command'] {
		--action-color: var(--color-foreground--50);
		--action-line-color: var(--action-color);

		/* Muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 60%;

		.entry-graph code-icon {
			font-size: 13px;
			color: var(--color-foreground--65);
		}

		.action-select {
			pointer-events: none;

			&::part(combobox) {
				opacity: 0.7;
			}
		}

		.entry-message-content {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.9em;
			font-style: italic;

			code {
				display: inline;
				font-family: var(--vscode-editor-font-family, monospace);
				font-style: normal;
				background-color: var(--vscode-textCodeBlock-background, rgba(128, 128, 128, 0.15));
				padding: 0.15rem 0.5rem;
				border-radius: 3px;
				border: 1px solid var(--color-foreground--10);
			}
		}
	}

	.entry[data-type='base'] {
		--action-color: var(--color-foreground--25);
		--action-line-color: var(--color-foreground--25);

		/* Non-interactive - fixed muted color, doesn't respond to states */
		--fg: var(--color-foreground--65);

		background: var(--vscode-list-inactiveSelectionBackground);
		cursor: default;

		/* Filled circle for base entry - mix with background for opaque fill */
		.entry-graph::after {
			border-color: transparent;
			background-color: color-mix(in srgb, var(--color-foreground) 25%, var(--vscode-editor-background));
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-action='edit'],
	.entry[data-action='reword'] {
		--action-color: var(--action-edit-color);
		--action-line-color: var(--action-edit-color);

		--sl-input-background-color: var(--action-edit-bg);
		--sl-input-border-color: var(--action-edit-color);
		--sl-input-border-color-focus: var(--action-edit-color);
		--sl-input-focus-ring-color: var(--action-edit-color);
	}

	.entry[data-action='fixup'],
	.entry[data-action='squash'] {
		--action-color: var(--action-squash-color);
		--action-line-color: var(--action-squash-color);
		--action-text-decoration: line-through;

		--sl-input-background-color: var(--action-squash-bg);
		--sl-input-border-color: var(--action-squash-color);
		--sl-input-border-color-focus: var(--action-squash-color);
		--sl-input-focus-ring-color: var(--action-squash-color);

		/* Muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 60%;

		/* No circle for squash/fixup */
		.entry-graph::after {
			display: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-action='squash'] {
		.entry-message {
			text-decoration: none;
		}
	}

	.entry[data-action='drop'] {
		--action-color: var(--action-drop-color);
		--action-line-color: var(--action-drop-color);
		--action-text-decoration: line-through;

		--sl-input-background-color: var(--action-drop-bg);
		--sl-input-border-color: var(--action-drop-color);
		--sl-input-border-color-focus: var(--action-drop-color);
		--sl-input-focus-ring-color: var(--action-drop-color);

		/* More muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 45%;

		/* No circle for drop */
		.entry-graph::after {
			display: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-squashing] {
		--action-line-color: var(--action-squash-color);
	}

	.entry[data-squash-target] {
		--action-color: var(--action-squash-color);

		.entry-graph::after {
			border-color: var(--action-squash-color);
		}

		:host-context(.entries.ascending) & .entry-graph::before {
			border-image: linear-gradient(to bottom, var(--action-line-color) 50%, var(--action-squash-color) 50%) 1;
		}

		:host-context(.entries.descending) & .entry-graph::before {
			border-image: linear-gradient(to bottom, var(--action-squash-color) 50%, var(--action-line-color) 50%) 1;
		}
	}
`;var sx=P`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,sk="",sC={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},s$=[{name:"default",resolver:e=>(function(e=""){if(!sk){let e=[...document.getElementsByTagName("script")],t=e.find(e=>e.hasAttribute("data-shoelace"));if(t)sk=t.getAttribute("data-shoelace");else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),i="";t&&(i=t.getAttribute("src")),sk=i.split("/").slice(0,-1).join("/")}}return sk.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")})(`assets/icons/${e}.svg`)},{name:"system",resolver:e=>e in sC?`data:image/svg+xml,${encodeURIComponent(sC[e])}`:""}],sS=[];function sE(e){return s$.find(t=>t.name===e)}var sA=P`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,sz=Symbol(),sI=Symbol(),sP=new Map,sO=class extends oD{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(null==t?void 0:t.spriteSheet)return this.svg=ev`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(!(o=await fetch(e,{mode:"cors"})).ok)return 410===o.status?sz:sI}catch(e){return sI}try{let e=document.createElement("div");e.innerHTML=await o.text();let t=e.firstElementChild;if((null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase())!=="svg")return sz;b||(b=new DOMParser);let r=b.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");if(!r)return sz;return r.part.add("svg"),document.adoptNode(r)}catch(e){return sz}}connectedCallback(){super.connectedCallback(),sS.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,sS=sS.filter(t=>t!==e)}getIconSource(){let e=sE(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;let{url:t,fromLibrary:i}=this.getIconSource(),o=i?sE(this.library):void 0;if(!t){this.svg=null;return}let r=sP.get(t);if(r||(r=this.resolveIcon(t,o),sP.set(t,r)),!this.initialRender)return;let s=await r;if(s===sI&&sP.delete(t),t===this.getIconSource().url){let t;if(void 0===t?void 0!==s?._$litType$:s?._$litType$===t){if(this.svg=s,o){await this.updateComplete;let e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&e&&o.mutator(e)}return}switch(s){case sI:case sz:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};sO.styles=[o_,sA],oP([eL()],sO.prototype,"svg",2),oP([eD({reflect:!0})],sO.prototype,"name",2),oP([eD()],sO.prototype,"src",2),oP([eD()],sO.prototype,"label",2),oP([eD({reflect:!0})],sO.prototype,"library",2),oP([r6("label")],sO.prototype,"handleLabelChange",1),oP([r6(["name","src","library"])],sO.prototype,"setIcon",1);var sD=class extends oD{constructor(){super(...arguments),this.localize=new oy(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let e=this.childNodes,t="";return[...e].forEach(e=>{e.nodeType!==Node.ELEMENT_NODE||e.hasAttribute("slot")||(t+=e.textContent),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return ev`
      <div
        part="base"
        class=${rF({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};sD.styles=[o_,sx],sD.dependencies={"sl-icon":sO},oP([eM(".option__label")],sD.prototype,"defaultSlot",2),oP([eL()],sD.prototype,"current",2),oP([eL()],sD.prototype,"selected",2),oP([eL()],sD.prototype,"hasHover",2),oP([eD({reflect:!0})],sD.prototype,"value",2),oP([eD({type:Boolean,reflect:!0})],sD.prototype,"disabled",2),oP([r6("disabled")],sD.prototype,"handleDisabledChange",1),oP([r6("selected")],sD.prototype,"handleSelectedChange",1),oP([r6("value")],sD.prototype,"handleValueChange",1),sD.define("sl-option");var sL=P`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,sR=P`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let sM=Symbol.for(""),sT=e=>{if(e?.r===sM)return e?._$litStatic$},sB=(e,...t)=>({_$litStatic$:t.reduce((t,i,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:sM}),sF=new Map,sN=e=>(t,...i)=>{let o,r,s=i.length,a=[],c=[],h,p=0,u=!1;for(;p<s;){for(h=t[p];p<s&&void 0!==(o=sT(r=i[p]));)h+=o+t[++p],u=!0;p!==s&&c.push(r),a.push(h),p++}if(p===s&&a.push(t[s]),u){let e=a.join("$$lit$$");void 0===(t=sF.get(e))&&(a.raw=a,sF.set(e,t=a)),i=c}return e(t,...i)},sq=sN(ev);sN(ey),sN(e_);var sV=class extends oD{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?sB`a`:sB`button`;return sq`
      <${t}
        part="base"
        class=${rF({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(e?void 0:this.disabled)??ex}
        type=${(e?void 0:"button")??ex}
        href=${(e?this.href:void 0)??ex}
        target=${(e?this.target:void 0)??ex}
        download=${(e?this.download:void 0)??ex}
        rel=${(e&&this.target?"noreferrer noopener":void 0)??ex}
        role=${(e?void 0:"button")??ex}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${this.name??ex}
          library=${this.library??ex}
          src=${this.src??ex}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};sV.styles=[o_,sR],sV.dependencies={"sl-icon":sO},oP([eM(".icon-button")],sV.prototype,"button",2),oP([eL()],sV.prototype,"hasFocus",2),oP([eD()],sV.prototype,"name",2),oP([eD()],sV.prototype,"library",2),oP([eD()],sV.prototype,"src",2),oP([eD()],sV.prototype,"href",2),oP([eD()],sV.prototype,"target",2),oP([eD()],sV.prototype,"download",2),oP([eD()],sV.prototype,"label",2),oP([eD({type:Boolean,reflect:!0})],sV.prototype,"disabled",2);var sU=class extends oD{constructor(){super(...arguments),this.localize=new oy(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return ev`
      <span
        part="base"
        class=${rF({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?ev`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};sU.styles=[o_,sL],sU.dependencies={"sl-icon-button":sV},oP([eD({reflect:!0})],sU.prototype,"variant",2),oP([eD({reflect:!0})],sU.prototype,"size",2),oP([eD({type:Boolean,reflect:!0})],sU.prototype,"pill",2),oP([eD({type:Boolean})],sU.prototype,"removable",2);var sj=P`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,sH=P`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,sW=new WeakMap,sG=new WeakMap,sK=new WeakMap,sZ=new WeakSet,sJ=new WeakMap,sY=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!r&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(t=>{e.formData.append(i,t.toString())}):e.formData.append(i,o.toString()))},this.handleFormSubmit=e=>{var t;let i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=sW.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),sJ.set(this.host,[])},this.handleInteraction=e=>{let t=sJ.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=oI({form:e=>{let t=e.form;if(t){let i=e.getRootNode().querySelector(`#${t}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),sJ.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),sJ.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,sW.has(this.form)?sW.get(this.form).add(this.host):sW.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),sG.has(this.form)||(sG.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),sK.has(this.form)||(sK.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=sW.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),sG.has(this.form)&&(this.form.reportValidity=sG.get(this.form),sG.delete(this.form)),sK.has(this.form)&&(this.form.checkValidity=sK.get(this.form),sK.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?sZ.add(e):sZ.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&i.setAttribute(e,t.getAttribute(e))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,i=!!sZ.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},sX=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ox(oI({},sX),oC({valid:!1,valueMissing:!0}))),Object.freeze(ox(oI({},sX),oC({valid:!1,customError:!0})));var sQ=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},s0=class extends oD{constructor(){super(...arguments),this.formControlController=new sY(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new sQ(this,"help-text","label"),this.localize=new oy(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>ev`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,i=null!==t.closest(".select__clear"),o=null!==t.closest("sl-icon-button");if(!i&&!o){if("Escape"===e.key&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===e.key||" "===e.key&&""===this.typeToSelectString)return(e.preventDefault(),e.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.getAllOptions(),i=t.indexOf(this.currentOption),o=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===e.key?(o=i+1)>t.length-1&&(o=0):"ArrowUp"===e.key?(o=i-1)<0&&(o=t.length-1):"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),this.setCurrentOption(t[o])}if(e.key&&1===e.key.length||"Backspace"===e.key){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if("Backspace"===e.key)return;this.show()}for(let i of(e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===e.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),t))if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(" "):Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(e=this.closeWatcher)||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&"sl-icon-button"===e.tagName.toLowerCase());this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){"Tab"!==e.key&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest("sl-option"),i=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(t)?t:[t],o=[];e.forEach(e=>o.push(e.value)),this.setSelectedOptions(e.filter(e=>i.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),i.length&&i.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){!0===t||!1===t?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i;let o=this.getAllOptions();this.selectedOptions=o.filter(e=>e.selected);let r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let o=this.selectedOptions[0];this.value=null!=(e=null==o?void 0:o.value)?e:"",this.displayLabel=null!=(i=null==(t=null==o?void 0:o.getTextLabel)?void 0:t.call(o))?i:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(e,t);return ev`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${"string"==typeof i?r0(i):i}
        </div>`}return t===this.maxOptionsVisible?ev`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`:ev``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"value"===e){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await r3(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=rQ(this,"select.show",{dir:this.localize.dir()});await r5(this.popup.popup,e,t),this.currentOption&&function(e,t,i="vertical",o="smooth"){let r={top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)},s=r.top+t.scrollTop,a=r.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,p=t.scrollTop,u=t.scrollTop+t.offsetHeight;("horizontal"===i||"both"===i)&&(a<c?t.scrollTo({left:a,behavior:o}):a+e.clientWidth>h&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:o})),("vertical"===i||"both"===i)&&(s<p?t.scrollTo({top:s,behavior:o}):s+e.clientHeight>u&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:o}))}(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await r3(this);let{keyframes:e,options:t}=rQ(this,"select.hide",{dir:this.localize.dir()});await r5(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,r2(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,r2(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return ev`
      <div
        part="form-control"
        class=${rF({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${rF({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?ev`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?ev`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s0.styles=[o_,sH,sj],s0.dependencies={"sl-icon":sO,"sl-popup":rV,"sl-tag":sU},oP([eM(".select")],s0.prototype,"popup",2),oP([eM(".select__combobox")],s0.prototype,"combobox",2),oP([eM(".select__display-input")],s0.prototype,"displayInput",2),oP([eM(".select__value-input")],s0.prototype,"valueInput",2),oP([eM(".select__listbox")],s0.prototype,"listbox",2),oP([eL()],s0.prototype,"hasFocus",2),oP([eL()],s0.prototype,"displayLabel",2),oP([eL()],s0.prototype,"currentOption",2),oP([eL()],s0.prototype,"selectedOptions",2),oP([eL()],s0.prototype,"valueHasChanged",2),oP([eD()],s0.prototype,"name",2),oP([eL()],s0.prototype,"value",1),oP([eD({attribute:"value"})],s0.prototype,"defaultValue",2),oP([eD({reflect:!0})],s0.prototype,"size",2),oP([eD()],s0.prototype,"placeholder",2),oP([eD({type:Boolean,reflect:!0})],s0.prototype,"multiple",2),oP([eD({attribute:"max-options-visible",type:Number})],s0.prototype,"maxOptionsVisible",2),oP([eD({type:Boolean,reflect:!0})],s0.prototype,"disabled",2),oP([eD({type:Boolean})],s0.prototype,"clearable",2),oP([eD({type:Boolean,reflect:!0})],s0.prototype,"open",2),oP([eD({type:Boolean})],s0.prototype,"hoist",2),oP([eD({type:Boolean,reflect:!0})],s0.prototype,"filled",2),oP([eD({type:Boolean,reflect:!0})],s0.prototype,"pill",2),oP([eD()],s0.prototype,"label",2),oP([eD({reflect:!0})],s0.prototype,"placement",2),oP([eD({attribute:"help-text"})],s0.prototype,"helpText",2),oP([eD({reflect:!0})],s0.prototype,"form",2),oP([eD({type:Boolean,reflect:!0})],s0.prototype,"required",2),oP([eD()],s0.prototype,"getTag",2),oP([r6("disabled",{waitUntilFirstUpdate:!0})],s0.prototype,"handleDisabledChange",1),oP([r6(["defaultValue","value"],{waitUntilFirstUpdate:!0})],s0.prototype,"handleValueChange",1),oP([r6("open",{waitUntilFirstUpdate:!0})],s0.prototype,"handleOpenChange",1),rX("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),rX("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),s0.define("sl-select");var s1=Object.defineProperty,s2=Object.getOwnPropertyDescriptor,s5=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?s2(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&s1(t,i,s),s};let s8=class extends lit_element_i{render(){return this.name?ev`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?ev`<a href=${this.href} class="avatar" part="avatar">${this.renderContent()}</a>`:ev`<span class="avatar" part="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?ev`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:ev`<slot class="thumb thumb--text"></slot>`}};s8.styles=[P`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--vscode-descriptionForeground);
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],s5([eD()],s8.prototype,"src",2),s5([eD()],s8.prototype,"name",2),s5([eD()],s8.prototype,"href",2),s8=s5([eP("gl-avatar")],s8);var s3=Object.defineProperty,s6=Object.getOwnPropertyDescriptor,s7=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?s6(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&s3(t,i,s),s};let s4=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return ev`<gl-avatar-group>${this.renderList()}</gl-avatar-group>`}renderList(){var e,t;let i=this.avatars.slice(0,this.max),o=this.avatars.slice(this.max);return ev`
			${i.map(e=>ev`<gl-avatar exportparts="avatar" .src=${e.src} .name=${e.name} .href=${e.href}
						>${!e.src?ev`<code-icon icon="account"></code-icon>`:""}</gl-avatar
					>`)}
			${e=o.length,t=()=>ev`<gl-popover>
						<gl-avatar exportparts="avatar" slot="anchor" class="overflow"
							>+${o.length}</gl-avatar
						>
						<div slot="content" class="overflow-list">
							${o.map(e=>ev`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}
										>${!e.src?ev`<code-icon icon="account"></code-icon>`:""}</gl-avatar
									>`)}
						</div>
					</gl-popover>`,e?t(e):void 0}
		`}};s7([eD({type:Number})],s4.prototype,"max",2),s7([eD({type:Array})],s4.prototype,"avatars",2),s4=s7([eP("gl-avatar-list")],s4);let s9=class extends lit_element_i{render(){return ev`<slot class="avatar-group" part="base"></slot>`}};s9.styles=[P`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within::slotted(*),
			.avatar-group:hover::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within::slotted(*:focus),
			.avatar-group:hover::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],s9=s7([eP("gl-avatar-group")],s9);var ne=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,ni=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nt(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&ne(t,i,s),s};let no=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-branch",this.range=!1,this.refs=[]}render(){let{refs:e,icon:t}=this;if(!e?.length)return ex;let[i]=e,o=e.length;if(1===o)return ev`<gl-tooltip hoist .content=${i.name}>
				<span class="chip" tabindex="0">
					<code-icon icon=${i.icon??t}></code-icon>
					<span class="chip__name">${i.name}</span>
				</span>
			</gl-tooltip>`;let r=e.at(-1);return ev`<gl-tooltip hoist>
			<span class="chip chip--range" tabindex="0">
				<span class="chip__label">
					<code-icon icon=${i.icon??t}></code-icon>${i.name}
					${this.range?ev`<span class="chip__ellipsis">...</span>
								<code-icon icon=${r.icon??t}></code-icon>${r.name}`:ex}
				</span>
				<span class="chip__count">+${o}</span>
			</span>
			<div slot="content" class="tooltip-content">
				${this.label?ev`<div class="tooltip-header">${this.label}</div>`:ex}
				<div class="tooltip-list">
					${e.map(e=>ev`
							<div class="tooltip-item">
								<code-icon class="tooltip-item__icon" icon=${e.icon??t}></code-icon>
								<span class="tooltip-item__name">${e.name}</span>
							</div>
						`)}
				</div>
			</div>
		</gl-tooltip>`}};no.styles=P`
		:host {
			display: inline-flex;
			align-items: center;
			max-width: 100%;

			--color-focus-border: var(--vscode-focusBorder);
		}

		:focus,
		:focus-within {
			outline-color: var(--color-focus-border);
		}

		.chip {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.1rem 0.4rem;
			border-radius: 0.3rem;
			background-color: var(--vscode-badge-background);
			color: var(--vscode-badge-foreground);
			font-size: 0.85em;
			white-space: nowrap;
			max-width: 100%;
			overflow: hidden;
			opacity: 0.8;
			transition:
				opacity 0.3s ease-in-out,
				color 0.3s ease-in-out;
		}

		.chip:hover,
		.chip:focus {
			color: var(--color-foreground);
			opacity: 1;
		}

		.chip--range {
			cursor: pointer;
		}

		.chip__label {
			flex: 1 1 auto;
			min-width: 0;
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.chip__name {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.chip__ellipsis {
			opacity: 0.8;
			padding: 0 0.4rem;
		}

		.chip__count {
			padding-left: 0.4rem;
			font-weight: 600;
			font-size: 0.85em;
		}

		.chip code-icon {
			flex-shrink: 0;
			font-size: 0.9em;
		}

		/* Tooltip content styles */
		.tooltip-content {
			max-width: 400px;
		}

		.tooltip-header {
			padding-bottom: 0.6rem;
			font-weight: 500;
		}

		.tooltip-list {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
			max-height: 300px;
			overflow-y: auto;
		}

		.tooltip-item {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.3rem 0.4rem;
			font-size: 0.95em;
			line-height: 1.4;
		}

		.tooltip-item__icon {
			flex-shrink: 0;
			opacity: 0.8;
			font-size: 1.1em;
		}

		.tooltip-item__name {
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,ni([eD()],no.prototype,"icon",2),ni([eD()],no.prototype,"label",2),ni([eD({type:Boolean})],no.prototype,"range",2),ni([eD({type:Array})],no.prototype,"refs",2),no=ni([eP("gl-ref-overflow-chip")],no);var nr=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,nn=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ns(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nr(t,i,s),s};let na=[...s_.values()],nl=na.filter(e=>"squash"!==e&&"fixup"!==e),nc={break:"debug-pause",exec:"terminal",noop:"circle-slash"},nh={break:"Will pause the rebase here",exec:"Will run",noop:"No operation"},nd=class extends lit_element_i{constructor(){super(...arguments),this.revealLocation="graph",this.isBase=!1,this.isCurrent=!1,this.isDone=!1,this.isSquashTarget=!1,this.isOldest=!1,this.isFirst=!1,this.isLast=!1,this.isSelected=!1,this.isSquashing=!1,this.onActionChanged=e=>{if(!e8(this.entry))return;let t=e.target.value;this.dispatchEvent(new CustomEvent("action-changed",{detail:{sha:this.entry.sha,action:t},bubbles:!0,composed:!0}))},this.onClick=e=>{e.target.closest("sl-select, a, button")||this.dispatchEvent(new CustomEvent("entry-select",{detail:{id:this.entry.id,sha:e8(this.entry)?this.entry.sha:void 0,ctrlKey:e.ctrlKey||e.metaKey,shiftKey:e.shiftKey},bubbles:!0,composed:!0}))},this.onDoubleClick=e=>{!e8(this.entry)||e.target.closest("sl-select, a, button")||this.dispatchRevealCommit()},this.onShaClick=e=>{e.preventDefault(),e8(this.entry)&&this.dispatchRevealCommit()}}connectedCallback(){super.connectedCallback?.(),this.isBase||this.isDone||this.setAttribute("draggable","true")}get availableActions(){return this.isOldest?nl:na}dispatchRevealCommit(){e8(this.entry)&&this.dispatchEvent(new CustomEvent("gl-reveal-commit",{detail:{sha:this.entry.sha},bubbles:!0,composed:!0}))}render(){return e8(this.entry)?this.renderCommitEntry():this.renderCommandEntry()}renderCommitEntry(){if(!e8(this.entry))return ex;let{authors:e,entry:{action:t,commit:i,message:o,updateRefs:r,sha:s},isBase:a,isCurrent:c,isDone:h}=this;i||this.emitMissingCommit(s);let p=i&&e?.[i.author],u=i&&e?.[i.committer],g=i?.message??o,m="commit";a?m="base":h&&(m="done");let f=`${t}, ${g}, ${s.substring(0,7)}`;return ev`
			<div
				role="listitem"
				aria-label=${f}
				class=${rF({entry:!0,"entry--first":this.isFirst,"entry--last":this.isLast,"entry--selected":!a&&!h&&this.isSelected,"entry--done":h,"entry--current":c})}
				data-type="${m}"
				data-action=${t}
				data-squashing=${(!!this.isSquashing||void 0)??ex}
				data-squash-target=${(!!this.isSquashTarget||void 0)??ex}
				tabindex="0"
				@click=${this.onClick}
				@dblclick=${this.onDoubleClick}
			>
				<span class="entry-graph" aria-hidden="true"></span>

				${!a?ev`<div class="entry-action">
							<sl-select
								class="action-select"
								value=${t}
								@sl-change=${this.onActionChanged}
								?disabled=${h}
								hoist
							>
								<code-icon icon="chevron-down" slot="expand-icon"></code-icon>
								${this.availableActions.map(e=>ev`<sl-option value=${e}>${e}</sl-option>`)}
							</sl-select>
						</div>`:ex}

				<gl-tooltip class="entry-message" hoist hide-on-click placement="bottom-start" .content=${g}>
					<span class="entry-message-content">${g}</span>
				</gl-tooltip>

				${!a&&r?.length?this.renderUpdateRefBadges(r):ex}
				${this.renderAvatar(p,u)}
				${i?.formattedDate?ev`<gl-tooltip class="entry-date" hoist hide-on-click .content=${i.date??""}>
							<span class="entry-date-content">${i.formattedDate}</span>
						</gl-tooltip>`:ex}

				<gl-tooltip
					class="entry-sha"
					hoist
					hide-on-click
					content=${"graph"===this.revealLocation?"Open in Commit Graph":"Open in Inspect View"}
				>
					<a href="#" class="entry-sha-link" @click=${this.onShaClick}>
						<code-icon icon="git-commit"></code-icon>
						<span class="entry-sha-content">${s.substring(0,7)}</span>
					</a>
				</gl-tooltip>
			</div>
		`}renderCommandEntry(){if("command"!==this.entry.type)return ex;let{action:e,command:t}=this.entry,i=nc[e]??"circle-outline",o=nh[e],r=t?`${e} ${t}`:e;return ev`
			<div
				role="listitem"
				aria-label=${r}
				class=${rF({entry:!0,"entry--first":this.isFirst,"entry--last":this.isLast,"entry--selected":this.isSelected})}
				tabindex="0"
				data-type="command"
				data-action=${e}
				data-squashing=${(!!this.isSquashing||void 0)??ex}
				@click=${this.onClick}
			>
				<span class="entry-graph" aria-hidden="true">
					<code-icon icon=${i}></code-icon>
				</span>

				<div class="entry-action">
					<sl-select class="action-select" value=${e} disabled>
						<sl-option value=${e}>${e}</sl-option>
					</sl-select>
				</div>

				${"exec"===e&&t?ev`<gl-tooltip
							class="entry-message"
							hoist
							hide-on-click
							placement="bottom-start"
							.content=${t}
							><span class="entry-message-content"
								>${o} <code>${t}</code></span
							></gl-tooltip
						>`:o?ev`<span class="entry-message"
								><span class="entry-message-content">${o}</span></span
							>`:ex}
			</div>
		`}renderUpdateRefBadges(e){let t=e.map(e=>({name:e.ref}));return ev`<gl-ref-overflow-chip
			class="entry-update-refs"
			.refs=${t}
			icon="git-branch"
			label="Branches to update"
		></gl-ref-overflow-chip>`}renderAvatar(e,t){if(!e)return ex;!e.avatarUrl&&e.email&&this.emitMissingAvatar(e.email);let i=[{name:t?.author!==e.author?`${e.author} (Author)`:e.author,src:e.avatarUrl??e.avatarFallbackUrl}];return t&&t.author!==e.author&&(!t.avatarUrl&&t.email&&this.emitMissingAvatar(t.email),i.push({name:`${t.author} (Committer)`,src:t.avatarUrl??t.avatarFallbackUrl})),ev`<gl-avatar-list class="entry-avatar" .avatars=${i} max="2"></gl-avatar-list>`}emitMissingAvatar(e){e8(this.entry)&&this.dispatchEvent(new CustomEvent("missing-avatar",{detail:{email:e,sha:this.entry.sha},bubbles:!0,composed:!0}))}emitMissingCommit(e){this.dispatchEvent(new CustomEvent("missing-commit",{detail:{sha:e},bubbles:!0,composed:!0}))}};nd.styles=[sw],nn([eM(".action-select")],nd.prototype,"_actionSelect",2),nn([eD({type:Object,hasChanged:(e,t)=>e!==t&&(!e||!t||e.id!==t.id||e.action!==t.action||e.commit!==t.commit)})],nd.prototype,"entry",2),nn([eD({type:Object})],nd.prototype,"authors",2),nn([eD({type:String})],nd.prototype,"revealLocation",2),nn([eD({type:Boolean,reflect:!0})],nd.prototype,"isBase",2),nn([eD({type:Boolean,reflect:!0})],nd.prototype,"isCurrent",2),nn([eD({type:Boolean,reflect:!0})],nd.prototype,"isDone",2),nn([eD({type:Boolean})],nd.prototype,"isSquashTarget",2),nn([eD({type:Boolean})],nd.prototype,"isOldest",2),nn([eD({type:Boolean})],nd.prototype,"isFirst",2),nn([eD({type:Boolean})],nd.prototype,"isLast",2),nn([eD({type:Boolean})],nd.prototype,"isSelected",2),nn([eD({type:Boolean})],nd.prototype,"isSquashing",2),nd=nn([eP("gl-rebase-entry")],nd);let np=P`
	:host {
		/* Banner color custom properties */
		--gl-banner-primary-background: var(--vscode-sideBar-background);
		--gl-banner-secondary-background: var(--vscode-editor-background);
		--gl-banner-primary-emphasis-background: var(--vscode-button-background);
		--gl-banner-secondary-emphasis-background: var(--vscode-button-secondaryBackground);
		--gl-banner-text-color: var(--vscode-foreground);
		--gl-banner-dim-text-color: var(--vscode-descriptionForeground);
		--gl-banner-transparency: 0.5;

		/* Layout properties */
		--gl-banner-padding: 1.2rem;
		--gl-banner-gap: 0.8rem;
		--gl-banner-border-radius: 0.4rem;

		/* Button customization - use 8px horizontal padding, keep original vertical padding */
		--gl-banner-button-padding: 0.4rem 0.8rem;

		display: block;
		margin-block-end: 1.2rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		padding: var(--gl-banner-padding);
		border-radius: var(--gl-banner-border-radius);
		position: relative;
		overflow: hidden;
		container-type: inline-size;
	}

	/* Solid display mode - same as card background */
	.banner--solid {
		background-color: var(--gl-banner-primary-background);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-background) 100%, var(--vscode-foreground) 12%);
	}

	/* Outline display mode - emphasis color outline with secondary background */
	.banner--outline {
		background-color: var(--gl-banner-secondary-background);
		border: 2px solid var(--gl-banner-primary-emphasis-background);
	}

	/* Gradient display mode - horizontal gradient from primary to secondary emphasis */
	.banner--gradient {
		background: linear-gradient(
			to right,
			var(--gl-banner-primary-emphasis-background) 0%,
			var(--gl-banner-secondary-emphasis-background) 100%
		);
		border: 1px solid
			color-mix(
				in lab,
				var(--gl-banner-primary-emphasis-background) 50%,
				var(--gl-banner-secondary-emphasis-background) 50%
			);
	}

	/* Gradient transparent display mode - same gradient but with transparency */
	.banner--gradient-transparent {
		background: linear-gradient(
			to right,
			color-mix(
					in lab,
					var(--gl-banner-primary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				0%,
			color-mix(
					in lab,
					var(--gl-banner-secondary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				100%
		);
		border: 1px solid
			color-mix(
				in lab,
				color-mix(
						in lab,
						var(--gl-banner-primary-emphasis-background) 50%,
						var(--gl-banner-secondary-emphasis-background) 50%
					)
					calc(100% * (1 - var(--gl-banner-transparency))),
				transparent
			);
	}

	/* Gradient purple display mode - matches the auto-composer container styling */
	.banner--gradient-purple {
		border: 1px solid var(--vscode-panel-border);
		border-radius: 6px;
		background: linear-gradient(135deg, #a100ff1a 0%, #255ed11a 100%);
	}

	.banner--gradient-purple .banner__title {
		font-size: 1.3rem;
		color: var(--vscode-foreground);
		font-weight: normal;
	}

	.banner--gradient-purple .banner__body {
		font-size: 1.2rem;
		color: var(--vscode-descriptionForeground);
		line-height: 1.4;
	}

	.banner--gradient-purple .banner__body a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	.banner--gradient-purple .banner__body a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	.banner__content {
		display: flex;
		flex-direction: column;
		gap: var(--gl-banner-gap);
		align-items: center;
		text-align: center;
	}

	/* Responsive layout */
	.banner--responsive .banner__content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		gap: var(--gl-banner-gap);
	}

	.banner--responsive .banner__text {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.banner--responsive .banner__title,
	.banner--responsive .banner__body {
		text-align: left;
	}

	/* < 500px: Stack vertically with full-width buttons */
	.banner--responsive .banner__buttons {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.8rem;
		width: 100%;
	}

	.banner--responsive .banner__button {
		grid-column: unset;
		justify-self: unset;
		width: 100% !important;
		min-width: 100% !important;
		max-width: 100% !important;
		justify-content: center;
		flex: 1;
	}

	/* >= 500px: Three-group horizontal layout */
	@container (min-width: 500px) {
		.banner--responsive .banner__content {
			flex-direction: row;
			align-items: center;
			gap: 1.6rem;
		}

		/* Group 1: Text content (left-aligned) */
		.banner--responsive .banner__text {
			flex: 1;
			min-width: 0;
			align-self: center;
		}

		/* Group 2: Buttons (content-sized) */
		.banner--responsive .banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			margin-top: 0;
			width: auto;
			flex-shrink: 0;
			align-self: center;
		}

		.banner--responsive .banner__button {
			width: auto;
			white-space: nowrap;
		}

		/* Group 3: Dismiss button (to the right of buttons) */
		.banner--responsive .banner__dismiss {
			position: static !important;
			top: auto !important;
			right: auto !important;
			align-self: center;
			flex-shrink: 0;
		}
	}

	.banner__title {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--gl-banner-text-color);
		margin: 0;
		text-wrap: pretty;
	}

	.banner__body {
		font-size: 1em;
		color: var(--gl-banner-text-color);
		margin: 0;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.banner__buttons {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.8rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	.banner:not(.banner--gradient-purple) .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-foreground: var(--gl-banner-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner--gradient-purple .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner__button--secondary {
		grid-column: 3;
		justify-self: end;
		white-space: nowrap;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 10%, transparent);
	}

	/* When only primary button exists, center it across the full width */
	.banner__buttons:has(.banner__button--primary):not(:has(.banner__button--secondary)) .banner__button--primary {
		grid-column: 1 / -1;
		justify-self: center;
	}

	/* Dismiss button */
	.banner__dismiss {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 15%, transparent);
		--button-padding: 0.4rem;
		z-index: 1;
	}

	/* Responsive layout dismiss button */
	.banner--responsive .banner__dismiss {
		/* < 500px: Upper right corner (default positioning) */
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
	}

	/* Theme-specific adjustments */

	/* Light theme: Brighten gradient colors for better contrast with dark text */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-primary-emphasis-background: color-mix(in lab, var(--vscode-button-background) 40%, #fff 60%);
		--gl-banner-secondary-emphasis-background: color-mix(
			in lab,
			var(--vscode-button-secondaryBackground) 40%,
			#fff 60%
		);
	}

	/* Override text color for high contrast light theme specifically */
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-text-color: #000;
	}

	:host-context(.vscode-dark) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light))
		.banner:not(.banner--gradient-purple)
		.banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-foreground: #fff;
	}

	:host-context(.vscode-light) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast-light) .banner:not(.banner--gradient-purple) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 8%, #fff 25%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 15%, #fff 35%);
		--button-foreground: #000;
	}

	/* Make banner text darker in light themes */
	:host-context(.vscode-light) .banner__body,
	:host-context(.vscode-high-contrast-light) .banner__body {
		color: color-mix(in lab, var(--gl-banner-text-color) 20%, #000 80%);
	}

	/* Strong colors for banner title - pure black/white for maximum contrast */
	:host-context(.vscode-light) .banner__title,
	:host-context(.vscode-high-contrast-light) .banner__title {
		color: #000 !important;
	}

	:host-context(.vscode-dark) .banner__title,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__title {
		color: #fff !important;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.banner__buttons {
			flex-direction: column;
			width: 100%;
		}

		.banner__button {
			width: 100%;
		}
	}

	/* More aggressive responsive layout for narrow sidebars */
	@media (max-width: 400px) {
		.banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-top: 0.8rem;
			align-items: center;
			width: 100%;
		}

		.banner__button--primary,
		.banner__button--secondary {
			grid-column: unset;
			justify-self: unset;
			width: 100%;
			max-width: 200px;
		}

		.banner__button--primary {
			order: 1;
		}

		.banner__button--secondary {
			order: 2;
		}
	}

	/* Support for custom banner buttons layout */
	:host([data-banner-buttons-layout='column']) .banner__buttons,
	.banner__buttons[data-layout='column'] {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	:host([data-banner-buttons-layout='column']) .banner__button--primary,
	:host([data-banner-buttons-layout='column']) .banner__button--secondary,
	.banner__buttons[data-layout='column'] .banner__button--primary,
	.banner__buttons[data-layout='column'] .banner__button--secondary {
		grid-column: unset;
		justify-self: unset;
		width: 100%;
		max-width: 200px;
	}
`;var nu=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,nm=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ng(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nu(t,i,s),s};let nf=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return ev`<div part="base" class=${rF(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return ev`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return ev`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return ev`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return ev`<div class="banner__body">${r0(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return ev`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return ev`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??ex}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return ev`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??ex}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return ev`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??ex}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};nf.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nf.styles=[np],nm([eD({reflect:!0})],nf.prototype,"display",2),nm([eD({attribute:"banner-title"})],nf.prototype,"bannerTitle",2),nm([eD()],nf.prototype,"body",2),nm([eD({attribute:"primary-button"})],nf.prototype,"primaryButton",2),nm([eD({attribute:"primary-button-href"})],nf.prototype,"primaryButtonHref",2),nm([eD({attribute:"primary-button-command"})],nf.prototype,"primaryButtonCommand",2),nm([eD({attribute:"secondary-button"})],nf.prototype,"secondaryButton",2),nm([eD({attribute:"secondary-button-href"})],nf.prototype,"secondaryButtonHref",2),nm([eD({attribute:"secondary-button-command"})],nf.prototype,"secondaryButtonCommand",2),nm([eD({type:Boolean,attribute:"dismissible"})],nf.prototype,"dismissible",2),nm([eD({attribute:"dismiss-href"})],nf.prototype,"dismissHref",2),nm([eD({attribute:"layout"})],nf.prototype,"layout",2),nf=nm([eP("gl-banner")],nf);var nb=Object.defineProperty,nv=Object.getOwnPropertyDescriptor,ny=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nv(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nb(t,i,s),s};let n_=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return ev`<code-icon
				class="icon"
				icon="${this.worktree?"gl-worktree":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span>`}};n_.styles=P`
		:host {
			display: inline-flex;
			align-items: baseline;
			max-width: 100%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-inline: 0.2rem;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: 2px;
		}

		.icon {
			margin-right: 0.3rem;
			align-self: center;
		}

		.label {
			font-weight: bold;
		}
	`,ny([eD({type:String})],n_.prototype,"name",2),ny([eD({type:Number})],n_.prototype,"size",2),ny([eD({type:Boolean})],n_.prototype,"worktree",2),n_=ny([eP("gl-branch-name")],n_);let nw=P`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var nx=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,nC=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nk(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nx(t,i,s),s};let n$=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ev` <code-icon icon="check"></code-icon> `}render(){return ev`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};n$.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},n$.styles=[nw],nC([eD({type:Boolean,reflect:!0})],n$.prototype,"disabled",2),nC([eD({type:String})],n$.prototype,"value",2),nC([eD({type:Boolean})],n$.prototype,"defaultChecked",1),nC([eD({type:Boolean,reflect:!0})],n$.prototype,"checked",2),n$=nC([eP("gl-checkbox")],n$);let nS="0000000000000000000000000000000000000000:",nE=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,nA=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,nz=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,nI=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,nP=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,nO=/^(.*?)([\^@~:].*)?$/,nD=/^[0]{40}(?:[\^@~:]\S*)?:?$/,nL=/^[0]{40}([\^@~]\S*)?:$/;function nR(e,t){return!!t&&e.test(t)}function nM(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===nS||!t&&nR(nD,e)}var nT=Object.defineProperty,nB=Object.getOwnPropertyDescriptor,nF=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nB(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nT(t,i,s),s};let nN="gl-copy-container",nq=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3}disconnectedCallback(){this.cancelResetTimer(),super.disconnectedCallback?.()}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel}render(){return this.content||this.disabled?ev`<gl-tooltip
			.content="${this.label}"
			placement="${this.placement??ex}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:ex}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};nq.tagName=nN,nq.styles=P`
		:host {
			display: inline-block;
		}

		gl-tooltip {
			cursor: pointer;
		}

		/* Hide focus outline on slotted copy icon - we show it on the host instead */
		::slotted(.copy-icon) {
			outline: none !important;
		}

		:host([appearance='toolbar']) {
			--copy-background: transparent;
			--copy-foreground: var(--vscode-foreground);
			--copy-hover-background: var(--vscode-toolbar-hoverBackground);
			--copy-border: transparent;
			--copy-border-radius: var(--gk-action-radius, 0.3rem);
			--copy-padding: 0.4rem;

			border: 1px solid var(--copy-border);
			border-radius: var(--copy-border-radius);
			background: var(--copy-background);
			color: var(--copy-foreground);
		}

		:host([appearance='toolbar']:hover) {
			background: var(--copy-hover-background);
		}

		:host([appearance='toolbar']:focus-within) {
			outline: 1px solid var(--color-focus-border);
			outline-offset: -1px;
		}

		:host([appearance='toolbar']) gl-tooltip {
			padding: var(--copy-padding);
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 1.8rem;
			box-sizing: border-box;
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}
	`,nF([eD({reflect:!0})],nq.prototype,"appearance",2),nF([eD({reflect:!1})],nq.prototype,"content",2),nF([eD()],nq.prototype,"copyLabel",2),nF([eD()],nq.prototype,"copiedLabel",2),nF([eD({type:Boolean,reflect:!0})],nq.prototype,"disabled",2),nF([eD()],nq.prototype,"placement",2),nF([eD({type:Number})],nq.prototype,"timeout",2),nF([eL()],nq.prototype,"label",2),nq=nF([eP(nN)],nq);var nV=Object.defineProperty,nU=Object.getOwnPropertyDescriptor,nj=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nU(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nV(t,i,s),s};let nH=P`
	:host {
		display: inline-flex;
		align-items: baseline;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-inline-end: 0.2rem;
	}

	:host(:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.label--uncommitted {
		cursor: default;
	}

	.icon {
		margin-right: 0.3rem;
		align-self: center;
	}
`,nW=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return function(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(nM(e))return!function(e,t=!1){return e===nS||!t&&nR(nL,e)}(e)?t?.strings?.uncommitted??"Working Tree":t?.strings?.uncommittedStaged??"Index";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return nA.test(e);case"qualified-double-dot":return nz.test(e);case"qualified-triple-dot":return nI.test(e);default:return nE.test(e)}}(e)||!nR(nP,e))return e;let i=nO.exec(e);if(null!=i){let[,e,t]=i;if(null!=t)return`${e.substring(0,7)}${t}`}return e.substring(0,7)}(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?ex:!this.sha||nM(this.sha)?ev`<span part="label" class="label--uncommitted">${this.label}</span>`:ev`<code-icon part="icon" class="icon" icon="git-commit" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};nW.styles=nH,nj([eD({type:String})],nW.prototype,"sha",2),nj([eD({type:Number})],nW.prototype,"size",2),nW=nj([eP("gl-commit-sha")],nW);let nG=class extends lit_element_i{constructor(){super(...arguments),this.size=12}render(){return null==this.sha?ex:ev`<gl-copy-container .content=${this.sha} placement="top">
			<gl-commit-sha exportparts="icon, label" .sha=${this.sha} .size=${this.size}></gl-commit-sha>
		</gl-copy-container>`}};nG.styles=nH,nj([eD({type:String})],nG.prototype,"sha",2),nj([eD({type:Number})],nG.prototype,"size",2),nG=nj([eP("gl-commit-sha-copy")],nG);var nK=Object.defineProperty,nZ=Object.getOwnPropertyDescriptor,nJ=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nZ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nK(t,i,s),s};let nY=class extends lit_element_i{constructor(){super(...arguments),this._open=!1,this.confirm="Confirm",this.cancel="Cancel",this.initialFocus="confirm",this.placement="top-end",this.icon="warning",this.showIcon=!0}render(){return ev`
			<gl-popover
				placement=${this.placement}
				trigger="click"
				hoist
				@keydown=${this.onKeydown}
				@gl-popover-show=${this.onPopoverShow}
				@gl-popover-after-show=${this.onPopoverAfterShow}
				@gl-popover-hide=${this.onPopoverHide}
			>
				<slot name="anchor" slot="anchor"></slot>
				<div slot="content" class="confirm-popover" role="alertdialog" aria-labelledby="confirm-title">
					<div class="confirm-popover__header">
						${this.showIcon?ev`<slot name="icon">
									<code-icon class="confirm-popover__icon" icon=${this.icon}></code-icon>
								</slot>`:ex}
						<h4 id="confirm-title" class="confirm-popover__title">${this.heading}</h4>
					</div>
					${this.message?ev`<p class="confirm-popover__message">${r0(this.message)}</p>`:ex}
					<div class="confirm-popover__actions">
						<gl-button
							class="cancel-button"
							tabindex=${"cancel"===this.initialFocus?1:2}
							appearance="secondary"
							@click=${e=>this.onCancel(e)}
							>${this.cancel}</gl-button
						>
						<gl-button
							class="confirm-button"
							appearance=${this.confirmAppearance??ex}
							variant=${this.confirmVariant??ex}
							tabindex=${"confirm"===this.initialFocus?1:2}
							@click=${e=>this.onConfirm(e)}
							>${this.confirm}</gl-button
						>
					</div>
				</div>
			</gl-popover>
		`}onPopoverShow(){this._open=!0,this.setAnchorTooltipsDisabled(!0)}onPopoverAfterShow(){requestAnimationFrame(()=>{"cancel"===this.initialFocus?this._cancelButton?.focus():this._confirmButton?.focus()})}onPopoverHide(){this._open=!1,this.setAnchorTooltipsDisabled(!1)}setAnchorTooltipsDisabled(e){for(let t of this.querySelectorAll('[slot="anchor"]'))t.querySelectorAll("gl-tooltip").forEach(t=>t.disabled=e),t.shadowRoot?.querySelectorAll("gl-tooltip").forEach(t=>t.disabled=e)}onKeydown(e){if("Enter"===e.key||" "===e.key){let t=e.target;t.closest(".cancel-button")?(e.preventDefault(),e.stopPropagation(),this.onCancel()):t.closest(".confirm-button")&&(e.preventDefault(),e.stopPropagation(),this.onConfirm())}}onConfirm(e){e?.stopPropagation(),this.hide(),this.dispatchEvent(new CustomEvent("gl-confirm",{bubbles:!0,composed:!0}))}onCancel(e){e?.stopPropagation(),this.hide(),this.dispatchEvent(new CustomEvent("gl-cancel",{bubbles:!0,composed:!0}))}show(){return this._popover?.show()}hide(){return this._popover?.hide()}};nY.styles=[iB,P`
			:host {
				display: contents;
				--warning-color: var(--vscode-editorWarning-foreground, #cca700);
				--sl-tooltip-border-radius: 0.8rem;
			}

			.confirm-popover {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-width: 28rem;
				padding: 0.6rem 0.4rem;
			}

			.confirm-popover__header {
				display: flex;
				align-items: flex-start;
				gap: 0.6rem;
			}

			.confirm-popover__icon {
				flex: 0 0 auto;
				color: var(--warning-color);
			}

			.confirm-popover__title {
				margin: 0;
				font-weight: 600;
				font-size: 1.3rem;
				line-height: 1.4;
			}

			.confirm-popover__message {
				margin: 0;
				color: var(--color-foreground--75, inherit);
				line-height: 1.4;
			}

			.confirm-popover__actions {
				display: flex;
				justify-content: flex-end;
				gap: 0.8rem;
				margin-top: 0.4rem;
			}
		`],nJ([eM("gl-popover")],nY.prototype,"_popover",2),nJ([eM(".confirm-button")],nY.prototype,"_confirmButton",2),nJ([eM(".cancel-button")],nY.prototype,"_cancelButton",2),nJ([eL()],nY.prototype,"_open",2),nJ([eD()],nY.prototype,"heading",2),nJ([eD()],nY.prototype,"message",2),nJ([eD()],nY.prototype,"confirm",2),nJ([eD({attribute:"confirm-appearance"})],nY.prototype,"confirmAppearance",2),nJ([eD({attribute:"confirm-variant"})],nY.prototype,"confirmVariant",2),nJ([eD()],nY.prototype,"cancel",2),nJ([eD({attribute:"initial-focus"})],nY.prototype,"initialFocus",2),nJ([eD()],nY.prototype,"placement",2),nJ([eD()],nY.prototype,"icon",2),nJ([eD({type:Boolean,attribute:"show-icon"})],nY.prototype,"showIcon",2),nY=nJ([eP("gl-popover-confirm")],nY);var nX=Object.defineProperty,nQ=Object.getOwnPropertyDescriptor,n0=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?nQ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&nX(t,i,s),s};let n1={p:"pick",P:"pick",r:"reword",R:"reword",e:"edit",E:"edit",s:"squash",S:"squash",f:"fixup",F:"fixup",d:"drop",D:"drop"},n2=class extends GlAppHost{constructor(){super(...arguments),this.virtualizerKeyFn=e=>e.id,this.virtualizerRenderFn=(e,t)=>this.renderEntry(e,t),this._conflictIndicatorLoading=!1,this._conflictIndicatorHasConflicts=!1,this.dragOverBottom=!1,this.selectedIds=new Set,this.conflictDetectionStale=!1,this._idToSortedIndex=new Map,this._sortedEntries=[],this._squashingIds=new Set,this._squashTargetIds=new Set,this._editableStartOffset=0,this.onListKeyDown=e=>{if((e.ctrlKey||e.metaKey)&&"a"===e.key){e.preventDefault();let t=this.state?.onto?.sha,i=this._sortedEntries.filter(e=>e.id!==t).map(e=>e.id);this.selectedIds=new Set(i);return}if("Escape"===e.key){let t=e.composedPath().find(e=>e instanceof Element&&"gl-rebase-entry"===e.localName),i=t?.shadowRoot?.querySelector(".entry");i&&(e.preventDefault(),i.focus());return}if(e.composedPath().some(e=>e instanceof Element&&e.matches(".action-select")))return;let t=this.focusedEntryId;if(!t)return;let i=this.shadowRoot?.querySelector(`gl-rebase-entry[data-id="${t}"]`);if(!i)return;if("Enter"===e.key||" "===e.key){let o=e.composedPath()[0];if(!(o instanceof HTMLElement&&o.classList.contains("entry")))return;if(e.preventDefault(),!this.selectedIds.has(t)){this.selectedIds=new Set([t]),this.anchoredEntryId=t;let e=this._idToSortedIndex.get(t)??-1;if(-1!==e){let t=this._sortedEntries[e];e8(t)&&this._ipc.sendCommand(ta,{sha:t.sha})}return}let r=i.shadowRoot?.querySelector(".action-select");null!=r&&(r.focus(),requestAnimationFrame(()=>void r.show()));return}let o=this._idToSortedIndex.get(t)??-1;if(-1===o)return;let r=this._sortedEntries[o];if(e8(r)&&e.key in n1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey){e.preventDefault(),e.stopPropagation(),this.onActionChanged(new CustomEvent("action-changed",{detail:{sha:r.sha,action:n1[e.key]}}));return}if("Home"===e.key||"End"===e.key){e.preventDefault();let t="Home"===e.key?0:this._sortedEntries.length-1;t>=0&&t<this._sortedEntries.length&&this.focusEntry(this._sortedEntries[t].id);return}if(this.isNavigationKey(e.key)){if(e.altKey&&!this.state?.isReadOnly)return void this.handleKeyboardMove(e,o,e.key);if(e.shiftKey)return void this.handleKeyboardMultiSelect(e,o,e.key);this.handleKeyboardNavigate(e,o,e.key)}},this.onEntrySelect=e=>{let{id:t,sha:i,ctrlKey:o,shiftKey:r}=e.detail,s=this.state?.onto?.sha;if(!s||t!==s){if(this.focusedEntryId=t,r&&this.anchoredEntryId){let e=this._idToSortedIndex.get(this.anchoredEntryId)??-1,i=this._idToSortedIndex.get(t)??-1;if(-1!==e&&-1!==i){let t=Math.min(e,i),o=Math.max(e,i),r=new FilterMapIterator(this._sortedEntries.slice(t,o+1),e=>e.id!==s?e.id:void 0);this.selectedIds=new Set(r)}}else if(o){let e=new Set(this.selectedIds);e.has(t)?e.delete(t):e.add(t),this.selectedIds=e,this.anchoredEntryId=t}else this.selectedIds=new Set([t]),this.anchoredEntryId=t;i&&this._ipc.sendCommand(ta,{sha:i})}},this.onActionChanged=e=>{let t,{sha:i,action:o}=e.detail;if(this.selectedIds.has(i)&&this.selectedIds.size>1){for(let e of(t=[],this.selectedIds))if(!e.startsWith("line:")){if(e===this._oldestCommitId&&("squash"===o||"fixup"===o))continue;t.push({sha:e,action:o})}}else{if(i===this._oldestCommitId&&("squash"===o||"fixup"===o))return;t=[{sha:i,action:o}]}if(t.length){if("drop"===o)for(let e of this.findOrphanedSquashEntries(t.map(e=>e.sha)))t.push({sha:e,action:"pick"});1===t.length?(this._stateProvider.changeEntryAction(t[0].sha,t[0].action),this._ipc.sendCommand(ti,{sha:t[0].sha,action:t[0].action})):(this._stateProvider.changeEntryActions(t),this._ipc.sendCommand(to,{entries:t})),"drop"===o&&this.markConflictDetectionStale()}},this.onDocumentKeyDown=e=>{if(e.ctrlKey||e.metaKey){"Enter"===e.key&&!this.state?.isReadOnly&&(e.preventDefault(),this.isActiveRebase?this.rebaseStatus?.hasConflicts||this.onContinueClicked():this.onStartClicked());return}"/"===e.key&&(e.preventDefault(),this.onSearch())},this.onCurrentCommitClick=()=>{let e=this.rebaseStatus?.currentCommit;e&&this._ipc.sendCommand(tl,{type:"commit",ref:e})},this.onCurrentCommitKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onCurrentCommitClick())},this.onBranchClick=()=>{this.state?.branch&&this._ipc.sendCommand(tl,{type:"branch",ref:this.state.branch})},this.onBranchKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onBranchClick())},this.onOntoClick=()=>{this.state?.onto?.sha&&this._ipc.sendCommand(tl,{type:"commit",ref:this.state.onto.sha})},this.onOntoKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onOntoClick())},this.onRevealCommit=e=>{this._ipc.sendCommand(tl,{type:"commit",ref:e.detail.sha})}}get ascending(){return this.state?.ascending??!1}get entries(){return this.state?.entries??[]}get doneEntries(){return this.state?.doneEntries??[]}get rebaseStatus(){return this.state?.rebaseStatus}get isActiveRebase(){return null!=this.rebaseStatus}get isEmptyOrNoop(){let{entries:e,doneEntries:t}=this;return!t.length&&(!e.length||1===e.length&&"command"===e[0].type&&"noop"===e[0].action)}createStateProvider(e,t,i){return new RebaseStateProvider(this,e,t,i)}connectedCallback(){super.connectedCallback?.(),document.addEventListener("keydown",this.onDocumentKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),super.disconnectedCallback?.()}onListClick(e){if(!e.target.closest("gl-rebase-entry"))if(this.focusedEntryId)this.focusEntry(this.focusedEntryId);else{let e=this.state?.onto?.sha,t=this._sortedEntries.find(t=>t.id!==e);t&&this.focusEntry(t.id)}}onDragStart(e){let t=e.target.closest("gl-rebase-entry"),i=t?.dataset.id;if(!i)return;let o=this.state?.onto?.sha;if(!o||i!==o){if(this.state?.isReadOnly)return void e.preventDefault();this.selectedIds.has(i)||(this.selectedIds=new Set([i]),this.anchoredEntryId=i),this.draggedId=i,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",i),requestAnimationFrame(()=>{if(t.classList.add("dragging"),this.selectedIds.has(i)&&this.selectedIds.size>1){for(let e of this.selectedIds)if(e!==i){let t=this.getEntryElement(e);t?.classList.add("dragging")}}})}}onDragEnd(){this.clearDragState()}onDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move",this.handleDragAutoScroll(e.clientY);let t=e.target.closest("gl-rebase-entry"),i=t?.dataset.id;if(i===this.draggedId)return;let o=!1,r=this.state?.onto?.sha;if(t&&(!r||i!==r)){let i=t.getBoundingClientRect();o=e.clientY>i.top+i.height/2}this.updateDragOverIndicator(i,t,o)}onDragLeave(e){let t=e.target.closest("gl-rebase-entry");t?.dataset.id===this.dragOverId&&(t.classList.remove("drag-over","drag-over-bottom"),this.dragOverId=void 0,this.dragOverBottom=!1)}onDrop(e){e.preventDefault();let t=e.target.closest("gl-rebase-entry");if(!this.isValidDropTarget(t))return void this.clearDragState();let i=e.dataTransfer?.getData("text/plain")||this.draggedId;if(!i)return void this.clearDragState();let o=t.dataset.id;if(!o)return void this.clearDragState();let r=this.state?.onto?.sha;if(r&&o===r)return void this.handleBaseDrop(i);let s=this._idToSortedIndex.get(o)??-1,a=t.getBoundingClientRect(),c=e.clientY>a.top+a.height/2;if(this.selectedIds.has(i)&&this.selectedIds.size>1)this.clearDragState(),this.executeMoveEntriesBySortedIndex(Array.from(this.selectedIds),s,c);else{let e=this._idToSortedIndex.get(i)??-1;this.clearDragState(),this.executeMoveEntryBySortedIndex(e,s,c)}}handleBaseDrop(e){let t=e??this.draggedId;if(!t)return void this.clearDragState();if(this.clearDragState(),this.selectedIds.has(t)&&this.selectedIds.size>1){let e=this.getIdsInArrayOrder(this.selectedIds);this.pendingFocusId=this.focusedEntryId&&this.selectedIds.has(this.focusedEntryId)?this.focusedEntryId:e[0],this._stateProvider.moveEntries(e,0),this.refreshIndices(),this._ipc.sendCommand(ts,{ids:e,to:0})}else{let e=this.entries.findIndex(e=>e.id===t);if(-1===e)return;this.executeMoveEntry(e,0)}}handleDragAutoScroll(e){if(!this._virtualizer)return;let t=this._virtualizer.getBoundingClientRect();e<t.top+80?this._virtualizer.scrollBy({top:-8,behavior:"instant"}):e>t.bottom-80&&this._virtualizer.scrollBy({top:8,behavior:"instant"})}updateDragOverIndicator(e,t,i=!1){if(e!==this.dragOverId||i!==this.dragOverBottom){if(this.dragOverId){let e=this.getEntryElement(this.dragOverId);e?.classList.remove("drag-over","drag-over-bottom")}this.dragOverId=e,this.dragOverBottom=i,e&&t&&(t.classList.add("drag-over"),i&&t.classList.add("drag-over-bottom"))}}isValidDropTarget(e){let t=e?.dataset.id;return!!(t&&this.draggedId&&t!==this.draggedId)}clearDragState(){this.clearAllDragOverIndicators(),this.clearDraggingClass(),this.draggedId=void 0,this.dragOverId=void 0,this.dragOverBottom=!1}clearAllDragOverIndicators(){if(this._virtualizer)for(let e of this._virtualizer.querySelectorAll(".drag-over"))e.classList.remove("drag-over","drag-over-bottom")}clearDraggingClass(){if(this._virtualizer)for(let e of this._virtualizer.querySelectorAll(".dragging"))e.classList.remove("dragging")}getEntryElement(e){return this._virtualizer?.querySelector(`gl-rebase-entry[data-id="${e}"]`)??void 0}getIdsInArrayOrder(e){let t=[];for(let i of this._sortedEntries)e.has(i.id)&&t.push(i);return this.ascending||t.reverse(),t.map(e=>e.id)}executeMoveEntryBySortedIndex(e,t,i){let o,r,s=this._sortedEntries.length,a=this.entries.length,c=this._editableStartOffset;if(-1!==e&&-1!==t&&!(e>=s)&&!(t>=s)&&t!==e&&(!i||t!==e-1)&&(i||t!==e+1)){if(this.ascending){o=e-c;let s=t-c;r=i?s+1:s}else{o=a-1-e;let s=a-1-t;r=i?s:s+1}o<0||o>=a||r<0||r>a||this.executeMoveEntry(o,r)}}executeMoveEntry(e,t){if(-1===e||-1===t||e===t)return;let i=this.entries[e];if(!i)return;this.pendingFocusId=i.id;let o=e<t?t-1:t;this._stateProvider.moveEntry(e,o),this.refreshIndices(),this._ipc.sendCommand(tr,{id:i.id,to:t,relative:!1})}executeMoveEntriesBySortedIndex(e,t,i){let o;if(0===e.length)return;let r=this._sortedEntries.length,s=this.entries.length,a=this._editableStartOffset,c=new Set(e);if(t<0||t>=r)return;let h=this.getIdsInArrayOrder(c),p=t;i&&(p=t+1);let u=0;for(let e=0;e<p&&e<r;e++)c.has(this._sortedEntries[e].id)&&u++;let g=p-u,m=s-h.length;o=this.ascending?Math.max(0,Math.min(g-a,m)):Math.max(0,Math.min(m-g,m));let f=this.focusedEntryId&&c.has(this.focusedEntryId)?this.focusedEntryId:h[0];this.pendingFocusId=f,this._stateProvider.moveEntries(h,o),this.refreshIndices(),this._ipc.sendCommand(ts,{ids:h,to:o})}findOrphanedSquashEntries(e){let t=new Set(e),i=[],o=this.entries;for(let e=0;e<o.length;e++){let r=o[e];if(!e8(r)||"squash"!==r.action&&"fixup"!==r.action)continue;let s=!1;for(let i=e-1;i>=0;i--){let e=o[i];if(!e8(e))continue;let r=t.has(e.sha)?"drop":e.action;if("drop"!==r&&"squash"!==r&&"fixup"!==r){s=!0;break}}s||i.push(r.sha)}return i}handleKeyboardMove(e,t,i){e.preventDefault(),e.stopPropagation();let o=this._sortedEntries[t];if(!o)return;let r=this.isDownwardKey(i),s=r===this.ascending?"down":"up";if(this.selectedIds.has(o.id)&&this.selectedIds.size>1){let e=Array.from(this.selectedIds);this.pendingFocusId=o.id,this._stateProvider.shiftEntries(e,s),this.refreshIndices(),this._ipc.sendCommand(tn,{ids:e,direction:s})}else{let e=t+(r?1:-1);if(e<0||e>=this._sortedEntries.length)return;this.executeMoveEntryBySortedIndex(t,e,r)}}handleKeyboardNavigate(e,t,i){if(!this.isNavigationKey(i))return;e.preventDefault();let o=t+(this.isDownwardKey(i)?1:-1);o<0||o>=this._sortedEntries.length||this.focusEntry(this._sortedEntries[o].id)}handleKeyboardMultiSelect(e,t,i){if(!this.isNavigationKey(i))return;e.preventDefault();let o=t+(this.isDownwardKey(i)?1:-1);if(o<0||o>=this._sortedEntries.length)return;let r=this.state?.onto?.sha,s=this._sortedEntries[o].id;if(s===r)return;this.anchoredEntryId||=this._sortedEntries[t].id;let a=this._idToSortedIndex.get(this.anchoredEntryId)??t,c=Math.min(a,o),h=Math.max(a,o),p=new FilterMapIterator(this._sortedEntries.slice(c,h+1),e=>e.id!==r?e.id:void 0);this.pendingFocusId=s,this.selectedIds=new Set(p)}isNavigationKey(e){return"ArrowUp"===e||"ArrowDown"===e||"j"===e||"k"===e||"J"===e||"K"===e}isDownwardKey(e){return"ArrowDown"===e||"j"===e||"J"===e}focusEntry(e){if(e===this.state?.onto?.sha)return;this.focusedEntryId=e;let t=this._idToSortedIndex.get(e)??-1;if(-1===t)return;let i=this._virtualizer;i?.scrollToIndex&&(i.scrollToIndex(t,"nearest"),requestAnimationFrame(()=>{let t=this.getEntryElement(e);t?.shadowRoot?.querySelector(".entry")?.focus()}))}onOrderToggle(){this._ipc.sendCommand(tt,{ascending:!this.ascending})}onStartClicked(){this._ipc.sendCommand(e9,void 0)}markConflictDetectionStale(){this.conflictDetectionStale=!0}onAbortClicked(){this._ipc.sendCommand(e3,void 0)}onContinueClicked(){this._ipc.sendCommand(e6,void 0)}onSkipClicked(){this._ipc.sendCommand(e4,void 0)}onSwitchClicked(){this._ipc.sendCommand(te,void 0)}onSearch(){this._ipc.sendCommand(e7,void 0)}onRecomposeCommitsClicked(){this._ipc.sendCommand(td,void 0)}computeSquashInfo(e){let t=new Set,i=new Set;for(let o=0;o<e.length;o++){let r=e[o];if(e8(r)&&("squash"===r.action||"fixup"===r.action))for(let r=o-1;r>=0;r--){let o=e[r];if(!e8(o)){i.add(o.id);continue}if("drop"!==o.action&&"squash"!==o.action&&"fixup"!==o.action){t.add(o.sha);break}}}return{targets:t,squashing:i}}refreshIndices(){let{entries:e,doneEntries:t}=this,i=this.state?.onto,o=+(null!=i)+t.length,r=t.length>0?[...t,...e]:e;if(i&&!r.some(e=>e.sha===i.sha)){let e={type:"commit",id:i.sha,action:"pick",sha:i.sha,message:i.commit?.message??"Base commit",line:0,commit:i.commit};this._sortedEntries=this.ascending?[e,...r]:[e,...r].toReversed()}else this._sortedEntries=this.ascending?r:r.toReversed();this._editableStartOffset=this.ascending?o:0,this._idToSortedIndex.clear();for(let e=0;e<this._sortedEntries.length;e++)this._idToSortedIndex.set(this._sortedEntries[e].id,e)}willUpdate(e){let t=this.entries;this._oldestCommitId=t.find(e8)?.sha;let i=this.computeSquashInfo(t);if(this._squashTargetIds=i.targets,this._squashingIds=i.squashing,this.refreshIndices(),null==this.focusedEntryId&&this._sortedEntries.length>0){let e,t=this.state?.onto?.sha;if(this.isActiveRebase&&this.doneEntries.length>0&&(e=this.doneEntries[this.doneEntries.length-1].id),!e){let i=this._sortedEntries.find(e=>e.id!==t);e=i?.id}e&&(this.focusedEntryId=e,this.selectedIds=new Set([e]),this.anchoredEntryId=e,this.pendingFocusId=e)}if(null==this.pendingFocusId){let e=this.shadowRoot?.activeElement?.closest("gl-rebase-entry");this.pendingFocusId=e?.dataset.id}}updated(e){if(this._conflictIndicator&&(this._conflictIndicatorLoading=this._conflictIndicator.isLoading??!1,this._conflictIndicatorHasConflicts=this._conflictIndicator.hasConflicts??!1),!this.pendingFocusId)return;let t=this.pendingFocusId;this.pendingFocusId=void 0,this.focusEntry(t)}render(){if(!this.state?.entries)return ex;let e=this.state.isReadOnly??!1,t=this.isActiveRebase,i=this.isEmptyOrNoop;return ev`
			<div class="container ${e?"read-only":""} ${t?"active-rebase":""}">
				${eF([this.state.branch,this.state.onto,this.state.entries.length,this.ascending,e,this.rebaseStatus],()=>this.renderHeader())}
				${e?this.renderReadOnlyBanner():ex}
				${!i?ev`<lit-virtualizer
							role="list"
							class="entries scrollable ${this.ascending?"ascending":"descending"}${this.rebaseStatus?.hasConflicts?" has-conflicts":""}"
							autofocus
							@click=${this.onListClick}
							@keydown=${this.onListKeyDown}
							@dragstart=${this.onDragStart}
							@dragend=${this.onDragEnd}
							@dragover=${this.onDragOver}
							@dragleave=${this.onDragLeave}
							@drop=${this.onDrop}
							scroller
							.items=${this._sortedEntries}
							.keyFunction=${this.virtualizerKeyFn}
							.layout=${(0,x.flow)({direction:"vertical"})}
							.renderItem=${this.virtualizerRenderFn}
						></lit-virtualizer>`:!e?ev`<div class="entries-empty">No commits to rebase</div>`:ex}
				${this.renderFooter()}
			</div>
		`}renderReadOnlyBanner(){return ev`<gl-banner
			class="read-only-banner"
			display="outline"
			layout="responsive"
			body="This rebase contains merge commits and cannot be edited here. Switch to the text editor to make changes."
			primary-button="Switch to Text Editor"
			@gl-banner-primary-click=${this.onSwitchClicked}
		></gl-banner>`}renderConflictIndicator(){return!this.isActiveRebase&&this.state?.branch&&this.state?.onto?ev`<gl-rebase-conflict-indicator
			id="header-conflict-indicator"
			class="conflict-indicator"
			.branch=${this.state.branch}
			.onto=${this.state.onto.sha}
			.stale=${this.conflictDetectionStale}
		></gl-rebase-conflict-indicator>`:ex}renderRebaseBanner(){let e,t=this.rebaseStatus;if(!t)return ex;let i=t.currentCommit,o=t.pauseReason,r=this.state?.revealLocation==="graph"?"Open in Commit Graph":"Open in Inspect View",s=i?ev`<gl-tooltip hoist content=${r}>
					<gl-commit-sha
						.sha=${i}
						tabindex="0"
						@click=${this.onCurrentCommitClick}
						@keydown=${this.onCurrentCommitKeydown}
						style="cursor: pointer"
					></gl-commit-sha>
				</gl-tooltip>`:ex;switch(o){case"break":e=ev`Rebase paused at breakpoint`;break;case"conflict":e=i?ev`Rebase paused due to conflicts at ${s}`:ev`Rebase paused due to conflicts`;break;case"exec":e=ev`Rebase paused due to exec failure`;break;case"edit":e=i?ev`Rebase paused for editing at ${s}`:ev`Rebase paused for editing`;break;case"reword":e=i?ev`Rebase paused for rewording at ${s}`:ev`Rebase paused for rewording`;break;default:e=i?ev`Rebase paused at ${s}`:ev`Rebase paused`}return ev`<div class="rebase-banner ${"conflict"===o?"has-conflicts":""}">
			<code-icon icon="${"conflict"===o?"warning":"edit"===o||"break"===o||"exec"===o?"debug-pause":"debug-continue"}"></code-icon>
			<span class="rebase-status">${e}</span>
			${"conflict"===o?ev`<gl-tooltip hoist content="Show Conflicts">
						<a class="rebase-action-link" href="${this.showConflictsCommandUrl}">Show conflicts</a>
					</gl-tooltip>`:ex}
			<span class="rebase-progress">(${t.currentStep}/${t.totalSteps})</span>
			<span class="rebase-remaining">${t.totalSteps-t.currentStep} remaining</span>
		</div>`}get showConflictsCommandUrl(){var e,t;return e=this._webview.webviewId,t=this._webview.webviewInstanceId,`command:gitlens.pausedOperation.showConflicts:rebase?${encodeURIComponent(JSON.stringify({webview:e,webviewInstance:t,...void 0}))}`}renderEntry(e,t){let i=e.id,o=0===t,r=t===this._sortedEntries.length-1,s=e.done??!1,a=this.rebaseStatus?.currentCommit,c="sha"in e&&null!=a&&e.sha?.startsWith(a);return"command"===e.type?ev`<gl-rebase-entry
				data-id=${i}
				.entry=${e}
				?isFirst=${o}
				?isLast=${r}
				?isDone=${s}
				?isCurrent=${c??!1}
				?isSelected=${this.selectedIds.has(i)}
				?isSquashing=${this._squashingIds.has(i)}
				@entry-select=${this.onEntrySelect}
			></gl-rebase-entry>`:ev`<gl-rebase-entry
			data-id=${i}
			.entry=${e}
			.authors=${this.state.authors}
			.revealLocation=${this.state.revealLocation}
			?isBase=${e.sha===this.state?.onto?.sha}
			?isFirst=${o}
			?isLast=${r}
			?isDone=${s}
			?isCurrent=${c??!1}
			?isOldest=${e.sha===this._oldestCommitId}
			?isSelected=${this.selectedIds.has(i)}
			?isSquashTarget=${this._squashTargetIds.has(i)}
			@action-changed=${this.onActionChanged}
			@entry-select=${this.onEntrySelect}
			@gl-reveal-commit=${this.onRevealCommit}
		></gl-rebase-entry>`}renderHeader(){return ev`<header tabindex="-1">
			<div class="header__row">
				<h1 class="header-title">GitLens Interactive Rebase</h1>
				<div class="header-info">${this.renderSubhead()}</div>
				<div class="header-actions">
					${this.renderConflictIndicator()}
					<gl-button
						class="header-toggle"
						appearance="toolbar"
						density="compact"
						tooltip="${this.ascending?"Showing Oldest Commits First":"Showing Newest Commits First"}"
						@click=${this.onOrderToggle}
					>
						<code-icon slot="prefix" icon="sort-precedence"></code-icon>
						<code-icon icon="${this.ascending?"arrow-up":"arrow-down"}"></code-icon>
					</gl-button>
				</div>
			</div>
			${this.isActiveRebase?this.renderRebaseBanner():ex}
		</header>`}renderSubhead(){if(!this.state)return ex;let e=this.doneEntries.filter(e=>"commit"===e.type).length,t=this.state.entries.filter(e=>"commit"===e.type).length,i=e+t,o="graph"===this.state.revealLocation?"Open in Commit Graph":"Open in Inspect View";return ev`
			<gl-tooltip hoist content=${o}>
				<gl-branch-name
					.name=${this.state.branch}
					tabindex="0"
					@click=${this.onBranchClick}
					@keydown=${this.onBranchKeydown}
					style="cursor: pointer"
				></gl-branch-name>
			</gl-tooltip>
			${this.state.onto?ev`<span class="header-onto"
						>onto
						<gl-tooltip hoist content=${o}>
							<gl-commit-sha
								.sha=${this.state.onto.sha}
								tabindex="0"
								@click=${this.onOntoClick}
								@keydown=${this.onOntoKeydown}
								style="cursor: pointer"
							></gl-commit-sha>
						</gl-tooltip>
					</span>`:ex}
			<span class="header-count"
				>${this.isActiveRebase?`${e}/${i} commits`:eZ("commit",t)}</span
			>
		`}renderFooter(){let e=this.isActiveRebase,t=this.rebaseStatus?.hasConflicts??!1;return ev`<footer>
			<div class="shortcuts">
				<code-icon icon="keyboard"></code-icon>
				<span class="shortcut"><kbd class="word">p</kbd><span>ick</span></span>
				<span class="shortcut"><kbd class="word">r</kbd><span>eword</span></span>
				<span class="shortcut"><kbd class="word">e</kbd><span>dit</span></span>
				<span class="shortcut"><kbd class="word">s</kbd><span>quash</span></span>
				<span class="shortcut"><kbd class="word">f</kbd><span>ixup</span></span>
				<span class="shortcut"><kbd class="word">d</kbd><span>rop</span></span>
				<span class="shortcut"><kbd>alt</kbd> <kbd>↑↓</kbd><span class="label">move</span></span>
				<span class="shortcut"><kbd>/</kbd><span class="label">search</span></span>
			</div>
			<div class="actions">
				${this.renderRecomposeAction(e)}
				${e?this.renderActiveRebaseActions(t):this.renderStartRebaseActions()}
			</div>
		</footer>`}renderStartRebaseActions(){let e,t,i;if(this._conflictIndicator){let o=this._conflictIndicatorLoading,r=this._conflictIndicatorHasConflicts,s=this.conflictDetectionStale;o?(t="loading",i="Checking for conflicts..."):r?(e="warning",t="warning",i="Start Rebase (Conflicts Detected)"):s||(e="success",t="check",i="Start Rebase (No Conflicts Detected)")}return ev`<gl-button
				?disabled=${!this.state?.entries?.length||this.state?.isReadOnly}
				variant=${e??ex}
				tooltip=${i??ex}
				@click=${this.onStartClicked}
			>
				<span
					>Start Rebase
					${t?ev`<code-icon
								slot="label"
								icon=${t}
								modifier=${("loading"===t?"spin":void 0)??ex}
							></code-icon>`:ex}</span
				>
				<span slot="suffix" class="button-shortcut">Ctrl+Enter</span>
			</gl-button>
			<gl-button appearance="secondary" @click=${this.onAbortClicked}>Abort</gl-button>`}renderRecomposeAction(e){let t=this.state?.isInPlace??!1;return ev`<gl-popover-confirm
			heading="Abort Rebase &amp; Recompose"
			message=${t?"Let AI intelligently reorganize these commits with clearer messages and better logical grouping.":"Let AI intelligently reorganize these commits with clearer messages and better logical grouping. <br><br> After recomposition, simply rebase again to apply these commits onto the target branch."}
			confirm="Abort &gt; Recompose"
			confirm-variant=${(e?"danger":void 0)??ex}
			initial-focus=${e?"cancel":"confirm"}
			icon=${e?"error":"warning"}
			@gl-confirm=${this.onRecomposeCommitsClicked}
		>
			<gl-button slot="anchor" appearance="secondary" tooltip="Open Commit Composer &amp; Recompose using AI">
				<code-icon slot=${(e?void 0:"prefix")??ex} icon="sparkle"></code-icon>
				${e?ex:"Recompose..."}
			</gl-button>
		</gl-popover-confirm>`}renderActiveRebaseActions(e){return ev`
			<gl-button @click=${this.onContinueClicked} ?disabled=${e}>
				<span>Continue</span>
				<span slot="suffix" class="button-shortcut">Ctrl+Enter</span>
			</gl-button>
			<gl-button appearance="secondary" @click=${this.onSkipClicked}>Skip</gl-button>
			<gl-button variant="danger" @click=${this.onAbortClicked}>Abort</gl-button>
		`}};n2.styles=[iF,iN],n0([eM("lit-virtualizer")],n2.prototype,"_virtualizer",2),n0([eM("#header-conflict-indicator")],n2.prototype,"_conflictIndicator",2),n0([eL()],n2.prototype,"_conflictIndicatorLoading",2),n0([eL()],n2.prototype,"_conflictIndicatorHasConflicts",2),n0([eL()],n2.prototype,"selectedIds",2),n0([eL()],n2.prototype,"conflictDetectionStale",2),n2=n0([eP("gl-rebase-editor")],n2);export{n2 as GlRebaseEditor};