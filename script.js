const STORAGE_KEY = 'ledgerflow.transactions';

const seedTransactions = [
  {
    id: 'txn-2023-10-24-food-001',
    type: 'expense',
    amount: -142.30,
    category: 'Food',
    description: 'Whole Foods Market',
    note: 'Weekly groceries and snacks',
    date: '2023-10-24',
    createdAt: '2023-10-24T09:30:00.000Z',
    updatedAt: '2023-10-24T09:30:00.000Z'
  },
  {
    id: 'txn-2023-10-22-income-001',
    type: 'income',
    amount: 4250.00,
    category: 'Income',
    description: 'Monthly Salary',
    note: 'Tech Solutions Inc. Direct Deposit',
    date: '2023-10-22',
    createdAt: '2023-10-22T08:00:00.000Z',
    updatedAt: '2023-10-22T08:00:00.000Z'
  },
  {
    id: 'txn-2023-10-01-rent-001',
    type: 'expense',
    amount: -1800.00,
    category: 'Rent',
    description: 'Luxury Lofts Rent',
    note: 'October rent payment',
    date: '2023-10-01',
    createdAt: '2023-10-01T10:00:00.000Z',
    updatedAt: '2023-10-01T10:00:00.000Z'
  },
  {
    id: 'txn-2023-10-19-transport-001',
    type: 'expense',
    amount: -34.50,
    category: 'Transport',
    description: 'Uber Trip',
    note: 'Downtown to Airport',
    date: '2023-10-19',
    createdAt: '2023-10-19T16:45:00.000Z',
    updatedAt: '2023-10-19T16:45:00.000Z'
  },
  {
    id: 'txn-2023-10-15-shopping-001',
    type: 'expense',
    amount: -89.99,
    category: 'Shopping',
    description: 'Amazon.com',
    note: 'Office supplies and ergonomic mouse',
    date: '2023-10-15',
    createdAt: '2023-10-15T13:20:00.000Z',
    updatedAt: '2023-10-15T13:20:00.000Z'
  },
  {
    id: 'txn-2023-10-12-income-001',
    type: 'income',
    amount: 950.00,
    category: 'Income',
    description: 'Freelance Project',
    note: 'Dashboard implementation payout',
    date: '2023-10-12',
    createdAt: '2023-10-12T11:10:00.000Z',
    updatedAt: '2023-10-12T11:10:00.000Z'
  }
];

const list = document.querySelector('#transaction-list');
const chips = document.querySelectorAll('[data-filter]');
const modal = document.querySelector('#transaction-modal');
const transactionForm = document.querySelector('#transaction-form');
const transactionFormError = document.querySelector('#transaction-form-error');
const modalEyebrow = document.querySelector('#transaction-modal-eyebrow');
const modalTitle = document.querySelector('#transaction-modal-title');
const modalSubmitButton = document.querySelector('#transaction-submit-button');

let transactions = loadTransactions();
let currentFilter = 'all';
let editingTransactionId = null;

function loadTransactions() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [...seedTransactions];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [...seedTransactions];
  } catch {
    return [...seedTransactions];
  }
}

function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function createTransactionId() {
  if (window.crypto?.randomUUID) {
    return `txn-${window.crypto.randomUUID()}`;
  }
  return `txn-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatCurrency(value) {
  const prefix = value >= 0 ? '+' : '-';
  return `${prefix}$${Math.abs(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(`${date}T00:00:00`));
}

function getTransactionType(category) {
  return category === 'Income' ? 'income' : 'expense';
}

function createTransaction({ description, amount, type, category = 'Shopping', note = '', date }) {
  const now = new Date().toISOString();
  const normalizedType = type || getTransactionType(category);
  const transactionCategory = normalizedType === 'income' ? 'Income' : category;
  const signedAmount = normalizedType === 'income' ? Math.abs(amount) : -Math.abs(amount);

  return {
    id: createTransactionId(),
    type: normalizedType,
    amount: signedAmount,
    category: transactionCategory,
    description: description.trim(),
    note: note.trim(),
    date,
    createdAt: now,
    updatedAt: now
  };
}

function categoryIcon(category) {
  const icons = {
    Income: 'payments',
    Food: 'restaurant',
    Rent: 'home',
    Transport: 'directions_car',
    Shopping: 'shopping_bag'
  };
  return icons[category] || 'receipt_long';
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

function validateTransactionInput({ description, amount, category, date, type }) {
  const errors = [];
  const numericAmount = Number(amount);

  if (!description || !description.trim()) errors.push('Description is required.');
  if (amount === '' || !Number.isFinite(numericAmount) || numericAmount <= 0) errors.push('Amount must be greater than 0.');
  if (!category || !category.trim()) errors.push('Category is required.');
  if (!date || Number.isNaN(new Date(`${date}T00:00:00`).getTime())) errors.push('Date is required.');
  if (type && !['income', 'expense'].includes(type)) errors.push('Type must be income or expense.');

  return errors;
}

function showFormError(message) {
  if (!transactionFormError) return;
  transactionFormError.textContent = message;
  transactionFormError.classList.toggle('hidden', !message);
}

function setActiveFilter(filter) {
  currentFilter = filter;
  chips.forEach((item) => item.classList.toggle('active', item.dataset.filter === filter));
  renderTransactions();
}

function resetTransactionModal() {
  editingTransactionId = null;
  transactionForm?.reset();
  showFormError('');
  transactionForm?.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));
  if (transactionForm?.date) transactionForm.date.value = new Date().toISOString().slice(0, 10);
  if (modalEyebrow) modalEyebrow.textContent = 'New Entry';
  if (modalTitle) modalTitle.textContent = 'Add Transaction';
  if (modalSubmitButton) modalSubmitButton.textContent = 'Save';
}

function openTransactionModal(transaction = null) {
  resetTransactionModal();

  if (transaction) {
    editingTransactionId = transaction.id;
    transactionForm.description.value = transaction.description;
    transactionForm.amount.value = Math.abs(transaction.amount);
    transactionForm.category.value = transaction.category;
    transactionForm.date.value = transaction.date;
    transactionForm.note.value = transaction.note || '';
    if (modalEyebrow) modalEyebrow.textContent = 'Edit Entry';
    if (modalTitle) modalTitle.textContent = 'Edit Transaction';
    if (modalSubmitButton) modalSubmitButton.textContent = 'Update';
  }

  if (typeof modal?.showModal === 'function') {
    modal.showModal();
  }
}

function closeTransactionModal() {
  modal?.close();
  resetTransactionModal();
}

function getTransactionFormData(form) {
  const category = form.category.value;
  return {
    description: form.description.value.trim(),
    amount: Number(form.amount.value),
    category,
    type: getTransactionType(category),
    date: form.date.value,
    note: form.note.value.trim()
  };
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderTransactions() {
  const filtered = currentFilter === 'all' ? transactions : transactions.filter((item) => item.category === currentFilter);

  if (!filtered.length) {
    list.innerHTML = `
      <div class="p-6 text-center text-body-md text-on-surface-variant">
        No transactions match this filter.
      </div>
    `;
    updateDashboardAndReports();
    return;
  }

  list.innerHTML = filtered.map((item, index) => {
    const isIncome = item.type === 'income';
    return `
      <article class="transaction-table-row scroll-section is-visible" style="--stagger: ${index * 45}ms" data-transaction-id="${item.id}" data-category="${item.category}">
        <div class="md:col-span-4 flex items-center gap-3">
          <span class="category-icon ${categoryTone(item.category)}"><span class="material-symbols-outlined">${categoryIcon(item.category)}</span></span>
          <div>
            <p class="font-bold text-on-surface">${escapeHtml(item.description)}</p>
            <p class="text-label-md text-on-surface-variant">${escapeHtml(item.note) || 'No note'}</p>
          </div>
        </div>
        <div class="md:col-span-2"><span class="category-badge ${categoryTone(item.category)}">${item.category}</span></div>
        <div class="md:col-span-2 text-body-md text-on-surface-variant">${formatDate(item.date)}</div>
        <div class="md:col-span-2 md:text-right font-bold ${isIncome ? 'text-secondary' : 'text-error'}">${formatCurrency(item.amount)}</div>
        <div class="md:col-span-2 flex gap-2 md:justify-end">
          <button class="icon-button" type="button" data-action="edit" data-transaction-id="${item.id}" aria-label="Edit ${escapeHtml(item.description)}"><span class="material-symbols-outlined">edit</span></button>
          <button class="icon-button" type="button" data-action="delete" data-transaction-id="${item.id}" aria-label="Delete ${escapeHtml(item.description)}"><span class="material-symbols-outlined">delete</span></button>
        </div>
      </article>
    `;
  }).join('');

  updateDashboardAndReports();
}

function upsertTransaction(data) {
  if (!editingTransactionId) {
    transactions.unshift(createTransaction(data));
    return;
  }

  transactions = transactions.map((item) => {
    if (item.id !== editingTransactionId) return item;
    const updated = createTransaction(data);
    return {
      ...updated,
      id: item.id,
      createdAt: item.createdAt,
      updatedAt: new Date().toISOString()
    };
  });
}

function renderInlineEditForm(transactionId) {
  const transaction = transactions.find(t => t.id === transactionId);
  if (!transaction) return;

  const rowEl = document.querySelector(`article[data-transaction-id="${transactionId}"]`);
  if (!rowEl) return;

  const formHTML = `
    <div class="md:col-span-4 flex flex-col gap-2">
      <input type="text" name="description" class="form-input-inline" value="${escapeHtml(transaction.description)}" required placeholder="Description" />
      <input type="text" name="note" class="form-input-inline text-sm" value="${escapeHtml(transaction.note || '')}" placeholder="Note (optional)" />
    </div>
    <div class="md:col-span-2">
      <select name="category" class="form-select-inline" required>
        <option value="Food" ${transaction.category === 'Food' ? 'selected' : ''}>Food</option>
        <option value="Income" ${transaction.category === 'Income' ? 'selected' : ''}>Income</option>
        <option value="Rent" ${transaction.category === 'Rent' ? 'selected' : ''}>Rent</option>
        <option value="Transport" ${transaction.category === 'Transport' ? 'selected' : ''}>Transport</option>
        <option value="Shopping" ${transaction.category === 'Shopping' ? 'selected' : ''}>Shopping</option>
      </select>
    </div>
    <div class="md:col-span-2">
      <input type="date" name="date" class="form-input-inline" value="${transaction.date}" required />
    </div>
    <div class="md:col-span-2 text-right">
      <input type="number" name="amount" class="form-input-inline text-right font-bold" value="${Math.abs(transaction.amount)}" step="0.01" min="0.01" required placeholder="0.00" />
    </div>
    <div class="md:col-span-2 flex gap-2 md:justify-end">
      <button class="icon-button text-secondary" type="submit" aria-label="Save"><span class="material-symbols-outlined">check</span></button>
      <button class="icon-button text-error" type="button" data-action="cancel-inline-edit" data-transaction-id="${transaction.id}" aria-label="Cancel"><span class="material-symbols-outlined">close</span></button>
    </div>
    <div class="col-span-12 hidden text-xs font-semibold text-error mt-2 inline-error-message" role="alert"></div>
  `;

  const formEl = document.createElement('form');
  formEl.className = "transaction-table-row inline-edit-form";
  formEl.dataset.transactionId = transaction.id;
  formEl.style.setProperty('--stagger', rowEl.style.getPropertyValue('--stagger'));
  formEl.innerHTML = formHTML;

  rowEl.parentNode.replaceChild(formEl, rowEl);

  // Focus on description input
  formEl.description.focus();

  // Clear errors on input change
  formEl.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('input-error'));
    el.addEventListener('change', () => el.classList.remove('input-error'));
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const descInput = formEl.description;
    const noteInput = formEl.note;
    const catSelect = formEl.category;
    const dateInput = formEl.date;
    const amtInput = formEl.amount;
    const errorDiv = formEl.querySelector('.inline-error-message');

    // Reset error states
    formEl.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));
    errorDiv.classList.add('hidden');
    errorDiv.textContent = '';

    const category = catSelect.value;
    const type = getTransactionType(category);
    const data = {
      description: descInput.value.trim(),
      amount: Number(amtInput.value),
      category,
      type,
      date: dateInput.value,
      note: noteInput.value.trim()
    };

    const errors = validateTransactionInput(data);
    if (errors.length > 0) {
      errorDiv.textContent = errors[0];
      errorDiv.classList.remove('hidden');

      if (!data.description) descInput.classList.add('input-error');
      if (!data.amount || data.amount <= 0) amtInput.classList.add('input-error');
      if (!data.category) catSelect.classList.add('input-error');
      if (!data.date) dateInput.classList.add('input-error');
      return;
    }

    editingTransactionId = transaction.id;
    upsertTransaction(data);
    saveTransactions();
    editingTransactionId = null;

    renderTransactions();
  });

  formEl.querySelector('[data-action="cancel-inline-edit"]').addEventListener('click', () => {
    renderTransactions();
  });
}

function updateDashboardAndReports() {
  // 1. Calculate Total Balance
  const totalBalance = transactions.reduce((sum, item) => sum + item.amount, 0);
  const totalBalanceEl = document.getElementById('total-balance');
  if (totalBalanceEl) {
    totalBalanceEl.textContent = (totalBalance >= 0 ? '+' : '-') + '$' + Math.abs(totalBalance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  const totalBalanceTrendEl = document.getElementById('total-balance-trend');
  if (totalBalanceTrendEl) {
    const trendPercent = totalBalance >= 3133.21 ? '+' + ((totalBalance - 3133.21) / 3133.21 * 100).toFixed(1) : ((totalBalance - 3133.21) / 3133.21 * 100).toFixed(1);
    totalBalanceTrendEl.innerHTML = `<span class="material-symbols-outlined text-[16px]">${totalBalance >= 3133.21 ? 'trending_up' : 'trending_down'}</span>${trendPercent}% from start`;
  }

  // 2. Identify target month
  let targetYear, targetMonth;
  if (transactions.length > 0) {
    const sortedTxns = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestDate = new Date(sortedTxns[0].date + 'T00:00:00');
    targetYear = latestDate.getFullYear();
    targetMonth = latestDate.getMonth();
  } else {
    const now = new Date();
    targetYear = now.getFullYear();
    targetMonth = now.getMonth();
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();
  const dateRangeText = `${monthNames[targetMonth]} 01 - ${monthNames[targetMonth]} ${lastDay}, ${targetYear}`;
  const dateRangeDisplay = document.getElementById('date-range-display');
  if (dateRangeDisplay) {
    dateRangeDisplay.textContent = dateRangeText;
  }

  // Filter current month transactions
  const monthlyTxns = transactions.filter(t => {
    const d = new Date(t.date + 'T00:00:00');
    return d.getFullYear() === targetYear && d.getMonth() === targetMonth;
  });

  const monthlyIncome = monthlyTxns.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const monthlyExpenses = monthlyTxns.filter(t => t.type === 'expense').reduce((sum, t) => sum + Math.abs(t.amount), 0);

  // Update Monthly Income Card
  const monthlyIncomeEl = document.getElementById('monthly-income');
  if (monthlyIncomeEl) {
    monthlyIncomeEl.textContent = '$' + monthlyIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  const incomeProgressEl = document.getElementById('income-progress');
  const incomeProgressTextEl = document.getElementById('income-progress-text');
  const incomeTarget = 5000;
  if (incomeProgressEl && incomeProgressTextEl) {
    const reachedPercent = Math.min((monthlyIncome / incomeTarget) * 100, 100);
    incomeProgressEl.style.width = `${reachedPercent}%`;
    incomeProgressTextEl.textContent = `${reachedPercent.toFixed(0)}% of monthly target reached ($${incomeTarget.toLocaleString()})`;
  }

  // Update Monthly Expenses Card
  const monthlyExpensesEl = document.getElementById('monthly-expenses');
  if (monthlyExpensesEl) {
    monthlyExpensesEl.textContent = '$' + monthlyExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  const expenseProgressEl = document.getElementById('expense-progress');
  const expenseProgressTextEl = document.getElementById('expense-progress-text');
  const expenseBudget = 4000;
  if (expenseProgressEl && expenseProgressTextEl) {
    const consumedPercent = Math.min((monthlyExpenses / expenseBudget) * 100, 100);
    expenseProgressEl.style.width = `${consumedPercent}%`;
    expenseProgressTextEl.textContent = `${consumedPercent.toFixed(0)}% of budget consumed ($${expenseBudget.toLocaleString()})`;
    if (consumedPercent >= 100) {
      expenseProgressEl.style.backgroundColor = 'var(--tertiary)';
    } else {
      expenseProgressEl.style.backgroundColor = '';
    }
  }

  // 3. Recent Transactions (Dashboard) - 4 latest
  const recentTransactionsEl = document.getElementById('recent-transactions');
  if (recentTransactionsEl) {
    const recentTxns = [...transactions]
      .sort((a, b) => new Date(b.date) - new Date(a.date) || new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);

    if (recentTxns.length === 0) {
      recentTransactionsEl.innerHTML = `<div class="py-4 text-center text-sm text-on-surface-variant">No transactions yet.</div>`;
    } else {
      recentTransactionsEl.innerHTML = recentTxns.map(item => {
        const isIncome = item.type === 'income';
        return `
          <div class="transaction-row">
            <span class="category-icon ${categoryTone(item.category)}">
              <span class="material-symbols-outlined">${categoryIcon(item.category)}</span>
            </span>
            <div>
              <p class="font-semibold">${escapeHtml(item.description)}</p>
              <p class="text-label-md text-on-surface-variant">${formatDate(item.date)} • ${item.category}</p>
            </div>
            <strong class="ml-auto ${isIncome ? 'text-secondary' : 'text-error'}">
              ${formatCurrency(item.amount)}
            </strong>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Savings Goal (Emergency Fund) - Target $10,000
  const savingsGoalCurrentEl = document.getElementById('savings-goal-current');
  const savingsGoalProgressEl = document.getElementById('savings-goal-progress');
  const savingsGoalTextEl = document.getElementById('savings-goal-text');
  const savingsGoalTarget = 10000;
  if (savingsGoalCurrentEl && savingsGoalProgressEl && savingsGoalTextEl) {
    const currentSavings = Math.max(totalBalance, 0);
    savingsGoalCurrentEl.textContent = '$' + currentSavings.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const progressPercent = Math.min((currentSavings / savingsGoalTarget) * 100, 100);
    savingsGoalProgressEl.style.width = `${progressPercent}%`;
    if (currentSavings >= savingsGoalTarget) {
      savingsGoalTextEl.textContent = `Congratulations! You have reached your safety target.`;
    } else {
      const remaining = savingsGoalTarget - currentSavings;
      savingsGoalTextEl.textContent = `You are $${remaining.toLocaleString('en-US', { maximumFractionDigits: 0 })} away from your safety target.`;
    }
  }

  // 5. Expense Mix (Dashboard)
  const expenseMixEl = document.getElementById('expense-mix');
  if (expenseMixEl) {
    const categoryTotals = {};
    let totalExpenseAmount = 0;

    transactions.forEach(t => {
      if (t.type === 'expense') {
        const amt = Math.abs(t.amount);
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + amt;
        totalExpenseAmount += amt;
      }
    });

    const categories = ['Rent', 'Food', 'Transport', 'Shopping'];
    let mixHtml = '';

    if (totalExpenseAmount === 0) {
      mixHtml = `<div class="py-4 text-center text-sm text-on-surface-variant">No expenses recorded.</div>`;
    } else {
      mixHtml = categories.map(cat => {
        const amt = categoryTotals[cat] || 0;
        const percent = totalExpenseAmount > 0 ? (amt / totalExpenseAmount * 100) : 0;
        return `
          <div class="chart-line">
            <span>${cat}</span>
            <div><i style="width: ${percent}%"></i></div>
            <b>$${amt.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</b>
          </div>
        `;
      }).join('');
    }
    expenseMixEl.innerHTML = mixHtml;
  }

  // 6. Reports: Net Savings, Top Expense, Best Opportunity
  const netSavings = monthlyIncome - monthlyExpenses;
  const netSavingsEl = document.getElementById('net-savings');
  const netSavingsRateEl = document.getElementById('net-savings-rate');
  if (netSavingsEl && netSavingsRateEl) {
    netSavingsEl.textContent = (netSavings >= 0 ? '+' : '-') + '$' + Math.abs(netSavings).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (netSavings >= 0) {
      netSavingsEl.className = "mt-2 text-headline-lg font-bold text-primary";
    } else {
      netSavingsEl.className = "mt-2 text-headline-lg font-bold text-error";
    }
    const savingsRate = monthlyIncome > 0 ? (netSavings / monthlyIncome * 100) : 0;
    netSavingsRateEl.textContent = `${savingsRate >= 0 ? savingsRate.toFixed(0) : 0}% savings rate this period.`;
  }

  const monthlyCategoryTotals = {};
  let monthlyTotalExpenses = 0;
  monthlyTxns.forEach(t => {
    if (t.type === 'expense') {
      const amt = Math.abs(t.amount);
      monthlyCategoryTotals[t.category] = (monthlyCategoryTotals[t.category] || 0) + amt;
      monthlyTotalExpenses += amt;
    }
  });

  const sortedCategories = Object.keys(monthlyCategoryTotals).sort((a, b) => monthlyCategoryTotals[b] - monthlyCategoryTotals[a]);
  const topExpenseEl = document.getElementById('top-expense');
  const topExpensePercentageEl = document.getElementById('top-expense-percentage');
  if (topExpenseEl && topExpensePercentageEl) {
    if (sortedCategories.length > 0) {
      const topCat = sortedCategories[0];
      const topAmt = monthlyCategoryTotals[topCat];
      const topPercent = monthlyTotalExpenses > 0 ? (topAmt / monthlyTotalExpenses * 100) : 0;
      topExpenseEl.textContent = topCat;
      topExpensePercentageEl.textContent = `${topPercent.toFixed(0)}% of total expenses.`;
    } else {
      topExpenseEl.textContent = 'None';
      topExpensePercentageEl.textContent = '0% of total expenses.';
    }
  }

  const bestOpportunityEl = document.getElementById('best-opportunity');
  const opportunityDescEl = document.getElementById('opportunity-desc');
  if (bestOpportunityEl && opportunityDescEl) {
    const candidates = sortedCategories.filter(cat => cat !== 'Rent');
    if (candidates.length > 0) {
      const targetCat = candidates[0];
      const amt = monthlyCategoryTotals[targetCat];
      const saveAmt = amt * 0.12;
      bestOpportunityEl.textContent = targetCat;
      opportunityDescEl.textContent = `Reduce by 12% to save $${saveAmt.toFixed(0)}.`;
    } else {
      bestOpportunityEl.textContent = 'Rent';
      const rentAmt = monthlyCategoryTotals['Rent'] || 0;
      const saveAmt = rentAmt * 0.05;
      opportunityDescEl.textContent = `Reduce by 5% to save $${saveAmt.toFixed(0)}.`;
    }
  }

  // 7. Income vs Expenses Chart
  const chartContainer = document.getElementById('income-expense-chart');
  if (chartContainer) {
    const last6Months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(targetYear, targetMonth - i, 1);
      last6Months.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        name: monthNames[d.getMonth()],
        income: 0,
        expense: 0
      });
    }

    transactions.forEach(t => {
      const d = new Date(t.date + 'T00:00:00');
      const ty = d.getFullYear();
      const tm = d.getMonth();
      const match = last6Months.find(m => m.year === ty && m.month === tm);
      if (match) {
        if (t.type === 'income') {
          match.income += t.amount;
        } else {
          match.expense += Math.abs(t.amount);
        }
      }
    });

    const maxVal = Math.max(...last6Months.map(m => Math.max(m.income, m.expense)), 100);

    chartContainer.innerHTML = last6Months.map(m => {
      const incPercent = Math.max((m.income / maxVal) * 90, 5);
      const expPercent = Math.max((m.expense / maxVal) * 90, 5);
      return `
        <div>
          <span style="height: ${incPercent}%" class="income" title="Income: $${m.income.toLocaleString()}"></span>
          <span style="height: ${expPercent}%" class="expense" title="Expense: $${m.expense.toLocaleString()}"></span>
          <small>${m.name}</small>
        </div>
      `;
    }).join('');
  }

  // 8. Spending by Category Donut Chart
  const donutChart = document.getElementById('donut-chart');
  const donutLegend = document.getElementById('donut-legend');
  if (donutChart && donutLegend) {
    const catColors = {
      Rent: 'var(--error)',
      Food: 'var(--primary)',
      Transport: 'var(--secondary)',
      Shopping: 'var(--outline)'
    };

    const categories = ['Rent', 'Food', 'Transport', 'Shopping'];
    const totalExp = categories.reduce((sum, cat) => sum + (monthlyCategoryTotals[cat] || 0), 0);

    if (totalExp === 0) {
      donutChart.style.background = 'var(--surface-container)';
      donutChart.style.setProperty('--donut-text', `"$0"`);
      donutLegend.innerHTML = `<li class="text-xs text-on-surface-variant">No expenses in this month.</li>`;
    } else {
      let accumulatedPercent = 0;
      const gradientParts = [];

      const parts = categories.map(cat => {
        const amt = monthlyCategoryTotals[cat] || 0;
        const percent = totalExp > 0 ? (amt / totalExp * 100) : 0;
        return {
          category: cat,
          amount: amt,
          percent: percent
        };
      }).filter(p => p.percent > 0);

      parts.forEach((p) => {
        const start = accumulatedPercent;
        accumulatedPercent += p.percent;
        const end = accumulatedPercent;
        const color = catColors[p.category] || 'var(--outline)';
        gradientParts.push(`${color} ${start.toFixed(1)}% ${end.toFixed(1)}%`);
      });

      donutChart.style.background = `conic-gradient(${gradientParts.join(', ')})`;
      donutChart.style.setProperty('--donut-text', `"$${(totalExp / 1000).toFixed(1)}k"`);

      const bulletColors = {
        Rent: 'bg-error',
        Food: 'bg-primary',
        Transport: 'bg-secondary',
        Shopping: 'bg-outline'
      };

      donutLegend.innerHTML = categories.map(cat => {
        const amt = monthlyCategoryTotals[cat] || 0;
        const percent = totalExp > 0 ? (amt / totalExp * 100) : 0;
        return `
          <li>
            <span class="legend ${bulletColors[cat] || 'bg-outline'}"></span>
            ${cat} ${percent.toFixed(0)}% ($${amt.toLocaleString('en-US', { maximumFractionDigits: 0 })})
          </li>
        `;
      }).join('');
    }
  }
}

// Initial Render
renderTransactions();

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    setActiveFilter(chip.dataset.filter);
  });
});

list?.addEventListener('click', (event) => {
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;

  const transactionId = actionButton.dataset.transactionId;
  const transaction = transactions.find((item) => item.id === transactionId);
  if (!transaction) return;

  if (actionButton.dataset.action === 'edit') {
    // If desktop (innerWidth >= 768px), edit inline. Otherwise, open modal.
    if (window.innerWidth >= 768) {
      renderInlineEditForm(transactionId);
    } else {
      openTransactionModal(transaction);
    }
    return;
  }

  if (actionButton.dataset.action === 'delete') {
    const confirmed = window.confirm(`Delete transaction "${transaction.description}"?`);
    if (!confirmed) return;
    transactions = transactions.filter((item) => item.id !== transactionId);
    saveTransactions();
    renderTransactions();
  }
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
    openTransactionModal();
  });
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', closeTransactionModal);
});

// Real-time validation visual feedback for Modal
transactionForm?.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', () => el.classList.remove('input-error'));
  el.addEventListener('change', () => el.classList.remove('input-error'));
});

transactionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const descInput = form.description;
  const amtInput = form.amount;
  const catSelect = form.category;
  const dateInput = form.date;

  // Clear errors first
  form.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));
  showFormError('');

  const data = getTransactionFormData(form);
  const errors = validateTransactionInput(data);

  if (errors.length) {
    showFormError(errors[0]);
    if (!data.description) descInput.classList.add('input-error');
    if (!data.amount || data.amount <= 0) amtInput.classList.add('input-error');
    if (!data.category) catSelect.classList.add('input-error');
    if (!data.date) dateInput.classList.add('input-error');
    return;
  }

  const previousTransaction = transactions.find((item) => item.id === editingTransactionId);
  upsertTransaction(data);
  saveTransactions();

  if (previousTransaction && currentFilter !== 'all' && previousTransaction.category !== data.category) {
    setActiveFilter('all');
  } else {
    renderTransactions();
  }

  closeTransactionModal();
});

// Real-time validation visual feedback for Quick Form
const quickForm = document.querySelector('#quick-form');
quickForm?.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', () => el.classList.remove('input-error'));
  el.addEventListener('change', () => el.classList.remove('input-error'));
});

quickForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const descInput = form.description;
  const amtInput = form.amount;
  const errorText = document.getElementById('quick-form-error');

  // Reset errors
  form.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));
  if (errorText) {
    errorText.textContent = '';
    errorText.classList.add('hidden');
  }

  const type = form.type.value;
  const data = {
    description: form.description.value.trim(),
    amount: Number(form.amount.value),
    type,
    category: type === 'income' ? 'Income' : 'Shopping',
    note: type === 'income' ? 'Manual income entry' : 'Manual expense entry',
    date: new Date().toISOString().slice(0, 10)
  };
  const errors = validateTransactionInput(data);

  if (errors.length) {
    if (errorText) {
      errorText.textContent = errors[0];
      errorText.classList.remove('hidden');
    }
    if (!data.description) descInput.classList.add('input-error');
    if (!data.amount || data.amount <= 0) amtInput.classList.add('input-error');
    return;
  }

  transactions.unshift(createTransaction(data));
  saveTransactions();
  setActiveFilter('all');
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
