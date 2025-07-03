import hljs from "highlight.js";
import {rigz} from '@rigz-lang/highlight.js'

hljs.registerLanguage('rigz', rigz);

export {rigz, hljs as default}