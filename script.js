function postIT(name, surname, date) {
    const opt = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "Nombre": name, "Apellido": surname, "Fecha de nacimiento": date })
    };

    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url, opt)
        .then(resp => resp.json())
        .then(data => console.log(data));
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('enviar');
    btn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const date = document.getElementById('date').value;
        
        postIT(name, surname, date);
    });
});
