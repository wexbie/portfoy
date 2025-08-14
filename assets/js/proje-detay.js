const projeDetaylari = {
    'buzzmatch': {
        baslik: 'BuzzMatch',
        logo: 'assets/proje/buzzmatch.png',
        aciklama: 'Yeni arkadaşlar edinmek için tasarlanmış sosyal platform.',
        kategori: 'Sosyal Medya',
        durum: 'Geliştirme Aşamasında',
        tarih: '2025-08',
        teknolojiler: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Expo', 'TypeScript'],
        demoLink: 'javascript:void(0)',
        githubLink: 'https://github.com/wexbie/',
        ekranGoruntuleri: [
            { src: 'assets/proje/ss/buzzmatch/buzzmatch.jpg', baslik: 'Ana Sayfa' },
        ],
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/buzzmatch.png" alt="BuzzMatch" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">BuzzMatch</h1>
                        <p class="proje-aciklama">Yeni arkadaşlar edinmek için tasarlanmış modern sosyal platform</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Geliştirme Aşamasında</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Ağustos 2025</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Sosyal Medya</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">React Native</span>
                <span class="teknoloji-etiketi">Node.js</span>
                <span class="teknoloji-etiketi">MongoDB</span>
                <span class="teknoloji-etiketi">Socket.io</span>
                <span class="teknoloji-etiketi">Tailwind CSS</span>
                <span class="teknoloji-etiketi">Expo</span>
                <span class="teknoloji-etiketi">TypeScript</span>
            </div>

            <div class="proje-linkler">
                <a href="#" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="#" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/buzzmatch/buzzmatch.jpg" alt="BuzzMatch Ana Sayfa">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>BuzzMatch, kullanıcıların yeni arkadaşlar edinmesini kolaylaştırmak için tasarlanmış bir sosyal platformdur. Modern web teknolojileri kullanılarak geliştirilen bu uygulama, kullanıcıların ilgi alanlarına göre eşleşme yapmasını sağlar.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Kullanıcı profil yönetimi</li>
                    <li>İlgi alanlarına göre eşleşme algoritması</li>
                    <li>Gerçek zamanlı mesajlaşma (Socket.io)</li>
                    <li>Grup sohbetleri</li>
                    <li>Mobil uyumlu tasarım (Expo)</li>
                    <li>Güvenli kimlik doğrulama sistemi (JWT)</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje React Native ve Node.js kullanılarak geliştirilmiştir. Veritabanı olarak MongoDB tercih edilmiş ve gerçek zamanlı iletişim için Socket.io kullanılmıştır.</p>

                <h2>Geliştirme Süreci</h2>
                <p>Proje şu anda aktif geliştirme aşamasındadır. Temel özellikler tamamlanmış olup, kullanıcı testleri ve optimizasyon çalışmaları devam etmektedir.</p>

                <h2>Gelecek Planları</h2>
                <ul>
                    <li>Party Odaları Eklenmesi</li>
                    <li>Müzik zevkine göre eşleşme</li>
                    <li>Her bölümde detaylı spam kontrolleri</li>
                    <li>AI destekli ruh eşi önerileri</li>
                </ul>
            </div>
        `
    },
    'zink': {
        baslik: 'Zink',
        logo: 'assets/proje/zink.webp',
        aciklama: 'Modern yerel teslimat uygulaması (Girişimci).',
        kategori: 'Web Uygulaması',
        durum: 'Tamamlandı',
        tarih: '2024-11',
        teknolojiler: ['React', 'Node.js', 'MongoDB', 'CSS3', 'TypeScript', 'shadcn/ui', 'Tailwind CSS'],
        demoLink: 'https://zink-web.vercel.app/',
        githubLink: 'https://github.com/wexbie',
        ekranGoruntuleri: [
            { src: 'assets/proje/ss/zink/zink-web.png', baslik: 'ZINK Web' }
        ],
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/zink.webp" alt="Zink" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">ZINK</h1>
                        <p class="proje-aciklama">Modern yerel teslimat uygulaması (Girişimci)</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Geliştirme Aşamasında</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Mayıs 2025 - Devam Ediyor</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Web Uygulaması</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">React</span>
                <span class="teknoloji-etiketi">Node.js</span>
                <span class="teknoloji-etiketi">MongoDB</span>
                <span class="teknoloji-etiketi">CSS3</span>
                <span class="teknoloji-etiketi">TypeScript</span>
                <span class="teknoloji-etiketi">shadcn/ui</span>
                <span class="teknoloji-etiketi">Tailwind CSS</span>
                <span class="teknoloji-etiketi">Socket.io</span>
            </div>

            <div class="proje-linkler">
                <a href="https://zink-web.vercel.app/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/zink/zink-web.png" alt="Zink Web">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>Zink, getir.com tarzında bir yerel teslimat uygulamasıdır. Kullanıcıların yemek, içecek ve diğer ürünleri sipariş verebilmesini sağlar.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Market, yemek , çarşı ve su siparişleri</li>
                    <li>Responsive tasarım</li>
                    <li>Birden fazla otomasyon</li>
                    <li>Kullanıcı yönetimi</li>
                    <li>Admin paneli</li>
                    <li>Kullanıcı paneli (Siparişler, profil, ayarlar)</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>React frontend ve Node.js backend kullanılarak geliştirilmiştir. MongoDB veritabanı ile link verileri güvenli şekilde saklanmaktadır.</p>

                <h2>Kullanım Senaryoları</h2>
                <ul>
                    <li>Kullanıcıların siparişlerini görüntüleyebilmeleri</li>
                    <li>Kullanıcıların profil bilgilerini güncelleyebilmeleri</li>
                    <li>Kullanıcıların ayarlarını değiştirebilmeleri</li>
                    <li>Kullanıcıların siparişlerini iptal edebilmeleri</li>
                </ul>
            </div>
        `
    },
    'wexai': {
        baslik: 'WexAI',
        logo: 'assets/proje/wexai.webp',
        aciklama: 'Yapay zeka sohbet uygulaması.',
        kategori: 'AI Platformu',
        durum: 'Tamamlandı',
        tarih: '2025-03',
        teknolojiler: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        demoLink: 'https://wexbie.pythonanywhere.com/',
        githubLink: 'https://github.com/wexbie/wex-ai-latest',
        ekranGoruntuleri: [
            { src: 'assets/proje/ss/wexai/wexai.png', baslik: 'WexAI' },
        ],
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/wexai.webp" alt="WexAI" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">WexAI</h1>
                        <p class="proje-aciklama">Yapay zeka sohbet uygulaması</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Geliştirme Aşamasında</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Mart 2025</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <span>Yapay Zeka Sohbet Uygulaması</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">Python</span>
                <span class="teknoloji-etiketi">FastAPI</span>
                <span class="teknoloji-etiketi">Vercel</span>
                <span class="teknoloji-etiketi">PythonAnywhere</span>
            </div>

            <div class="proje-linkler">
                <a href="https://wexbie.pythonanywhere.com/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/wex-ai-latest" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/wexai/wexai.png" alt="WexAI">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>WexAI, yapay zeka teknolojilerini kullanarak sohbet uygulamasıdır. Metin, görsel ve ses içerikleri için AI destekli çözümler sunar.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Gemini API</li>
                    <li>Çok dilli destek</li>
                    <li>Hızlı yanıtlar</li>
                    <li>Güvenli sohbet</li>
                    <li>API entegrasyonu</li>
                    <li>Kullanıcı yönetimi</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Python tabanlı AI modelleri ve TensorFlow framework'ü kullanılmıştır. React frontend ve FastAPI backend ile modern bir web uygulaması olarak geliştirilmiştir.</p>

                <h2>AI Modelleri</h2>
                <ul>
                    <li>GPT tabanlı metin üretimi</li>
                    <li>Stable Diffusion görsel üretimi</li>
                    <li>Text-to-Speech dönüşümü</li>
                    <li>Doğal dil işleme</li>
                </ul>
            </div>
        `
    },
    'son-deprem': {
        baslik: 'SonDeprem',
        logo: 'assets/proje/son-deprem.jpg',
        aciklama: 'Deprem bilgilendirme ve takip uygulaması.',
        kategori: 'Bilgilendirme',
        durum: 'Canlı',
        tarih: '2024-09',
        teknolojiler: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vercel', 'Kandilli Rasathane API'],
        demoLink: 'https://son-deprem.vercel.app/',
        githubLink: 'https://github.com/wexbie/sonDeprem',
        ekranGoruntuleri: [
            { src: 'assets/proje/ss/sondeprem/sondeprem.png', baslik: 'Ana Sayfa' },
        ],
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/son-deprem.jpg" alt="SonDeprem" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">SonDeprem</h1>
                        <p class="proje-aciklama">Gerçek zamanlı deprem bilgilerini takip edebileceğiniz web uygulaması</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Canlı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Mayıs 2025</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 12h6l3-9 3 9h6"></path>
                        <path d="M3 12v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"></path>
                        <path d="M7 12v4"></path>
                        <path d="M11 12v4"></path>
                        <path d="M15 12v4"></path>
                    </svg>
                    <span>Bilgilendirme</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">HTML</span>
                <span class="teknoloji-etiketi">CSS</span>
                <span class="teknoloji-etiketi">JavaScript</span>
                <span class="teknoloji-etiketi">Tailwind CSS</span>
                <span class="teknoloji-etiketi">Vercel</span>
                <span class="teknoloji-etiketi">Kandilli Rasathane API</span>
            </div>

            <div class="proje-linkler">
                <a href="https://son-deprem.vercel.app/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/sonDeprem" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/sondeprem/sondeprem.png" alt="Son Deprem">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>SonDeprem, Türkiye'de meydana gelen depremleri gerçek zamanlı olarak takip edebileceğiniz bir web uygulamasıdır. Kandilli Rasathanesi verilerini kullanarak güncel deprem bilgilerini sunar.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Gerçek zamanlı deprem bilgileri</li>
                    <li>Deprem büyüklüğü ve derinlik bilgileri</li>
                    <li>Mobil uyumlu tasarım</li>
                    <li>Bildirim sistemi</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje HTML, CSS, JavaScript, Tailwind CSS, Vercel, Kandilli Rasathane API'si ile geliştirilmiştir.</p>

                <h2>Gelecek Geliştirmeler</h2>
                <ul>
                    <li>Deprem istatistikleri</li>
                    <li>Geçmiş deprem verileri</li>
                    <li>Çoklu dil desteği</li>
                </ul>
            </ul>
        `
    },
    'pmyo': {
        baslik: 'PMYO OBS',
        logo: 'assets/proje/pmyo.jpg',
        aciklama: 'Pazaryeri Meslek Yüksek Okulu Öğrenci Bilgilendirme Sistemi.',
        kategori: 'Eğitim',
        durum: 'Canlı',
        tarih: '2024-08',
        teknolojiler: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'shadcn/ui', 'React.js'],
        demoLink: 'https://pazaryerimyo.vercel.app',
        githubLink: 'https://github.com/wexbie/',
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/pmyo.jpg" alt="PMYO OBS" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">PMYO OBS</h1>
                        <p class="proje-aciklama">Pazaryeri Meslek Yüksek Okulu için geliştirilmiş öğrenci portalı</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Tamamlandı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Mart 2025</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    <span>Eğitim</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">Next.js</span>
                <span class="teknoloji-etiketi">TypeScript</span>
                <span class="teknoloji-etiketi">Tailwind CSS</span>
                <span class="teknoloji-etiketi">Vercel</span>
                <span class="teknoloji-etiketi">shadcn/ui</span>
                <span class="teknoloji-etiketi">React.js</span>
            </div>

            <div class="proje-linkler">
                <a href="https://pazaryerimyo.vercel.app" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/pmyo/pmyo.png" alt="PMYO OBS">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>PMYO OBS, Pazaryeri Meslek Yüksek Okulu öğrencileri için geliştirilmiş kapsamlı bir öğrenci bilgilendirme sistemidir. Öğrencilerin akademik bilgilerini, ders programlarını ve okul duyurularını takip edebilecekleri modern bir portal.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Ders programı görüntüleme</li>
                    <li>Duyuru ve etkinlik bildirimleri</li>
                    <li>Akademik takvim</li>
                    <li>Öğretmen iletişim bilgileri</li>
                    <li>Mobil uyumlu tasarım</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje Next.js 14 ve TypeScript kullanılarak geliştirilmiştir. Tailwind CSS ile modern ve responsive tasarım elde edilmiştir. Vercel platformunda deploy edilmiştir.</p>

                <h2>Güvenlik Özellikleri</h2>
                <ul>
                    <li>JWT tabanlı kimlik doğrulama</li>
                    <li>Role-based access control</li>
                    <li>HTTPS zorunluluğu</li>
                    <li>Input validation</li>
                    <li>SQL injection koruması</li>
                </ul>

                <h2>Gelecek Geliştirmeler</h2>
                <ul>
                    <li>Firebase entegrasyonu</li>
                </ul>
            </div>
        `
    },
    'wexbie': {
        baslik: 'Wexbie',
        logo: 'assets/proje/wexbie.png',
        aciklama: 'Kişisel portföy ve blog sitesi.',
        kategori: 'Portföy',
        durum: 'Canlı',
        tarih: '2025-08',
        teknolojiler: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
        demoLink: 'https://wexbie.com',
        githubLink: '#',
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/wexbie.png" alt="Wexbie" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">Wexbie</h1>
                        <p class="proje-aciklama">Modern ve responsive tasarımlı kişisel portföy sitesi</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Tamamlandı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Ağustos 2025</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Portföy</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">HTML</span>
                <span class="teknoloji-etiketi">CSS</span>
                <span class="teknoloji-etiketi">JavaScript</span>
                <span class="teknoloji-etiketi">Vercel</span>
            </div>

            <div class="proje-linkler">
                <a href="https://wexbie.com" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/portfoy" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/wexbie/wexbie.png" alt="Wexbie">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>Wexbie, kişisel portföy ve blog sitesi olarak tasarlanmış modern bir web uygulamasıdır. Kullanıcı dostu arayüzü ve responsive tasarımı ile her cihazda mükemmel görünüm sağlar.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Responsive tasarım</li>
                    <li>Koyu/açık tema desteği</li>
                    <li>Blog yazıları</li>
                    <li>Proje portföyü</li>
                    <li>İletişim formu</li>
                    <li>SEO optimizasyonu</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje HTML, CSS ve JavaScript kullanılarak geliştirilmiştir. Modern web standartlarına uygun olarak tasarlanmış ve Vercel platformunda deploy edilmiştir.</p>

            <h2>Gelecek Geliştirmeler</h2>
            <ul>
                <li>Çoklu dil desteği</li>
                <li>Blog yorum sistemi</li>
                <li>PWA desteği</li>
                <li>CMS entegrasyonu</li>
                <li>Analitik entegrasyonu</li>
            </ul>
        `
    },
    'technoblog': {
        baslik: 'TechnoBlog',
        logo: 'assets/proje/tecnoblog.jpeg',
        aciklama: 'Teknoloji blogu ve içerik yönetim sistemi.',
        kategori: 'Blog',
        durum: 'Tamamlandı',
        tarih: '2025-03',
        teknolojiler: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        demoLink: '#',
        githubLink: 'https://github.com/wexbie/technoBlog',
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/tecnoblog.jpeg" alt="TechnoBlog" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">TechnoBlog</h1>
                        <p class="proje-aciklama">Modern teknoloji blogu ve içerik yönetim sistemi</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Tamamlandı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Mart 2025</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Blog</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">HTML</span>
                <span class="teknoloji-etiketi">CSS</span>
                <span class="teknoloji-etiketi">JavaScript</span>
                <span class="teknoloji-etiketi">PHP</span>
                <span class="teknoloji-etiketi">MySQL</span>
            </div>

            <div class="proje-linkler">
                <a href="https://github.com/wexbie/technoBlog" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/technoBlog" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>TechnoBlog, teknoloji konularında yazılar paylaşabileceğiniz modern bir blog platformudur. İçerik yönetim sistemi ile kolayca yazı ekleyebilir, düzenleyebilir ve yönetebilirsiniz.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Blog yazıları yönetimi</li>
                    <li>Kategori sistemi</li>
                    <li>Yorum sistemi</li>
                    <li>Admin paneli</li>
                    <li>SEO optimizasyonu</li>
                    <li>Responsive tasarım</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje React frontend ve Node.js backend kullanılarak geliştirilmiştir. MongoDB veritabanı ile veri saklama ve Express.js ile API geliştirme yapılmıştır.</p>

                <h2>Gelecek Geliştirmeler</h2>
                <ul>
                    <li>Çoklu yazar desteği</li>
                    <li>Gelişmiş arama sistemi</li>
                    <li>E-posta bülteni</li>
                    <li>Analitik entegrasyonu</li>
                    <li>Mobil uygulama</li>
                </ul>
            </div>
        `
    },
    'milyoner': {
        baslik: 'Milyoner Oyunu',
        logo: 'assets/proje/milyoner.webp',
        aciklama: 'Kim milyoner olmak ister oyunu.',
        kategori: 'Oyun',
        durum: 'Tamamlandı',
        tarih: '2024-05',
        teknolojiler: ['React', 'JavaScript', 'CSS', 'Vercel'],
        demoLink: 'https://kim-milyoner-olmak-ister-oyunu.vercel.app/',
        githubLink: 'https://github.com/wexbie/kim-milyoner-olmak-ister-oyunu',
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/milyoner.webp" alt="Milyoner Oyunu" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">Milyoner Oyunu</h1>
                        <p class="proje-aciklama">Popüler TV programının web versiyonu</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Tamamlandı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Aralık 2024</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M14 15h1.5a2.5 2.5 0 0 1 0 5H14"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 1.1-.9 2-2 2H4"></path>
                        <path d="M20 2h-6"></path>
                        <path d="M10 2H4"></path>
                        <path d="M10 2v12.66"></path>
                    </svg>
                    <span>Oyun</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">HTML</span>
                <span class="teknoloji-etiketi">CSS</span>
                <span class="teknoloji-etiketi">JavaScript</span>
                <span class="teknoloji-etiketi">JSON</span>
            </div>

            <div class="proje-linkler">
                <a href="https://kim-milyoner-olmak-ister-oyunu.vercel.app/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/kim-milyoner-olmak-ister-oyunu" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/milyoner/milyoner.png" alt="Milyoner Oyunu">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>Milyoner Oyunu, popüler TV programı "Kim Milyoner Olmak İster"in web versiyonudur. Kullanıcılar soruları cevaplayarak para kazanabilir ve oyun deneyimini yaşayabilir.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Çoktan seçmeli sorular</li>
                    <li>Para ödülleri</li>
                    <li>Joker hakları</li>
                    <li>Skor takibi</li>
                    <li>Responsive tasarım</li>
                    <li>Ses efektleri</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje HTML, CSS, JavaScript, JSON kullanılarak geliştirilmiştir.</p>

            <h2>Gelecek Geliştirmeler</h2>
            <ul>
                <li>Çoklu oyuncu desteği</li>
                <li>Liderlik tablosu</li>
                <li>Daha fazla soru kategorisi</li>
            </ul>
        `
    },
    'netflix': {
        baslik: 'Netflix Klonu',
        logo: 'assets/proje/netflix.webp',
        aciklama: 'Netflix klonu, Netflix\'in web sitesi ile benzer bir arayüz.',
        kategori: 'Eğlence',
        durum: 'Tamamlandı',
        tarih: '2024-09',
        teknolojiler: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://netflixv1.vercel.app/',
        githubLink: 'https://github.com/wexbie/netflixv1',
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/netflix.webp" alt="Netflix Klonu" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">Netflix Klonu</h1>
                        <p class="proje-aciklama">Netflix\'in web sitesi ile benzer arayüz ve özellikler</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Tamamlandı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Aralık 2024</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Eğlence</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">HTML</span>
                <span class="teknoloji-etiketi">CSS</span>
                <span class="teknoloji-etiketi">JavaScript</span>
            </div>

            <div class="proje-linkler">
                <a href="https://netflixv1.vercel.app/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/netflixv1" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="ekran-goruntuleri-kutusu">
                <h2 class="ekran-goruntuleri-baslik">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Ekran Görüntüsü
                </h2>
                <div class="ekran-goruntuleri">
                    <div class="ekran-goruntusu">
                        <img src="assets/proje/ss/netflix/netflix.png" alt="Netflix Klonu">
                    </div>
                </div>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>Netflix Klonu, popüler streaming platformu Netflix\'in web sitesinin birebir kopyasıdır. Kullanıcı arayüzü, film kategorileri ve navigasyon özellikleri orijinal site ile aynı şekilde tasarlanmıştır.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>Netflix benzeri arayüz</li>
                    <li>Film kategorileri</li>
                    <li>Responsive tasarım</li>
                    <li>Film detay sayfaları</li>
                    <li>Navigasyon menüsü</li>
                    <li>Modern UI/UX</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje HTML, CSS, JavaScript kullanılarak geliştirilmiştir. Netflix'in tasarımını taklit eden modern ve responsive bir arayüz oluşturulmuştur.</p>

                <h2>Gelecek Geliştirmeler</h2>
                <ul>
                    <li>Video oynatma özelliği</li>
                    <li>Kullanıcı hesapları</li>
                    <li>Film arama sistemi</li>
                    <li>Favori listesi</li>
                    <li>Çoklu dil desteği</li>
                </ul>
            </div>
        `
    },
    'whatsapp': {
        baslik: 'WhatsApp Klonu',
        logo: 'assets/proje/whatsapp.webp',
        aciklama: 'Whatsapp klonu, mesajlama uygulaması.',
        kategori: 'İletişim',
        durum: 'Tamamlandı',
        tarih: '2024-09',
        teknolojiler: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://whatsapp-clone-desktop.vercel.app/',
        githubLink: 'https://github.com/wexbie/whatsapp-clone-desktop',
        icerik: `
            <div class="proje-header">
                <div class="proje-header-content">
                    <img src="assets/proje/whatsapp.webp" alt="WhatsApp Klonu" class="proje-logo">
                    <div class="proje-baslik-alani">
                        <h1 class="proje-baslik">WhatsApp Klonu</h1>
                        <p class="proje-aciklama">WhatsApp benzeri mesajlaşma uygulaması</p>
                    </div>
                </div>
            </div>

            <div class="proje-meta">
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>Tamamlandı</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span>Eylül 2024</span>
                </div>
                <div class="proje-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>İletişim</span>
                </div>
            </div>

            <div class="teknoloji-listesi">
                <span class="teknoloji-etiketi">HTML</span>
                <span class="teknoloji-etiketi">CSS</span>
                <span class="teknoloji-etiketi">JavaScript</span>
            </div>

            <div class="proje-linkler">
                <a href="https://whatsapp-clone-desktop.vercel.app/" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                </a>
                <a href="https://github.com/wexbie/whatsappv1" class="proje-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>

            <div class="proje-icerik">
                <h2>Proje Hakkında</h2>
                <p>WhatsApp Klonu, popüler mesajlaşma uygulaması WhatsApp\'ın web versiyonudur. Kullanıcılar mesaj gönderebilir, sohbet edebilir ve dosya paylaşabilir.</p>

                <h2>Özellikler</h2>
                <ul>
                    <li>WhatsApp benzeri arayüz</li>
                    <li>Mesaj gönderme/alma</li>
                    <li>Sohbet listesi</li>
                    <li>Dosya paylaşımı</li>
                    <li>Responsive tasarım</li>
                    <li>Gerçek zamanlı mesajlaşma</li>
                </ul>

                <h2>Teknik Detaylar</h2>
                <p>Proje HTML, CSS, JavaScript kullanılarak geliştirilmiştir. WhatsApp\'ın tasarımını taklit eden modern ve kullanıcı dostu bir arayüz oluşturulmuştur.</p>

                <h2>Gelecek Geliştirmeler</h2>
                <ul>
                    <li>Grup sohbetleri</li>
                    <li>Sesli/görüntülü arama</li>
                    <li>Durum paylaşımı</li>
                </ul>
            </div>
        `
    }
};

function projeIdCek() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'buzzmatch';
}

function projeYukle() {
    const projeId = projeIdCek();
    const proje = projeDetaylari[projeId];

    if (!proje) {
        document.getElementById('proje-icerik').innerHTML = '<h1>Proje bulunamadı</h1>';
        return;
    }
    
    document.title = `${proje.baslik} | Proje Detay`;
    document.getElementById('proje-icerik').innerHTML = proje.icerik;
    Prism.highlightAll();
}

document.addEventListener('DOMContentLoaded', projeYukle);
