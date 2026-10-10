const KEY = 'devowll-notes';

export function saveNote(note) {
  const current = JSON.parse(localStorage.getItem(KEY) || '[]');
  current.unshift({
    ...note,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem(KEY, JSON.stringify(current.slice(0, 40)));
}
