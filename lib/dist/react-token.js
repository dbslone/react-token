!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-token"]=t(require("react")):e["react-token"]=t(e.React)}(window,function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){e.exports=n(6)()},function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(1)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={hover:!1},o.onMouseEnter=function(e){console.log("enter"),o.setState({hover:!0})},o.onMouseLeave=function(e){o.setState({hover:!1})},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.PureComponent),o(t,[{key:"render",value:function(){var e={container:{display:"inline-block",paddingLeft:8,paddingRight:8,paddingTop:3,paddingBottom:3,backgroundColor:"#000000",borderRadius:"3px",color:"rgba(255,255,255,1)",marginRight:6,marginTop:2,marginBottom:2},text:{paddingRight:10,fontWeight:400}},t=this.state.hover?{cursor:"pointer",color:"rgba(255,255,255,0.7)"}:{cursor:"pointer"};return r.default.createElement("li",{style:e.container,className:"rt-token"},r.default.createElement("span",{style:e.text,className:"rt-token-text"},this.props.text),r.default.createElement("span",{className:"rt-token-delete",style:t,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.props.onRemove},"✕"))}}]),t}();l.propTypes={onRemove:i.default.func,text:i.default.string},l.defaultProps={onRemove:function(){}},t.default=l,e.exports=t.default},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var o=function(e){};e.exports=function(e,t,n,r,i,a,u,l){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,a,u,l],p=0;(s=new Error(t.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";var o=n(5),r=n(4),i=n(3);e.exports=function(){function e(e,t,n,o,a,u){u!==i&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=l(n(1)),a=l(n(0)),u=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.keyMap={BACKSPACE:8,DOWN_ARROW:40,ENTER:13,ESC:27,UP_ARROW:38},n.onClick=function(e){n.container.contains(e.target)||n.setState({hideAutocomplete:!0})},n.focusInput=function(e){n.input.focus()},n.onFocus=function(e){n.setState({focused:!0},function(){n.props.onFocus(e)})},n.onBlur=function(e){n.setState({focused:!1},function(){n.props.onBlur(e)})},n.onKeyUp=function(e){if(e.keyCode===n.keyMap.ENTER&&n.input.value.length>0){var t=n.state.selectedAutocompleteIdx>=0?n.props.autocompleteOptions[n.state.selectedAutocompleteIdx]:n.input.value;n.setState({selectedAutocompleteIdx:-1,tokens:[].concat(s(n.state.tokens),[t]),inputValue:"",hideAutocomplete:!1},function(){n.props.onAdd(n.input.value),n.input.value=""})}else if(e.keyCode===n.keyMap.BACKSPACE&&0===n.state.inputValue.length)n.removeToken(n.state.tokens.length-1)(),n.setState({inputValue:""});else if(e.keyCode===n.keyMap.ESC)n.setState({hideAutocomplete:!0});else if(e.keyCode===n.keyMap.DOWN_ARROW&&""!==n.state.inputValue){var o=n.state.selectedAutocompleteIdx+1>=n.props.autocompleteOptions.length?0:n.state.selectedAutocompleteIdx+1;n.setState({selectedAutocompleteIdx:o})}else if(e.keyCode===n.keyMap.UP_ARROW&&""!==n.state.inputValue){var r=n.state.selectedAutocompleteIdx-1<0?n.props.autocompleteOptions.length-1:n.state.selectedAutocompleteIdx-1;n.setState({selectedAutocompleteIdx:r})}else n.setState({inputWidth:n.calcWidth(n.input.value),inputValue:n.input.value,hideAutocomplete:!1,selectedAutocompleteIdx:-1});n.props.onKeyUp(e)},n.highlightOption=function(e){return function(){n.setState({selectedAutocompleteIdx:e})}},n.selectAutoCompleteOption=function(e){return function(){n.setState({hideAutocomplete:!1,inputValue:"",selectedAutocompleteIdx:-1,tokens:[].concat(s(n.state.tokens),[n.props.autocompleteOptions[e]])},function(){n.input.value=""})}},n.removeToken=function(e){return function(){var t=n.state.tokens[e],o=n.state.tokens;o.splice(e,1),n.setState({tokens:o},function(){n.props.onRemove(t)})}},n.state={focused:!1,hideAutocomplete:!1,inputValue:"",inputWidth:null,selectedAutocompleteIdx:-1,tokens:n.props.selected},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.onClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onClick)}},{key:"calcWidth",value:function(e){var t=document.createElement("div");t.style.padding="0",t.style.width="",t.style.position="absolute",t.style.left="-9999",t.style.fontFamily='"Sofia Pro", "Helvetica", "Arial", sans-serif',t.style.fontSize="11px",t.innerText=e,this.input.parentNode.appendChild(t);var n=t.clientWidth;return this.input.parentNode.removeChild(t),n+40}},{key:"renderRequired",value:function(){var e={container:{color:"#ACACAC",fontWeight:200,overflow:"hidden",position:"absolute",right:10,top:8},span:{position:"relative",transition:"all 200ms",top:0}},t=this.state.focused||this.state.tokens.length>0?o({},e.span,{top:-20}):e.span;return i.default.createElement("div",{style:e.container},i.default.createElement("span",{style:t},"required"))}},{key:"renderTokens",value:function(){var e=this;return this.state.tokens.map(function(t,n){return i.default.createElement(u.default,{text:t,key:n,onRemove:e.removeToken(n)})})}},{key:"renderAutoComplete",value:function(){var e=this,t={container:{position:"absolute",top:"100%",left:0,paddingTop:10,paddingBottom:10,backgroundColor:"#D6D5D5",color:"#000000",zIndex:1,width:"100%",borderRadius:"3px",cursor:"pointer"},option:{paddingLeft:10,paddingRight:10,paddingTop:2,paddingBottom:2},highlighted:{backgroundColor:"#E4E2E2"}};return i.default.createElement("div",{style:t.container,className:"rt-suggestions"},this.props.autocompleteOptions.map(function(n,r){var a=e.state.selectedAutocompleteIdx===r?o({},t.option,t.highlighted):t.option;return i.default.createElement("div",{key:"autocomplete-"+r,onClick:e.selectAutoCompleteOption(r),onMouseOver:e.highlightOption(r),style:a},n)}))}},{key:"render",value:function(){var e=this,t={container:{width:"100%",border:"1px solid #F1F1F1",padding:5,fontFamily:'"Sofia Pro", "Helvetica", "Arial", sans-serif'},ul:{backgroundColor:"#F1F1F1",border:"1px solid #F1F1F1",borderRadius:"3px",cursor:"text",display:"flex",flexWrap:"wrap",fontSize:12,fontWeight:600,letterSpacing:0,lineHeight:"24px",listStyle:"none",padding:"4px 6px",position:"relative",willChange:"transform",zIndex:1},li:{display:"inline-flex"},inputContainer:{display:"inline-flex",position:"relative"},input:{backgroundColor:"#F1F1F1",fontFamily:'"Sofia Pro", "Helvetica", "Arial", sans-serif',paddingTop:1,paddingLeft:1,paddingBottom:1,paddingRight:20,width:""!==this.state.inputValue?this.state.inputWidth:"100%",border:"none",outline:"none",marginTop:9,marginBottom:9,boxSizing:"border-box"}},n=""!==this.state.inputValue&&this.props.autocompleteOptions.length>0&&!this.state.hideAutocomplete;return i.default.createElement("div",{style:t.container,className:"rt-container",ref:function(t){return e.container=t}},i.default.createElement("ul",{style:t.ul,onClick:this.focusInput},this.renderTokens(),i.default.createElement("li",{style:t.li},i.default.createElement("div",{style:t.inputContainer},i.default.createElement("input",{disabled:this.props.disabled,ref:function(t){return e.input=t},type:"text",role:"combobox",style:t.input,onKeyUp:this.onKeyUp,placeholder:this.props.placeholder,onFocus:this.onFocus,onBlur:this.onBlur}))),n&&this.renderAutoComplete(),this.renderRequired()))}}]),t}();c.propTypes={autocompleteOptions:a.default.array,disabled:a.default.bool,onAdd:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyUp:a.default.func,onRemove:a.default.func,placeholder:a.default.string,required:a.default.bool,selected:a.default.array},c.defaultProps={autocompleteOptions:[],disabled:!1,onAdd:function(){},onBlur:function(){},onFocus:function(){},onKeyUp:function(){},onRemove:function(){},placeholder:"",required:!1,selected:[]},e.exports=c}])});