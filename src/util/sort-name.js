// nameAsSorted takes a name and the index of where to start sorting from
// and returns the sort-ified name
// e.g. nameAsSorted("Justin Falcone", 7) // => "Falcone Justin"
export function nameAsSorted (name,index) {
  if (index === 0){ return name }
  const [first, last] = [name.slice(0,index),name.slice(index)]
  return `${last.trim()} ${first.trim()}`
}
