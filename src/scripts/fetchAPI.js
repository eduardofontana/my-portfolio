async function getIP() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

async function displayIP() {
  const ip = await getIP();
  document.getElementById('ip').innerHTML = `Your IP address is: ${ip}`;
}

displayIP();