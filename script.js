const fillDemoBtn = document.getElementById('fillDemoBtn');
const printBtn = document.getElementById('printBtn');

function fillDemoData() {
  document.querySelectorAll('[data-demo]').forEach((field) => {
    if (field.matches('input, textarea')) {
      field.value = field.dataset.demo;
    }
  });
}

fillDemoBtn?.addEventListener('click', fillDemoData);
printBtn?.addEventListener('click', () => {
  window.print();
});
