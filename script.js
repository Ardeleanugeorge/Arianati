const imageFiles = [
  "31135_DSC0527.jfif",
  "view_image.jfif",
  "view_image (1).jfif",
  "view_image (2).jfif",
  "view_image (3).jfif",
  "view_image (4).jfif",
  "view_image (5).jfif",
  "view_image (6).jfif",
  "view_image (7).jfif",
  "view_image (8).jfif",
  "view_image (9).jfif",
  "view_image (10).jfif",
  "view_image (11).jfif",
  "view_image (12).jfif",
  "view_image (13).jfif",
  "view_image (14).jfif",
  "view_image (15).jfif",
  "view_image (16).jfif",
  "view_image (17).jfif",
  "view_image (18).jfif",
  "view_image (19).jfif",
  "view_image (20).jfif",
  "view_image (21).jfif",
  "view_image (22).jfif",
  "view_image (23).jfif",
  "view_image (24).jfif",
  "view_image (25).jfif",
  "view_image (26).jfif",
  "view_image (27).jfif",
  "view_image (28).jfif",
  "view_image (29).jfif",
  "view_image (30).jfif",
  "view_image (31).jfif",
  "view_image (32).jfif",
  "view_image (33).jfif",
  "view_image (34).jfif",
  "view_image (35).jfif",
  "view_image (36).jfif",
  "view_image (37).jfif",
  "view_image (38).jfif",
  "view_image (39).jfif",
  "view_image (40).jfif",
];

const galleryGrid = document.getElementById("gallery-grid");

if (galleryGrid) {
  const selectedPhotos = imageFiles.slice(0, 18);

  selectedPhotos.forEach((fileName, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = encodeURI(fileName);
    img.alt = `Vila Arianati - fotografie ${index + 1}`;
    img.loading = "lazy";

    item.appendChild(img);
    galleryGrid.appendChild(item);
  });
}
