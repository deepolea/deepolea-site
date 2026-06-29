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