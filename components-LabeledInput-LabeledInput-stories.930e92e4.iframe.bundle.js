/*! For license information please see components-LabeledInput-LabeledInput-stories.930e92e4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_digitalservice4germany_digital_service_library=self.webpackChunk_digitalservice4germany_digital_service_library||[]).push([[334],{"./src/components/LabeledInput/LabeledInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>LabeledInput_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var InputType,Input=__webpack_require__("./src/components/Input/Input.tsx"),Label=__webpack_require__("./src/components/Label/Label.tsx"),jsx_runtime=(__webpack_require__("./src/index.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));!function(InputType){InputType.Text="text",InputType.Number="number",InputType.Email="email",InputType.Password="password",InputType.Search="search",InputType.Tel="tel",InputType.Url="url",InputType.Date="date",InputType.Month="month",InputType.Week="week",InputType.Time="time",InputType.Range="range",InputType.Reset="reset"}(InputType||(InputType={}));var LabeledInput=function LabeledInput(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.Z,{for:props.id,children:props.label}),(0,jsx_runtime.jsx)(Input.Z,Object.assign({},props))]})};const LabeledInput_LabeledInput=LabeledInput;try{LabeledInput.displayName="LabeledInput",LabeledInput.__docgenInfo={description:"",displayName:"LabeledInput",props:{id:{defaultValue:null,description:'The id of the Input - used for accessibility and should match the "for" property of the label',name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The name of the Input",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label for the Input",name:"label",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"The type of the Input",name:"type",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"placeholder for the Input",name:"placeholder",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"a change event listener",name:"onBlur",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"State of the Input",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"state whther the Input is required",name:"required",required:!1,type:{name:"boolean"}},minlength:{defaultValue:null,description:"Minimum length (number of characters) of value\ne.g. for password, search, tel, text, url",name:"minlength",required:!1,type:{name:"number"}},maxlength:{defaultValue:null,description:"maximum length (number of characters) of value\ne.g. for password, search, tel, text, url",name:"maxlength",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"minimum value for numeric types",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"maximum value for numeric types",name:"max",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LabeledInput/LabeledInput.tsx#LabeledInput"]={docgenInfo:LabeledInput.__docgenInfo,name:"LabeledInput",path:"src/components/LabeledInput/LabeledInput.tsx#LabeledInput"})}catch(__react_docgen_typescript_loader_error){}const LabeledInput_stories={title:"Atoms/LabeledInput",component:LabeledInput_LabeledInput,argTypes:{onClick:{action:"clicked"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(LabeledInput_LabeledInput,Object.assign({},args))};Template.displayName="Template";var Basic=Template.bind({});Basic.args={id:"text-input",name:"text-input",type:"text",label:"Label"},Basic.parameters={docs:{source:{code:'<Input id="example-input" name="example-input" label="Test Label" type="text" />'}}},Basic.parameters=Object.assign({storySource:{source:"(args) => (\n  <LabeledInput {...args} />\n)"}},Basic.parameters)},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Input=function Input(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",Object.assign({},props,{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex items-center justify-start px-4 py-3 bg-white border-2 border-gray-400 w-full text-black hover:border-blue-900 focus:outline focus:outline-offset-0 focus:outline-none focus:outline-yellow-800 disabled:bg-gray-200 disabled:hover:border-gray-400",props.className)}))};Input.displayName="Input";const __WEBPACK_DEFAULT_EXPORT__=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/index.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=function Label(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{htmlFor:props.for,className:"text-lg font-bold",children:props.children})};Label.displayName="Label";const __WEBPACK_DEFAULT_EXPORT__=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{for:{defaultValue:null,description:"the intended id of the input",name:"for",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The label to be shown",name:"children",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("./node_modules/core-js/internals/function-bind.js")})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);