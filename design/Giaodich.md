\<\!DOCTYPE html\>

\<html class="light" lang="en"\>\<head\>  
\<meta charset="utf-8"/\>  
\<meta content="width=device-width, initial-scale=1.0" name="viewport"/\>  
\<title\>LedgerFlow | Transactions\</title\>  
\<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"\>\</script\>  
\<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&amp;display=swap" rel="stylesheet"/\>  
\<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\&amp;display=swap" rel="stylesheet"/\>  
\<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\&amp;display=swap" rel="stylesheet"/\>  
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
                    "mono-md": \["ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas"\],  
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
\<style\>  
        body { font-family: 'Inter', sans-serif; }  
        .material-symbols-outlined {  
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;  
        }  
        ::-webkit-scrollbar { width: 6px; }  
        ::-webkit-scrollbar-track { background: transparent; }  
        ::-webkit-scrollbar-thumb { background: \#cbd5e1; border-radius: 10px; }  
        ::-webkit-scrollbar-thumb:hover { background: \#94a3b8; }  
    \</style\>  
\</head\>  
\<body class="bg-background text-on-surface"\>  
\<div class="flex min-h-screen"\>  
\<\!-- SideNavBar \--\>  
\<aside class="hidden md:flex flex-col h-screen left-0 w-64 bg-surface dark:bg-surface border-r border-outline-variant dark:border-outline-variant p-md space-y-lg fixed z-50"\>  
\<div class="flex items-center gap-sm px-sm"\>  
\<div class="w-8 h-8 bg-primary rounded flex items-center justify-center"\>  
\<span class="material-symbols-outlined text-on-primary text-\[20px\]" style="font-variation-settings: 'FILL' 1;"\>account\_balance\_wallet\</span\>  
\</div\>  
\<div\>  
\<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim"\>LedgerFlow\</h1\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Personal Finance\</p\>  
\</div\>  
\</div\>  
\<nav class="flex-1 space-y-xs"\>  
\<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors rounded-lg cursor-pointer font-label-md text-label-md" href="\#"\>  
\<span class="material-symbols-outlined"\>dashboard\</span\>  
\<span\>Dashboard\</span\>  
\</a\>  
\<a class="flex items-center gap-md px-md py-sm text-primary dark:text-primary-fixed-dim font-bold transition-colors rounded-lg cursor-pointer font-label-md text-label-md" href="\#"\>  
\<span class="material-symbols-outlined"\>receipt\_long\</span\>  
\<span\>Transactions\</span\>  
\</a\>  
\<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors rounded-lg cursor-pointer font-label-md text-label-md" href="\#"\>  
\<span class="material-symbols-outlined"\>bar\_chart\</span\>  
\<span\>Reports\</span\>  
\</a\>  
\</nav\>  
\<button class="w-full py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-xs"\>  
\<span class="material-symbols-outlined"\>add\</span\>  
\<span\>Add Transaction\</span\>  
\</button\>  
\<div class="space-y-xs pt-lg border-t border-outline-variant"\>  
\<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors rounded-lg cursor-pointer font-label-md text-label-md" href="\#"\>  
\<span class="material-symbols-outlined"\>settings\</span\>  
\<span\>Settings\</span\>  
\</a\>  
\<a class="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors rounded-lg cursor-pointer font-label-md text-label-md" href="\#"\>  
\<span class="material-symbols-outlined"\>help\</span\>  
\<span\>Help\</span\>  
\</a\>  
\</div\>  
\<div class="flex items-center gap-md p-sm mt-auto"\>  
\<img alt="User profile" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A professional headshot of a person with a friendly expression, captured with high-quality studio lighting on a neutral, minimalist background. The lighting is soft and even, reflecting a modern SaaS professional aesthetic. The composition is clean and centered, emphasizing a high-end, utilitarian user experience design style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfF1ywDLzwJY-aZ\_vYKdaYoTEO8aM\_Sx660g9eu2KhFp1b6srPscXwLvGDMyxi42RkTZQzzw1xsc89hMDByomDU63VG8oAxrid5GF6l6KM0Pgn9YjizImE2atLHelNR4l9nSkbg\_LQBt\_ASwlTnEe1x9metsdY04HzUXCTPCcnaFwVpTYEl32hjHW6samL6HGnrVSPr-IHXdlh8qOenx5ENlNjRSKS0dD7f8lHexaQWpfZB4a\_aNKoOe1m\_pgpe\_MMEyD65i7Ucuw"/\>  
\<div class="overflow-hidden"\>  
\<p class="font-label-md text-label-md font-bold truncate"\>Alex Chen\</p\>  
\<p class="font-label-md text-label-md text-on-surface-variant truncate text-\[10px\]"\>Developer Plan\</p\>  
\</div\>  
\</div\>  
\</aside\>  
\<\!-- Main Content \--\>  
\<main class="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop max-w-7xl mx-auto w-full"\>  
\<\!-- Top Header (Mobile view uses TopNavBar style implicitly) \--\>  
\<header class="flex justify-between items-center mb-lg"\>  
\<div class="flex flex-col"\>  
\<h2 class="font-headline-lg text-headline-lg text-on-surface"\>Past Transactions\</h2\>  
\<p class="font-body-md text-body-md text-on-surface-variant"\>Track and manage your history\</p\>  
\</div\>  
\<div class="flex gap-sm"\>  
\<button class="material-symbols-outlined p-sm rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant"\>notifications\</button\>  
\<button class="material-symbols-outlined p-sm rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant"\>search\</button\>  
\</div\>  
\</header\>  
\<\!-- Filters Section (Bento Inspired Grid) \--\>  
\<section class="grid grid-cols-1 md:grid-cols-12 gap-md mb-lg"\>  
\<div class="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-wrap items-center gap-sm"\>  
\<span class="font-label-md text-label-md text-on-surface-variant mr-xs"\>FILTERS:\</span\>  
\<button class="px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md"\>All\</button\>  
\<button class="px-md py-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full font-label-md text-label-md flex items-center gap-xs"\>  
\<span class="material-symbols-outlined text-\[16px\]"\>restaurant\</span\> Food  
                    \</button\>  
\<button class="px-md py-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full font-label-md text-label-md flex items-center gap-xs"\>  
\<span class="material-symbols-outlined text-\[16px\]"\>directions\_car\</span\> Transport  
                    \</button\>  
\<button class="px-md py-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full font-label-md text-label-md flex items-center gap-xs"\>  
\<span class="material-symbols-outlined text-\[16px\]"\>home\</span\> Rent  
                    \</button\>  
\<button class="px-md py-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full font-label-md text-label-md flex items-center gap-xs"\>  
\<span class="material-symbols-outlined text-\[16px\]"\>shopping\_bag\</span\> Shopping  
                    \</button\>  
\<div class="flex-1 md:flex-none h-\[1px\] md:h-6 md:w-\[1px\] bg-outline-variant mx-xs"\>\</div\>  
\<button class="px-md py-sm bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full font-label-md text-label-md flex items-center gap-xs"\>  
\<span class="material-symbols-outlined text-\[16px\]"\>filter\_list\</span\> More  
                    \</button\>  
\</div\>  
\<div class="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex items-center justify-between"\>  
\<div class="flex items-center gap-sm"\>  
\<span class="material-symbols-outlined text-primary"\>calendar\_today\</span\>  
\<div class="flex flex-col"\>  
\<span class="font-label-md text-label-md text-on-surface-variant"\>Date Range\</span\>  
\<span class="font-body-md text-body-md font-semibold"\>Oct 01 \- Oct 31, 2023\</span\>  
\</div\>  
\</div\>  
\<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container p-xs rounded"\>expand\_more\</button\>  
\</div\>  
\</section\>  
\<\!-- Transactions List/Table Section \--\>  
\<div class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden"\>  
\<\!-- Desktop Header \--\>  
\<div class="hidden md:grid grid-cols-12 gap-md p-md border-b border-outline-variant bg-surface-container-low font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"\>  
\<div class="col-span-1"\>Icon\</div\>  
\<div class="col-span-3"\>Description / Note\</div\>  
\<div class="col-span-2"\>Category\</div\>  
\<div class="col-span-2"\>Date\</div\>  
\<div class="col-span-2 text-right"\>Amount\</div\>  
\<div class="col-span-2 text-right"\>Actions\</div\>  
\</div\>  
\<\!-- Transaction Rows \--\>  
\<div class="divide-y divide-outline-variant"\>  
\<\!-- Row 1 \--\>  
\<div class="grid grid-cols-1 md:grid-cols-12 gap-md p-md hover:bg-surface-bright transition-colors items-center"\>  
\<div class="col-span-1 flex items-center justify-center"\>  
\<div class="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container"\>  
\<span class="material-symbols-outlined"\>restaurant\</span\>  
\</div\>  
\</div\>  
\<div class="col-span-3"\>  
\<p class="font-body-md text-body-md font-bold text-on-surface"\>Whole Foods Market\</p\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Weekly groceries and snacks\</p\>  
\</div\>  
\<div class="col-span-2"\>  
\<span class="px-sm py-xs bg-secondary-container/30 text-on-secondary-container rounded font-label-md text-label-md border border-secondary/10"\>Food\</span\>  
\</div\>  
\<div class="col-span-2 font-body-md text-body-md text-on-surface-variant"\>  
                            Oct 24, 2023  
                        \</div\>  
\<div class="col-span-2 text-right"\>  
\<p class="font-body-md text-body-md font-bold text-error"\>-$142.30\</p\>  
\</div\>  
\<div class="col-span-2 flex justify-end gap-sm"\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>edit\</button\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>delete\</button\>  
\</div\>  
\</div\>  
\<\!-- Row 2 \--\>  
\<div class="grid grid-cols-1 md:grid-cols-12 gap-md p-md hover:bg-surface-bright transition-colors items-center"\>  
\<div class="col-span-1 flex items-center justify-center"\>  
\<div class="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed"\>  
\<span class="material-symbols-outlined"\>payments\</span\>  
\</div\>  
\</div\>  
\<div class="col-span-3"\>  
\<p class="font-body-md text-body-md font-bold text-on-surface"\>Monthly Salary\</p\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Tech Solutions Inc. Direct Deposit\</p\>  
\</div\>  
\<div class="col-span-2"\>  
\<span class="px-sm py-xs bg-primary-fixed/30 text-on-primary-fixed-variant rounded font-label-md text-label-md border border-primary/10"\>Income\</span\>  
\</div\>  
\<div class="col-span-2 font-body-md text-body-md text-on-surface-variant"\>  
                            Oct 22, 2023  
                        \</div\>  
\<div class="col-span-2 text-right"\>  
\<p class="font-body-md text-body-md font-bold text-secondary"\>+$4,250.00\</p\>  
\</div\>  
\<div class="col-span-2 flex justify-end gap-sm"\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>edit\</button\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>delete\</button\>  
\</div\>  
\</div\>  
\<\!-- Row 3 \--\>  
\<div class="grid grid-cols-1 md:grid-cols-12 gap-md p-md hover:bg-surface-bright transition-colors items-center"\>  
\<div class="col-span-1 flex items-center justify-center"\>  
\<div class="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant"\>  
\<span class="material-symbols-outlined"\>home\</span\>  
\</div\>  
\</div\>  
\<div class="col-span-3"\>  
\<p class="font-body-md text-body-md font-bold text-on-surface"\>Luxury Lofts Rent\</p\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>October rent payment\</p\>  
\</div\>  
\<div class="col-span-2"\>  
\<span class="px-sm py-xs bg-surface-variant text-on-surface-variant rounded font-label-md text-label-md border border-outline-variant"\>Rent\</span\>  
\</div\>  
\<div class="col-span-2 font-body-md text-body-md text-on-surface-variant"\>  
                            Oct 01, 2023  
                        \</div\>  
\<div class="col-span-2 text-right"\>  
\<p class="font-body-md text-body-md font-bold text-error"\>-$1,800.00\</p\>  
\</div\>  
\<div class="col-span-2 flex justify-end gap-sm"\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>edit\</button\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>delete\</button\>  
\</div\>  
\</div\>  
\<\!-- Row 4 \--\>  
\<div class="grid grid-cols-1 md:grid-cols-12 gap-md p-md hover:bg-surface-bright transition-colors items-center"\>  
\<div class="col-span-1 flex items-center justify-center"\>  
\<div class="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed"\>  
\<span class="material-symbols-outlined"\>directions\_car\</span\>  
\</div\>  
\</div\>  
\<div class="col-span-3"\>  
\<p class="font-body-md text-body-md font-bold text-on-surface"\>Uber Trip\</p\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Downtown to Airport\</p\>  
\</div\>  
\<div class="col-span-2"\>  
\<span class="px-sm py-xs bg-tertiary-fixed/30 text-on-tertiary-fixed-variant rounded font-label-md text-label-md border border-tertiary/10"\>Transport\</span\>  
\</div\>  
\<div class="col-span-2 font-body-md text-body-md text-on-surface-variant"\>  
                            Oct 19, 2023  
                        \</div\>  
\<div class="col-span-2 text-right"\>  
\<p class="font-body-md text-body-md font-bold text-error"\>-$34.50\</p\>  
\</div\>  
\<div class="col-span-2 flex justify-end gap-sm"\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>edit\</button\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>delete\</button\>  
\</div\>  
\</div\>  
\<\!-- Row 5 \--\>  
\<div class="grid grid-cols-1 md:grid-cols-12 gap-md p-md hover:bg-surface-bright transition-colors items-center"\>  
\<div class="col-span-1 flex items-center justify-center"\>  
\<div class="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant"\>  
\<span class="material-symbols-outlined"\>shopping\_bag\</span\>  
\</div\>  
\</div\>  
\<div class="col-span-3"\>  
\<p class="font-body-md text-body-md font-bold text-on-surface"\>Amazon.com\</p\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Office supplies and ergonomic mouse\</p\>  
\</div\>  
\<div class="col-span-2"\>  
\<span class="px-sm py-xs bg-surface-variant text-on-surface-variant rounded font-label-md text-label-md border border-outline-variant"\>Shopping\</span\>  
\</div\>  
\<div class="col-span-2 font-body-md text-body-md text-on-surface-variant"\>  
                            Oct 15, 2023  
                        \</div\>  
\<div class="col-span-2 text-right"\>  
\<p class="font-body-md text-body-md font-bold text-error"\>-$89.99\</p\>  
\</div\>  
\<div class="col-span-2 flex justify-end gap-sm"\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>edit\</button\>  
\<button class="material-symbols-outlined p-xs text-on-surface-variant hover:bg-surface-container rounded transition-colors"\>delete\</button\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Footer / Pagination \--\>  
\<div class="flex flex-col md:flex-row items-center justify-between p-md border-t border-outline-variant bg-surface-container-low gap-md"\>  
\<p class="font-label-md text-label-md text-on-surface-variant"\>Showing 1-10 of 42 transactions\</p\>  
\<div class="flex items-center gap-xs"\>  
\<button class="p-sm bg-surface-container-lowest border border-outline-variant rounded-lg hover:bg-surface transition-colors disabled:opacity-50" disabled=""\>  
\<span class="material-symbols-outlined"\>chevron\_left\</span\>  
\</button\>  
\<button class="w-10 h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold"\>1\</button\>  
\<button class="w-10 h-10 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface transition-colors"\>2\</button\>  
\<button class="w-10 h-10 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface transition-colors"\>3\</button\>  
\<span class="px-xs"\>...\</span\>  
\<button class="w-10 h-10 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface transition-colors"\>5\</button\>  
\<button class="p-sm bg-surface-container-lowest border border-outline-variant rounded-lg hover:bg-surface transition-colors"\>  
\<span class="material-symbols-outlined"\>chevron\_right\</span\>  
\</button\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Summary Stats (Bento Bottom) \--\>  
\<section class="grid grid-cols-1 md:grid-cols-3 gap-md mt-lg"\>  
\<div class="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-sm"\>  
\<div class="flex items-center justify-between"\>  
\<span class="font-label-md text-label-md text-on-surface-variant uppercase"\>Total Income\</span\>  
\<span class="material-symbols-outlined text-secondary"\>trending\_up\</span\>  
\</div\>  
\<p class="font-headline-lg text-headline-lg font-bold text-on-surface"\>$4,250.00\</p\>  
\<div class="w-full bg-outline-variant h-1 rounded-full overflow-hidden"\>  
\<div class="bg-secondary h-full w-full"\>\</div\>  
\</div\>  
\</div\>  
\<div class="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-sm"\>  
\<div class="flex items-center justify-between"\>  
\<span class="font-label-md text-label-md text-on-surface-variant uppercase"\>Total Expenses\</span\>  
\<span class="material-symbols-outlined text-error"\>trending\_down\</span\>  
\</div\>  
\<p class="font-headline-lg text-headline-lg font-bold text-on-surface"\>$2,101.12\</p\>  
\<div class="w-full bg-outline-variant h-1 rounded-full overflow-hidden"\>  
\<div class="bg-error h-full w-1/2"\>\</div\>  
\</div\>  
\</div\>  
\<div class="bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-sm"\>  
\<div class="flex items-center justify-between"\>  
\<span class="font-label-md text-label-md text-on-surface-variant uppercase"\>Net Savings\</span\>  
\<span class="material-symbols-outlined text-primary"\>savings\</span\>  
\</div\>  
\<p class="font-headline-lg text-headline-lg font-bold text-on-surface"\>$2,148.88\</p\>  
\<div class="w-full bg-outline-variant h-1 rounded-full overflow-hidden"\>  
\<div class="bg-primary h-full w-2/3"\>\</div\>  
\</div\>  
\</div\>  
\</section\>  
\</main\>  
\</div\>  
\<\!-- Mobile FAB \--\>  
\<button class="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center z-50 active:scale-90 transition-transform"\>  
\<span class="material-symbols-outlined text-\[32px\]"\>add\</span\>  
\</button\>  
\<\!-- Mobile Bottom Nav \--\>  
\<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant h-16 flex items-center justify-around z-40 px-margin-mobile"\>  
\<button class="flex flex-col items-center gap-1 text-on-surface-variant"\>  
\<span class="material-symbols-outlined"\>dashboard\</span\>  
\<span class="text-\[10px\] font-bold"\>Home\</span\>  
\</button\>  
\<button class="flex flex-col items-center gap-1 text-primary"\>  
\<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;"\>receipt\_long\</span\>  
\<span class="text-\[10px\] font-bold"\>Txns\</span\>  
\</button\>  
\<button class="flex flex-col items-center gap-1 text-on-surface-variant"\>  
\<span class="material-symbols-outlined"\>bar\_chart\</span\>  
\<span class="text-\[10px\] font-bold"\>Reports\</span\>  
\</button\>  
\<button class="flex flex-col items-center gap-1 text-on-surface-variant"\>  
\<span class="material-symbols-outlined"\>settings\</span\>  
\<span class="text-\[10px\] font-bold"\>Settings\</span\>  
\</button\>  
\</nav\>  
\<script\>  
        // Micro-interactions  
        document.querySelectorAll('button, a').forEach(el \=\> {  
            el.addEventListener('click', (e) \=\> {  
                // Simple ripple or feedback effect placeholder  
            });  
        });  
    \</script\>  
\</body\>\</html\>

