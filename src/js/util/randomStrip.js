export function randomStrip(params) {
    // removes elements from array, random amount and index, leaving at least one element
    let deleteCount = Math.floor(Math.random() * params.length - 1) + 1;
    for (let i = 0; i < deleteCount; i++) {
      let idx = Math.floor(Math.random() * params.length);
      if (
        !(
          params[idx].includes("style of:") ||
          params[idx].includes("primary genre:")
        )
      ) {
        params.splice(idx, 1);
      }
    }
}