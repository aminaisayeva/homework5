fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        const tableBody = document.getElementById('userTable');
        users.forEach((user, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${user.name.first}</td>
                <td>${user.location.city}</td>
            `;
            tableBody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
