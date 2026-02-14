
// ==========================================
// 1. DADOS DO CARDÁPIO (ORIGINAL COMPLETO)
// ==========================================
const PIZZAS_SALGADAS = [
    {
        id: 1, name: "Calabresa", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, calabresa, cebola, orégano.",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 56.90, M: 63.90, G: 79.90 }
    },
    {
        id: 2, name: "Muçarela", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, tomate, orégano, azeitona preta.",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 55.90, M: 65.90, G: 79.90 }
    },
    {
        id: 3, name: "Margherita", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, tomate, parmesão, orégano, manjericão fresco.",
        img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 58.90, M: 63.90, G: 83.90 }
    },
    {
        id: 4, name: "Toscana", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, calabresa moída, parmesão, orégano.",
        img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 57.90, M: 64.90, G: 82.90 }
    },
    {
        id: 5, name: "Milão", category: "Pizzas Tradicionais",
        desc: "Molho, muçarela, presunto moído, calabresa moída, cebola, orégano, azeitonas verdes.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 59.90, M: 71.90, G: 92.90 }
    },
    {
        id: 6, name: "Alho e Óleo", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, parmesão, orégano, alho frito.",
        img: "https://images.unsplash.com/photo-1620374645498-af669dc7ab8c?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 52.90, M: 59.90, G: 75.90 }
    },
    {
        id: 7, name: "Frango com Catupiry", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, frango desfiado, requeijão cremoso, muçarela, orégano.",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 59.90, M: 75.90, G: 98.90 }
    },
    {
        id: 8, name: "Calabria", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, requeijão cremoso, calabresa, parmesão, orégano.",
        img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 58.90, M: 68.90, G: 83.90 }
    },
    {
        id: 9, name: "Portuguesa", category: "Pizzas Tradicionais",
        desc: "Molho, muçarela, presunto, ovos, calabresa, cebola, pimentão, tomate, azeitona, orégano.",
        img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 62.90, M: 77.90, G: 93.90 }
    },
    {
        id: 10, name: "Francesa", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, presunto, requeijão cremoso, ovos, orégano.",
        img: "https://images.unsplash.com/photo-1593560708920-638928eb75b7?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 61.90, M: 77.90, G: 97.90 }
    },
    {
        id: 11, name: "Quatro Queijos", category: "Pizzas Tradicionais",
        desc: "Molho, provolone, requeijão cremoso, muçarela, parmesão, orégano.",
        img: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 66.90, M: 77.90, G: 90.90 }
    },
    {
        id: 12, name: "Gênova", category: "Pizzas Tradicionais",
        desc: "Molho, lombo canadense, ovos, cebola, muçarela, bacon, orégano.",
        img: "https://images.unsplash.com/photo-1618213837799-24d556839544?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 59.90, M: 70.90, G: 94.90 }
    },
    {
        id: 13, name: "Atum", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, atum, cebola, tomate, orégano.",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 70.90, M: 86.90, G: 107.90 }
    },
    {
        id: 14, name: "Brócolis", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, brócolis, alho frito, orégano.",
        img: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 53.90, M: 60.90, G: 70.90 }
    },
    {
        id: 15, name: "Carne Seca", category: "Pizzas Tradicionais",
        desc: "Molho de tomate, muçarela, carne seca, orégano.",
        img: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 65.90, M: 82.90, G: 100.90 }
    }
];

const PIZZAS_ESPECIAIS = [
    {
        id: 16, name: "Frango Especial", category: "Pizzas Especiais",
        desc: "Molho, frango, requeijão cremoso, palmito, muçarela, calabresa, orégano.",
        img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 64.90, M: 77.90, G: 105.90 }
    },
    {
        id: 17, name: "Carne Seca Especial", category: "Pizzas Especiais",
        desc: "Molho, carne seca, requeijão cremoso, palmito, cebola, orégano.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 65.90, M: 91.90, G: 107.90 }
    },
    {
        id: 18, name: "Calabresa Especial", category: "Pizzas Especiais",
        desc: "Molho de tomate, requeijão cremoso, calabresa, ovos, cebola, orégano.",
        img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 61.90, M: 69.90, G: 85.90 }
    },
    {
        id: 19, name: "Brócolis com Bacon", category: "Pizzas Especiais",
        desc: "Molho de tomate, muçarela, brócolis, bacon, alho frito, orégano.",
        img: "https://images.unsplash.com/photo-1558138838-8d2c49ff9b84?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 56.90, M: 64.90, G: 81.90 }
    },
    {
        id: 20, name: "Champion", category: "Pizzas Especiais",
        desc: "Molho de tomate, muçarela, champignon, cebola, alho frito, orégano.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 59.90, M: 68.90, G: 87.90 }
    },
    {
        id: 21, name: "Brócolis c/ Cream Cheese", category: "Pizzas Especiais",
        desc: "Molho, muçarela, brócolis, palmito, milho, cream cheese, orégano.",
        img: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 62.90, M: 75.90, G: 99.90 }
    },
    {
        id: 22, name: "Costela Especial", category: "Pizzas Especiais",
        desc: "Molho de tomate, costela desfiada, cream cheese, muçarela e orégano.",
        img: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 72.90, M: 91.90, G: 107.90 }
    },
    {
        id: 23, name: "Pizza Foggareli", category: "Pizzas Especiais",
        desc: "Molho, frango desfiado, cheddar, milho, muçarela, bacon, orégano.",
        img: "https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 60.90, M: 68.90, G: 84.90 }
    },
    {
        id: 24, name: "5 Queijos", category: "Pizzas Especiais",
        desc: "Molho, provolone, requeijão, muçarela, parmesão, gorgonzola e orégano.",
        img: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 68.90, M: 76.90, G: 100.90 }
    },
    {
        id: 25, name: "Peperoni", category: "Pizzas Especiais",
        desc: "Molho de tomate, muçarela, peperoni, cebola, orégano.",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 66.70, M: 74.90, G: 95.90 }
    },
];

const PIZZAS_DOCES = [
    {
        id: 26, name: "Prestígio", category: "Pizzas Doces",
        desc: "Creme de leite, chocolate, coco ralado.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 48.90, M: 53.90, G: 64.90 }
    },
    {
        id: 27, name: "Confete", category: "Pizzas Doces",
        desc: "Creme de leite, chocolate, confete.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 53.90, M: 59.90, G: 68.90 }
    },
    {
        id: 28, name: "Churros", category: "Pizzas Doces",
        desc: "Creme de leite, doce de leite, açúcar com canela.",
        img: "https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 48.90, M: 54.90, G: 62.90 }
    },
    {
        id: 29, name: "Doce de Leite", category: "Pizzas Doces",
        desc: "Creme de leite, doce de leite, amendoim em pedaços.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 45.90, M: 55.90, G: 65.90 }
    },
    {
        id: 30, name: "Brigadeiro", category: "Pizzas Doces",
        desc: "Creme de leite, chocolate, granulado.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 56.90, M: 68.90, G: 81.90 }
    },
    {
        id: 31, name: "Sensação", category: "Pizzas Doces",
        desc: "Creme de leite, chocolate, morango, geleia de morango.",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 55.90, M: 61.90, G: 73.90 }
    },
    {
        id: 32, name: "Banana", category: "Pizzas Doces",
        desc: "Muçarela, banana, açúcar com canela.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 40.90, M: 45.90, G: 57.90 }
    },
    {
        id: 33, name: "Banana Especial", category: "Pizzas Doces",
        desc: "Requeijão, banana, açúcar com canela, leite condensado.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 48.90, M: 53.90, G: 66.90 }
    },
    {
        id: 34, name: "Banana c/ Chocolate", category: "Pizzas Doces",
        desc: "Creme de leite, banana, açúcar com canela, chocolate.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 54.90, M: 60.90, G: 74.90 }
    },
    {
        id: 35, name: "Banana Nevada", category: "Pizzas Doces",
        desc: "Creme de leite, banana, chocolate branco, açúcar com canela.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 50.90, M: 56.90, G: 69.90 }
    },
    {
        id: 36, name: "Sonho de Valsa", category: "Pizzas Doces",
        desc: "Creme de leite, chocolate, sonho de valsa, leite condensado.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 63.90, M: 70.90, G: 85.90 }
    },
    {
        id: 37, name: "Romeu e Julieta", category: "Pizzas Doces",
        desc: "Goiabada e requeijão cremoso.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
        type: "pizza", prices: { P: 49.90, M: 54.90, G: 69.90 }
    }
];

const BEBIDAS = [
    {
        id: 38, name: "Coca-Cola 2L", category: "Bebidas", desc: "2 Litros",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 14.99
    },
    {
        id: 39, name: "Fanta Laranja 2L", category: "Bebidas", desc: "2 Litros",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 13.90
    },
    {
        id: 40, name: "Guaraná Ant. 2L", category: "Bebidas", desc: "2 Litros",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 14.99
    },
    {
        id: 41, name: "Sukita 2L", category: "Bebidas", desc: "2 Litros",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 11.99
    },
    {
        id: 42, name: "Coca-Cola Lata", category: "Bebidas", desc: "350ml",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 7.50
    },
    {
        id: 43, name: "Guaraná Lata", category: "Bebidas", desc: "350ml",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 7.50
    },
    {
        id: 44, name: "Guaravita", category: "Bebidas", desc: "Copo",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 3.00
    },
    {
        id: 45, name: "Guaraná Zero 1.5L", category: "Bebidas", desc: "1.5L",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 13.99
    },
    {
        id: 46, name: "Coca Zero 1.5L", category: "Bebidas", desc: "1.5L",
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 13.99
    },
    {
        id: 47, name: "Água c/ gás", category: "Bebidas", desc: "510ml",
        img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 2.99
    },
    {
        id: 48, name: "Água s/ gás", category: "Bebidas", desc: "510ml",
        img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80",
        type: "drink", price: 3.99
    }
];

// OPÇÕES DE BORDAS E VALORES
const BORDAS = [
    { id: 'sem_borda', name: 'Sem Borda Recheada', prices: { P: 0, M: 0, G: 0 } },
    { id: 'catupiry', name: 'Catupiry', prices: { P: 13.99, M: 15.99, G: 20.99 } },
    { id: 'cheddar', name: 'Cheddar', prices: { P: 13.99, M: 15.99, G: 20.99 } },
    { id: 'cream_cheese', name: 'Cream Cheese', prices: { P: 13.99, M: 15.99, G: 20.99 } },
    { id: 'chocolate', name: 'Chocolate', prices: { P: 17.99, M: 20.99, G: 25.99 } },
    { id: 'catupiry_calabresa', name: 'Catupiry + Calabresa', prices: { P: 17.99, M: 20.99, G: 24.99 } },
    { id: 'quatro_queijos', name: 'Quatro Queijos', prices: { P: 17.99, M: 20.99, G: 24.99 } },
    { id: 'catupiry_presunto', name: 'Catupiry + Presunto', prices: { P: 17.99, M: 20.99, G: 24.99 } }
];

// ESTRUTURA DE CATEGORIAS
const CATEGORIES = [
    { id: 'salgadas', label: 'Pizzas Tradicionais', items: PIZZAS_SALGADAS },
    { id: 'especiais', label: 'Pizzas Especiais', items: PIZZAS_ESPECIAIS },
    { id: 'doces', label: 'Pizzas Doces', items: PIZZAS_DOCES },
    { id: 'bebidas', label: 'Bebidas', items: BEBIDAS, type: 'drink' }
];

// PREÇOS DE ENTREGA
const DELIVERY_REGIONS = [
    { id: 'colinas', name: 'Colinas do Peró', fee: 4.00 },
    { id: 'jardim', name: 'Jardim Esperança, Tangará, Reserva, Nova Cabo Frio', fee: 6.00 },
    { id: 'porto', name: 'Porto do Carro, Vinhanteiro, Peró, Boca do Mato', fee: 8.00 },
    { id: 'ogiva', name: 'Ogiva', fee: 10.00 },
    { id: 'cabo', name: 'Cabo Frio, Portinho, Novo Portinho', fee: 12.00 }
];


// ==========================================
// 2. ESTADO DA APLICAÇÃO (STATE)
// ==========================================
let cart = [];
let checkoutData = {
    name: '',
    phone: '',
    address: '',
    region: '',
    paymentMethod: ''
};

// ==========================================
// 3. STORAGE E FUNÇÕES AUXILIARES
// ==========================================
const loadCart = () => {
    try {
        const saved = localStorage.getItem('foggareli-cart');
        if (saved) cart = JSON.parse(saved);
        updateCartUI();
    } catch (e) { console.warn("LocaleStorage unavailable"); }
};

const saveCart = () => {
    try { localStorage.setItem('foggareli-cart', JSON.stringify(cart)); } catch (e) { }
};

const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

const showToast = (msg) => {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    if (!toast) return;

    msgEl.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('toast-animate');
    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('toast-animate');
    }, 3000);
};

// ==========================================
// 4. LÓGICA DO CARRINHO
// ==========================================
const addToCart = (item) => {
    const existingIndex = cart.findIndex(c =>
        c.name === item.name && c.type === item.type && c.details === item.details
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`${item.name} adicionado!`);
};

const removeFromCart = (index) => {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
};

const updateCartItemQuantity = (index, delta) => {
    const newQty = cart[index].quantity + delta;
    if (newQty < 1) {
        removeFromCart(index);
    } else {
        cart[index].quantity = newQty;
        saveCart();
        updateCartUI();
    }
};

const getCartTotal = () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
const getDeliveryFee = () => {
    if (!checkoutData.region) return 0;
    const reg = DELIVERY_REGIONS.find(r => r.id === checkoutData.region);
    return reg ? reg.fee : 0;
}

// ==========================================
// 5. RENDERIZAÇÃO DE UI
// ==========================================

// --- RENDERIZAR TABS DE CATEGORIA ---
const renderCategoryButtons = () => {
    const container = document.getElementById('categories-bar-scrolling');
    container.innerHTML = CATEGORIES.map((cat, index) => `
        <button class="category-tab ${index === 0 ? 'active' : ''} whitespace-nowrap px-6 py-4 text-sm font-medium border-b-2 hover:text-orange-600 transition-colors" 
                data-category="${cat.id}"
                onclick="scrollToCategory('${cat.id}')">
            ${cat.label}
        </button>
    `).join('');
};

function scrollToCategory(id) {
    const el = document.getElementById(`category-${id}`);
    if (el) {
        const headerOffset = 140; // Ajuste para header + sticky bar
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}

// --- RENDERIZAR CARDS ---
const renderPizzaCard = (pizza) => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8 transition-all hover:shadow-md";

    // Estado local do card
    let currentSize = 'M';
    let currentBorder = 'sem_borda';

    const sizes = { P: 'Pequena', M: 'Média', G: 'Grande' };

    const getPrice = () => {
        let price = pizza.prices[currentSize];
        const border = BORDAS.find(b => b.id === currentBorder);
        if (border) price += border.prices[currentSize];
        return price;
    };

    const updateDisplay = () => {
        const price = getPrice();
        card.querySelector('.price-display').textContent = formatCurrency(price);
        card.querySelector('.btn-price').textContent = formatCurrency(price);
    };

    card.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]">
            <div class="relative h-48 md:h-full bg-gray-100">
                <img src="${pizza.img}" alt="${pizza.name}" class="w-full h-full object-cover">
            </div>

            <div class="p-6 flex flex-col h-full">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-900">${pizza.name}</h3>
                    <span class="price-display font-semibold text-lg text-orange-600"></span>
                </div>
                
                <p class="text-gray-600 text-sm mb-6 leading-relaxed">${pizza.desc}</p>

                <div class="space-y-4 mt-auto">
                    <!-- Seleção de Tamanho -->
                    <div>
                        <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Tamanho</label>
                        <div class="grid grid-cols-3 gap-2 size-btns">
                            ${Object.keys(sizes).map(size => `
                                <button type="button" class="size-btn relative p-2 rounded-lg border text-center transition-all w-full text-sm ${size === 'M' ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold' : 'border-gray-200 text-gray-600'}"
                                    data-size="${size}">
                                    ${sizes[size]}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Seleção de Borda -->
                    <div>
                        <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Tipo de Borda</label>
                        <select class="border-select w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:border-orange-500">
                            ${BORDAS.map(b => `<option value="${b.id}">${b.name}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Observação -->
                     <div>
                        <button type="button" class="toggle-note text-sm text-gray-500 underline decoration-dotted hover:text-orange-600 flex items-center gap-1 mb-2">
                            Adicionar observação?
                        </button>
                        <textarea class="note-input hidden w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50" rows="2" placeholder="Ex: Tirar a cebola..."></textarea>
                    </div>

                    <button class="add-btn w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-orange-200">
                         <i data-lucide="plus" class="w-4 h-4"></i>
                         <span>Adicionar</span>
                         <span class="btn-price ml-auto opacity-90 text-sm font-normal"></span>
                     </button>
                 </div>
             </div>
         </div>
    `;

    // Event Listeners locais
    card.querySelectorAll('.size-btn').forEach(btn => {
        btn.onclick = () => {
            currentSize = btn.dataset.size;
            card.querySelectorAll('.size-btn').forEach(b =>
                b.className = `size-btn relative p-2 rounded-lg border text-center transition-all w-full text-sm border-gray-200 text-gray-600`
            );
            btn.className = `size-btn relative p-2 rounded-lg border text-center transition-all w-full text-sm border-orange-500 bg-orange-50 text-orange-700 font-bold`;
            updateDisplay();
        };
    });

    card.querySelector('.border-select').onchange = (e) => {
        currentBorder = e.target.value;
        updateDisplay();
    };

    const noteInput = card.querySelector('.note-input');
    card.querySelector('.toggle-note').onclick = (e) => {
        noteInput.classList.toggle('hidden');
        e.target.textContent = noteInput.classList.contains('hidden') ? 'Adicionar observação?' : 'Ocultar observação';
    };

    card.querySelector('.add-btn').onclick = () => {
        const borderObj = BORDAS.find(b => b.id === currentBorder);
        const borderName = borderObj.id !== 'sem_borda' ? borderObj.name : 'Sem Borda Recheada';
        const note = noteInput.value.trim();

        addToCart({
            type: 'pizza',
            name: pizza.name,
            details: `Tam: ${sizes[currentSize]} • ${borderName}`,
            price: getPrice(),
            note: note
        });

        // Reset inputs
        noteInput.value = '';
        noteInput.classList.add('hidden');
        card.querySelector('.toggle-note').textContent = 'Adicionar observação?';
    };

    updateDisplay(); // Iniciarlizar preço
    return card;
};

const renderDrinkCard = (drink) => {
    const el = document.createElement('div');
    el.className = "flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl mb-3 shadow-sm hover:border-orange-200 transition-colors";
    el.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img src="${drink.img}" alt="${drink.name}" class="w-full h-full object-cover">
            </div>
            <div>
                <h4 class="font-bold text-gray-900">${drink.name}</h4>
                <p class="text-sm text-gray-500">${drink.desc}</p>
            </div>
        </div>
        <div class="flex flex-col items-end gap-2">
            <span class="font-bold text-gray-900">${formatCurrency(drink.price)}</span>
            <button class="bg-orange-100 hover:bg-orange-200 text-orange-700 p-2 rounded-lg transition-colors" onclick='addToCart({type:"drink", name:"${drink.name}", details:"${drink.desc}", price:${drink.price}})'>
                <i data-lucide="plus" class="w-4 h-4"></i>
            </button>
        </div>
    `;
    return el;
};

const renderMenu = () => {
    const container = document.getElementById('pizzas-container');
    container.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const section = document.createElement('div');
        section.id = `category-${cat.id}`;
        section.className = "scroll-mt-32";

        const title = document.createElement('h2');
        title.className = "text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-100";
        title.textContent = cat.label;
        section.appendChild(title);

        if (cat.type === 'drink') {
            cat.items.forEach(item => section.appendChild(renderDrinkCard(item)));
        } else {
            cat.items.forEach(item => section.appendChild(renderPizzaCard(item)));
        }

        container.appendChild(section);
    });

    // Re-iniciar ícones Lucide nos novos elementos
    if (window.lucide) lucide.createIcons();
};


// ==========================================
// 6. UI DO CARRINHO (DRAWER)
// ==========================================
function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = getCartTotal();
    const deliveryFee = getDeliveryFee();

    // Badges
    const badges = [document.getElementById('header-cart-count'), document.getElementById('cart-fab-badge')];
    badges.forEach(el => {
        if (!el) return;
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
        el.classList.remove('hidden');
    });

    // Drawer Body
    const drawerBody = document.querySelector('.cart-drawer-body');
    if (cart.length === 0) {
        drawerBody.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-gray-400">
                <i data-lucide="shopping-basket" class="w-16 h-16 mb-4 opacity-20"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
    } else {
        drawerBody.innerHTML = cart.map((item, i) => `
            <div class="cart-item-card">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="font-bold text-sm text-gray-900">${item.name}</h4>
                    <span class="font-bold text-sm text-orange-600">${formatCurrency(item.price * item.quantity)}</span>
                </div>
                <p class="text-xs text-gray-500 mb-2">${item.details}</p>
                ${item.note ? `<p class="text-xs text-green-600 italic mb-3">Obs: ${item.note}</p>` : ''}
                
                <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1">
                        <button class="px-2 text-gray-500 hover:text-orange-600" onclick="updateCartItemQuantity(${i}, -1)">-</button>
                        <span class="text-sm font-bold w-4 text-center">${item.quantity}</span>
                        <button class="px-2 text-gray-500 hover:text-orange-600" onclick="updateCartItemQuantity(${i}, 1)">+</button>
                    </div>
                    <button class="text-red-400 hover:text-red-600" onclick="removeFromCart(${i})">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Drawer Footer Summary
    const summary = document.querySelector('.cart-summary');
    if (summary) {
        summary.innerHTML = `
            <div class="flex justify-between text-gray-500 text-sm mb-1">
                <span>Subtotal</span>
                <span>${formatCurrency(subtotal)}</span>
            </div>
            ${checkoutData.region ? `
                 <div class="flex justify-between text-gray-500 text-sm mb-1">
                    <span>Entrega</span>
                    <span>${formatCurrency(deliveryFee)}</span>
                </div>
            ` : ''}
            <div class="flex justify-between text-gray-900 font-bold text-lg mt-2 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>${formatCurrency(subtotal + deliveryFee)}</span>
            </div>
        `;
    }

    if (window.lucide) lucide.createIcons();
    updateCheckoutForm(); // Atualiza resumo no checkout também se aberto
}


function toggleCartDrawer() {
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-drawer-overlay').classList.add('open');
    updateCartUI();
}

function closeCartDrawer() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-drawer-overlay').classList.remove('open');
}

// ==========================================
// 7. CHECKOUT E WHATSAPP
// ==========================================
function openCheckout() {
    if (cart.length === 0) {
        showToast("Seu carrinho está vazio!");
        return;
    }
    closeCartDrawer();
    document.getElementById('checkout-section').classList.add('open');
    renderCheckoutForm();
}

function closeCheckout() {
    document.getElementById('checkout-section').classList.remove('open');
}

function renderCheckoutForm() {
    const form = document.querySelector('.checkout-form');
    form.innerHTML = `
        <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Nome Completo</label>
            <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 outline-none" 
                placeholder="Seu nome" value="${checkoutData.name}" oninput="checkoutData.name = this.value">
        </div>
        <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Telefone / WhatsApp</label>
            <input type="tel" class="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 outline-none" 
                placeholder="(XX) XXXXX-XXXX" value="${checkoutData.phone}" oninput="checkoutData.phone = this.value">
        </div>
        <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Endereço de Entrega</label>
            <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 outline-none" 
                placeholder="Rua, Número, Bairro, Complemento" value="${checkoutData.address}" oninput="checkoutData.address = this.value">
        </div>
        <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Região de Entrega</label>
            <select class="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white" onchange="checkoutData.region = this.value; updateCartUI();">
                <option value="">Selecione sua região...</option>
                ${DELIVERY_REGIONS.map(Reg => `
                    <option value="${Reg.id}" ${checkoutData.region === Reg.id ? 'selected' : ''}>
                        ${Reg.name} (+ ${formatCurrency(Reg.fee)})
                    </option>
                `).join('')}
            </select>
        </div>
        <div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Forma de Pagamento</label>
            <select class="w-full p-3 border border-gray-300 rounded-lg outline-none bg-white" onchange="checkoutData.paymentMethod = this.value">
                <option value="">Selecione...</option>
                <option value="Pix" ${checkoutData.paymentMethod === 'Pix' ? 'selected' : ''}>PIX</option>
                <option value="Dinheiro" ${checkoutData.paymentMethod === 'Dinheiro' ? 'selected' : ''}>Dinheiro</option>
                <option value="Cartão" ${checkoutData.paymentMethod === 'Cartão' ? 'selected' : ''}>Cartão (Maquininha)</option>
            </select>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-200">
            <div class="flex justify-between text-gray-900 font-bold">
                 <span>Total a Pagar:</span>
                 <span id="checkout-total-display">${formatCurrency(getCartTotal() + getDeliveryFee())}</span>
            </div>
        </div>
    `;
}

function updateCheckoutForm() {
    const display = document.getElementById('checkout-total-display');
    if (display) display.textContent = formatCurrency(getCartTotal() + getDeliveryFee());
}

function sendToWhatsApp() {
    if (!checkoutData.name || !checkoutData.phone || !checkoutData.address || !checkoutData.region || !checkoutData.paymentMethod) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const total = getCartTotal() + getDeliveryFee();
    const regionName = DELIVERY_REGIONS.find(r => r.id === checkoutData.region)?.name || '';

    let msg = `*PEDIDO FOGGARELI* 🍕\n`;
    msg += `--------------------------------\n`;

    cart.forEach(item => {
        msg += `✅ ${item.quantity}x ${item.name}\n`;
        msg += `   ${item.details}\n`;
        if (item.note) msg += `   📝 ${item.note}\n`;
        msg += `   ${formatCurrency(item.price * item.quantity)}\n\n`;
    });

    msg += `--------------------------------\n`;
    msg += `📦 Taxa de Entrega: ${formatCurrency(getDeliveryFee())}\n`;
    msg += `💰 *TOTAL: ${formatCurrency(total)}*\n`;
    msg += `--------------------------------\n`;
    msg += `👤 Cliente: ${checkoutData.name}\n`;
    msg += `📞 Telefone: ${checkoutData.phone}\n`;
    msg += `📍 Endereço: ${checkoutData.address}\n`;
    msg += `🛵 Região: ${regionName}\n`;
    msg += `💳 Pagamento: ${checkoutData.paymentMethod}\n`;

    const url = `https://wa.me/551699640814?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}


// ==========================================
// 8. INICIALIZAÇÃO
// ==========================================
window.onload = function () {
    loadCart();
    renderCategoryButtons();
    renderMenu();
    updateCartUI();

    // Scroll Sticky Header Logic
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Sync tabs active state
        const scrollPos = window.scrollY + 200;
        CATEGORIES.forEach(cat => {
            const el = document.getElementById(`category-${cat.id}`);
            if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
                document.querySelectorAll('.category-tab').forEach(btn => btn.classList.remove('active', 'text-orange-600', 'border-orange-600'));
                const activeBtn = document.querySelector(`.category-tab[data-category="${cat.id}"]`);
                if (activeBtn) activeBtn.classList.add('active', 'text-orange-600', 'border-orange-600');
            }
        });
    });

    document.getElementById('cta-order-btn').onclick = () => {
        scrollToCategory('salgadas');
    };

    // --- Inicia animação do botão CTA ---
    const ctaBtn = document.getElementById('cta-order-btn');
    if (ctaBtn) {
        // Adiciona classe de entrada
        ctaBtn.classList.add('slide-up-initial');

        // Após a animação de entrada (3s), adiciona a classe para o bounce infinito
        setTimeout(() => {
            ctaBtn.classList.remove('slide-up-initial');
            ctaBtn.classList.add('loaded'); // Controla opacidade e inicia bounce
        }, 1000);
    }
};

// Expose global functions
window.toggleCartDrawer = toggleCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.sendToWhatsApp = sendToWhatsApp;
window.scrollToCategory = scrollToCategory;