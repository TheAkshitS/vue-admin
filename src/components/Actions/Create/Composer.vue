<script>
import Create from './Create.vue';
import composeView from '../compose';

export default {
  name: 'CreateComposer',
  functional: true,
  render(createElement, context) {
    return composeView(createElement, context, { component: Create });
  },
};
</script>
