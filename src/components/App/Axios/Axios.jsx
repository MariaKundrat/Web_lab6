import axios from "axios";

axios.get('http://localhost:3000/api/smartphones')
    .then(response => {
        console.log('Отримані дані з сервера:', response.data);
    })
    .catch(error => {
        console.error('Помилка отримання даних з сервера:', error);
    });
