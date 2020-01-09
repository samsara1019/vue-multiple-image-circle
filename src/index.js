import MultipleImageCircle from './components/MultipleImageCircle.vue'

const install = (Vue) => {
    Vue.component(MultipleImageCircle.name, MultipleImageCircle)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    MultipleImageCircle
}

export default install
