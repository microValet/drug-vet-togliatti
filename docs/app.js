// Keep a single FAQ item expanded without interfering with native keyboard support.
document.querySelectorAll('.faq-items details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-items details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
