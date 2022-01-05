"use strict";(self.webpackChunk_digitalservice4germany_digital_service_library=self.webpackChunk_digitalservice4germany_digital_service_library||[]).push([[534],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/stories/Changelog.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_CHANGELOG_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./CHANGELOG.md"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Docs/Changelog",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(_CHANGELOG_md__WEBPACK_IMPORTED_MODULE_7__,{mdxType:"Changelog"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Docs/Changelog",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.kt)(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/core-js/modules/es.array.index-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),$IndexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),un$IndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!un$IndexOf&&1/un$IndexOf([1],1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?un$IndexOf(this,searchElement,fromIndex)||0:$IndexOf(this,searchElement,fromIndex)}})},"./CHANGELOG.md":module=>{module.exports="# Changelog\n\n## 0.0.19\n\nFeatures:\n\n- color scheme updated for navigation, content and footer\n\n## 0.0.18\n\nBugfixes:\n\n- Update hover and active state for default buttons\n\n## 0.0.17\n\nBugfixes:\n\n- update version file format\n\n## 0.0.16\n\nBugfixes:\n\n- rewrite button class to not use string modifications\n\n## 0.0.15\n\nTooling:\n\n- disable husky git hooks in CI\n\n## 0.0.14\n\nTooling:\n\n- added a version identifier\n\n## 0.0.13\n\nBugfixes:\n\n- import issue has been fixed\n\n## 0.0.12\n\nFeatures:\n\n- updated colors to match the new design language\n- updated the button style to match our new design guidelines\n- scalable Icons added\n\nShowcase:\n\n- added pseudo-class support to storybook documentation\n- a11y test for each story within the storybook documentation to catch/fix issues early on\n\nTooling:\n\n- added codecov reporting to transparently show the testing state of this package\n\n## 0.0.10\n\nFeatures:\n\n- atoms added:\n  - basic input type\n  - basic label component\n  - compound LabeledInput component incorporating a label and an input\n- Layout patterns added:\n  - Layout\n  - Navigation\n  - Main\n  - Footer\n- documentation improvements\n\n## 0.0.9\n\nImprovements:\n\n- Dependencies updated\n\n## 0.0.8\n\nImprovements:\n\n- Dependencies updated\n\n## 0.0.7\n\nFix:\n\n- added generated css back into the module\n\n## 0.0.4\n\nFeatures:\n\n- added typescript types\n\n## 0.0.3\n\nTooling:\n\n- Updated NPM Publish github action\n\n## 0.0.2\n\nFeatures:\n\n- onClick property added to the button\n\nTooling:\n\n- CI setup\n\n## 0.0.1\n\nFeatures:\n\n- Initial version\n"}}]);