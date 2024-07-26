<template>
  <tr>
      <td>{{ name }}</td>
      <td>{{ content }}</td>
      <td>
          <button>Delete</button>
      </td>
  </tr>
</template>

<script setup>
const props = defineProps(['id', 'name', 'content'])
const emit = defineEmits(['deleteNote', 'updateNote'])


</script>

<style scoped>

</style>