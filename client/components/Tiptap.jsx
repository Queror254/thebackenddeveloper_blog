'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

const Tiptap = () => {
  const editor = useEditor({
  extensions: [
    StarterKit,
    Document,
    Paragraph,
    Text,
  ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <EditorContent className='text-gray-900' name='post_content' id='post_content' editor={editor} />
  )
}

export default Tiptap