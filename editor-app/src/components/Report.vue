<template>
  <div>
    <h3>Report Page</h3>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive}">
      <button :class="{'is-active': isActive.bold}"> 
        Bold
      </button>
    </editor-menu-bar>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { EditorMenuBar, EditorContent, Editor } from 'tiptap';
import { Heading, Bold, Italic, Link, HardBreak } from 'tiptap-extensions';

export default {
  name: 'Report',
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        content: `<p>This is a paragraph</p>`,
        extenstions: [
          new Heading(),
          new Bold(),
          new Italic(),
          new Link(),
          new HardBreak(),
        ],
        // onInit() {
        //   console.log('Editor is initialized');
        // },
        // onUpdate({ getHTML }) {
        //   const newContent = getHTML();
        //   console.log('content', newContent);
        // }
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  created() {
    // This listeners are alternative implementation to the onInit and onUpdate methods used in the Editor constructor above.
    // This will be useful of the Editor instance initialized without a property object. 
    this.editor.on('init', () => {
      console.log('Editor init handler');
    });
    this.editor.on('update', ({ getHTML }) => {
      console.log('Editor update listen');
      console.log(getHTML());
    });
  }
}
</script>

<style scoped>

</style>
