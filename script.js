const demoData = {
  dealer: 'Summit Auto Service Center',
  technician: 'Jordan M. Lee',
  date: new Date().toLocaleDateString('en-US'),
  customer: 'Alex Carter',
  ymm: '2020 Toyota Camry SE',
  ro: 'RO-48173',
  mileage: '68,245',
  vin: '4T1G11AK0LU123456',
  plate: 'TXP-3921'
};

document.getElementById('fill-demo')?.addEventListener('click', () => {
  document.querySelectorAll('[data-demo]').forEach((input) => {
    const key = input.getAttribute('data-demo');
    input.value = demoData[key] ?? '';
  });
});

document.getElementById('print-report')?.addEventListener('click', () => {
  window.print();
});
