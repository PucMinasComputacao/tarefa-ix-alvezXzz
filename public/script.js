
const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15 Pro",
      preco: 8499.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
      descricao: "Tela Super Retina XDR de 6,1\", chip A17 Pro, câmera tripla de 48MP e titânio de grau aeroespacial.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24",
      preco: 5999.00,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
      descricao: "7 anos de atualizações de Android, tela Dynamic AMOLED 2X de 6,2\" e Galaxy AI integrada.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "MacBook Air M3",
      preco: 12999.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80",
      descricao: "Chip M3 com CPU de 8 núcleos, até 18h de bateria, tela Liquid Retina de 13,6\" e design ultrafino.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Dell XPS 15",
      preco: 9799.90,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
      descricao: "Intel Core i9 de 13ª geração, 32GB RAM, SSD de 1TB e tela OLED 4K de 15,6\".",
      emEstoque: false
    },
    {
      id: 5,
      nome: "AirPods Pro 2ª Geração",
      preco: 1899.00,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
      descricao: "Cancelamento ativo de ruído de próxima geração, Áudio Adaptável e até 30h de carga total.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Teclado Mecânico Logitech MX Keys S",
      preco: 849.90,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80",
      descricao: "Teclas de perfil baixo com retroiluminação inteligente, bateria de 10 dias e compatibilidade multi-OS.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "PlayStation 5",
      preco: 3999.90,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80",
      descricao: "SSD ultra-rápido, ray tracing em tempo real, áudio 3D Tempest e controle DualSense com feedback háptico.",
      emEstoque: false
    },
    {
      id: 8,
      nome: "Controle Xbox Series X",
      preco: 449.90,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&q=80",
      descricao: "Ergonomia aprimorada, botão compartilhar, gatilhos texturizados e 40h de autonomia de bateria.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Monitor LG UltraWide 34\"",
      preco: 3299.00,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
      descricao: "Resolução WQHD 3440x1440, taxa de atualização 144Hz, painel IPS e curvatura 1800R.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Motorola Edge 40 Pro",
      preco: 3299.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
      descricao: "Snapdragon 8 Gen 2, câmera de 50MP com OIS, tela pOLED de 165Hz e carregamento de 125W.",
      emEstoque: true
    }
  ]
};
 

const productList    = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
 
const searchInput    = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender      = document.querySelector("#btnRender");
 

function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
 

function createProductCard(produto) {

  const card = document.createElement("div");
  card.setAttribute("data-id", produto.id);
  card.setAttribute("data-categoria", produto.categoria);
  classList_add(card, ["card"]);

  const img = document.createElement("img");
  img.setAttribute("src", produto.imagem);
  img.setAttribute("alt", produto.nome);
  img.setAttribute("loading", "lazy");
  card.appendChild(img);

  const body = document.createElement("div");
  classList_add(body, ["card-body"]);

  const title = document.createElement("h3");
  classList_add(title, ["card-title"]);
  title.textContent = produto.nome;
  body.appendChild(title);

  const cat = document.createElement("span");
  classList_add(cat, ["card-category"]);
  cat.textContent = produto.categoria;
  body.appendChild(cat);

  const price = document.createElement("p");
  classList_add(price, ["card-price"]);
  price.textContent = formatPrice(produto.preco);
  body.appendChild(price);

  const stock = document.createElement("p");
  if (produto.emEstoque) {
    classList_add(stock, ["card-stock-ok"]);
    stock.textContent = "✔ Em estoque";
    stock.style.fontWeight = "600";
  } else {
    classList_add(stock, ["card-stock-esgotado"]);
    stock.textContent = "✖ Esgotado";
    stock.style.fontStyle = "italic";
  }
  body.appendChild(stock);
 
  card.appendChild(body);

  const actions = document.createElement("div");
  classList_add(actions, ["card-actions"]);

  const btnDetails = document.createElement("button");
  classList_add(btnDetails, ["btn-details"]);
  btnDetails.textContent = "Ver detalhes";
  btnDetails.setAttribute("data-id", produto.id);

  btnDetails.addEventListener("click", () => {
    showProductDetails(produto);
  });

  const btnHighlight = document.createElement("button");
  classList_add(btnHighlight, ["btn-highlight"]);
  btnHighlight.textContent = "⭐ Destacar";
  btnHighlight.setAttribute("data-id", produto.id);
 
  btnHighlight.addEventListener("click", () => {
    card.classList.toggle("highlight");
    btnHighlight.textContent = card.classList.contains("highlight")
      ? "✖ Remover"
      : "⭐ Destacar";
  });
 
  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);
  card.appendChild(actions);
 
  return card;
}

function classList_add(element, classes) {
  classes.forEach(cls => element.classList.add(cls));
}
 

function renderProducts(produtos) {
  productList.innerHTML = "";
 
  if (produtos.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("no-results");
    msg.textContent = "Nenhum produto encontrado para os filtros aplicados.";
    productList.appendChild(msg);
    return;
  }
 
  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  const allCards = document.querySelectorAll(".card");
  allCards.forEach(card => {
    console.log("Card renderizado — data-id:", card.getAttribute("data-id"));

    card.style.opacity = "0";
    setTimeout(() => { card.style.opacity = "1"; card.style.transition = "opacity 0.3s"; }, 10);
  });
}
 

function renderCategories() {

  const categorias = [...new Set(data.produtos.map(p => p.categoria))];

  categorySelect.innerHTML = '<option value="">Todas</option>';
 
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.setAttribute("value", cat);
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}
 

function showProductDetails(produto) {
  const statusTexto = produto.emEstoque
    ? '<span style="color:#276749;">✔ Em estoque</span>'
    : '<span style="color:#c53030;">✖ Esgotado</span>';
 
  productDetails.innerHTML = `
    <p class="details-header">📦 Detalhes do produto</p>
    <div class="details-inner">
      <img class="details-img" src="${produto.imagem}" alt="${produto.nome}" />
      <div class="details-info">
        <h2>${produto.nome}</h2>
        <p class="details-price">${formatPrice(produto.preco)}</p>
        <p class="details-row">Categoria: <span>${produto.categoria}</span></p>
        <p class="details-row">Estoque: ${statusTexto}</p>
        <p class="details-row">ID: <span>#${produto.id}</span></p>
        <p class="details-desc">${produto.descricao}</p>
      </div>
    </div>
  `;

  productDetails.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
 

function filterProducts() {
  const termo     = searchInput.value.toLowerCase().trim();
  const categoria = categorySelect.value;
 
  return data.produtos.filter(produto => {
    const nomeMatch     = produto.nome.toLowerCase().includes(termo);
    const catMatch      = categoria === "" || produto.categoria === categoria;
    return nomeMatch && catMatch;
  });
}
 

searchInput.addEventListener("input", () => {
  renderProducts(filterProducts());
});

categorySelect.addEventListener("change", () => {
  renderProducts(filterProducts());
});

btnRender.addEventListener("click", () => {
  searchInput.value  = "";
  categorySelect.value = "";
  productDetails.innerHTML = "";
  renderProducts(data.produtos);
});
 
renderCategories();
renderProducts(data.produtos);