-- CreateTable
CREATE TABLE "KategoriProduk" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "KategoriProduk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KatalogProduk" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "gambar" TEXT,
    "kategoriId" INTEGER NOT NULL,
    "bahan" TEXT NOT NULL,
    "ulasan" INTEGER NOT NULL DEFAULT 0,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "icon" TEXT NOT NULL,
    "badge" TEXT,
    "badgeColor" TEXT,
    "khasiat" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KatalogProduk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KatalogProduk" ADD CONSTRAINT "KatalogProduk_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "KategoriProduk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
