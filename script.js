const slides = Array.from(document.querySelectorAll(".slide"));
const counter = document.getElementById("slideCounter");
const progressBar = document.getElementById("progressBar");
let idx = 0;

function render() {
  slides.forEach((s, i) => s.classList.toggle("active", i === idx));
  counter.textContent = `${idx + 1} / ${slides.length}`;
  progressBar.style.width = `${((idx + 1) / slides.length) * 100}%`;
   initCharts(idx);
   window.scrollTo(0,0);
}

document.getElementById("nextBtn").onclick = () => { if(idx < slides.length-1) { idx++; render(); } };
document.getElementById("prevBtn").onclick = () => { if(idx > 0) { idx--; render(); } };

function initCharts(n) {
  const opts = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };
  if(n === 0 && document.getElementById('chart1')) {
    new Chart(document.getElementById('chart1'), { type: 'bar', data: { labels: ['NPS Meta', 'Eficiencia', 'Crecimiento'], datasets: [{ data: [80, 70, 85], backgroundColor: ['#FF4F1F', '#23395D', '#00AE9E'] }] }, options: opts });
  }
  if(n === 2 && document.getElementById('chart3')) {
    new Chart(document.getElementById('chart3'), { type: 'radar', data: { labels: ['Predictivo', 'Canales', 'Datos', 'IA', 'IoT'], datasets: [{ label: 'Actual', data: [40, 80, 70, 50, 90], borderColor: '#23395D' }, { label: 'Meta', data: [95, 100, 95, 95, 100], borderColor: '#FF4F1F' }] }, options: opts });
  }
  if(n === 4 && document.getElementById('chart5')) {
    new Chart(document.getElementById('chart5'), { type: 'bar', data: { labels: ['Tráfico', 'Lead', 'Chat', 'Venta'], datasets: [{ data: [1000, 600, 400, 250], backgroundColor: ['#23395D', '#3B90AA', '#00AE9E', '#FF4F1F'] }] }, options: { ...opts, indexAxis: 'y' } });
  }
  if(n === 5 && document.getElementById('chart6')) {
    new Chart(document.getElementById('chart6'), { type: 'doughnut', data: { labels: ['IA', 'Humano'], datasets: [{ data: [75, 25], backgroundColor: ['#00AE9E', '#E2E8F0'] }] }, options: opts });
  }
  if(n === 10 && document.getElementById('chart11')) {
    new Chart(document.getElementById('chart11'), { type: 'bar', data: { labels: ['Actual', 'Con IA'], datasets: [{ data: [100, 60], backgroundColor: ['#CBD5E0', '#FF4F1F'] }] }, options: opts });
  }
}

const preview = document.getElementById('linkPreview');
document.addEventListener('mouseover', (e) => {
  if(e.target.classList.contains('preview-link')) {
    preview.innerHTML = `<strong>Contexto:</strong><br>${e.target.getAttribute('data-desc')}`;
    preview.style.display = 'block'; preview.style.left = e.pageX + 10 + 'px'; preview.style.top = e.pageY + 10 + 'px';
  }
});
document.addEventListener('mouseout', (e) => { if(e.target.classList.contains('preview-link')) preview.style.display = 'none'; });

render();