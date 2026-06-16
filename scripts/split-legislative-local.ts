import researchBatches from "/tmp/opencode/research-batches.json"

const batch = researchBatches.batches.find((b) => b.name === "legislative-local")
if (!batch) {
  console.error("legislative-local batch not found")
  process.exit(1)
}

const chunkSize = Math.ceil(batch.races.length / 3)
const chunks = []
for (let i = 0; i < batch.races.length; i += chunkSize) {
  chunks.push(batch.races.slice(i, i + chunkSize))
}

for (let i = 0; i < chunks.length; i++) {
  const outPath = `/tmp/opencode/research-legislative-local-${i + 1}.json`
  await Bun.write(
    outPath,
    JSON.stringify(
      {
        name: `legislative-local-${i + 1}`,
        races: chunks[i],
      },
      null,
      2
    )
  )
  console.log(
    `${outPath}: ${chunks[i].length} races, ${chunks[i].reduce(
      (acc, r) => acc + r.candidates.length,
      0
    )} candidates`
  )
}
