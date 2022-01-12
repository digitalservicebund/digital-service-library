/*! For license information please see components-Input-Input-stories.79bd0416.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_digitalservice4germany_digital_service_library=self.webpackChunk_digitalservice4germany_digital_service_library||[]).push([[195],{"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Basic:()=>Basic,Disabled:()=>Disabled,Numeric:()=>Numeric,Placeholder:()=>Placeholder});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/Input.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Input",component:_Input__WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{onClick:{action:"clicked"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_3__.Z,Object.assign({},args))};Template.displayName="Template";var Basic=Template.bind({});Basic.args={id:"text-input",name:"text-input",type:"text"},Basic.parameters={docs:{source:{code:'<Input id="example-input" name="example-input" type="text" />'}}};var Disabled=Template.bind({});Disabled.args={id:"disabled-text-input",name:"disabled-text-input",disabled:123,bla:"23",className:"text-red",type:"bla"},Disabled.parameters={docs:{source:{code:'<Input id="disabled-input" name="test-input" type="text" disabled={true} />'}}};var Numeric=Template.bind({});Numeric.args={id:"numeric-text-input",name:"numeric-text-input",type:"number"},Numeric.parameters={docs:{source:{code:'<Input id="test-numeric-input" name="test-input" type="text" />'}}};var Placeholder=Template.bind({});Placeholder.args={id:"placeholder-text-input",name:"placeholder-text-input",type:"search",placeholder:"Search..."},Placeholder.parameters={docs:{source:{code:'<Input id="test-text-input" name="test-input" placeholder="Search..." type="text" disabled={true} />'}}}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Input=function Input(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",Object.assign({},props,{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex items-center justify-start px-4 py-3 bg-white border-2 border-gray-400 w-full text-black hover:border-blue-900 focus:outline focus:outline-offset-0 focus:outline-none focus:outline-yellow-800 disabled:bg-gray-200 disabled:hover:border-gray-400",props.className)}))};Input.displayName="Input";const __WEBPACK_DEFAULT_EXPORT__=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("./node_modules/core-js/internals/function-bind.js")})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);