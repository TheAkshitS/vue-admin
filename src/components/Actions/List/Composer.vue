<script>
import List from './List.vue'
import composeView from '../compose'

export default {
  name: 'ListComposer',
  functional: true,
  render(createElement, context) {
    return composeView(createElement, context, { component: List })
  },
}
</script>
