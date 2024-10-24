const fetchData = async () => {
    const res = await fetch('https://codember.dev/data/message_01.txt')
    const data = await res.json()
    return data
}

const data = fetchData();

console.log(data)