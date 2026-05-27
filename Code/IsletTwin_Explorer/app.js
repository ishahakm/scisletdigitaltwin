const datasets = {
  digitalTwin: {
    title: "Digital Twin",
    cardTitle: "Digital Twin",
    cardText: "Multiomic Digital Twin of in vitro pancreatic islet differentiation",
    kind: "Dataset",
    csv: "data/all_features/DT_all_features.csv",
    info: "Multiomic Digital Twin of in vitro pancreatic islet differentiation. It comprises 400,603 cells spanning 7 protocols, 4 cell lines, 3 modalities from day 3 to 66. We identified 12 cell states: Proliferating (Prolif), Mesenchyme (Mesen), Definitive Endoderm (DE), Primitive Gut Tube (PGT), Pancreatic Progenitor (PP), Exocrine (Exo), Early Endocrine Progenitor (EEP), Late Endocrine Progenitor (LEP), Alpha, Delta, Serotonergic Islet Cells (SIC), and Beta.",
    metadata: ["Cell State", "Day", "Protocol", "Modality", "Cell line"],
    sampleGenes: ["PDX1", "NKX6-1", "INS", "GCG", "SST", "NEUROG3"],
    subset: false
  },
  atlas: {
    title: "In vivo/In vitro Atlas",
    cardTitle: "In vivo/In vitro Atlas",
    cardText: "Integrated single-cell RNA-seq atlas combining in vivo human fetal pancreas and in vitro stem cell-derived pancreatic differentiation",
    kind: "Dataset",
    csv: "data/all_features/invivo_invitro_all_features.csv",
    info: "Integrated single-cell RNA-seq atlas combining in vivo human fetal pancreas and in vitro stem cell-derived pancreatic differentiation. It comprises 30,084 cells spanning 6 studies, from day 10 to 26 for the in vitro data and from post conception week (PCW) 4 to 19 for the in vivo data. We identified 5 cell states: Pancreatic Progenitor (PP), Endocrine Progenitor (EP), Alpha, Beta, and Delta.",
    metadata: ["Cell State", "Origin", "Day", "PCW", "Protocol/Study"],
    sampleGenes: ["PDX1", "SOX9", "ONECUT1", "INS", "GCG", "SST"],
    subset: false
  },
  earlyPancreas: {
    title: "Early Pancreas",
    cardTitle: "Early Pancreas",
    cardText: "Definitive Endoderm to Primitive Gut Tube to Pancreatic Progenitor subset",
    kind: "Subset",
    csv: "data/all_features/DE_GT_PP_all_features.csv",
    perturbationCsv: "data/tables/earlyPancreas/PerturbationScores_earlyPancreas.csv",
    info: "Definitive Endoderm to Primitive Gut Tube to Pancreatic Progenitor subset. It comprises 8,684 cells spanning 5 protocols, from day 5 to 13. We identified 3 cell states: Definitive Endoderm (DE), Primitive Gut Tube (PGT), and Pancreatic Progenitor (PP).",
    metadata: ["Cell State", "Day", "Protocol"],
    cellStates: ["DE", "PGT", "PP"],
    sampleGenes: ["PDX1", "SOX9", "ONECUT1", "FOXA2", "HNF1B", "GATA6"],
    subset: true
  },
  endocrineExocrine: {
    title: "Endocrine-Exocrine",
    cardTitle: "Endocrine-Exocrine",
    cardText: "Pancreatic Progenitor to Endocrine or Exocrine lineage subset",
    kind: "Subset",
    csv: "data/all_features/PP_Exo_EP_all_features.csv",
    simulationCsv: "data/simulation_genes/available_TFs_DT_Subset_PP_Exo_EP_eEP.csv",
    perturbationCsv: "data/tables/endocrineExocrine/PerturbationScores_endocrineExocrine.csv",
    info: "Pancreatic Progenitor to Endocrine or Exocrine lineage subset. It comprises 6,726 cells spanning 6 protocols, from day 11 to 24. We identified 5 cell states: Exocrine (Exo), Intermediate Exocrine (PP-Exo), Pancreatic Progenitor (PP), Intermediate Early Endocrine Progenitor (PP-EEP), Early Endocrine Progenitor (EEP).",
    metadata: ["Cell State", "Day", "Protocol"],
    cellStates: ["Exo", "PP-Exo", "PP", "PP-EEP", "EEP"],
    sampleGenes: ["PDX1", "NEUROG3", "PTF1A", "SOX9", "MNX1", "RFX6"],
    subset: true
  },
  betaSic: {
    title: "Beta-SIC",
    cardTitle: "Beta-SIC",
    cardText: "Endocrine progenitor to Beta or Serotonergic Islet Cells lineage subset",
    kind: "Subset",
    csv: "data/all_features/SIC_Beta_all_features.csv",
    perturbationCsv: "data/tables/betaSic/PerturbationScores_betaSic.csv",
    info: "Endocrine progenitor to Beta or Serotonergic Islet Cells lineage subset. It comprises 8,684 cells spanning 6 protocols, from day 15 to 21. We identified 5 cell states: Early Endocrine Progenitor (EEP), Late Endocrine Progenitor (LEP), Early Serotonergic Islet Cells (SIC), Beta, and Hybrid Beta-SIC (Hybrid).",
    metadata: ["Cell State", "Day", "Protocol"],
    cellStates: ["EEP", "LEP", "SIC", "Beta", "Hybrid"],
    sampleGenes: ["INS", "IAPP", "MAFA", "NKX6-1", "PDX1", "SLC30A8"],
    subset: true
  },
  alpha: {
    title: "Alpha",
    cardTitle: "Alpha",
    cardText: "Pancreatic Progenitor to Endocrine Progenitor to Alpha cells subset",
    kind: "Subset",
    csv: "data/all_features/Alpha_all_features.csv",
    perturbationCsv: "data/tables/alpha/PerturbationScores_alpha.csv",
    info: "Pancreatic Progenitor to Endocrine Progenitor to Alpha cells subset. It comprises 16,122 cells spanning 4 protocols, from day 10 to 21. We identified 5 cell states: Pancreatic Progenitor (PP), Endocrine Progenitor (EP), Early Alpha 1 (EA1), Early Alpha 2 (EA2), and Alpha.",
    metadata: ["Cell State", "Day", "Protocol"],
    cellStates: ["PP", "EP", "EA1", "EA2", "Alpha"],
    sampleGenes: ["GCG", "ARX", "MAFB", "IRX2", "ISL1", "PAX6"],
    subset: true
  },
  delta: {
    title: "Delta",
    cardTitle: "Delta",
    cardText: "Pancreatic Progenitor to Endocrine Progenitor to Delta cells subset",
    kind: "Subset",
    csv: "data/all_features/Delta_all_features.csv",
    perturbationCsv: "data/tables/delta/PerturbationScores_delta.csv",
    info: "Pancreatic Progenitor to Endocrine Progenitor to Delta cells subset. It comprises 7,583 cells spanning 4 protocols, from day 11 to 21. We identified 4 cell states: Pancreatic Progenitor (PP), Endocrine Progenitor (EP), Early Delta (EDelta), and Delta.",
    metadata: ["Cell State", "Day", "Protocol"],
    cellStates: ["PP", "EP", "EDelta", "Delta"],
    sampleGenes: ["SST", "HHEX", "RBP4", "LEPR", "PAX6", "ISL1"],
    subset: true
  }
};

const menuCards = [
  ...Object.entries(datasets).map(([key, dataset]) => ({ key, title: dataset.cardTitle, text: dataset.cardText })),
  { key: "dataSources", title: "Data Sources", text: "Data library and resources" },
  { key: "contact", title: "Contact", text: "Questions, feedback, or collaboration inquiries" },
  { key: "citation", title: "Citation", text: "How to cite IsletTwin Explorer" }
];

const assetConfig = {
  baseUrl: "https://assets.synbioelab.com",
  prefix: "assets_optimized",
  extension: "webp"
};

const dataSources = [
  { regarding: "In vitro", reference: "Veres, et al. Nature (2019)", repository: "GEO", accession: "GSE114412", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE114412" },
  { regarding: "In vitro", reference: "Weng , et al. Nature Metabolism (2020)", repository: "GEO", accession: "GSE143783", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE143783" },
  { regarding: "In vitro", reference: "Augsornworawat, et al. Cell Reports (2020)", repository: "GEO", accession: "GSE151117", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE151117" },
  { regarding: "In vitro", reference: "Maxwell, et al. Science Translational Medicine (2020)", repository: "GEO", accession: "GSE139535", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE139535" },
  { regarding: "In vitro", reference: "Balboa, et al. Nature Biotechnology (2022)", repository: "GEO", accession: "GSE167880", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE167880" },
  { regarding: "In vitro", reference: "Zhu, et al. Developmental Cell (2023)", repository: "GEO", accession: "GSE202500", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE202500" },
  { regarding: "In vitro", reference: "Augsornworawat, et al. Nature Cell Biology (2023)", repository: "GEO", accession: "GSE199636", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE199636" },
  { regarding: "In vitro", reference: "Hua, et al. Cell Stem Cell (2024)", repository: "GSA", accession: "HRA005565", url: "https://ngdc.cncb.ac.cn/gsa-human/browse/HRA005565" },
  { regarding: "In vitro", reference: "Sanchez-Castro, et al. bioRxiv (2026)", repository: "GEO", accession: "GSE328580", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GE328580" },
  { regarding: "In vivo", reference: "Cao, et al. Science (2020)", repository: "GEO", accession: "GSE156793", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE156793" },
  { regarding: "In vivo", reference: "Goncalves, et al. Nature Communications (2021)", repository: "EGA", accession: "EGAD00001007506", url: "https://ega-archive.org/datasets/EGAD00001007506" },
  { regarding: "In vivo", reference: "Ma, et al. Nature Communications (2023)", repository: "GSA", accession: "HRA002757", url: "https://ngdc.cncb.ac.cn/gsa-human/browse/HRA002757" },
  { regarding: "In vivo", reference: "Migliorini, et al. Cell Stem Cell (2024)", repository: "GEO", accession: "GSE230403", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE230403" },
  { regarding: "In vivo", reference: "Yu, et al. Developmental Cell (2026)", repository: "GEO", accession: "GSE275610", url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE275610" }
];

const umapRotation = [
  ["DT UMAP", imagePath("header_umaps", "DT_UMAP")],
  ["In vivo/In vitro UMAP", imagePath("header_umaps", "invivo_invitro_UMAP")],
  ["Early Pancreas UMAP", imagePath("header_umaps", "earlyPancreas_UMAP")],
  ["Endocrine-Exocrine UMAP", imagePath("header_umaps", "endocrineExocrine_UMAP")],
  ["Beta-SIC UMAP", imagePath("header_umaps", "betaSic_UMAP")],
  ["Alpha UMAP", imagePath("header_umaps", "alpha_UMAP")],
  ["Delta UMAP", imagePath("header_umaps", "delta_UMAP")]
];

const state = {
  activeSection: "main",
  genes: {},
  simulationGenes: {},
  perturbationTables: {},
  selectedGene: {},
  selectedTf: {},
  selectedMetadata: {},
  selectedCellState: {},
  selectedRows: {}
};

const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".panel");
const mainPanel = document.querySelector("#mainPanel");
const datasetPanel = document.querySelector("#datasetPanel");
const dataSourcesPanel = document.querySelector("#dataSourcesPanel");
const contactPanel = document.querySelector("#contactPanel");
const citationPanel = document.querySelector("#citationPanel");
const menuGrid = document.querySelector("#menuGrid");
const sectionKind = document.querySelector("#sectionKind");
const sectionTitle = document.querySelector("#sectionTitle");
const sectionNotice = document.querySelector("#sectionNotice");
const datasetContent = document.querySelector("#datasetContent");
const resourceList = document.querySelector("#resourceList");
const contactContent = document.querySelector("#contactContent");
const rotatingUmapLabel = document.querySelector("#rotatingUmapLabel");
const rotatingUmapImage = document.querySelector("#rotatingUmapImage");

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function assetName(value) {
  return encodeURIComponent(String(value).trim());
}

function normalizeGeneSymbol(value) {
  return String(value).trim().toUpperCase();
}

function preferredSymbol(values, fallback = "") {
  const list = values || [];
  return list.includes("PDX1") ? "PDX1" : (list[0] || fallback);
}

function imagePath(...parts) {
  const cleanBase = assetConfig.baseUrl.replace(/\/+$/, "");
  const cleanPrefix = assetConfig.prefix.replace(/^\/+|\/+$/g, "");
  const cleanParts = parts
    .filter(Boolean)
    .map((part) => String(part).replace(/^\/+|\/+$/g, ""));
  const pathParts = cleanPrefix ? [cleanPrefix, ...cleanParts] : cleanParts;
  return `${cleanBase}/${pathParts.join("/")}.${assetConfig.extension}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function imageFrame(paths, label, className) {
  const validPaths = paths.filter(Boolean);
  const firstPath = validPaths[0] || "";
  const fallbackPaths = validPaths.slice(1).join("|");

  return `
    <div class="image-frame ${className}">
      <img src="${escapeHtml(firstPath)}" alt="${escapeHtml(label)}" data-fallbacks="${escapeHtml(fallbackPaths)}" onerror="handleImageError(this)" />
      <div class="plot-placeholder">
        <span>${escapeHtml(label)}</span>
      </div>
    </div>
  `;
}

function handleImageError(image) {
  const fallbacks = image.dataset.fallbacks ? image.dataset.fallbacks.split("|").filter(Boolean) : [];

  if (fallbacks.length) {
    image.dataset.fallbacks = fallbacks.slice(1).join("|");
    image.src = fallbacks[0];
    return;
  }

  image.classList.add("missing-image");
}

window.handleImageError = handleImageError;

function parseGeneCsv(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^"|"$/g, ""))
    .filter(Boolean)
    .filter((line, index) => index > 0 || !/^gene$|^tf_symbol$/i.test(line));
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

async function loadPerturbationTable(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load ${path}`);

  const rows = parseCsvRows(await response.text());
  const headers = rows[0] || [];
  const tfColumn = headers[0] || "TF_KO";
  const cellStateColumns = headers
    .slice(1)
    .map((name, index) => ({ name, index: index + 1 }))
    .filter((column) => column.name);
  const cellStates = cellStateColumns.map((column) => column.name);
  const values = rows.slice(1).map((row) => {
    const entry = { tf: row[0] || "" };
    cellStateColumns.forEach((column) => {
      entry[column.name] = Number(row[column.index]);
    });
    return entry;
  }).filter((entry) => entry.tf);

  return { tfColumn, cellStates, values };
}

async function loadCsv(path) {
  if (window.location.protocol === "file:") {
    throw new Error("Local file preview uses placeholder data.");
  }

  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return parseGeneCsv(await response.text());
}

async function loadData() {
  await Promise.all(Object.entries(datasets).map(async ([key, dataset]) => {
    try {
      state.genes[key] = await loadCsv(dataset.csv);
    } catch {
      state.genes[key] = dataset.sampleGenes;
    }

    state.selectedGene[key] = preferredSymbol(state.genes[key]);
    state.selectedTf[key] = preferredSymbol(dataset.sampleGenes);
    state.selectedMetadata[key] = dataset.metadata[0] || "Cell State";
    state.selectedCellState[key] = (dataset.cellStates || ["Cell State"])[0];
    state.selectedRows[key] = 5;

    if (dataset.simulationCsv) {
      try {
        state.simulationGenes[key] = await loadCsv(dataset.simulationCsv);
      } catch {
        state.simulationGenes[key] = dataset.sampleGenes;
      }
      state.selectedTf[key] = preferredSymbol(state.simulationGenes[key], state.selectedTf[key]);
    }

    if (dataset.perturbationCsv && window.location.protocol !== "file:") {
      try {
        state.perturbationTables[key] = await loadPerturbationTable(dataset.perturbationCsv);
        state.selectedCellState[key] = state.perturbationTables[key].cellStates[0] || state.selectedCellState[key];
        state.selectedTf[key] = preferredSymbol(state.perturbationTables[key].values.map((entry) => entry.tf), state.selectedTf[key]);
      } catch {
        state.perturbationTables[key] = null;
      }
    }
  }));
}

function startUmapRotation() {
  let index = 0;
  updateHeaderUmap(index);
  window.setInterval(() => {
    index = (index + 1) % umapRotation.length;
    updateHeaderUmap(index);
  }, 5000);
}

function updateHeaderUmap(index) {
  const [label, path] = umapRotation[index];
  rotatingUmapLabel.textContent = label;
  rotatingUmapImage.classList.remove("missing-image");
  rotatingUmapImage.src = path;
}

function showPanel(panel) {
  panels.forEach((item) => item.classList.remove("active"));
  panel.classList.add("active");
}

function setSection(key) {
  state.activeSection = key;
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.section === key));

  if (key === "main") {
    showPanel(mainPanel);
    return;
  }

  if (key === "dataSources") {
    showPanel(dataSourcesPanel);
    renderDataSources();
    return;
  }

  if (key === "contact") {
    showPanel(contactPanel);
    renderContact();
    return;
  }

  if (key === "citation") {
    showPanel(citationPanel);
    return;
  }

  showPanel(datasetPanel);
  renderDataset(key);
}

function buildMenu() {
  menuGrid.innerHTML = menuCards.map((card) => `
    <button class="menu-card" type="button" data-menu-section="${card.key}">
      <strong>${escapeHtml(card.title)}</strong>
      <span>${escapeHtml(card.text)}</span>
    </button>
  `).join("");

  menuGrid.querySelectorAll("[data-menu-section]").forEach((button) => {
    button.addEventListener("click", () => setSection(button.dataset.menuSection));
  });
}

function expectedMetadataPath(sectionKey, metadata) {
  return imagePath(sectionKey, "metadata", slugify(metadata));
}

function geneExpressionPaths(sectionKey, gene) {
  return [imagePath(sectionKey, "gene_expression_umaps", assetName(gene))];
}

function violinPath(sectionKey, gene, metadata) {
  return imagePath(sectionKey, "violin_plots", `${assetName(gene)}__${slugify(metadata)}`);
}

function cellProportionPath(sectionKey, metadata) {
  return imagePath(sectionKey, "cell_proportion_plots", slugify(metadata));
}

function perturbationScorePath(sectionKey, tf) {
  return imagePath(sectionKey, "ps_bar_plots", assetName(tf));
}

function simulationPaths(sectionKey, tf) {
  return [imagePath(sectionKey, "simulation_umaps", assetName(tf))];
}

function simulationExpressionPath(sectionKey, tf) {
  return geneExpressionPaths(sectionKey, tf)[0];
}

function cellStateMapPath(sectionKey) {
  return expectedMetadataPath(sectionKey, "Cell State");
}

function renderDataset(key) {
  const dataset = datasets[key];
  const genes = state.genes[key] || dataset.sampleGenes;
  const gene = state.selectedGene[key] || genes[0] || "";
  const metadata = state.selectedMetadata[key] || dataset.metadata[0];

  sectionKind.textContent = dataset.kind;
  sectionTitle.textContent = dataset.title;
  sectionNotice.textContent = dataset.info;
  sectionNotice.classList.add("visible");

  datasetContent.innerHTML = `
    ${renderExplorationLayout(key, dataset, genes, gene, metadata)}
    ${dataset.subset ? renderSubsetBlocks(key, dataset) : ""}
  `;

  bindDatasetControls(key);
}

function renderExplorationLayout(key, dataset, genes, gene, metadata) {
  return `
    <section class="analysis-block">
      <div class="block-header">
        <div>
          <p class="eyebrow">General exploration</p>
          <h3>Expression and metadata overview</h3>
        </div>
      </div>
      <div class="exploration-grid">
        <article class="plot-card square-card">
          <div class="card-controls">
            <label for="${key}Metadata">UMAP metadata</label>
            <select id="${key}Metadata" data-role="metadata">
              ${dataset.metadata.map((item) => `<option value="${escapeHtml(item)}" ${item === metadata ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
            </select>
          </div>
          ${imageFrame([expectedMetadataPath(key, metadata)], `${metadata} UMAP`, "square-plot metadata-map")}
          <div class="plot-meta">
            <strong>Metadata UMAP</strong>
          </div>
        </article>
        <article class="plot-card square-card">
          <div class="card-controls">
            <label for="${key}Gene">Gene</label>
            <input id="${key}Gene" data-role="gene" type="search" list="${key}GeneOptions" autocomplete="off" value="${escapeHtml(gene)}" />
            <datalist id="${key}GeneOptions">
              ${genes.map((item) => `<option value="${escapeHtml(item)}"></option>`).join("")}
            </datalist>
          </div>
          ${imageFrame(geneExpressionPaths(key, gene), `${gene} RNA expression UMAP`, "square-plot expression-map")}
          <div class="plot-meta">
            <strong>Gene expression UMAP</strong>
          </div>
        </article>
        <article class="plot-card wide-card">
          ${imageFrame([cellProportionPath(key, metadata)], `Cell proportion by ${metadata}`, "rectangular-plot proportion-map")}
          <div class="plot-meta">
            <strong>Cell proportion bar plot</strong>
          </div>
        </article>
        <article class="plot-card wide-card">
          ${imageFrame([violinPath(key, gene, metadata)], `${gene} expression violin by ${metadata}`, "rectangular-plot violin-map")}
          <div class="plot-meta">
            <strong>Expression violin plot</strong>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderSubsetBlocks(key, dataset) {
  const table = state.perturbationTables[key];
  const tableTfs = table?.values.map((row) => row.tf) || [];
  const tfGenes = state.simulationGenes[key]?.length
    ? state.simulationGenes[key]
    : tableTfs.length
      ? tableTfs
      : dataset.sampleGenes;
  const tf = state.selectedTf[key] || tfGenes[0] || "";
  const rows = state.selectedRows[key] || 5;
  const cellStates = table?.cellStates?.length ? table.cellStates : dataset.cellStates;
  const cellState = state.selectedCellState[key] || cellStates[0];

  return `
    <section class="analysis-block">
      <div class="block-header">
        <div>
          <p class="eyebrow">Simulation exploration</p>
          <h3>Top Transcription Factor KO effects per Cell State</h3>
        </div>
        <div class="inline-controls">
          <label>
            <span>Cell State</span>
            <select data-role="cell-state">
              ${cellStates.map((item) => `<option value="${escapeHtml(item)}" ${item === cellState ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
            </select>
          </label>
          <label class="range-control">
            <span>Rows</span>
            <input data-role="rows" type="range" min="5" max="50" step="5" value="${rows}" />
            <strong data-role="rows-value">${rows}</strong>
          </label>
        </div>
      </div>
      <div class="table-grid">
        ${renderTfTable("Top positive TF KO effects", "positive", key, cellState, rows)}
        ${renderTfTable("Top negative TF KO effects", "negative", key, cellState, rows)}
      </div>

      <div class="block-header sub-block-header">
        <div>
          <h3>Transcription Factor KO vector fields</h3>
        </div>
        <label class="tf-control">
          <span>TF</span>
          <input data-role="tf" type="search" list="${key}TfOptions" autocomplete="off" value="${escapeHtml(tf)}" />
          <datalist id="${key}TfOptions">
            ${tfGenes.map((item) => `<option value="${escapeHtml(item)}"></option>`).join("")}
          </datalist>
        </label>
      </div>
      <div class="simulation-grid">
        <article class="plot-card compact">
          ${imageFrame([cellStateMapPath(key)], "Cell State UMAP", "square-plot fixed-map")}
          <div class="plot-meta">
            <strong>Cell State UMAP</strong>
          </div>
        </article>
        <article class="plot-card compact">
          ${imageFrame(simulationPaths(key, tf), `${tf} KO simulation`, "square-plot ko-map")}
          <div class="plot-meta">
            <strong>Gene-specific KO</strong>
          </div>
        </article>
        <article class="plot-card compact">
          ${imageFrame([simulationExpressionPath(key, tf)], `${tf} RNA expression`, "square-plot expression-map")}
          <div class="plot-meta">
            <strong>Gene-specific RNA</strong>
          </div>
        </article>
      </div>

      <div class="block-header sub-block-header">
        <div>
          <h3>Perturbation Scores per Gene KO in each Cell State</h3>
        </div>
      </div>
      <div class="half-width-plot-row">
        <article class="plot-card">
          ${imageFrame([perturbationScorePath(key, tf)], `${tf} perturbation score plot`, "rectangular-plot score-map")}
          <div class="plot-meta">
            <strong>Perturbation Score of ${escapeHtml(tf)} KO per cell state</strong>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderTfTable(title, direction, key, cellState, rows) {
  const table = state.perturbationTables[key];
  const sourceRows = table?.values?.length
    ? table.values
      .filter((entry) => Number.isFinite(entry[cellState]))
      .map((entry) => ({ tf: entry.tf, score: entry[cellState] }))
      .sort((left, right) => direction === "positive" ? right.score - left.score : left.score - right.score)
      .slice(0, rows)
    : Array.from({ length: rows }, (_, index) => {
      const sign = direction === "positive" ? 1 : -1;
      return {
        tf: `${direction === "positive" ? "POS" : "NEG"}_TF_${String(index + 1).padStart(2, "0")}`,
        score: sign * (0.98 - index * 0.024)
      };
    });

  const body = sourceRows.map((entry, index) => {
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHtml(entry.tf)}</td>
        <td>${entry.score.toFixed(6)}</td>
      </tr>
    `;
  }).join("");

  return `
    <div class="table-card">
      <h4>${title}</h4>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>TF KO</th>
              <th>Perturbation score</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </div>
  `;
}

function bindDatasetControls(key) {
  const metadataControl = datasetContent.querySelector("[data-role='metadata']");
  const geneControl = datasetContent.querySelector("[data-role='gene']");
  const tfControl = datasetContent.querySelector("[data-role='tf']");
  const rowsControl = datasetContent.querySelector("[data-role='rows']");
  const cellStateControl = datasetContent.querySelector("[data-role='cell-state']");

  if (metadataControl) {
    metadataControl.addEventListener("change", () => {
      state.selectedMetadata[key] = metadataControl.value;
      renderDataset(key);
    });
  }

  if (geneControl) {
    geneControl.addEventListener("input", () => {
      geneControl.value = geneControl.value.toUpperCase();
    });
    geneControl.addEventListener("change", () => {
      state.selectedGene[key] = normalizeGeneSymbol(geneControl.value) || state.selectedGene[key];
      renderDataset(key);
    });
    geneControl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") geneControl.blur();
    });
  }

  if (tfControl) {
    tfControl.addEventListener("input", () => {
      tfControl.value = tfControl.value.toUpperCase();
    });
    tfControl.addEventListener("change", () => {
      state.selectedTf[key] = normalizeGeneSymbol(tfControl.value) || state.selectedTf[key];
      renderDataset(key);
    });
    tfControl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") tfControl.blur();
    });
  }

  if (rowsControl) {
    rowsControl.addEventListener("input", () => {
      state.selectedRows[key] = Number(rowsControl.value);
      renderDataset(key);
    });
  }

  if (cellStateControl) {
    cellStateControl.addEventListener("change", () => {
      state.selectedCellState[key] = cellStateControl.value;
      renderDataset(key);
    });
  }
}

function renderDataSources() {
  resourceList.innerHTML = dataSources.map((resource) => `
    <article class="resource-item">
      <a href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.reference || resource.repository)} — ${escapeHtml(resource.accession)}</a>
      <p>It includes <em>${escapeHtml(resource.regarding)}</em> data.</p>
    </article>
  `).join("");
}

function renderContact() {
  contactContent.innerHTML = `
    <section class="contact-card">
      <h3>Questions, feedback, or collaboration inquiries</h3>
      <p>
        We welcome your questions, feedback, and collaboration inquiries! Please contact us through our
        <a href="https://github.com/ishahakm/scisletdigitaltwin" target="_blank" rel="noopener noreferrer">Community Forum on GitHub</a> or email us at
        <a href="mailto:e.sanchezcastro@wustl.edu" target="_blank" rel="noopener noreferrer">e.sanchezcastro@wustl.edu</a>,
        <a href="mailto:m.ishahak@umiami.edu" target="_blank" rel="noopener noreferrer">m.ishahak@umiami.edu</a>, and
        <a href="mailto:jmillman@wustl.edu" target="_blank" rel="noopener noreferrer">jmillman@wustl.edu</a>.
        If you are reporting a bug, please include the URL of the page you are viewing.
      </p>
    </section>
  `;
}

navItems.forEach((item) => {
  item.addEventListener("click", () => setSection(item.dataset.section));
});

loadData().then(() => {
  buildMenu();
  renderDataSources();
  renderContact();
  startUmapRotation();
  setSection("main");
});
