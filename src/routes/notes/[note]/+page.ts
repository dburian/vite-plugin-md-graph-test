
export async function load({ params }) {
  console.log(params);
  const note = await import(`./virtual:vite-plugin-md-graph/note/${params.note}.md`)
  return [
    { note }
  ]
}

export const prerender = true
