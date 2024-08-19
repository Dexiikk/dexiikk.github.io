<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odesílatel Telegram zpráv</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input[type="text"], input[type="password"], textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px; /* Aby bylo místo mezi tlačítky */
        }
        button:hover {
            background-color: #0056b3;
        }
        .result {
            margin-top: 20px;
            text-align: center;
        }
        .messages {
            margin-top: 20px;
        }
        .message {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .copy-btn {
            width: 24px;
            height: 24px;
            background: url('copy.ico') no-repeat center center;
            background-size: cover;
            border: none;
            cursor: pointer;
            margin-left: 10px;
            position: relative;
            transition: opacity 0.2s, background-color 0.2s;
        }
        .copy-btn:hover {
            background-color: #e0e0e0; /* Světle šedá barva při hoveru */
            opacity: 1; /* Zajistí, že ikona je stále viditelná */
        }
        .copy-btn::after {
            content: 'Copy User ID';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -150%);
            background: #333;
            color: #fff;
            padding: 5px;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12px;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .copy-btn:hover::after {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Odesílatel Telegram zpráv</h1>
        <div class="form-group">
            <label for="token">Telegram Bot Token:</label>
            <input type="password" id="token" placeholder="Zadejte Token Telegram Bota">
        </div>
        <div class="form-group">
            <label for="chatId">Chat ID:</label>
            <input type="text" id="chatId" placeholder="Zadejte Chat ID">
        </div>
        <div class="form-group">
            <label for="message">Zpráva:</label>
            <textarea id="message" rows="4" placeholder="Zadejte zprávu"></textarea>
        </div>
        <button id="sendButton">Odeslat zprávu</button>
        <div class="result" id="result"></div>
        <div class="messages" id="messages"></div>
    </div>

    <script>
        document.getElementById('sendButton').addEventListener('click', () => {
            const token = document.getElementById('token').value.trim();
            const chatId = document.getElementById('chatId').value.trim();
            const message = document.getElementById('message').value.trim();

            if (token === '' || chatId === '' || message === '') {
                alert('Prosím vyplňte všechny údaje.');
                return;
            }

            fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    document.getElementById('result').textContent = 'Zpráva byla úspěšně odeslána!';
                    loadMessages(); // Načti zprávy po odeslání
                } else {
                    document.getElementById('result').textContent = `Chyba: ${data.description}`;
                }
            })
            .catch(error => {
                document.getElementById('result').textContent = 'Došlo k chybě při odesílání zprávy.';
                console.error('Error:', error);
            });
        });

        function loadMessages() {
            fetch('messages.json') // Předpokládejme, že soubor je v kořenovém adresáři
                .then(response => response.json())
                .then(messages => {
                    const messagesContainer = document.getElementById('messages');
                    messagesContainer.innerHTML = ''; // Vyčisti předchozí obsah
                    messages.forEach(msg => {
                        const messageElement = document.createElement('div');
                        messageElement.className = 'message';
                        messageElement.innerHTML = `
                            <div>
                                <strong>${msg.user_name}:</strong> ${msg.text}
                            </div>
                            <button class="copy-btn" onclick="copyUserId(${msg.user_id})"></button>
                        `;
                        messagesContainer.appendChild(messageElement);
                    });
                })
                .catch(error => {
                    document.getElementById('result').textContent = 'Došlo k chybě při načítání zpráv.';
                    console.error('Error:', error);
                });
        }

        function copyUserId(userId) {
            document.getElementById('chatId').value = userId;
            alert(`User ID ${userId} bylo zapsáno do pole Chat ID.`);
        }

        // Načti zprávy při načtení stránky
        window.onload = loadMessages;
    </script>
</body>
</html>
