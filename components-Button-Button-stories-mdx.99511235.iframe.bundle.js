/*! For license information please see components-Button-Button-stories-mdx.99511235.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_digitalservice4germany_digital_service_library=self.webpackChunk_digitalservice4germany_digital_service_library||[]).push([[611],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/components/Button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Button_stories,example:()=>example,link:()=>Button_stories_link,longText:()=>longText,longWord:()=>longWord,primary:()=>primary,primaryDisabled:()=>primaryDisabled,primarySmall:()=>primarySmall,primarySmallDisabled:()=>primarySmallDisabled,primaryTiny:()=>primaryTiny,primaryTinyDisabled:()=>primaryTinyDisabled,secondary:()=>secondary,secondaryDisabled:()=>secondaryDisabled,secondarySmall:()=>secondarySmall,secondarySmallDisabled:()=>secondarySmallDisabled,secondaryTiny:()=>secondaryTiny,secondaryTinyDisabled:()=>secondaryTinyDisabled,tertiary:()=>tertiary,tertiaryDisabled:()=>tertiaryDisabled,tertiarySmall:()=>tertiarySmall,tertiarySmallDisabled:()=>tertiarySmallDisabled,tertiaryTiny:()=>tertiaryTiny,tertiaryTinyDisabled:()=>tertiaryTinyDisabled});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),classnames=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),prefix="Invariant failed";function invariant(condition,message){if(!condition)throw new Error(prefix)}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["secondary","tertiary","small","tiny","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Button(props){var secondary=props.secondary,tertiary=props.tertiary,small=props.small,tiny=props.tiny,children=props.children,rest=_objectWithoutProperties(props,_excluded),Component=props.href?"a":"button";invariant(!(!0===secondary&&!0===tertiary)),invariant(!(!0===small&&!0===tiny));var className=classnames_default()("inline-block px-6 leading-[1.58] font-bold max-w-full break-words focus:outline focus:outline-4 focus:outline-darkGreen disabled:bg-darkGrey-300 disabled:text-darkGrey-700 disabled:cursor-not-allowed",{"text-black bg-yellow-900 hover:bg-dustyYellow focus:bg-yellow-800 active:bg-yellow-600":!secondary&&!tertiary,"text-blue-900 bg-white shadow-[inset_0_0_0_0.0625rem_currentColor] hover:bg-blue-100 active:bg-blue-50 disabled:shadow-none":secondary,"text-white bg-darkGrey-900 hover:bg-dustyGrey active:bg-darkGrey-800":tertiary,"py-5 text-lg":!small&&!tiny,"py-3 text-base":small,"py-2 text-sm":tiny},props.className);return(0,jsx_runtime.jsx)(Component,Object.assign({},rest,{className,children}))}Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{secondary:{defaultValue:null,description:"indicates an alternative to the primary action",name:"secondary",required:!1,type:{name:"boolean"}},tertiary:{defaultValue:null,description:"indicates a miscellaneous action",name:"tertiary",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"small size",name:"small",required:!1,type:{name:"boolean"}},tiny:{defaultValue:null,description:"tiny size",name:"tiny",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>(0,esm.kt)(Button_Button,_extends({},args,{mdxType:"Button"})),layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Atoms/Button",component:Button_Button,mdxType:"Meta"}),(0,esm.kt)("h1",{id:"button"},"Button"),(0,esm.kt)("p",null,(0,esm.kt)("a",{parentName:"p",href:"https://github.com/digitalservice4germany/digital-service-library/tree/main/src/components/Button",target:"_blank",rel:"nofollow noopener noreferrer"},"Source code")," | ",(0,esm.kt)("a",{parentName:"p",href:"https://www.figma.com/file/49Gxm2IajuwbGhj37zu9x0/Angie?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer"},"Figma")),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"<Button>")," is a drop-in replacement for ",(0,esm.kt)("inlineCode",{parentName:"p"},"<button>"),". You can use all the properties that you are used to. Only exception is ",(0,esm.kt)("inlineCode",{parentName:"p"},"className"),": when you set ",(0,esm.kt)("inlineCode",{parentName:"p"},"className"),", your value will be appended to the existing ",(0,esm.kt)("inlineCode",{parentName:"p"},"className")," of ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Button>"),". This is handy to add margins, for example. In addition you can use the properties from the table below to configure the visual appearance. Use either ",(0,esm.kt)("inlineCode",{parentName:"p"},"secondary")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"tertiary"),", not both. Use either ",(0,esm.kt)("inlineCode",{parentName:"p"},"small")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"tiny"),", not both."),(0,esm.kt)(dist_esm.$4,{of:Button_Button,mdxType:"ArgsTable"}),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Example",args:{small:!0,type:"submit",className:"mb-2",onClick:()=>alert("clicked"),children:"Example"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h2",{id:"links-which-look-like-buttons"},"Links which look like buttons"),(0,esm.kt)("p",null,"The component is overloaded. If you pass a ",(0,esm.kt)("inlineCode",{parentName:"p"},"href")," property and optionally other properties from ",(0,esm.kt)("inlineCode",{parentName:"p"},"<a>"),", the ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Button>")," component will render an ",(0,esm.kt)("inlineCode",{parentName:"p"},"<a>")," link and not a ",(0,esm.kt)("inlineCode",{parentName:"p"},"<button>"),". The important piece is, that you pass a ",(0,esm.kt)("inlineCode",{parentName:"p"},"href")," property. Obviously you can then only use properties from ",(0,esm.kt)("inlineCode",{parentName:"p"},"<a>"),"."),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Link",args:{href:"https://digitalservice.bund.de",target:"_blank",rel:"noopener",children:"This is a link"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h2",{id:"visual-overview"},"Visual overview"),(0,esm.kt)("h3",{id:"primary-button-button"},"Primary button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Primary",args:{children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Primary Disabled",args:{disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"secondary-button-button-secondary"},"Secondary button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button secondary>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Secondary",args:{secondary:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Secondary Disabled",args:{secondary:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"tertiary-button-button-tertiary"},"Tertiary button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button tertiary>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Tertiary",args:{tertiary:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Tertiary Disabled",args:{tertiary:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"primary-small-button-button-small"},"Primary Small button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button small>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Primary Small",args:{small:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Primary Small Disabled",args:{small:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"secondary-small-button-button-secondary-small"},"Secondary Small button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button secondary small>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Secondary Small",args:{small:!0,secondary:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Secondary Small Disabled",args:{small:!0,secondary:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"tertiary-small-button-button-tertiary-small"},"Tertiary Small button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button tertiary small>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Tertiary Small",args:{small:!0,tertiary:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Tertiary Small Disabled",args:{small:!0,tertiary:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"primary-tiny-button-button-tiny"},"Primary Tiny button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button tiny>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Primary Tiny",args:{tiny:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Primary Tiny Disabled",args:{tiny:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"secondary-tiny-button-button-secondary-tiny"},"Secondary Tiny button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button secondary tiny>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Secondary Tiny",args:{tiny:!0,secondary:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Secondary Tiny Disabled",args:{tiny:!0,secondary:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"tertiary-tiny-button-button-tertiary-tiny"},"Tertiary Tiny button (",(0,esm.kt)("inlineCode",{parentName:"h3"},"<Button tertiary tiny>"),")"),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Tertiary Tiny",args:{tiny:!0,tertiary:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({})),(0,esm.kt)(dist_esm.oG,{name:"Tertiary Tiny Disabled",args:{tiny:!0,tertiary:!0,disabled:!0,children:"Registrieren"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h2",{id:"edge-cases"},"Edge cases"),(0,esm.kt)("h3",{id:"long-text"},"Long text"),(0,esm.kt)("p",null,"Given a small device and a long button text it might happen that the text does not fit into one line."),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Long text",args:{children:"Der DigitalService4Germany entwickelt digitale Lösungen für und mit der Bundesverwaltung. Im Zentrum stehen die Bedürfnisse der Nutzerinnen und Nutzer. Unser Ziel: Dienstleistungen, die besser für alle funktionieren."},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"long-word"},"Long word"),(0,esm.kt)("p",null,"Some German words are really long and might not fit in one line on a small device. The word should be broken in several lines even if the breaking point is not optimal."),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Long word",args:{children:"DerDigitalService4GermanyentwickeltdigitaleLösungenfürundmitderBundesverwaltung.ImZentrumstehendieBedürfnissederNutzerinnenundNutzer.UnserZiel:Dienstleistungen,diebesserfürallefunktionieren."},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h2",{id:"a11y"},"A11y"),(0,esm.kt)("p",null,"TODO"),(0,esm.kt)("h2",{id:"resources"},"Resources"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"https://github.com/alphagov/govuk-design-system-backlog/issues/34",target:"_blank",rel:"nofollow noopener noreferrer"},"GOV.UK Design System: Button component (GitHub issue)"))))}MDXContent.isMDXComponent=!0;const example=Template.bind({});example.storyName="Example",example.args={small:!0,type:"submit",className:"mb-2",onClick:()=>alert("clicked"),children:"Example"},example.parameters={storySource:{source:"args => <Button {...args} />"}};const Button_stories_link=Template.bind({});Button_stories_link.storyName="Link",Button_stories_link.args={href:"https://digitalservice.bund.de",target:"_blank",rel:"noopener",children:"This is a link"},Button_stories_link.parameters={storySource:{source:"args => <Button {...args} />"}};const primary=Template.bind({});primary.storyName="Primary",primary.args={children:"Registrieren"},primary.parameters={storySource:{source:"args => <Button {...args} />"}};const primaryDisabled=Template.bind({});primaryDisabled.storyName="Primary Disabled",primaryDisabled.args={disabled:!0,children:"Registrieren"},primaryDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const secondary=Template.bind({});secondary.storyName="Secondary",secondary.args={secondary:!0,children:"Registrieren"},secondary.parameters={storySource:{source:"args => <Button {...args} />"}};const secondaryDisabled=Template.bind({});secondaryDisabled.storyName="Secondary Disabled",secondaryDisabled.args={secondary:!0,disabled:!0,children:"Registrieren"},secondaryDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const tertiary=Template.bind({});tertiary.storyName="Tertiary",tertiary.args={tertiary:!0,children:"Registrieren"},tertiary.parameters={storySource:{source:"args => <Button {...args} />"}};const tertiaryDisabled=Template.bind({});tertiaryDisabled.storyName="Tertiary Disabled",tertiaryDisabled.args={tertiary:!0,disabled:!0,children:"Registrieren"},tertiaryDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const primarySmall=Template.bind({});primarySmall.storyName="Primary Small",primarySmall.args={small:!0,children:"Registrieren"},primarySmall.parameters={storySource:{source:"args => <Button {...args} />"}};const primarySmallDisabled=Template.bind({});primarySmallDisabled.storyName="Primary Small Disabled",primarySmallDisabled.args={small:!0,disabled:!0,children:"Registrieren"},primarySmallDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const secondarySmall=Template.bind({});secondarySmall.storyName="Secondary Small",secondarySmall.args={small:!0,secondary:!0,children:"Registrieren"},secondarySmall.parameters={storySource:{source:"args => <Button {...args} />"}};const secondarySmallDisabled=Template.bind({});secondarySmallDisabled.storyName="Secondary Small Disabled",secondarySmallDisabled.args={small:!0,secondary:!0,disabled:!0,children:"Registrieren"},secondarySmallDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const tertiarySmall=Template.bind({});tertiarySmall.storyName="Tertiary Small",tertiarySmall.args={small:!0,tertiary:!0,children:"Registrieren"},tertiarySmall.parameters={storySource:{source:"args => <Button {...args} />"}};const tertiarySmallDisabled=Template.bind({});tertiarySmallDisabled.storyName="Tertiary Small Disabled",tertiarySmallDisabled.args={small:!0,tertiary:!0,disabled:!0,children:"Registrieren"},tertiarySmallDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const primaryTiny=Template.bind({});primaryTiny.storyName="Primary Tiny",primaryTiny.args={tiny:!0,children:"Registrieren"},primaryTiny.parameters={storySource:{source:"args => <Button {...args} />"}};const primaryTinyDisabled=Template.bind({});primaryTinyDisabled.storyName="Primary Tiny Disabled",primaryTinyDisabled.args={tiny:!0,disabled:!0,children:"Registrieren"},primaryTinyDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const secondaryTiny=Template.bind({});secondaryTiny.storyName="Secondary Tiny",secondaryTiny.args={tiny:!0,secondary:!0,children:"Registrieren"},secondaryTiny.parameters={storySource:{source:"args => <Button {...args} />"}};const secondaryTinyDisabled=Template.bind({});secondaryTinyDisabled.storyName="Secondary Tiny Disabled",secondaryTinyDisabled.args={tiny:!0,secondary:!0,disabled:!0,children:"Registrieren"},secondaryTinyDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const tertiaryTiny=Template.bind({});tertiaryTiny.storyName="Tertiary Tiny",tertiaryTiny.args={tiny:!0,tertiary:!0,children:"Registrieren"},tertiaryTiny.parameters={storySource:{source:"args => <Button {...args} />"}};const tertiaryTinyDisabled=Template.bind({});tertiaryTinyDisabled.storyName="Tertiary Tiny Disabled",tertiaryTinyDisabled.args={tiny:!0,tertiary:!0,disabled:!0,children:"Registrieren"},tertiaryTinyDisabled.parameters={storySource:{source:"args => <Button {...args} />"}};const longText=Template.bind({});longText.storyName="Long text",longText.args={children:"Der DigitalService4Germany entwickelt digitale Lösungen für und mit der Bundesverwaltung. Im Zentrum stehen die Bedürfnisse der Nutzerinnen und Nutzer. Unser Ziel: Dienstleistungen, die besser für alle funktionieren."},longText.parameters={storySource:{source:"args => <Button {...args} />"}};const longWord=Template.bind({});longWord.storyName="Long word",longWord.args={children:"DerDigitalService4GermanyentwickeltdigitaleLösungenfürundmitderBundesverwaltung.ImZentrumstehendieBedürfnissederNutzerinnenundNutzer.UnserZiel:Dienstleistungen,diebesserfürallefunktionieren."},longWord.parameters={storySource:{source:"args => <Button {...args} />"}};const componentMeta={title:"Atoms/Button",component:Button_Button,includeStories:["example","link","primary","primaryDisabled","secondary","secondaryDisabled","tertiary","tertiaryDisabled","primarySmall","primarySmallDisabled","secondarySmall","secondarySmallDisabled","tertiarySmall","tertiarySmallDisabled","primaryTiny","primaryTinyDisabled","secondaryTiny","secondaryTinyDisabled","tertiaryTiny","tertiaryTinyDisabled","longText","longWord"]},mdxStoryNameToKey={Example:"example",Link:"link",Primary:"primary","Primary Disabled":"primaryDisabled",Secondary:"secondary","Secondary Disabled":"secondaryDisabled",Tertiary:"tertiary","Tertiary Disabled":"tertiaryDisabled","Primary Small":"primarySmall","Primary Small Disabled":"primarySmallDisabled","Secondary Small":"secondarySmall","Secondary Small Disabled":"secondarySmallDisabled","Tertiary Small":"tertiarySmall","Tertiary Small Disabled":"tertiarySmallDisabled","Primary Tiny":"primaryTiny","Primary Tiny Disabled":"primaryTinyDisabled","Secondary Tiny":"secondaryTiny","Secondary Tiny Disabled":"secondaryTinyDisabled","Tertiary Tiny":"tertiaryTiny","Tertiary Tiny Disabled":"tertiaryTinyDisabled","Long text":"longText","Long word":"longWord"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Button_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/modules/es.array.index-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);