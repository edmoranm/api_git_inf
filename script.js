document.getElementById('obtenerRepos').addEventListener('click', () => {
    const nombreUsuario = document.getElementById('usernameInput').value;
    fetch(`https://api.github.com/users/${nombreUsuario}/repos`)
        .then(response => response.json())
        .then(data => {
            const infoRepos = data.map(repo => `
                <div class="repo">
                    <h2>${repo.name}</h2>
                    <p><strong>Descripción:</strong> ${repo.description || 'Sin descripción'}</p>
                    <p><strong>Lenguaje:</strong> ${repo.language || 'No especificado'}</p>
                    <p><strong>URL:</strong> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
                </div>
            `).join('');
            document.getElementById('reposInfo').innerHTML = infoRepos;
        })
        .catch(error => console.error('Error al obtener los repositorios:', error));
});
