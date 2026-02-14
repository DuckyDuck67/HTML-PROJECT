const demoBtn = document.getElementById('demoBtn');
const printBtn = document.getElementById('printBtn');

function fillDemoData() {
  document.querySelectorAll('[data-demo]').forEach((field) => {
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.value = field.dataset.demo || '';
    }
  });
}

demoBtn?.addEventListener('click', fillDemoData);
printBtn?.addEventListener('click', () => window.print());
