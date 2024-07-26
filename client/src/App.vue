<template>
  <table>
      <template v-for="item of notes">
          <Note :id="item.id" :name="item.name" :content="item.content"/>
      </template>
  </table>
    <div v-if="isCreation" @blur="createNote">
        <input v-model="newNoteName" type="text" placeholder="name">
        <input v-model="newNoteContent" type="text" placeholder="content">
    </div>
    <button v-else @click="onCreateClicked">+</button>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Note from "@/components/Note.vue";

const notes = ref([])
const isCreation = ref(false)

const newNoteName = ref('')
const newNoteContent = ref('')

const onCreateClicked = () => isCreation.value = true

const createNote = () => {
  if(!newNoteName.value || !newNoteContent.value) isCreation.value = false
}

onMounted( async () => {
  const response = await fetch('http://localhost:3000/notes/')
  const parsedNotes = await response.json()

  notes.value = parsedNotes;
})
</script>