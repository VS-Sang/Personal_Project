const transactions = [
  { description: 'Whole Foods Market', note: 'Weekly groceries and snacks', category: 'Food', date: 'Oct 24, 2023', amount: -142.30, icon: 'restaurant' },
  { description: 'Monthly Salary', note: 'Tech Solutions Inc. Direct Deposit', category: 'Income', date: 'Oct 22, 2023', amount: 4250.00, icon: 'payments' },
  { description: 'Luxury Lofts Rent', note: 'October rent payment', category: 'Rent', date: 'Oct 01, 2023', amount: -1800.00, icon: 'home' },
  { description: 'Uber Trip', note: 'Downtown to Airport', category: 'Transport', date: 'Oct 19, 2023', amount: -34.50, icon: 'directions_car' },
  { description: 'Amazon.com', note: 'Office supplies and ergonomic mouse', category: 'Shopping', date: 'Oct 15, 2023', amount: -89.99, icon: 'shopping_bag' },
  { description: 'Freelance Project', note: 'Dashboard implementation payout', category: 'Income', date: 'Oct 12, 2023', amount: 950.00, icon: 'work' }
];

const list = document.querySelector('#transaction-list');
const chips = document.querySelectorAll('[data-filter]');
const modal = document.querySelector('#transaction-modal');

function formatCurrency(value) {
  const prefix = value >= 0 ? '+' : '-';
  return `${prefix}$${Math.abs(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function categoryTone(category) {
  const tones = {
    Income: 'bg-primary-fixed text-on-primary-fixed-variant',
    Food: 'bg-secondary-container/40 text-on-secondary-fixed-variant',
    Rent: 'bg-surface-variant text-on-surface-variant',
    Transport: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    Shopping: 'bg-surface-container-highest text-on-surface-variant'
  };
  return tones[category] || 'bg-surface-container text-on-surface-variant';
}

function renderTransactions(filter = 'all') {
  const filtered = filter === 'all' ? transactions : transactions.filter((item) => item.category === filter);
  list.innerHTML = filtered.map((item, index) => {
    const isIncome = item.amount >= 0;
    return `
      <article class="transaction-table-row scroll-section is-visible" style="--stagger: ${index * 45}ms" data-category="${item.category}">
        <div class="md:col-span-4 flex items-center gap-3">
          <span class="category-icon ${categoryTone(item.category)}"><span class="material-symbols-outlined">${item.icon}</span></span>
          <div>
            <p class="font-bold text-on-surface">${item.description}</p>
            <p class="text-label-md text-on-surface-variant">${item.note}</p>
          </div>
        </div>
        <div class="md:col-span-2"><span class="category-badge ${categoryTone(item.category)}">${item.category}</span></div>
        <div class="md:col-span-2 text-body-md text-on-surface-variant">${item.date}</div>
        <div class="md:col-span-2 md:text-right font-bold ${isIncome ? 'text-secondary' : 'text-error'}">${formatCurrency(item.amount)}</div>
        <div class="md:col-span-2 flex gap-2 md:justify-end">
          <button class="icon-button" aria-label="Edit ${item.description}"><span class="material-symbols-outlined">edit</span></button>
          <button class="icon-button" aria-label="Delete ${item.description}"><span class="material-symbols-outlined">delete</span></button>
        </div>
      </article>
    `;
  }).join('');
}

renderTransactions();

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
    renderTransactions(chip.dataset.filter);
  });
});

const sections = document.querySelectorAll('.scroll-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

sections.forEach((section, index) => {
  section.style.setProperty('--stagger', `${Math.min(index * 35, 180)}ms`);
  observer.observe(section);
});

document.querySelectorAll('[data-open-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    }
  });
});

document.querySelector('#quick-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const description = form.description.value.trim();
  const amount = Number(form.amount.value);
  const type = form.type.value;

  if (!description || !amount || amount <= 0) {
    return;
  }

  transactions.unshift({
    description,
    note: type === 'income' ? 'Manual income entry' : 'Manual expense entry',
    category: type === 'income' ? 'Income' : 'Shopping',
    date: 'Today',
    amount: type === 'income' ? amount : -amount,
    icon: type === 'income' ? 'payments' : 'receipt_long'
  });

  chips.forEach((item) => item.classList.toggle('active', item.dataset.filter === 'all'));
  renderTransactions();
  form.reset();
});

const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
const pageSections = ['dashboard', 'transactions', 'reports', 'budgets', 'settings'].map((id) => document.getElementById(id)).filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  const visible = entries.find((entry) => entry.isIntersecting);
  if (!visible) return;
  const id = visible.target.id;
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
}, { threshold: 0.35 });

pageSections.forEach((section) => navObserver.observe(section));
