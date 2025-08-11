const blogYazilari = {
    'merhaba-dunya': {
        baslik: 'Merhaba Dünya!',
        tarih: '2025-04-04',
        icerik: `
            <h1>Merhaba Dünya!</h1>
            <header>
                <div class="date">
                    <time datetime="2025-04-04">4 Nisan 2025</time>
                </div>
            </header>

            <div>
                <p>
                    Bu benim kişisel web sitemde yayınladığım ilk blog yazısı. Burada yazılım geliştirme deneyimlerimi,
                    öğrendiklerimi ve teknoloji dünyasındaki gözlemlerimi paylaşacağım.
                </p>

                <h2>Neler Paylaşacağım?</h2>
                <ul>
                    <li>Front-end geliştirme deneyimlerim</li>
                    <li>React ve Next.js ile ilgili ipuçları</li>
                    <li>Web geliştirme best practice'leri</li>
                    <li>Kişisel projelerimden öğrendiklerim</li>
                </ul>

                <h2>Kod Örneği</h2>
                <p>İşte basit bir React bileşeni örneği:</p>
                <pre><code class="language-jsx">function Tanisalim({ name }) {
  return (
    &lt;div className="p-4 bg-gray-100 rounded-lg"&gt;
      &lt;h1 className="text-2xl font-bold"&gt;
        Merhaba, {name} 😊
      &lt;/h1&gt;
    &lt;/div&gt;
  );
}</code></pre>

                <h2>Sonuç</h2>
                <p>
                    Bu blog yazısı ile birlikte düzenli olarak içerik üretmeye başlayacağım. Umarım paylaşımlarım sizler
                    için faydalı olur!
                </p>
            </div>
        `
    },
    'modern-web-performans': {
        baslik: 'Modern Web Performans Optimizasyonu',
        tarih: '2025-04-09',
        icerik: `
            <h1>Modern Web Uygulamalarında Performans Optimizasyonu</h1>
            <header>
                <div class="date">
                    <time datetime="2025-04-09">9 Nisan 2025</time>
                </div>
            </header>

            <div>
                <p>Web performansı, kullanıcı deneyimini doğrudan etkileyen en önemli faktörlerden biridir. Bu yazıda, modern web uygulamalarında performansı artırmak için kullanabileceğiniz teknikleri inceleyeceğiz.</p>

                <h2>1. Görsel Optimizasyonu</h2>
                <pre><code class="language-jsx">import Image from 'next/image';

function OptimizedImage() {
  return (
    &lt;Image
      src="/buyuk-resim.jpg"
      alt="Optimize edilmiş görsel"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority={true}
    /&gt;
  );
}</code></pre>

                <h2>2. Code Splitting ve Lazy Loading</h2>
                <pre><code class="language-jsx">import dynamic from 'next/dynamic';

// Ağır bileşeni lazy load etme
const AgirBilesen = dynamic(() => import('./AgirBilesen'), {
  loading: () => &lt;p&gt;Yükleniyor...&lt;/p&gt;,
  ssr: false
});

function Sayfa() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Ana İçerik&lt;/h1&gt;
      &lt;AgirBilesen /&gt;
    &lt;/div&gt;
  );
}</code></pre>

                <h2>3. Önbellek Stratejileri</h2>
                <pre><code class="language-jsx">// Next.js API route with caching
import { NextResponse } from 'next/server';

export async function GET() {
  const cacheKey = 'veri-onbellek';
  const cacheDuration = 60 * 60; // 1 saat

  // Redis veya başka bir önbellek mekanizması
  const cachedData = await cache.get(cacheKey);
  
  if (cachedData) {
    return NextResponse.json(cachedData);
  }

  const yeniVeri = await veriGetir();
  await cache.set(cacheKey, yeniVeri, cacheDuration);
  
  return NextResponse.json(yeniVeri);
}</code></pre>

                <h2>4. Web Vitals Optimizasyonu</h2>
                <pre><code class="language-jsx">function Layout({ children }) {
  return (
    &lt;&gt;
      {/* Font optimizasyonu */}
      &lt;link
        rel="preload"
        href="/fonts/custom-font.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      /&gt;
      
      {/* Critical CSS */}
      &lt;style jsx global&gt;{\`
        /* Kritik CSS buraya */
      \`}&lt;/style&gt;
      
      {children}
    &lt;/&gt;
  );
}</code></pre>

                <h2>Performans Metrikleri</h2>
                <ol>
                    <li>Largest Contentful Paint (LCP) &lt; 2.5s</li>
                    <li>First Input Delay (FID) &lt; 100ms</li>
                    <li>Cumulative Layout Shift (CLS) &lt; 0.1</li>
                    <li>Time to First Byte (TTFB) &lt; 0.6s</li>
                </ol>

                <h2>En İyi Pratikler</h2>
                <ol>
                    <li>Resimleri ve videoları optimize edin</li>
                    <li>Gereksiz JavaScript yüklemelerini azaltın</li>
                    <li>Service Worker kullanarak offline deneyim sunun</li>
                    <li>CDN kullanarak içeriği kullanıcıya yakın sunun</li>
                    <li>Sunucu tarafı render ve statik sayfa üretimini kullanın</li>
                </ol>

                <h2>Sonuç</h2>
                <p>Web performansı, modern uygulamaların başarısı için kritik öneme sahiptir. Bu teknikleri uygulayarak kullanıcılarınıza daha hızlı ve daha iyi bir deneyim sunabilirsiniz.</p>
            </div>
        `
    },
    'nextjs-blog': {
        baslik: 'Next.js ile Blog Nasıl Yapılır?',
        tarih: '2025-04-05',
        icerik: `
            <h1>Next.js ile Modern Blog Oluşturma</h1>
            <header>
                <div class="date">
                    <time datetime="2025-04-05">5 Nisan 2025</time>
                </div>
            </header>

            <div>
                <p>Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework. Bu yazıda, Next.js kullanarak nasıl modern bir blog sitesi oluşturabileceğinizi anlatacağım.</p>

                <h2>Neden Next.js?</h2>
                <ul>
                    <li>Sayfa yükleme hızı için yerleşik optimizasyonlar</li>
                    <li>SEO dostu yapı</li>
                    <li>Markdown/MDX desteği</li>
                    <li>Kolay routing sistemi</li>
                    <li>Server-side rendering özellikleri</li>
                </ul>

                <h2>Başlangıç İçin Gerekli Adımlar</h2>
                <ol>
                    <li>Yeni bir Next.js projesi oluşturma</li>
                    <li>MDX desteği ekleme</li>
                    <li>Blog gönderi şablonu hazırlama</li>
                    <li>Dinamik routing yapılandırması</li>
                </ol>

                <h2>Kod Örneği</h2>
                <p>İşte blog gönderilerinizi listelemek için kullanabileceğiniz bir bileşen:</p>
                <pre><code class="language-jsx">function BlogListesi({ gonderi }) {
  return (
    &lt;div className="grid gap-4"&gt;
      {gonderiler.map((gonderi) =&gt; (
        &lt;article key={gonderi.slug} className="p-6 rounded-lg border hover:shadow-lg transition"&gt;
          &lt;h2 className="text-xl font-semibold mb-2"&gt;{gonderi.baslik}&lt;/h2&gt;
          &lt;p className="text-gray-600 dark:text-gray-300"&gt;{gonderi.aciklama}&lt;/p&gt;
          &lt;time className="text-sm text-gray-500"&gt;{gonderi.tarih}&lt;/time&gt;
        &lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

                <h2>İpuçları</h2>
                <ul>
                    <li>Markdown dosyalarınızı <code>content/blog</code> klasöründe düzenli tutun</li>
                    <li>Her blog yazısı için uygun meta verileri ekleyin</li>
                    <li>Görsel optimizasyonu için Next.js Image bileşenini kullanın</li>
                    <li>Sayfa geçişlerini hızlandırmak için prefetching özelliğinden yararlanın</li>
                </ul>

                <h2>Sonuç</h2>
                <p>Next.js ile blog oluşturmak hem eğlenceli hem de öğretici bir deneyim. Siz de kendi blog sitenizi oluşturmaya başlayabilirsiniz!</p>
            </div>
        `
    },
    'react-hooks': {
        baslik: 'React Hooks: Kapsamlı Rehber',
        tarih: '2025-04-06',
        icerik: `
            <h1>React Hooks: Modern React'in Temeli</h1>
            <header>
                <div class="date">
                    <time datetime="2025-04-06">6 Nisan 2025</time>
                </div>
            </header>

            <div>
                <p>React Hooks, fonksiyonel bileşenlerde state yönetimi ve yaşam döngüsü özelliklerini kullanmamızı sağlayan güçlü bir özelliktir. Bu yazıda, en çok kullanılan hooks'ları ve best practice'leri inceleyeceğiz.</p>

                <h2>En Çok Kullanılan Hooks</h2>

                <h3>useState</h3>
                <pre><code class="language-jsx">function Sayac() {
  const [sayi, setSayi] = useState(0);
  
  return (
    &lt;button onClick={() =&gt; setSayi(sayi + 1)}&gt;
      {sayi} kez tıklandı
    &lt;/button&gt;
  );
}</code></pre>

                <h3>useEffect</h3>
                <pre><code class="language-jsx">function VeriCekici() {
  const [veri, setVeri] = useState(null);
  
  useEffect(() =&gt; {
    fetch('/api/veri')
      .then(res =&gt; res.json())
      .then(data =&gt; setVeri(data));
  }, []); // Boş dependency array ile sadece mount'ta çalışır
  
  return &lt;div&gt;{veri ? 'Veri yüklendi' : 'Yükleniyor...'}&lt;/div&gt;;
}</code></pre>

                <h2>Custom Hooks Oluşturma</h2>
                <p>Kendi hook'larınızı oluşturarak kod tekrarını önleyebilir ve logic'i yeniden kullanılabilir hale getirebilirsiniz:</p>
                <pre><code class="language-jsx">function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() =&gt; {
    const handleResize = () =&gt; {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}</code></pre>

                <h2>En İyi Pratikler</h2>
                <ol>
                    <li>Hook'ları her zaman bileşenin en üst seviyesinde kullanın</li>
                    <li>Dependency array'i dikkatli yönetin</li>
                    <li>Custom hook'ları mantıklı şekilde isimlendirin</li>
                    <li>Gereksiz re-render'ları önlemek için useMemo ve useCallback kullanın</li>
                </ol>

                <h2>Sonuç</h2>
                <p>React Hooks, modern React geliştirmede vazgeçilmez bir araçtır. Doğru kullanıldığında kod kalitesini artırır ve geliştirme sürecini hızlandırır.</p>
            </div>
        `
    },
    'tailwind-ipuclari': {
        baslik: 'Tailwind CSS İpuçları ve Trickler',
        tarih: '2025-04-07',
        icerik: `
            <h1>Tailwind CSS ile Web Geliştirmede Profesyonel İpuçları</h1>
            <header>
                <div class="date">
                    <time datetime="2025-04-07">7 Nisan 2025</time>
                </div>
            </header>

            <div>
                <p>Tailwind CSS, modern web geliştirmede en popüler utility-first CSS framework'lerinden biri. İşte projelerinizde kullanabileceğiniz önemli ipuçları ve trickler.</p>

                <h2>1. Özel Animasyonlar</h2>
                <pre><code class="language-css">@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}</code></pre>

                <pre><code class="language-jsx">&lt;div className="animate-float"&gt;
  Yüzen Eleman
&lt;/div&gt;</code></pre>

                <h2>2. Responsive Tasarım İpuçları</h2>
                <pre><code class="language-jsx">&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;div className="p-4 bg-white shadow-lg rounded-lg"&gt;
    &lt;h2 className="text-lg md:text-xl lg:text-2xl"&gt;
      Responsive Başlık
    &lt;/h2&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

                <h2>3. Dark Mode Desteği</h2>
                <pre><code class="language-jsx">&lt;div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"&gt;
  &lt;h1 className="text-2xl font-bold"&gt;
    Otomatik Dark Mode
  &lt;/h1&gt;
  &lt;p className="text-gray-600 dark:text-gray-300"&gt;
    İçerik otomatik olarak tema rengine uyum sağlar
  &lt;/p&gt;
&lt;/div&gt;</code></pre>

                <h2>4. Özel Renk Paletleri</h2>
                <pre><code class="language-javascript">// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      }
    }
  }
}</code></pre>

                <h2>En İyi Pratikler</h2>
                <ol>
                    <li>@apply direktifini sadece gerektiğinde kullanın</li>
                    <li>Tema özelleştirmelerini config dosyasında yapın</li>
                    <li>JIT modunu aktif edin</li>
                    <li>Grup hover ve focus durumlarını etkili kullanın</li>
                </ol>

                <h2>Sonuç</h2>
                <p>Tailwind CSS ile geliştirme yaparken bu ipuçlarını kullanarak daha temiz, bakımı kolay ve performanslı projeler oluşturabilirsiniz.</p>
            </div>
        `
    },
    'typescript-guvenli-kod': {
        baslik: 'TypeScript ile Güvenli Kod Geliştirme',
        tarih: '2025-04-08',
        icerik: `
            <h1>TypeScript ile Güvenli ve Ölçeklenebilir Kod Yazımı</h1>
            <header>
                <div class="date">
                    <time datetime="2025-04-08">8 Nisan 2025</time>
                </div>
            </header>

            <div>
                <p>TypeScript, JavaScript'e statik tip desteği ekleyerek daha güvenli ve bakımı kolay kod yazmamızı sağlar. Bu yazıda TypeScript'in önemli özelliklerini ve kullanım örneklerini inceleyeceğiz.</p>

                <h2>Temel Tip Tanımlamaları</h2>
                <pre><code class="language-jsx">// Basit tip tanımlamaları
let isim: string = "Ahmet";
let yas: number = 25;
let aktif: boolean = true;

// Array tipleri
let sayilar: number[] = [1, 2, 3];
let isimler: Array&lt;string&gt; = ["Ali", "Veli"];

// Tuple
let kullanici: [string, number] = ["admin", 1];</code></pre>

                <h2>Interface ve Type Kullanımı</h2>
                <pre><code class="language-jsx">interface Kullanici {
  id: number;
  isim: string;
  email: string;
  aktif?: boolean; // Opsiyonel alan
}

type Rol = "admin" | "user" | "guest";

interface Admin extends Kullanici {
  rol: Rol;
  yetkiler: string[];
}

const yeniAdmin: Admin = {
  id: 1,
  isim: "Admin",
  email: "admin@site.com",
  rol: "admin",
  yetkiler: ["okuma", "yazma", "silme"]
};</code></pre>

                <h2>Jenerik Tipler</h2>
                <pre><code class="language-jsx">interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}

async function veriGetir&lt;T&gt;(url: string): Promise&lt;ApiResponse&lt;T&gt;&gt; {
  const response = await fetch(url);
  return response.json();
}

// Kullanımı
interface Post {
  id: number;
  title: string;
  content: string;
}

const post = await veriGetir&lt;Post&gt;('/api/posts/1');
console.log(post.data.title);</code></pre>

                <h2>Utility Types</h2>
                <pre><code class="language-jsx">// Partial - Tüm alanları opsiyonel yapar
type KullaniciGuncelleme = Partial&lt;Kullanici&gt;;

// Pick - Belirli alanları seçer
type KullaniciOzet = Pick&lt;Kullanici, 'id' | 'isim'&gt;;

// Omit - Belirli alanları çıkarır
type KullaniciGuvenli = Omit&lt;Kullanici, 'email'&gt;;</code></pre>

                <h2>En İyi Pratikler</h2>
                <ol>
                    <li>Tip tanımlamalarını ayrı dosyalarda tutun</li>
                    <li><code>any</code> tipinden kaçının</li>
                    <li>Union tipleri ile daha spesifik tipler oluşturun</li>
                    <li>Interface'leri mantıklı şekilde bölerek yeniden kullanılabilirliği artırın</li>
                </ol>

                <h2>Sonuç</h2>
                <p>TypeScript, modern web geliştirmede vazgeçilmez bir araç haline geldi. Tip güvenliği ve IDE desteği sayesinde daha az hata yapmanızı ve daha maintainable kod yazmanızı sağlar.</p>
            </div>
        `
    }
};

function blogIdCek() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'merhaba-dunya';
}

function blogYukle() {
    const blogId = blogIdCek();
    const blog = blogYazilari[blogId];

    if (!blog) {
        document.getElementById('blog-icerik').innerHTML = '<h1>Blog yazısı bulunamadı</h1>';
        return;
    }
    document.title = `${blog.baslik} | Blog`;
    document.getElementById('blog-icerik').innerHTML = blog.icerik;
    Prism.highlightAll();
}

document.addEventListener('DOMContentLoaded', blogYukle); 