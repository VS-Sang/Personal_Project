\<\!DOCTYPE html\>\<html class="light" lang="en" style=""\>\<head\>  
\<meta charset="utf-8"\>  
\<meta content="width=device-width, initial-scale=1.0" name="viewport"\>  
\<title\>LedgerFlow Dashboard\</title\>  
\<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"\>\</script\>  
\<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\&amp;display=swap" rel="stylesheet"\>  
\<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\&amp;display=swap" rel="stylesheet"\>  
\<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900\&amp;display=swap" rel="stylesheet"\>  
\<style\>  
        .material-symbols-outlined {  
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;  
        }  
        body {  
            font-family: 'Inter', sans-serif;  
            background-color: \#f8f9ff;  
        }  
        .bento-card {  
            transition: transform 0.2s ease, box-shadow 0.2s ease;  
        }  
        .bento-card:hover {  
            transform: translateY(-2px);  
        }  
    \</style\>  
\<script id="tailwind-config"\>  
        tailwind.config \= {  
            darkMode: "class",  
            theme: {  
                extend: {  
                    "colors": {  
                        "surface-dim": "\#cbdbf5",  
                        "inverse-on-surface": "\#eaf1ff",  
                        "primary-fixed": "\#dbe1ff",  
                        "tertiary-fixed": "\#ffdad7",  
                        "on-background": "\#0b1c30",  
                        "background": "\#f8f9ff",  
                        "on-surface": "\#0b1c30",  
                        "surface-container-highest": "\#d3e4fe",  
                        "surface-variant": "\#d3e4fe",  
                        "surface-container-lowest": "\#ffffff",  
                        "secondary": "\#006c49",  
                        "on-error-container": "\#93000a",  
                        "on-secondary": "\#ffffff",  
                        "on-secondary-fixed": "\#002113",  
                        "on-tertiary-container": "\#ffecea",  
                        "tertiary-fixed-dim": "\#ffb3ad",  
                        "on-error": "\#ffffff",  
                        "surface": "\#f8f9ff",  
                        "on-secondary-fixed-variant": "\#005236",  
                        "error": "\#ba1a1a",  
                        "primary": "\#004ac6",  
                        "on-primary": "\#ffffff",  
                        "inverse-surface": "\#213145",  
                        "on-secondary-container": "\#00714d",  
                        "on-primary-fixed-variant": "\#003ea8",  
                        "error-container": "\#ffdad6",  
                        "on-primary-fixed": "\#00174b",  
                        "primary-container": "\#2563eb",  
                        "on-tertiary-fixed": "\#410004",  
                        "inverse-primary": "\#b4c5ff",  
                        "on-tertiary-fixed-variant": "\#930013",  
                        "outline-variant": "\#c3c6d7",  
                        "outline": "\#737686",  
                        "on-surface-variant": "\#434655",  
                        "on-tertiary": "\#ffffff",  
                        "primary-fixed-dim": "\#b4c5ff",  
                        "tertiary-container": "\#cf2c30",  
                        "on-primary-container": "\#eeefff",  
                        "surface-bright": "\#f8f9ff",  
                        "secondary-fixed-dim": "\#4edea3",  
                        "tertiary": "\#ab0b1c",  
                        "surface-tint": "\#0053db",  
                        "secondary-container": "\#6cf8bb",  
                        "surface-container": "\#e5eeff",  
                        "surface-container-high": "\#dce9ff",  
                        "surface-container-low": "\#eff4ff",  
                        "secondary-fixed": "\#6ffbbe"  
                    },  
                    "borderRadius": {  
                        "DEFAULT": "0.125rem",  
                        "lg": "0.25rem",  
                        "xl": "0.5rem",  
                        "full": "0.75rem"  
                    },  
                    "spacing": {  
                        "margin-mobile": "1rem",  
                        "xl": "2rem",  
                        "md": "1rem",  
                        "gutter": "1rem",  
                        "sm": "0.5rem",  
                        "margin-desktop": "2rem",  
                        "2xl": "3rem",  
                        "lg": "1.5rem",  
                        "base": "4px",  
                        "xs": "0.25rem"  
                    },  
                    "fontFamily": {  
                        "body-md": \["Inter"\],  
                        "mono-md": \["\\"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas\\""\],  
                        "headline-lg-mobile": \["Inter"\],  
                        "headline-md": \["Inter"\],  
                        "body-lg": \["Inter"\],  
                        "display-lg": \["Inter"\],  
                        "headline-lg": \["Inter"\],  
                        "label-md": \["Inter"\]  
                    },  
                    "fontSize": {  
                        "body-md": \["14px", {"lineHeight": "20px", "fontWeight": "400"}\],  
                        "mono-md": \["14px", {"lineHeight": "20px", "fontWeight": "400"}\],  
                        "headline-lg-mobile": \["20px", {"lineHeight": "28px", "fontWeight": "600"}\],  
                        "headline-md": \["20px", {"lineHeight": "28px", "fontWeight": "600"}\],  
                        "body-lg": \["16px", {"lineHeight": "24px", "fontWeight": "400"}\],  
                        "display-lg": \["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}\],  
                        "headline-lg": \["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}\],  
                        "label-md": \["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}\]  
                    }  
                },  
            },  
        }  
    \</script\>  
\</head\>  
\<body class="bg-background text-on-surface font-body-md"\>  
\<\!-- Layout Wrapper \--\>  
\<div class="flex min-h-screen"\>  
\<\!-- Predicted SideNavBar Component \--\>  
\<aside class="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant p-md space-y-lg z-50"\>  
\<div class="flex flex-col space-y-xs px-sm"\>  
\<h1 class="font-headline-md text-headline-md font-bold text-primary"\>LedgerFlow\</h1\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Personal Finance\</p\>  
\</div\>  
\<nav class="flex-grow space-y-xs mt-lg"\>  
\<a class="flex items-center space-x-md px-md py-sm rounded-lg text-primary font-bold cursor-pointer active:scale-95 transition-transform" href="\#"\>  
\<span class="material-symbols-outlined"\>dashboard\</span\>  
\<span class="font-label-md text-label-md"\>Dashboard\</span\>  
\</a\>  
\<a class="flex items-center space-x-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer active:scale-95 transition-transform" href="\#"\>  
\<span class="material-symbols-outlined"\>receipt\_long\</span\>  
\<span class="font-label-md text-label-md"\>Transactions\</span\>  
\</a\>  
\<a class="flex items-center space-x-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer active:scale-95 transition-transform" href="\#"\>  
\<span class="material-symbols-outlined"\>bar\_chart\</span\>  
\<span class="font-label-md text-label-md"\>Reports\</span\>  
\</a\>  
\</nav\>  
\<div class="space-y-xs"\>  
\<button class="w-full bg-primary text-on-primary py-md px-lg rounded-xl font-body-md font-semibold hover:opacity-90 active:scale-95 transition-all"\>  
                    Add Transaction  
                \</button\>  
\<div class="pt-lg border-t border-outline-variant space-y-xs"\>  
\<a class="flex items-center space-x-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer" href="\#"\>  
\<span class="material-symbols-outlined"\>settings\</span\>  
\<span class="font-label-md text-label-md"\>Settings\</span\>  
\</a\>  
\<a class="flex items-center space-x-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer" href="\#"\>  
\<span class="material-symbols-outlined"\>help\</span\>  
\<span class="font-label-md text-label-md"\>Help\</span\>  
\</a\>  
\</div\>  
\</div\>  
\</aside\>  
\<\!-- Main Content Area \--\>  
\<main class="flex-grow md:ml-64 px-margin-mobile md:px-margin-desktop py-lg max-w-7xl mx-auto w-full"\>  
\<\!-- Header Section \--\>  
\<header class="flex justify-between items-center mb-2xl"\>  
\<div\>  
\<h2 class="font-headline-lg text-headline-lg text-on-surface"\>Financial Summary\</h2\>  
\<p class="text-on-surface-variant font-body-md"\>Welcome back, developer. Here's your status.\</p\>  
\</div\>  
\<div class="flex items-center space-x-md"\>  
\<button class="p-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70"\>  
\<span class="material-symbols-outlined"\>notifications\</span\>  
\</button\>  
\<div class="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant"\>  
\<img alt="User profile" class="w-full h-full object-cover" data-alt="A clean, professional headshot of a person with a modern hairstyle, looking directly at the camera with a neutral expression. The background is a soft, out-of-focus urban setting in daylight. The lighting is balanced and soft, emphasizing a high-end minimalist aesthetic with subtle shadows and natural skin tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkc\_mRM0I0THPXWf-vZc-NgA5\_uEpvdidUETS1VF4wNJhuMPUagfoglBQrYmdUVgAB2aSsp4ShdKJBaGlY6ZkLEKZ217Dumj4GgQ4LSxRjCmVSN07b6lzG9\_eWTjAzWUhJa9YD3rQZZkEaqwXI5BAX3lb3R6NrYGBC9G6y0tq1RYaO7EHggsup5IP0cQDBzNdo5F1mTJs04vNWC\_UvcLr5cyK7Mpc6Ab1gCWhQi46c0i257liGJS8HgkWIaFzxzj0IaBF7P\_JzlEE"\>  
\</div\>  
\</div\>  
\</header\>  
\<\!-- Bento Grid Summary Cards \--\>  
\<div class="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl"\>  
\<\!-- Total Balance Card \--\>  
\<div class="bento-card bg-primary text-on-primary p-xl rounded-xl border border-primary shadow-sm flex flex-col justify-between h-48 relative overflow-hidden"\>  
\<div class="absolute top-0 right-0 p-lg opacity-20"\>  
\<span class="material-symbols-outlined text-\[64px\]" style="font-variation-settings: \&quot;FILL\&quot; 1;"\>account\_balance\_wallet\</span\>  
\</div\>  
\<div\>  
\<p class="font-label-md text-label-md text-primary-fixed opacity-90"\>Total Balance\</p\>  
\<h3 class="font-display-lg text-display-lg mt-xs"\>$12,840.50\</h3\>  
\</div\>  
\<div class="flex items-center text-primary-fixed text-label-md font-label-md"\>  
\<span class="material-symbols-outlined text-sm mr-xs"\>trending\_up\</span\>  
\<span class=""\>+2.4% from last month\</span\>  
\</div\>  
\</div\>  
\<\!-- Monthly Income \--\>  
\<div class="bento-card bg-surface-container-lowest p-xl rounded-xl border border-outline-variant flex flex-col justify-between h-48"\>  
\<div\>  
\<div class="flex justify-between items-start"\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Monthly Income\</p\>  
\<span class="material-symbols-outlined text-secondary"\>arrow\_downward\</span\>  
\</div\>  
\<h3 class="font-headline-lg text-headline-lg mt-xs text-on-surface"\>$5,200.00\</h3\>  
\</div\>  
\<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"\>  
\<div class="bg-secondary h-full" style="width: 75%;"\>\</div\>  
\</div\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>75% of monthly target reached\</p\>  
\</div\>  
\<\!-- Monthly Expenses \--\>  
\<div class="bento-card bg-surface-container-lowest p-xl rounded-xl border border-outline-variant flex flex-col justify-between h-48"\>  
\<div\>  
\<div class="flex justify-between items-start"\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Monthly Expenses\</p\>  
\<span class="material-symbols-outlined text-error"\>arrow\_upward\</span\>  
\</div\>  
\<h3 class="font-headline-lg text-headline-lg mt-xs text-on-surface"\>$3,120.25\</h3\>  
\</div\>  
\<div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"\>  
\<div class="bg-error h-full" style="width: 60%;"\>\</div\>  
\</div\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>60% of budget consumed\</p\>  
\</div\>  
\</div\>  
\<\!-- Dashboard Content Layout \--\>  
\<div class="grid grid-cols-1 lg:grid-cols-3 gap-lg"\>  
\<\!-- Recent Transactions (2/3 width) \--\>  
\<div class="lg:col-span-2 space-y-md"\>  
\<div class="flex justify-between items-center mb-md"\>  
\<h4 class="font-headline-md text-headline-md text-on-surface"\>Recent Transactions\</h4\>  
\<button class="text-primary font-label-md hover:underline cursor-pointer"\>View All\</button\>  
\</div\>  
\<div class="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden"\>  
\<\!-- Transaction Items \--\>  
\<div class="divide-y divide-outline-variant"\>  
\<\!-- Item 1 \--\>  
\<div class="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors group"\>  
\<div class="flex items-center space-x-md"\>  
\<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary"\>  
\<span class="material-symbols-outlined"\>shopping\_cart\</span\>  
\</div\>  
\<div\>  
\<p class="font-body-md font-semibold text-on-surface"\>Amazon Fresh Delivery\</p\>  
\<p class="font-label-md text-on-surface-variant"\>Oct 24, 2023 • Groceries\</p\>  
\</div\>  
\</div\>  
\<div class="text-right"\>  
\<p class="font-body-md font-bold text-error"\>-$15.00\</p\>  
\<span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"\>chevron\_right\</span\>  
\</div\>  
\</div\>  
\<\!-- Item 2 \--\>  
\<div class="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors group"\>  
\<div class="flex items-center space-x-md"\>  
\<div class="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container"\>  
\<span class="material-symbols-outlined"\>payments\</span\>  
\</div\>  
\<div\>  
\<p class="font-body-md font-semibold text-on-surface"\>Monthly Salary\</p\>  
\<p class="font-label-md text-on-surface-variant"\>Oct 23, 2023 • Income\</p\>  
\</div\>  
\</div\>  
\<div class="text-right"\>  
\<p class="font-body-md font-bold text-secondary"\>+$4,200.00\</p\>  
\<span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"\>chevron\_right\</span\>  
\</div\>  
\</div\>  
\<\!-- Item 3 \--\>  
\<div class="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors group"\>  
\<div class="flex items-center space-x-md"\>  
\<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary"\>  
\<span class="material-symbols-outlined"\>electric\_bolt\</span\>  
\</div\>  
\<div\>  
\<p class="font-body-md font-semibold text-on-surface"\>Utility Bill\</p\>  
\<p class="font-label-md text-on-surface-variant"\>Oct 22, 2023 • Utilities\</p\>  
\</div\>  
\</div\>  
\<div class="text-right"\>  
\<p class="font-body-md font-bold text-error"\>-$84.15\</p\>  
\<span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"\>chevron\_right\</span\>  
\</div\>  
\</div\>  
\<\!-- Item 4 \--\>  
\<div class="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors group"\>  
\<div class="flex items-center space-x-md"\>  
\<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary"\>  
\<span class="material-symbols-outlined"\>directions\_car\</span\>  
\</div\>  
\<div\>  
\<p class="font-body-md font-semibold text-on-surface"\>Gas Station\</p\>  
\<p class="font-label-md text-on-surface-variant"\>Oct 21, 2023 • Transport\</p\>  
\</div\>  
\</div\>  
\<div class="text-right"\>  
\<p class="font-body-md font-bold text-error"\>-$62.00\</p\>  
\<span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"\>chevron\_right\</span\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Sidebar Content (1/3 width) \--\>  
\<div class="space-y-lg"\>  
\<\!-- Savings Target Card \--\>  
\<div class="bg-surface-container-high p-lg rounded-xl border border-outline-variant"\>  
\<h4 class="font-headline-md text-headline-md text-on-surface mb-md"\>Savings Goal\</h4\>  
\<div class="flex justify-between items-center mb-sm"\>  
\<span class="font-label-md text-on-surface-variant"\>New Workstation\</span\>  
\<span class="font-label-md font-bold text-on-surface"\>70%\</span\>  
\</div\>  
\<div class="w-full bg-surface-container-highest h-3 rounded-full mb-lg"\>  
\<div class="bg-primary h-full rounded-full" style="width: 70%;"\>\</div\>  
\</div\>  
\<div class="flex justify-between items-end"\>  
\<div\>  
\<p class="text-\[20px\] font-bold text-on-surface"\>$2,100\</p\>  
\<p class="font-label-md text-on-surface-variant"\>Saved of $3,000\</p\>  
\</div\>  
\<button class="bg-surface text-primary p-xs rounded-full border border-primary hover:bg-primary hover:text-on-primary transition-all"\>  
\<span class="material-symbols-outlined text-sm"\>add\</span\>  
\</button\>  
\</div\>  
\</div\>  
\<\!-- Spending Breakdown Visualization Placeholder \--\>  
\<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant"\>  
\<h4 class="font-headline-md text-headline-md text-on-surface mb-md"\>Expenses by Category\</h4\>  
\<div class="flex justify-center py-lg relative"\>  
\<\!-- Simple CSS Circle chart proxy \--\>  
\<div class="w-32 h-32 rounded-full border-\[12px\] border-primary flex items-center justify-center relative"\>  
\<div class="absolute inset-\[-12px\] rounded-full border-\[12px\] border-secondary border-l-transparent border-t-transparent border-b-transparent transform rotate-45"\>\</div\>  
\<span class="font-headline-md text-on-surface"\>$3k\</span\>  
\</div\>  
\</div\>  
\<div class="space-y-sm mt-md"\>  
\<div class="flex justify-between items-center"\>  
\<div class="flex items-center space-x-sm"\>  
\<div class="w-2 h-2 rounded-full bg-primary"\>\</div\>  
\<span class="font-label-md text-on-surface-variant"\>Housing\</span\>  
\</div\>  
\<span class="font-label-md text-on-surface"\>45%\</span\>  
\</div\>  
\<div class="flex justify-between items-center"\>  
\<div class="flex items-center space-x-sm"\>  
\<div class="w-2 h-2 rounded-full bg-secondary"\>\</div\>  
\<span class="font-label-md text-on-surface-variant"\>Food\</span\>  
\</div\>  
\<span class="font-label-md text-on-surface"\>25%\</span\>  
\</div\>  
\<div class="flex justify-between items-center"\>  
\<div class="flex items-center space-x-sm"\>  
\<div class="w-2 h-2 rounded-full bg-surface-dim"\>\</div\>  
\<span class="font-label-md text-on-surface-variant"\>Entertainment\</span\>  
\</div\>  
\<span class="font-label-md text-on-surface"\>30%\</span\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\</main\>  
\</div\>  
\<\!-- Mobile Navigation (Bottom Nav) \--\>  
\<div class="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant flex justify-around items-center h-16 z-50"\>  
\<a class="flex flex-col items-center text-primary" href="\#"\>  
\<span class="material-symbols-outlined" style="font-variation-settings: \&quot;FILL\&quot; 1;"\>dashboard\</span\>  
\<span class="text-\[10px\] font-label-md"\>Dashboard\</span\>  
\</a\>  
\<a class="flex flex-col items-center text-on-surface-variant" href="\#"\>  
\<span class="material-symbols-outlined"\>receipt\_long\</span\>  
\<span class="text-\[10px\] font-label-md"\>Transactions\</span\>  
\</a\>  
\<div class="relative \-top-6"\>  
\<button class="bg-primary text-on-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"\>  
\<span class="material-symbols-outlined text-3xl"\>add\</span\>  
\</button\>  
\</div\>  
\<a class="flex flex-col items-center text-on-surface-variant" href="\#"\>  
\<span class="material-symbols-outlined"\>bar\_chart\</span\>  
\<span class="text-\[10px\] font-label-md"\>Reports\</span\>  
\</a\>  
\<a class="flex flex-col items-center text-on-surface-variant" href="\#"\>  
\<span class="material-symbols-outlined"\>settings\</span\>  
\<span class="text-\[10px\] font-label-md"\>Settings\</span\>  
\</a\>  
\</div\>  
\<script\>  
        // Simple Interaction logic for active state visual feedback  
        document.querySelectorAll('nav a, bottom-nav a').forEach(link \=\> {  
            link.addEventListener('click', function(e) {  
                // This would handle navigation in a real SPA  
                // console.log('Navigating to:', this.innerText.trim());  
            });  
        });  
    \</script\>

\</body\>\</html\>  
