import { writeFile } from 'fs/promises';
import { join } from 'path';

export default function UploadFile() {
  async function upload(data: FormData) {
    'user server'

    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      throw new Error('No file')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join('/', 'tmp', file.name)
    await writeFile(path, buffer)

    return { success: true }
  }

  return <main>
    <form action={upload}>
      <input type="file" name="file" />
      <input type="submit" value="Upload" />
    </form>
  </main>
}