// ==========================================
// 1. DADOS (DATA)
// ==========================================
const PIZZAS = [
    {
        id: 1,
        name: "Margherita Clássica",
        description: "Molho de tomate artesanal, mussarela de búfala, manjericão fresco e azeite de oliva extra virgem.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
        prices: { small: 35.00, medium: 45.00, large: 55.00 }
    },
    {
        id: 2,
        name: "Pepperoni Supremo",
        description: "Nossa base de tomate especial coberta com mussarela derretida e fatias generosas de pepperoni crocante.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        prices: { small: 38.00, medium: 49.00, large: 62.00 }
    },
    {
        id: 3,
        name: "Frango com Catupiry",
        description: "Frango desfiado temperado, coberto com o autêntico Catupiry e um toque de orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        prices: { small: 37.00, medium: 48.00, large: 60.00 }
    },
    {
        id: 4,
        name: "Quatro Queijos",
        description: "Blend exclusivo de mussarela, provolone, parmesão e gorgonzola sobre molho de tomate.",
        image: "https://images.unsplash.com/photo-1571407970349-bc1671989f0f?auto=format&fit=crop&w=500&q=80",
        prices: { small: 39.00, medium: 52.00, large: 65.00 }
    },
    {
        id: 5,
        name: "Calabresa Acebolada",
        description: "Calabresa defumada fatiada, cebolas frescas em rodelas e azeitonas pretas.",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80",
        prices: { small: 34.00, medium: 44.00, large: 54.00 }
    }
];

const DRINKS = [
    { id: 101, name: "Coca-Cola Original", volume: "350ml", price: 6.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80" },
    { id: 102, name: "Guaraná Antarctica", volume: "350ml", price: 6.00, image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=200&q=80" },
    { id: 103, name: "Suco de Laranja", volume: "500ml", price: 12.00, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=200&q=80" },
    { id: 104, name: "Cerveja Heineken", volume: "Long Neck 330ml", price: 14.00, image: "https://images.unsplash.com/photo-1618885472179-488eb7e937d5?auto=format&fit=crop&w=200&q=80" }
];

const EXTRAS = [
    { id: 201, name: "Queijo Extra", price: 6.00 },
    { id: 202, name: "Bacon Crocante", price: 5.00 },
    { id: 203, name: "Azeitonas Pretas", price: 4.00 },
    { id: 204, name: "Molho Especial da Casa", price: 3.00 }
];

const CRUST_OPTIONS = [
    { id: 'traditional', name: 'Tradicional', price: 0 },
    { id: 'catupiry', name: 'Recheada com Catupiry', price: 8.00 },
    { id: 'cheddar', name: 'Recheada com Cheddar', price: 8.00 }
];

// ==========================================
// 2. ESTADO DA APLICAÇÃO (STATE)
// ==========================================
let cart = [];

// ==========================================
// 3. FUNÇÕES AUXILIARES
// ==========================================

// Formata número para moeda brasileira
const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Mostra notificação Toast
const showToast = (message) => {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    msgEl.textContent = message;
    
    toast.classList.remove('hidden');
    toast.classList.add('toast-animate');
    toast.classList.add('flex');

    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
    }, 3000);
};

// Atualiza a UI do carrinho
const updateCartUI = () => {
    const countEl = document.getElementById('cart-count');
    const mobileBar = document.getElementById('mobile-cart-bar');
    const mobileTotal = document.getElementById('mobile-total-price');

    if (cart.length > 0) {
        countEl.textContent = cart.length;
        countEl.classList.remove('hidden');
        
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        mobileTotal.textContent = formatCurrency(total);
        mobileBar.classList.remove('hidden');
    } else {
        countEl.classList.add('hidden');
        mobileBar.classList.add('hidden');
    }
};

const addToCart = (item) => {
    cart.push(item);
    updateCartUI();
    showToast(`${item.name} adicionado!`);
};

// ==========================================
// 4. RENDERIZAÇÃO (RENDER)
// ==========================================

// Renderiza os cards de PIZZA
const renderPizzas = () => {
    const container = document.getElementById('pizzas-container');
    
    PIZZAS.forEach(pizza => {
        let currentSize = 'medium';
        let currentCrust = 'traditional';
        
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8 transition-all hover:shadow-md";
        
        card.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                <div class="relative h-48 md:h-full bg-gray-100">
                    <img src="${pizza.image}" alt="${pizza.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x400?text=Pizza'">
                </div>

                <div class="p-6 flex flex-col h-full">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-gray-900">${pizza.name}</h3>
                        <span class="price-display font-semibold text-lg text-orange-600"></span>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-6 leading-relaxed">${pizza.description}</p>

                    <div class="space-y-5 mt-auto">
                        <div>
                            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Tamanho</label>
                            <div class="grid grid-cols-3 gap-2 size-selector"></div>
                        </div>

                        <div>
                            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Tipo de Borda</label>
                            <select class="crust-select w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                                ${CRUST_OPTIONS.map(opt => `<option value="${opt.id}">${opt.name} ${opt.price > 0 ? `(+ ${formatCurrency(opt.price)})` : ''}</option>`).join('')}
                            </select>
                        </div>

                        <div>
                            <button class="toggle-note text-sm text-gray-500 underline decoration-dotted hover:text-orange-600 flex items-center gap-1">
                                Adicionar observação?
                            </button>
                            <textarea class="note-input hidden mt-2 w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none bg-gray-50" rows="2" placeholder="Ex: Tirar a cebola..."></textarea>
                        </div>

                        <button class="add-btn w-full bg-gray-900 hover:bg-black text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                            <span>Adicionar ao Pedido</span>
                            <span class="btn-price ml-auto opacity-80 text-sm font-normal"></span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const sizeSelector = card.querySelector('.size-selector');
        const priceDisplay = card.querySelector('.price-display');
        const btnPriceDisplay = card.querySelector('.btn-price');
        const crustSelect = card.querySelector('.crust-select');
        const addBtn = card.querySelector('.add-btn');
        const toggleNote = card.querySelector('.toggle-note');
        const noteInput = card.querySelector('.note-input');

        const updatePrices = () => {
            const basePrice = pizza.prices[currentSize];
            const crustPrice = CRUST_OPTIONS.find(c => c.id === currentCrust).price || 0;
            const total = basePrice + crustPrice;
            const formatted = formatCurrency(total);
            
            priceDisplay.textContent = formatted;
            btnPriceDisplay.textContent = formatted;
        };

        const sizes = [
            { id: 'small', label: 'Pequena', sub: '1 pessoa' },
            { id: 'medium', label: 'Média', sub: '2 pessoas' },
            { id: 'large', label: 'Grande', sub: '3-4 pessoas' }
        ];

        sizes.forEach(size => {
            const btn = document.createElement('button');
            
            btn.className = `relative p-2 rounded-lg border text-left transition-all w-full ${currentSize === size.id ? 'border-orange-500 bg-orange-50 text-orange-700 ring-1 ring-orange-500' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`;
            
            btn.innerHTML = `<div class="text-sm font-semibold">${size.label}</div><div class="text-[10px] opacity-80">${size.sub}</div>`;
            
            btn.onclick = () => {
                currentSize = size.id;
                const allBtns = sizeSelector.querySelectorAll('button');
                allBtns.forEach(b => {
                    b.className = 'relative p-2 rounded-lg border text-left transition-all w-full border-gray-200 hover:border-gray-300 text-gray-600';
                });
                btn.className = 'relative p-2 rounded-lg border text-left transition-all w-full border-orange-500 bg-orange-50 text-orange-700 ring-1 ring-orange-500';
                updatePrices();
            };
            sizeSelector.appendChild(btn);
        });

        crustSelect.addEventListener('change', (e) => {
            currentCrust = e.target.value;
            updatePrices();
        });

        toggleNote.addEventListener('click', () => {
            const isHidden = noteInput.classList.contains('hidden');
            if (isHidden) {
                noteInput.classList.remove('hidden');
                toggleNote.textContent = 'Ocultar observação';
            } else {
                noteInput.classList.add('hidden');
                toggleNote.textContent = 'Adicionar observação?';
                noteInput.value = '';
            }
        });

        addBtn.addEventListener('click', () => {
            const basePrice = pizza.prices[currentSize];
            const crustData = CRUST_OPTIONS.find(c => c.id === currentCrust);
            const total = basePrice + crustData.price;
            
            const sizeName = sizes.find(s => s.id === currentSize).label;

            addToCart({
                type: 'pizza',
                name: pizza.name,
                details: `${sizeName} • ${crustData.name}`,
                price: total,
                note: noteInput.value
            });
            
            noteInput.value = '';
            if (!noteInput.classList.contains('hidden')) {
                toggleNote.click();
            }
        });

        updatePrices();
        container.appendChild(card);
    });
};

// Renderiza BEBIDAS
const renderDrinks = () => {
    const container = document.getElementById('drinks-container');
    DRINKS.forEach(item => {
        const el = document.createElement('div');
        el.className = "flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl mb-3 shadow-sm hover:border-gray-200 transition-colors";
        el.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150?text=Bebida'">
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900">${item.name}</h4>
                    <p class="text-sm text-gray-500">${item.volume}</p>
                </div>
            </div>
            <div class="flex flex-col items-end gap-2">
                <span class="font-semibold text-gray-900">${formatCurrency(item.price)}</span>
                <button class="drink-btn bg-orange-100 hover:bg-orange-200 text-orange-700 p-2 rounded-lg transition-colors">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        
        el.querySelector('.drink-btn').addEventListener('click', () => {
            addToCart({type: 'drink', name: item.name, price: item.price});
        });
        
        container.appendChild(el);
    });
};

// Renderiza ADICIONAIS
const renderExtras = () => {
    const container = document.getElementById('extras-container');
    EXTRAS.forEach(item => {
        const el = document.createElement('div');
        el.className = "flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl mb-3 shadow-sm hover:border-gray-200 transition-colors";
        el.innerHTML = `
            <div>
                <h4 class="font-semibold text-gray-900">${item.name}</h4>
                <p class="text-sm text-gray-500 font-medium text-orange-600">+ ${formatCurrency(item.price)}</p>
            </div>
            <button class="extra-btn text-sm border border-gray-300 hover:border-orange-500 hover:text-orange-600 px-4 py-2 rounded-full font-medium transition-all">
                Adicionar
            </button>
        `;
        
        el.querySelector('.extra-btn').addEventListener('click', () => {
            addToCart({type: 'extra', name: item.name, price: item.price});
        });
        
        container.appendChild(el);
    });
};

// ==========================================
// 5. INICIALIZAÇÃO
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    renderPizzas();
    renderDrinks();
    renderExtras();
    lucide.createIcons();
});

// Expõe função para escopo global
window.addToCart = addToCart;
