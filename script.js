// ==========================================
// 1. DADOS (DATA) - com categorias
// ==========================================
const PIZZAS_SALGADAS = [
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

const PIZZAS_DOCES = [
    {
        id: 11,
        name: "Banana com Canela",
        description: "Base delicada com banana fresca e canela, finalizada com calda de leite condensado.",
        image: "https://images.unsplash.com/photo-1615521471454-8470f3494d04?auto=format&fit=crop&w=500&q=80",
        prices: { small: 30.00, medium: 38.00, large: 48.00 }
    },
    {
        id: 12,
        name: "Chocolate com Morango",
        description: "Chocolate derretido coberto com morangos frescos e calda de chocolate gourmet.",
        image: "https://images.unsplash.com/photo-1589985643637-d3cba2d1b922?auto=format&fit=crop&w=500&q=80",
        prices: { small: 32.00, medium: 40.00, large: 50.00 }
    }
];

const PIZZAS_MEIO_A_MEIO = [
    {
        id: 21,
        name: "Margherita + Pepperoni",
        description: "Metade clássica margherita, metade pepperoni supremo. O melhor dos dois mundos.",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=500&q=80",
        prices: { small: 37.00, medium: 47.00, large: 58.00 }
    },
    {
        id: 22,
        name: "Frango + Calabresa",
        description: "Combine frango com catupiry de um lado e calabresa acebolada do outro.",
        image: "https://images.unsplash.com/photo-1596722846221-53562ad1cc9f?auto=format&fit=crop&w=500&q=80",
        prices: { small: 36.00, medium: 46.00, large: 57.00 }
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

// Estrutura de categorias
const CATEGORIES = [
    { id: 'salgadas', label: 'Pizzas Salgadas', items: PIZZAS_SALGADAS },
    { id: 'doces', label: 'Pizzas Doces', items: PIZZAS_DOCES },
    { id: 'meio-a-meio', label: 'Meio a Meio', items: PIZZAS_MEIO_A_MEIO },
    { id: 'bebidas', label: 'Bebidas', items: DRINKS, type: 'drink' },
    { id: 'adicionais', label: 'Adicionais', items: EXTRAS, type: 'extra' }
];

// ==========================================
// 2. ESTADO DA APLICAÇÃO (STATE)
// ==========================================
let cart = [];

// Dados de entrega por região
const DELIVERY_REGIONS = [
    { id: 'colinas', name: 'Colinas do Peró', fee: 4.00 },
    { id: 'jardim', name: 'Jardim Esperança, Tangará, Reserva do Peró, Jardim Peró, Estrada velha caminho de Búzios, Nova Cabo Frio', fee: 6.00 },
    { id: 'porto', name: 'Porto do Carro, Vinhanteiro, Estrada de integração, Peró, Boca do Mato, Cond. dos Pássaros, Cond. Bosque do Peró, Estrada do Alecrim', fee: 8.00 },
    { id: 'ogiva', name: 'Ogiva', fee: 10.00 },
    { id: 'cabo', name: 'Cabo Frio, Portinho, Novo Portinho', fee: 12.00 }
];

// Dados de checkout
let checkoutData = {
    name: '',
    phone: '',
    address: '',
    region: '',
    paymentMethod: ''
};

// ==========================================
// FUNÇÕES AUXILIARES
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

// ==========================================
// FUNÇÕES AUXILIARES - CARRINHO
// ==========================================

const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
};

const getDeliveryFee = () => {
    if (!checkoutData.region) return 0;
    const region = DELIVERY_REGIONS.find(r => r.id === checkoutData.region);
    return region ? region.fee : 0;
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

const updateCartItemQuantity = (index, newQuantity) => {
    if (newQuantity < 1) {
        removeFromCart(index);
    } else {
        cart[index].quantity = newQuantity;
        updateCartUI();
    }
};

const updateCartItemNote = (index, note) => {
    cart[index].note = note;
    updateCartUI();
};

const addToCart = (item) => {
    // Verifica se item similar já existe (nome + detalhes)
    const existingIndex = cart.findIndex(
        c => c.name === item.name && c.type === item.type && c.details === item.details
    );
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity++;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(`${item.name} adicionado!`);
};

// ==========================================
// RENDERIZAÇÃO DO CARRINHO (DRAWER)
// ==========================================

const renderCartItems = () => {
    const container = document.querySelector('.cart-drawer-body');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty"><p>Seu carrinho está vazio</p></div>';
        return;
    }

    cart.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'cart-item-card';
        
        const noteDisplay = item.note
            ? `<div class="cart-item-note">📝 ${item.note}</div>`
            : `<div class="cart-item-note-empty" onclick="editCartItemNote(${index})">+ adicionar observação</div>`;

        itemCard.innerHTML = `
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-details">${item.details || ''}</div>
            ${noteDisplay}
            
            <div class="cart-item-controls">
                <div class="cart-item-qty">
                    <button onclick="updateCartItemQuantity(${index}, ${item.quantity - 1})">−</button>
                    <span class="cart-item-qty-value">${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-price">${formatCurrency(item.price * item.quantity)}</div>
                <button class="cart-item-delete" onclick="removeFromCart(${index})">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        
        container.appendChild(itemCard);
    });

    lucide.createIcons();
};

const updateCartUI = () => {
    const cartFab = document.getElementById('cart-fab');
    const cartBadge = document.getElementById('cart-fab-badge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = getCartTotal();

    // Atualiza FAB
    cartFab.textContent = totalItems > 0 ? `R$ ${formatCurrency(subtotal).split(' ')[1]}` : 'R$ 0';
    
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = 'flex';
    } else {
        cartBadge.style.display = 'none';
    }

    // Atualiza drawer se aberto
    renderCartItems();
    updateCartSummary();
};

const updateCartSummary = () => {
    const subtotal = getCartTotal();
    const deliveryFee = getDeliveryFee();
    const total = subtotal + deliveryFee;
    
    const summaryContainer = document.querySelector('.cart-summary');
    if (!summaryContainer) return;

    summaryContainer.innerHTML = `
        <div class="cart-summary-row">
            <span>Subtotal:</span>
            <span>${formatCurrency(subtotal)}</span>
        </div>
        ${checkoutData.region ? `
            <div class="cart-summary-row">
                <span>Entrega:</span>
                <span>${formatCurrency(deliveryFee)}</span>
            </div>
        ` : ''}
        <div class="cart-summary-total">
            <span>Total:</span>
            <span>${formatCurrency(total)}</span>
        </div>
    `;
};

// ==========================================
// DRAWER TOGGLE
// ==========================================

const toggleCartDrawer = () => {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    
    if (drawer.classList.contains('open')) {
        renderCartItems();
    }
};

const closeCartDrawer = () => {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-drawer-overlay').classList.remove('open');
};

// ==========================================
// EDITAR OBSERVAÇÃO
// ==========================================

const editCartItemNote = (index) => {
    const newNote = prompt('Adicionar observação:', cart[index].note || '');
    if (newNote !== null) {
        updateCartItemNote(index, newNote);
        renderCartItems();
    }
};

// ==========================================
// CHECKOUT
// ==========================================

const openCheckout = () => {
    if (cart.length === 0) {
        showToast('Adicione itens ao carrinho!');
        return;
    }
    
    closeCartDrawer();
    document.getElementById('checkout-section').classList.add('open');
    renderCheckoutForm();
};

const closeCheckout = () => {
    document.getElementById('checkout-section').classList.remove('open');
};

const renderCheckoutForm = () => {
    const subtotal = getCartTotal();
    const deliveryFee = getDeliveryFee();
    const total = subtotal + deliveryFee;

    const form = document.querySelector('.checkout-form');
    form.innerHTML = `
        <div class="form-group">
            <label for="checkout-name">Nome Completo *</label>
            <input type="text" id="checkout-name" placeholder="Seu nome" value="${checkoutData.name}" onchange="checkoutData.name = this.value">
        </div>

        <div class="form-group">
            <label for="checkout-phone">Telefone *</label>
            <input type="tel" id="checkout-phone" placeholder="(11) 99999-8888" value="${checkoutData.phone}" onchange="checkoutData.phone = this.value">
        </div>

        <div class="form-group">
            <label for="checkout-address">Endereço Completo *</label>
            <input type="text" id="checkout-address" placeholder="Rua, número, complemento" value="${checkoutData.address}" onchange="checkoutData.address = this.value">
        </div>

        <div class="form-group">
            <label for="checkout-region">Região de Entrega *</label>
            <select id="checkout-region" onchange="checkoutData.region = this.value; updateCartSummary()">
                <option value="">Selecione a região...</option>
                ${DELIVERY_REGIONS.map(region => `
                    <option value="${region.id}" ${checkoutData.region === region.id ? 'selected' : ''}>
                        ${region.name} - R$ ${region.fee.toFixed(2)}
                    </option>
                `).join('')}
            </select>
        </div>

        <div class="form-group">
            <label for="checkout-payment">Forma de Pagamento *</label>
            <select id="checkout-payment" onchange="checkoutData.paymentMethod = this.value">
                <option value="">Selecione...</option>
                <option value="cash" ${checkoutData.paymentMethod === 'cash' ? 'selected' : ''}>Dinheiro</option>
                <option value="card" ${checkoutData.paymentMethod === 'card' ? 'selected' : ''}>Cartão à Cobrar</option>
                <option value="pix" ${checkoutData.paymentMethod === 'pix' ? 'selected' : ''}>PIX</option>
            </select>
        </div>

        <div class="checkout-summary">
            <div class="summary-line">
                <span>Subtotal:</span>
                <span>${formatCurrency(subtotal)}</span>
            </div>
            <div class="summary-line">
                <span>Entrega:</span>
                <span>${formatCurrency(deliveryFee)}</span>
            </div>
            <div class="summary-line total">
                <span>Total:</span>
                <span>${formatCurrency(total)}</span>
            </div>
        </div>
    `;
};

const isCheckoutValid = () => {
    return checkoutData.name.trim() && 
           checkoutData.phone.trim() && 
           checkoutData.address.trim() && 
           checkoutData.region && 
           checkoutData.paymentMethod;
};

const generateWhatsAppMessage = () => {
    const subtotal = getCartTotal();
    const deliveryFee = getDeliveryFee();
    const total = subtotal + deliveryFee;

    // Agrupa itens por tipo
    const grouped = {
        pizza: [],
        drink: [],
        extra: []
    };

    cart.forEach(item => {
        const type = item.type || 'pizza';
        grouped[type].push(item);
    });

    let message = '🍕 *FOGGARELI - PEDIDO ONLINE* 🍕\n\n';
    message += '═════════════════════════\n';
    message += '*ITENS DO PEDIDO*\n';
    message += '═════════════════════════\n\n';

    if (grouped.pizza.length > 0) {
        message += '*PIZZAS*\n';
        grouped.pizza.forEach(item => {
            message += `• ${item.name}\n`;
            message += `  ${item.details} x${item.quantity}\n`;
            message += `  Valor: ${formatCurrency(item.price * item.quantity)}\n`;
            if (item.note) message += `  📝 Obs: ${item.note}\n`;
            message += '\n';
        });
    }

    if (grouped.drink.length > 0) {
        message += '*BEBIDAS*\n';
        grouped.drink.forEach(item => {
            message += `• ${item.name} x${item.quantity} = ${formatCurrency(item.price * item.quantity)}\n`;
        });
        message += '\n';
    }

    if (grouped.extra.length > 0) {
        message += '*ADICIONAIS*\n';
        grouped.extra.forEach(item => {
            message += `• ${item.name} x${item.quantity} = ${formatCurrency(item.price * item.quantity)}\n`;
        });
        message += '\n';
    }

    message += '═════════════════════════\n';
    message += '*DADOS DO CLIENTE*\n';
    message += '═════════════════════════\n';
    message += `Nome: ${checkoutData.name}\n`;
    message += `Telefone: ${checkoutData.phone}\n`;
    message += `Endereço: ${checkoutData.address}\n`;
    const region = DELIVERY_REGIONS.find(r => r.id === checkoutData.region);
    message += `Região: ${region.name}\n`;
    message += `Pagamento: ${checkoutData.paymentMethod === 'cash' ? 'Dinheiro' : checkoutData.paymentMethod === 'card' ? 'Cartão à Cobrar' : 'PIX'}\n\n`;

    message += '═════════════════════════\n';
    message += `Subtotal: ${formatCurrency(subtotal)}\n`;
    message += `Entrega: ${formatCurrency(deliveryFee)}\n`;
    message += `*TOTAL: ${formatCurrency(total)}*\n`;
    message += '═════════════════════════\n';

    return encodeURIComponent(message);
};

const sendToWhatsApp = () => {
    if (!isCheckoutValid()) {
        showToast('Preencha todos os campos obrigatórios!');
        return;
    }

    const message = generateWhatsAppMessage();
    const whatsappNumber = '5511999998888'; // Mudar para número real
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    
    // Limpa carrinho após envio
    cart = [];
    checkoutData = { name: '', phone: '', address: '', region: '', paymentMethod: '' };
    closeCheckout();
    updateCartUI();
    showToast('Pedido enviado com sucesso!');
};

// ==========================================
// Renderiza card de PIZZA
// ==========================================

const renderPizzaCard = (pizza) => {
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
    return card;
};

// Renderiza card de BEBIDA
const renderDrinkCard = (item) => {
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
    
    return el;
};

// Renderiza card de ADICIONAL
const renderExtraCard = (item) => {
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
    
    return el;
};

// Renderiza todas as categorias
const renderCategories = () => {
    const container = document.getElementById('pizzas-container');
    container.innerHTML = '';

    CATEGORIES.forEach(category => {
        // Seção da categoria
        const section = document.createElement('div');
        section.id = `category-${category.id}`;
        section.className = 'category-section';
        
        const heading = document.createElement('h2');
        heading.className = 'text-2xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-gray-200';
        heading.textContent = category.label;
        
        section.appendChild(heading);

        // Renderiza itens da categoria
        if (category.type === 'drink') {
            category.items.forEach(item => {
                section.appendChild(renderDrinkCard(item));
            });
        } else if (category.type === 'extra') {
            category.items.forEach(item => {
                section.appendChild(renderExtraCard(item));
            });
        } else {
            category.items.forEach(item => {
                section.appendChild(renderPizzaCard(item));
            });
        }

        container.appendChild(section);
    });
};

// ==========================================
// 5. INICIALIZAÇÃO
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    lucide.createIcons();

    // --- header transparent -> scrolled toggle ---
    const header = document.getElementById('site-header');
    const title = header.querySelector('.site-title');
    const cartIcon = header.querySelector('.site-cart-icon');
    const categoriesBar = document.getElementById('categories-bar');

    const onScrollHeader = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
            header.classList.remove('bg-transparent');
            title.classList.remove('text-white');
            title.classList.add('text-gray-900');
            cartIcon.classList.remove('text-white');
            cartIcon.classList.add('text-gray-700');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('bg-transparent');
            title.classList.remove('text-gray-900');
            title.classList.add('text-white');
            cartIcon.classList.remove('text-gray-700');
            cartIcon.classList.add('text-white');
        }

        // categories bar shadow
        if (categoriesBar && window.scrollY > window.innerHeight) {
            categoriesBar.classList.add('scrolled');
        } else if (categoriesBar) {
            categoriesBar.classList.remove('scrolled');
        }
    };

    onScrollHeader();
    window.addEventListener('scroll', onScrollHeader, { passive: true });

    // --- CTA: scroll suave até o cardápio ---
    const cta = document.getElementById('cta-order-btn');
    if (cta) {
        cta.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById('category-salgadas');
            if (!target) return;
            const headerHeight = document.getElementById('site-header')?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    }

    // --- Tabs navigation (click handler) ---
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryId = tab.getAttribute('data-category');
            const target = document.getElementById(`category-${categoryId}`);
            if (!target) return;

            const headerHeight = document.getElementById('site-header')?.offsetHeight || 0;
            const categoriesBarHeight = document.getElementById('categories-bar')?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - categoriesBarHeight - 12;
            
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // --- Intersection Observer: sync active tab com scroll ---
    const observerOptions = {
        root: null,
        rootMargin: `-${(document.getElementById('site-header')?.offsetHeight || 64) + (document.getElementById('categories-bar')?.offsetHeight || 56) + 20}px 0px -50% 0px`,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active de todos os tabs
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                
                // Adiciona active ao tab correspondente
                const categoryId = entry.target.id.replace('category-', '');
                const activeTab = document.querySelector(`[data-category="${categoryId}"]`);
                if (activeTab) {
                    activeTab.classList.add('active');
                    
                    // Scroll horizontal da barra para centralizar o tab
                    const scrolling = document.getElementById('categories-bar-scrolling');
                    if (scrolling) {
                        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                }
            }
        });
    }, observerOptions);

    // Observa todas as seções de categorias
    document.querySelectorAll('.category-section').forEach(section => {
        observer.observe(section);
    });
});

// Expõe função para escopo global
window.addToCart = addToCart;
