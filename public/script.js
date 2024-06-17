document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('http://localhost:4000/api/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key1: 'value1', key2: 'value2' })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('dataContainer').innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
