
async function getResources(url) {
    const res = await fetch(url).then(response => response.json())
    return res
}

export default getResources;