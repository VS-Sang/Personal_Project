\<\!DOCTYPE html\>

\<html class="light" lang="en"\>\<head\>  
\<meta charset="utf-8"/\>  
\<meta content="width=device-width, initial-scale=1.0" name="viewport"/\>  
\<title\>LedgerFlow | Reports \&amp; Analytics\</title\>  
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
                }  
            }  
        }  
    \</script\>  
\<style\>  
        .chart-container { position: relative; }  
        .bar-hover:hover { filter: brightness(1.1); }  
        .pie-segment { transition: transform 0.3s ease; cursor: pointer; }  
        .pie-segment:hover { transform: scale(1.05); }  
    \</style\>  
\</head\>  
\<body class="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed"\>  
\<div class="flex min-h-screen"\>  
\<\!-- SideNavBar \--\>  
\<aside class="hidden md:flex flex-col h-screen w-64 bg-surface border-r border-outline-variant p-md space-y-lg fixed left-0 top-0"\>  
\<div class="flex items-center gap-sm px-sm"\>  
\<span class="material-symbols-outlined text-primary text-headline-md" style="font-variation-settings: 'FILL' 1;"\>account\_balance\_wallet\</span\>  
\<span class="font-headline-md text-headline-md font-bold text-primary"\>LedgerFlow\</span\>  
\</div\>  
\<div class="flex flex-col gap-xs flex-grow"\>  
\<a class="flex items-center gap-md p-sm text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg cursor-pointer active:scale-95 transition-transform" href="\#"\>  
\<span class="material-symbols-outlined"\>dashboard\</span\>  
\<span class="font-label-md text-label-md"\>Dashboard\</span\>  
\</a\>  
\<a class="flex items-center gap-md p-sm text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg cursor-pointer active:scale-95 transition-transform" href="\#"\>  
\<span class="material-symbols-outlined"\>receipt\_long\</span\>  
\<span class="font-label-md text-label-md"\>Transactions\</span\>  
\</a\>  
\<a class="flex items-center gap-md p-sm text-primary font-bold bg-surface-container transition-colors rounded-lg cursor-pointer active:scale-95 transition-transform" href="\#"\>  
\<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;"\>bar\_chart\</span\>  
\<span class="font-label-md text-label-md"\>Reports\</span\>  
\</a\>  
\</div\>  
\<div class="mt-auto space-y-xs pt-lg border-t border-outline-variant"\>  
\<button class="w-full bg-primary text-on-primary py-sm rounded-xl font-body-md font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-xs mb-md"\>  
\<span class="material-symbols-outlined"\>add\</span\>  
                    Add Transaction  
                \</button\>  
\<a class="flex items-center gap-md p-sm text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" href="\#"\>  
\<span class="material-symbols-outlined"\>settings\</span\>  
\<span class="font-label-md text-label-md"\>Settings\</span\>  
\</a\>  
\<a class="flex items-center gap-md p-sm text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg" href="\#"\>  
\<span class="material-symbols-outlined"\>help\</span\>  
\<span class="font-label-md text-label-md"\>Help\</span\>  
\</a\>  
\</div\>  
\</aside\>  
\<\!-- Main Canvas \--\>  
\<main class="flex-1 md:ml-64 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl"\>  
\<\!-- Header Section \--\>  
\<header class="mb-2xl flex flex-col md:flex-row md:items-end justify-between gap-md"\>  
\<div\>  
\<h1 class="font-display-lg text-display-lg text-on-background"\>Financial Analytics\</h1\>  
\<p class="text-on-surface-variant font-body-lg"\>Comprehensive insights into your cash flow and spending behavior.\</p\>  
\</div\>  
\<div class="flex gap-sm"\>  
\<div class="bg-surface-container-low px-md py-sm rounded-xl border border-outline-variant flex items-center gap-sm cursor-pointer"\>  
\<span class="material-symbols-outlined text-on-surface-variant"\>calendar\_today\</span\>  
\<span class="text-body-md font-medium"\>Last 6 Months\</span\>  
\<span class="material-symbols-outlined text-on-surface-variant"\>expand\_more\</span\>  
\</div\>  
\<button class="bg-surface-container-highest text-on-surface p-sm rounded-xl border border-outline-variant hover:bg-surface-container-high transition-colors"\>  
\<span class="material-symbols-outlined"\>download\</span\>  
\</button\>  
\</div\>  
\</header\>  
\<\!-- Bento Grid Layout \--\>  
\<div class="grid grid-cols-1 md:grid-cols-12 gap-lg"\>  
\<\!-- Summary Cards \--\>  
\<div class="md:col-span-4 space-y-lg"\>  
\<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant"\>  
\<p class="text-label-md font-label-md uppercase tracking-wider text-on-surface-variant"\>Net Savings\</p\>  
\<h3 class="text-display-lg font-display-lg mt-xs text-secondary"\>+$12,450.80\</h3\>  
\<p class="text-body-md mt-sm flex items-center gap-xs"\>  
\<span class="text-secondary material-symbols-outlined text-sm"\>trending\_up\</span\>  
\<span class="text-secondary font-semibold"\>12% increase\</span\>  
\<span class="text-on-surface-variant"\>vs previous period\</span\>  
\</p\>  
\</div\>  
\<div class="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant"\>  
\<p class="text-label-md font-label-md uppercase tracking-wider text-on-surface-variant"\>Top Expense Category\</p\>  
\<div class="flex items-center gap-md mt-sm"\>  
\<div class="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary"\>  
\<span class="material-symbols-outlined"\>restaurant\</span\>  
\</div\>  
\<div\>  
\<h3 class="text-headline-md font-headline-md"\>Dining \&amp; Food\</h3\>  
\<p class="text-on-surface-variant font-body-md"\>$1,240.00 this month\</p\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Bar Chart: Income vs Expenses \--\>  
\<div class="md:col-span-8 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant"\>  
\<div class="flex items-center justify-between mb-xl"\>  
\<h3 class="text-headline-md font-headline-md"\>Income vs Expenses\</h3\>  
\<div class="flex items-center gap-lg"\>  
\<div class="flex items-center gap-xs"\>  
\<div class="w-3 h-3 rounded-full bg-primary"\>\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Income\</span\>  
\</div\>  
\<div class="flex items-center gap-xs"\>  
\<div class="w-3 h-3 rounded-full bg-error"\>\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Expenses\</span\>  
\</div\>  
\</div\>  
\</div\>  
\<div class="h-64 flex items-end justify-between gap-sm px-sm"\>  
\<\!-- Jan \--\>  
\<div class="flex-1 flex flex-col items-center gap-xs group"\>  
\<div class="w-full flex gap-1 items-end h-full"\>  
\<div class="w-1/2 bg-primary rounded-t-sm bar-hover transition-all" style="height: 85%;"\>\</div\>  
\<div class="w-1/2 bg-error rounded-t-sm bar-hover transition-all" style="height: 60%;"\>\</div\>  
\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Jan\</span\>  
\</div\>  
\<\!-- Feb \--\>  
\<div class="flex-1 flex flex-col items-center gap-xs group"\>  
\<div class="w-full flex gap-1 items-end h-full"\>  
\<div class="w-1/2 bg-primary rounded-t-sm bar-hover transition-all" style="height: 70%;"\>\</div\>  
\<div class="w-1/2 bg-error rounded-t-sm bar-hover transition-all" style="height: 55%;"\>\</div\>  
\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Feb\</span\>  
\</div\>  
\<\!-- Mar \--\>  
\<div class="flex-1 flex flex-col items-center gap-xs group"\>  
\<div class="w-full flex gap-1 items-end h-full"\>  
\<div class="w-1/2 bg-primary rounded-t-sm bar-hover transition-all" style="height: 95%;"\>\</div\>  
\<div class="w-1/2 bg-error rounded-t-sm bar-hover transition-all" style="height: 45%;"\>\</div\>  
\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Mar\</span\>  
\</div\>  
\<\!-- Apr \--\>  
\<div class="flex-1 flex flex-col items-center gap-xs group"\>  
\<div class="w-full flex gap-1 items-end h-full"\>  
\<div class="w-1/2 bg-primary rounded-t-sm bar-hover transition-all" style="height: 80%;"\>\</div\>  
\<div class="w-1/2 bg-error rounded-t-sm bar-hover transition-all" style="height: 75%;"\>\</div\>  
\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Apr\</span\>  
\</div\>  
\<\!-- May \--\>  
\<div class="flex-1 flex flex-col items-center gap-xs group"\>  
\<div class="w-full flex gap-1 items-end h-full"\>  
\<div class="w-1/2 bg-primary rounded-t-sm bar-hover transition-all" style="height: 90%;"\>\</div\>  
\<div class="w-1/2 bg-error rounded-t-sm bar-hover transition-all" style="height: 50%;"\>\</div\>  
\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>May\</span\>  
\</div\>  
\<\!-- Jun \--\>  
\<div class="flex-1 flex flex-col items-center gap-xs group"\>  
\<div class="w-full flex gap-1 items-end h-full"\>  
\<div class="w-1/2 bg-primary rounded-t-sm bar-hover transition-all" style="height: 100%;"\>\</div\>  
\<div class="w-1/2 bg-error rounded-t-sm bar-hover transition-all" style="height: 40%;"\>\</div\>  
\</div\>  
\<span class="text-label-md font-label-md text-on-surface-variant"\>Jun\</span\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Pie Chart: Spending by Category \--\>  
\<div class="md:col-span-6 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant"\>  
\<h3 class="text-headline-md font-headline-md mb-xl"\>Spending by Category\</h3\>  
\<div class="flex flex-col md:flex-row items-center justify-around gap-lg"\>  
\<div class="relative w-48 h-48"\>  
\<svg class="w-full h-full transform \-rotate-90" viewbox="0 0 36 36"\>  
\<\!-- Background Circle \--\>  
\<circle cx="18" cy="18" fill="transparent" r="16" stroke="\#f1f5f9" stroke-width="4"\>\</circle\>  
\<\!-- Segments (Representational) \--\>  
\<circle class="pie-segment" cx="18" cy="18" fill="transparent" r="16" stroke="\#004ac6" stroke-dasharray="40 100" stroke-width="4"\>\</circle\>  
\<circle class="pie-segment" cx="18" cy="18" fill="transparent" r="16" stroke="\#006c49" stroke-dasharray="25 100" stroke-dashoffset="-40" stroke-width="4"\>\</circle\>  
\<circle class="pie-segment" cx="18" cy="18" fill="transparent" r="16" stroke="\#ab0b1c" stroke-dasharray="20 100" stroke-dashoffset="-65" stroke-width="4"\>\</circle\>  
\<circle class="pie-segment" cx="18" cy="18" fill="transparent" r="16" stroke="\#cbdbf5" stroke-dasharray="15 100" stroke-dashoffset="-85" stroke-width="4"\>\</circle\>  
\</svg\>  
\<div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"\>  
\<span class="text-label-md font-label-md text-on-surface-variant uppercase"\>Total\</span\>  
\<span class="text-headline-md font-bold"\>$4,850\</span\>  
\</div\>  
\</div\>  
\<div class="space-y-sm w-full md:w-auto"\>  
\<div class="flex items-center justify-between gap-xl"\>  
\<div class="flex items-center gap-sm"\>  
\<div class="w-3 h-3 rounded-sm bg-primary"\>\</div\>  
\<span class="text-body-md"\>Housing\</span\>  
\</div\>  
\<span class="text-body-md font-semibold"\>40%\</span\>  
\</div\>  
\<div class="flex items-center justify-between gap-xl"\>  
\<div class="flex items-center gap-sm"\>  
\<div class="w-3 h-3 rounded-sm bg-secondary"\>\</div\>  
\<span class="text-body-md"\>Investments\</span\>  
\</div\>  
\<span class="text-body-md font-semibold"\>25%\</span\>  
\</div\>  
\<div class="flex items-center justify-between gap-xl"\>  
\<div class="flex items-center gap-sm"\>  
\<div class="w-3 h-3 rounded-sm bg-tertiary"\>\</div\>  
\<span class="text-body-md"\>Entertainment\</span\>  
\</div\>  
\<span class="text-body-md font-semibold"\>20%\</span\>  
\</div\>  
\<div class="flex items-center justify-between gap-xl"\>  
\<div class="flex items-center gap-sm"\>  
\<div class="w-3 h-3 rounded-sm bg-surface-dim"\>\</div\>  
\<span class="text-body-md"\>Others\</span\>  
\</div\>  
\<span class="text-body-md font-semibold"\>15%\</span\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Transaction Health/Insights \--\>  
\<div class="md:col-span-6 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex flex-col"\>  
\<h3 class="text-headline-md font-headline-md mb-md"\>Insights \&amp; Suggestions\</h3\>  
\<div class="space-y-md flex-grow"\>  
\<div class="p-md bg-secondary-container/20 rounded-lg flex gap-md items-start"\>  
\<span class="material-symbols-outlined text-secondary"\>verified\</span\>  
\<div\>  
\<p class="text-body-md font-semibold text-secondary"\>Spending Goal Reached\</p\>  
\<p class="text-body-md text-on-surface-variant"\>You saved $200 more than last month in the 'Dining' category. Keep it up\!\</p\>  
\</div\>  
\</div\>  
\<div class="p-md bg-primary-container/10 rounded-lg flex gap-md items-start"\>  
\<span class="material-symbols-outlined text-primary"\>lightbulb\</span\>  
\<div\>  
\<p class="text-body-md font-semibold text-primary"\>Subscription Optimization\</p\>  
\<p class="text-body-md text-on-surface-variant"\>We noticed 3 recurring payments for streaming services. Consolidating could save you $25/mo.\</p\>  
\</div\>  
\</div\>  
\<div class="p-md bg-tertiary-container/10 rounded-lg flex gap-md items-start"\>  
\<span class="material-symbols-outlined text-tertiary"\>warning\</span\>  
\<div\>  
\<p class="text-body-md font-semibold text-tertiary"\>Impulse Purchase Alert\</p\>  
\<p class="text-body-md text-on-surface-variant"\>Your weekend spending is 15% higher than average. Consider setting a leisure budget.\</p\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\</div\>  
\<\!-- Detailed Table Section (Hidden on Mobile) \--\>  
\<section class="mt-2xl hidden lg:block bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden"\>  
\<div class="px-lg py-md border-b border-outline-variant bg-surface-container-low flex items-center justify-between"\>  
\<h3 class="text-headline-md font-headline-md"\>Monthly Comparison Data\</h3\>  
\<button class="text-primary font-body-md font-semibold hover:underline"\>View Detailed CSV\</button\>  
\</div\>  
\<table class="w-full text-left"\>  
\<thead\>  
\<tr class="bg-surface-container-low/50"\>  
\<th class="px-lg py-sm text-label-md font-label-md text-on-surface-variant uppercase tracking-wider"\>Month\</th\>  
\<th class="px-lg py-sm text-label-md font-label-md text-on-surface-variant uppercase tracking-wider"\>Income\</th\>  
\<th class="px-lg py-sm text-label-md font-label-md text-on-surface-variant uppercase tracking-wider"\>Expenses\</th\>  
\<th class="px-lg py-sm text-label-md font-label-md text-on-surface-variant uppercase tracking-wider"\>Net Savings\</th\>  
\<th class="px-lg py-sm text-label-md font-label-md text-on-surface-variant uppercase tracking-wider"\>Status\</th\>  
\</tr\>  
\</thead\>  
\<tbody class="divide-y divide-outline-variant"\>  
\<tr\>  
\<td class="px-lg py-md text-body-md font-medium"\>June 2024\</td\>  
\<td class="px-lg py-md text-body-md"\>$8,400.00\</td\>  
\<td class="px-lg py-md text-body-md text-error"\>$3,200.00\</td\>  
\<td class="px-lg py-md text-body-md text-secondary"\>+$5,200.00\</td\>  
\<td class="px-lg py-md"\>  
\<span class="px-sm py-xs bg-secondary/10 text-secondary text-label-md font-bold rounded-full"\>SURPLUS\</span\>  
\</td\>  
\</tr\>  
\<tr\>  
\<td class="px-lg py-md text-body-md font-medium"\>May 2024\</td\>  
\<td class="px-lg py-md text-body-md"\>$7,900.00\</td\>  
\<td class="px-lg py-md text-body-md text-error"\>$4,100.00\</td\>  
\<td class="px-lg py-md text-body-md text-secondary"\>+$3,800.00\</td\>  
\<td class="px-lg py-md"\>  
\<span class="px-sm py-xs bg-secondary/10 text-secondary text-label-md font-bold rounded-full"\>SURPLUS\</span\>  
\</td\>  
\</tr\>  
\<tr\>  
\<td class="px-lg py-md text-body-md font-medium"\>April 2024\</td\>  
\<td class="px-lg py-md text-body-md"\>$7,200.00\</td\>  
\<td class="px-lg py-md text-body-md text-error"\>$6,800.00\</td\>  
\<td class="px-lg py-md text-body-md text-secondary"\>+$400.00\</td\>  
\<td class="px-lg py-md"\>  
\<span class="px-sm py-xs bg-surface-dim/20 text-on-surface-variant text-label-md font-bold rounded-full"\>STABLE\</span\>  
\</td\>  
\</tr\>  
\</tbody\>  
\</table\>  
\</section\>  
\</main\>  
\</div\>  
\<\!-- Mobile Navigation (BottomNavBar) \--\>  
\<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant px-margin-mobile h-16 flex items-center justify-around z-50"\>  
\<a class="flex flex-col items-center gap-xs text-on-surface-variant" href="\#"\>  
\<span class="material-symbols-outlined"\>dashboard\</span\>  
\<span class="text-\[10px\] font-label-md"\>Home\</span\>  
\</a\>  
\<a class="flex flex-col items-center gap-xs text-on-surface-variant" href="\#"\>  
\<span class="material-symbols-outlined"\>receipt\_long\</span\>  
\<span class="text-\[10px\] font-label-md"\>List\</span\>  
\</a\>  
\<div class="relative \-top-4"\>  
\<button class="bg-primary text-on-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center"\>  
\<span class="material-symbols-outlined"\>add\</span\>  
\</button\>  
\</div\>  
\<a class="flex flex-col items-center gap-xs text-primary" href="\#"\>  
\<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;"\>bar\_chart\</span\>  
\<span class="text-\[10px\] font-label-md font-bold"\>Reports\</span\>  
\</a\>  
\<a class="flex flex-col items-center gap-xs text-on-surface-variant" href="\#"\>  
\<span class="material-symbols-outlined"\>settings\</span\>  
\<span class="text-\[10px\] font-label-md"\>Settings\</span\>  
\</a\>  
\</nav\>  
\<script\>  
        // Simple Micro-interaction for the pie segments  
        document.querySelectorAll('.pie-segment').forEach(segment \=\> {  
            segment.addEventListener('mouseenter', () \=\> {  
                segment.style.strokeWidth \= '6';  
            });  
            segment.addEventListener('mouseleave', () \=\> {  
                segment.style.strokeWidth \= '4';  
            });  
        });  
    \</script\>  
\</body\>\</html\>

