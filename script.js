document.getElementById('messageForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}`,
    });

    if (response.ok) {
      console.log('Message sent successfully!');
    } else {
      console.error('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});