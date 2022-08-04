import { createApp } from "vue"
import { createPinia } from "pinia"
import VueAxios from "vue-axios"
import App from "./App.vue"
import router from "./router"
import "./assets/tailwind.css"
import axios from "axios"
import Markdown from "vue3-markdown-it"
import VMdEditor from "@kangc/v-md-editor/lib/codemirror-editor"
import "@kangc/v-md-editor/lib/style/codemirror-editor.css"
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js"
import enUS from "@kangc/v-md-editor/lib/lang/en-US"
import "@kangc/v-md-editor/lib/theme/style/github.css"

// Resources for the codemirror editor
import Codemirror from "codemirror"
// mode
import "codemirror/mode/markdown/markdown"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import "codemirror/mode/htmlmixed/htmlmixed"
import "codemirror/mode/vue/vue"
// edit
import "codemirror/addon/edit/closebrackets"
import "codemirror/addon/edit/closetag"
import "codemirror/addon/edit/matchbrackets"
// placeholder
import "codemirror/addon/display/placeholder"
// active-line
import "codemirror/addon/selection/active-line"
// scrollbar
import "codemirror/addon/scroll/simplescrollbars"
import "codemirror/addon/scroll/simplescrollbars.css"
// style
import "codemirror/lib/codemirror.css"

VMdEditor.Codemirror = Codemirror

VMdEditor.use(githubTheme)

VMdEditor.lang.use("en-US", enUS)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(Markdown)
app.use(VMdEditor)

app.mount("#app")
