#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var get_path_1=require("get-path"),generateSdkOperations_1=require("../generateSdkOperations"),generateSdkOperationsCli=function(){var e=process.argv.slice(2),t=e[0],r=e[1],o=t?Boolean(t):void 0,a=(0,get_path_1.getProjectRoot)(process.cwd());(0,generateSdkOperations_1.generateSdkOperations)(void 0,{dryrun:o,yarnInstallAfter:!0,manualProjectRoot:r||a}),o?console.log("Check new-operation/assets"):console.log("Check generated")};generateSdkOperationsCli();
//# sourceMappingURL=generateSdkOperations.cli.js.map