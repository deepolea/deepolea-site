# DeepOlea Web Sitesi

Bu depo, [DeepOlea](https://deepolea.github.io/)'nın kurumsal tanıtımını ve yürütülen yapay zekâ odaklı bilişim projelerini sergilemek amacıyla oluşturulmuş statik web sitesinin kaynak kodlarını barındırmaktadır.

Sistem, harici bir framework (React, Vue vb.) kullanılmadan, saf (vanilla) HTML, CSS ve JavaScript ile yüksek performanslı ve yönetilebilir olacak şekilde tasarlanmıştır.

## 📂 Dosya ve Klasör Yapısı

Proje, GitHub Pages mimarisine uygun olarak kök dizin üzerinden çalışacak şekilde organize edilmiştir:

```text
.
├── images/                 # Sitede kullanılan logolar, ikonlar ve diğer görseller
├── lang/                   # Çok dilli yapı (i18n) için JSON dosyaları
│   ├── tr.json             # Türkçe metin anahtarları
│   └── en.json             # İngilizce metin anahtarları
├── projects/               # Projeler sayfası alt dizini
│   └── index.html          # Projeler sayfasının ana şablonu
├── index.html              # Kurumsal ana sayfa (Kök dizin)
└── README.md               # Proje dokümantasyonu (Bu dosya)

## ⚙️ Teknik Altyapı ve Çalışma Mantığı

Bu projeyi geliştirmek veya içerik eklemek isteyenlerin aşağıdaki mimari kararları dikkate alması gerekmektedir:

### 1. Çok Dilli Yapı (i18n)
Sitedeki metinler HTML kodlarının içine sabitlenmemiş (hardcoded) olup, `lang/` klasöründeki JSON dosyaları üzerinden dinamik olarak yönetilmektedir.

* **Çalışma Prensibi:** `index.html` dosyalarının alt kısmında bulunan JavaScript kodları, sayfa yüklendiğinde `fetch` API kullanarak ilgili JSON dosyasını okur.
* **Kullanımı:** HTML içerisinde çevrilmesi gereken metinler, meta etiketleri veya resimlerin `alt` nitelikleri `data-i18n` özelliği ile işaretlenir.
  * *Örnek:* `<h1 data-i18n="hero_title">Varsayılan Metin</h1>`
* **Hafıza ve Senkronizasyon:** Kullanıcının dil tercihi tarayıcının `localStorage` (Yerel Depolama) belleğine `selectedLang` anahtarıyla kaydedilir. Sayfalar arası geçişlerde ve farklı sekmelerde (tab) dil seçimi otomatik olarak senkronize edilir (`storage` event listener ile).

### 2. Sayfa Geçişleri (Routing) ve Yönlendirmeler
Site, alt klasör mimarisi kullanılarak sayfalara ayrılmıştır.

* Kök dizindeki `index.html` ana sayfayı temsil eder.
* `/projects` URL'sine gidildiğinde `projects/` klasörü içindeki `index.html` dosyası çalışır.
* **Önemli Not:** Alt sayfalardan (`projects/` içinden) ana sayfa bileşenlerine veya görsellere (`images/`, `lang/`) link verilirken, dosya yollarının başına mutlaka bir üst dizine çıkma işareti olan `../` eklenmelidir. (Örn: `href="../images/favicon.png"`).

## 🚀 Geliştirme Ortamı Kurulumu

Projeyi bilgisayarınızda (local) test ederken, JSON dosyalarının JavaScript ile dışarıdan okunması (`fetch` işlemi) nedeniyle tarayıcıların **CORS politikalarına** takılmamak için dosyaları çift tıklayarak (`file:///`) açmamalısınız.

Geliştirme için bir yerel web sunucusu (Local Web Server) kullanılması zorunludur:

* **VS Code Kullanıcıları İçin:** `Live Server` eklentisini kurun ve `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçeneğini kullanın.
* **Terminal/Ubuntu Kullanıcıları İçin:** Proje dizininde `python3 -m http.server` komutunu çalıştırarak siteye `http://localhost:8000` adresinden erişin.

## 📝 İçerik Ekleme Rehberi

Sisteme yeni bir başlık, buton veya metin ekleneceği zaman şu adımlar izlenmelidir:

1. `lang/tr.json` ve `lang/en.json` dosyalarına aynı isimde yeni bir anahtar (key) ve karşılığı olan metinler (value) eklenir.
2. HTML tarafında ilgili elementin içine `data-i18n="yeni_anahtar"` niteliği tanımlanır.
3. Sayfa yenilendiğinde JavaScript yeni metni ilgili dile göre otomatik olarak DOM'a basacaktır.

---
*© 2026 DeepOlea. Tüm hakları saklıdır.*