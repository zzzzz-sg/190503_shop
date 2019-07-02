import Vue from 'vue'

import format from 'date-fns/format'
Vue.filter('date-format', (value) => {
    return format(value, 'YYYY-MM-DD HH:mm:ss')
})
